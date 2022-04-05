const tmi = require('tmi.js');

/**
 * @param {string} channel
 * @param {import("tmi.js").ChatUserstate} user
 * @param {string} message
 * @param {array} args
 */
 exports.run = async (client, channel, user, message, args) => {
     const dice = Math.floor(Math.random()*6) +1;
     if(!block.includes(user.username)){
        client.say(channel, `@${user['display-name']}, Результат: ${dice}`);
        block.push(user.username);
        setTimeout(() =>{
            block = block.filter(u => u !== user.username);
        }, 2000)
    } 
}
let block = [];
exports.help = {
    name: 'кубик',
    permissions: "everyone",
    description: 'Рандомное число, от 1 до 6',
    cooldown: 2000,
    aliases: [
        'dice'
    ]
}
