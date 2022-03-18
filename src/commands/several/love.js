const tmi = require('tmi.js');

/**
 * @param {string} channel
 * @param {import("tmi.js").ChatUserstate} user
 * @param {string} message
 * @param {array} args
 */

exports.run = async (client, channel, user, message, args) => {
    
    if(!block.includes(user.username)){
        client.say(channel, `@${user['display-name']} <3 ${message.substring(4) || `Себя`} на ${Math.floor(Math.random() * 100)}% `);
        block.push(user.username);
        setTimeout(() =>{
            block = block.filter(u => u !== user.username);
        }, 10000)
    } 
    
}
let block = [];
exports.help = {
    name: 'love',
    permissions: "everyone",
    description: '',
    cooldown: 5000,
    aliases: [
        '<3'
    ]
}