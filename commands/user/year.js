const tmi = require('tmi.js');

/**
 * @param {string} channel
 * @param {import("tmi.js").ChatUserstate} user
 * @param {string} message
 * @param {array} args
 */

exports.run = async (client, channel, user, message, args) => {
    let today = new Date(),
    newYearDate = new Date(today.getFullYear() + 1, 0, 1);
    let msDiff = newYearDate - today,
    days = Math.floor(msDiff / (24 * 60 * 60 * 1000)),
    hours = Math.floor((msDiff / (1000 * 60 * 60) - 3) % 24),
    mins = Math.floor((msDiff / 1000 / 60) % 60)
    if(!block.includes(user.username)){
        client.say(channel, `До конца года осталось: ${days}d ${hours}h ${mins}m `)
        block.push(user.username);
        setTimeout(() =>{
            block = block.filter(u => u !== user.username);
        }, 5000)
    } 
}
let block = [];
exports.help = {
    name: 'год',
    permissions: "everyone",
    description: 'Сколько до конца года',
    cooldown: 5000,
    aliases: [
        'year', 'нг'
    ]
}