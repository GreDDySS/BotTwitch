const tmi = require('tmi.js');
const fs = require('fs');

/**
 * @param {string} channel
 * @param {import("tmi.js").ChatUserstate} user
 * @param {string} message
 * @param {array} args
 */


const data = fs.readFileSync('./other/log.txt').toString();
var lines = data.split('\n');
var line = lines[Math.floor(Math.random()*lines.length)]
exports.run = async (client, channel, user, message, args) => {
    if(!block.includes(user.username)){
        client.say(channel, `${lines[Math.floor(Math.random()*lines.length)]}`)
        block.push(user.username);
        setTimeout(() =>{
            block = block.filter(u => u !== user.username);
        }, 10000)
    } 
    
    
}
let block = [];
exports.help = {
    name: 'rl',
    permissions: "everyone",
    description: '',
    usage: '',
    cooldown: 5000,
    aliases: [
        ''
    ]
}
