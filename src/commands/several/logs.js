const tmi = require('tmi.js');
const fs = require('fs')

/**
 * @param {string} channel
 * @param {import("tmi.js").ChatUserstate} user
 * @param {string} message
 * @param {array} args
 */

const data = fs.readFileSync('./src/log.txt').toString();

exports.run = async (client, channel, user, message, args) => {
    if(!block.includes(user.username)){
        fs.stat('./src/log.txt', (err, stats) =>{
            const math = Math.floor(Math.round(stats['size']/1024))
            client.say(channel, `Сообщений: ${data.split('\n').length} | Размер: ${math} KB`)
        })
        block.push(user.username);
        setTimeout(() =>{
            block = block.filter(u => u !== user.username);
        }, 7000)
    } 
    
    
}
let block = [];
exports.help = {
    name: 'log',
    permissions: "everyone",
    description: '',
    cooldown: 5000,
    aliases: [
        'логи', 'файл', 'чат'
    ]
}