const tmi = require('tmi.js');

/**
 * @param {string} channel
 * @param {import("tmi.js").ChatUserstate} user
 * @param {string} message
 * @param {array} args
 */

 const possibleMoves = [
    'камень',
    'бумага',
    'ножницы'
  ];
  
  const rules = {
    камень: {
      win: 'ножницы',
      lose: 'бумага'
    },
    бумага: {
      win: 'камень',
      lose: 'ножницы'
    },
    ножницы: {
      win: 'бумага',
      lose: 'камень'
    }
  }
  
const getRandomMove = () => possibleMoves[Math.floor(Math.random() * 3)];

exports.run = async (client, channel, user, message, args) => {
    const chatterMove = message.substring(5).toLowerCase();
  const isAnders = user.username === 'not_greddyss';
    if(!block.includes(user.username)){
        if (args.length > 0) {
            const chatterMove = args[0].toLowerCase();
            
            if(chatterMove === 'камень' || chatterMove === "бумага" || chatterMove === 'ножницы') {
            

            let botMove;
            if (isAnders) {
                botMove = Math.random() < 0.8 ? rules[chatterMove]['win'] : getRandomMove();
            } else {
                botMove = getRandomMove()
            }

            if (chatterMove === botMove) {
                client.say(channel, `Я выбрал ${botMove}, это ничья @${user.username}`)
            }
            if (chatterMove === rules[botMove]['win']) {
                client.say(channel, `Я выбрал ${botMove}, ты проиграл @${user.username}`);
            }
            if (chatterMove === rules[botMove]['lose']) {
                client.say(channel, `Я выбрал ${botMove}, ты выиграл @${user.username}`);
            }
            }
            
        }
        block.push(user.username);
        setTimeout(() =>{
            block = block.filter(u => u !== user.username);
        }, 5000)
    } 
}
let block = [];
exports.help = {
    name: 'игра',
    permissions: "everyone",
    description: '',
    cooldown: 5000,
    aliases: [
        ''
    ]
}