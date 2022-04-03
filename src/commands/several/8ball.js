const tmi = require('tmi.js');

/**
 * @param {string} channel
 * @param {import("tmi.js").ChatUserstate} user
 * @param {string} message
 * @param {array} args
 */

 const replies = [
    "Бесспорно.",
    "Предрешено.",
    "Никаких сомнений.",
    "Определённо, да.",
    "Можешь быть уверен в этом.",
    "Мне кажется - «да».",
    "Вероятнее всего.",
    "Да.",
    "Знаки говорят - «да».",
    "Пока не ясно, попробуй снова.",
    "Спроси позже.",
    "Лучше не рассказывать.",
    "Сейчас нельзя предсказать.",
    "Даже не думай.",
    "Мой ответ - «нет».",
    "По моим данным - «нет».",
    "Весьма сомнительно.",
  ];
  

exports.run = async (client, channel, user, message, args) => {

    const ball = Math.floor(Math.random() * replies.length)

    if(!block.includes(user.username)){
        client.say(channel, `@${user['display-name']}, ${replies[ball]}`)
        block.push(user.username);
        setTimeout(() =>{
            block = block.filter(u => u !== user.username);
        }, 5000)
    } 
}
let block = [];
exports.help = {
    name: '8ball',
    permissions: "everyone",
    description: '',
    cooldown: 5000,
    aliases: [
        ''
    ]
}