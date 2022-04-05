const tmi = require('tmi.js');
const pc = require("picocolors");
const fs = require("fs");

const options = {
    options: { debug: false },
    connection: { reconnect: true, secure: true },
    identity: { username: feelsdank.config.username, password: feelsdank.config.password },
    channels: [`greddyss`]
};

const client = new tmi.client(options);

client.connect();


client.on("connected", async () => {
    feelsdank.Logger.info(`${pc.green('[CONNECTED]')} || Connected to twitch 🟢`);
    // await client.say("greddyss", "Chatting");
    require('../utils/commandsLoader')(client);
})

client.on('message', async (channel, user, message, self) =>{
    if(self) return;
    const prefix = '`';
    const messageArray = message.split(' ');
    const args = messageArray.slice(1);
    const allArgs = args.join(' ');
    const command = messageArray[0];
    
    var isMod = false;
    var isDev = false;
    
    if(process.env.OWNER == user['user-id']) isDev = true;
    if(process.env.OWNER == user['user-id'] || user.mod || user.username == channel.slice(1)) isMod = true;

    if(!message.startsWith(prefix)) return;

    let cmd = client.commands.get(command.slice(prefix.length).toLowerCase()) || client.commands.get(client.aliases.get(command.slice(prefix.length).toLowerCase()));
    if(!cmd) return;

    if(cmd.help.permission && (cmd.help.permission != "" || cmd.help.permission != "everyone")) {
        if(cmd.help.permission == "dev" && !isDev) return;
        if(cmd.help.permission == "mod" && !isMod) return;
    }

    cmd.run(client, channel, user, message, args);

});

client.on("message", async (channel, user, message, self) => {
    if (self) return;
    if (user.username === undefined && "NOT_GreDDySS") {
        return;
    } else if (user['user-id'] === 113050046) {
       return
   } else if (message.startsWith("`")) {
       return
   } else {
       let mes = `\n${user.username}: ${message}`;
       fs.appendFileSync("./other/log.txt", mes);
   }

})