const tmi = require('tmi.js');
/**
 * @param {string} channel
 * @param {import("tmi.js").ChatUserstate} user
 * @param {string} message
 * @param {array} args
 */
 exports.help = {
    name: 'команды',
    permissions: "everyone",
    description: '',
    cooldown: 15000,
    aliases: [
        'cmd' 
    ]
}

exports.run = async (client, channel, user, message, args) => {

    if(!block.includes(user.username)){
        client.say(channel, `${user.username}, Доступны команды: кубик, собака, кот, <3, rr` );
        block.push(user.username);
        setTimeout(() =>{
            block = block.filter(u => u !== user.username);
        }, 15000)
    } 
    
}
let block = [];
