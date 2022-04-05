const fs = require('fs');
const logger = require("./winston");
const pc = require("picocolors")

module.exports = client => {
    client.commands = new Map();
    client.aliases = new Map()

    fs.readdir("./commands/", (err, files) => {
        if(err) console.error(err);

        files.forEach((f, i) => {
            let folder = f.split('.');
            if(folder[1]) return;
            
            fs.readdir(`./commands/${f}/`, (err, jsf) => {
                let jsfile = jsf.filter(f => f.split('.').pop() === "js");
                if(jsfile.length <= 0) return;

                jsfile.forEach((j, k) => {
                    let props = require(`../commands/${f}/${j}`);

                    props.help.type = f;
                    client.commands.set(props.help.name, props);

                    if(!props.help || !props.help.aliases || props.help.aliases[0] == '') return;

                    props.help.aliases.forEach(alias => {
                        client.aliases.set(alias, props.help.name);
                    });
                })
            })
            
        })
    });
    
}