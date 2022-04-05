const tmi = require('tmi.js');

/**
 * @param {string} channel
 * @param {import("tmi.js").ChatUserstate} user
 * @param {string} message
 * @param {array} args
 */
 let block = [];
exports.run = async (client, channel, user, message, args) => {
    message = message.slice(9);
    let msg = message.split('');
   

    for (let i = msg.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [msg[i], msg[j]] = [msg[j], msg[i]];
    }
    message = msg.join('');
    if(!block.includes(user.username)){
        client.say(channel, message);
        block.push(user.username);
        setTimeout(() =>{
            block = block.filter(u => u !== user.username);
        }, 10000)
    } 
    
}

exports.help = {
    name: 'shuffle',
    permissions: "everyone",
    description: 'Перестановка букв в рандомном порядке.',
    usage: '',
    cooldown: 10000,
    aliases: [
        ''
    ]
}