const tmi = require('tmi.js');
require('dotenv').config();
/**
 * @param {string} channel
 * @param {import("tmi.js").ChatUserstate} user
 * @param {string} message
 * @param {array} args
 */
// 176257472
exports.run = async (client, channel, user, message, args) => {
    if(user.username === 'greddyss') {
        client.say(channel, 'off');
        client.disconnect();
        
    } 
    
    
}

exports.help = {
    name: 'off',
    permissions: "everyone",
    description: '',
    cooldown: 5000,
    aliases: [
        'ss'
    ]
}