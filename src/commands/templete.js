const tmi = require('tmi.js');

/**
 * @param {string} channel
 * @param {import("tmi.js").ChatUserstate} user
 * @param {string} message
 * @param {array} args
 */

exports.run = async (client, channel, user, message, args) => {
    if(!block.includes(user.username)){
        /* ТУТ слиент.сей и другие выходящие данные*/
        block.push(user.username);
        setTimeout(() =>{
            block = block.filter(u => u !== user.username);
        }, 5000)
    } 
}
let block = [];
exports.help = {
    name: '',
    permissions: "everyone",
    description: '',
    cooldown: 5000,
    aliases: [
        ''
    ]
}