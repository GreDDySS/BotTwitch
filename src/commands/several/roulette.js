const tmi = require('tmi.js');

/**
 * @param {string} channel
 * @param {import("tmi.js").ChatUserstate} user
 * @param {string} message
 * @param {array} args
 */

exports.run = async (client, channel, user, message, args) => {
    var randomNum = Math.floor(Math.random()* 2)+1;
    if(!block.includes(user.username)){
        if(user.mod){
            client.say(channel, "Ты модератор, какая ещё рулетка?  WeirdChamping ");
        } else if(user.username === 'iamplugg') {
            client.say(channel, "Ты хороший котик, какая ещё рулетка? peepoHug  ")
        } else if(randomNum == 1){
            client.say(channel, `@${user['display-name']}, ты проиграл :(`);
            client.timeout(channel, user.username, 30, 'roulette');
        } else if(randomNum == 2) {
            client.say(channel, `@${user['display-name']}, ты выиграл!  PagChomp`)
        }
        block.push(user.username, user.id);
        setTimeout(() =>{
            block = block.filter(u => u !== user.username, user.id);
        }, 7000)
    } 
    
    
}
let block = [];
exports.help = {
    name: 'рулетка',
    permissions: "everyone",
    description: '1=Таймаут(30s) | 2=Поздравление',
    cooldown: 7000,
    aliases: [
        'rr', 'выстрел'
    ]
}