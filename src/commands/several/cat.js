const tmi = require('tmi.js');

/**
 * @param {string} channel
 * @param {import("tmi.js").ChatUserstate} user
 * @param {string} message
 * @param {array} args
 */

exports.run = async (client, channel, user, message, args) => {
    var randcat = Math.floor(Math.random()* cats.length);
    if(!block.includes(user.username)){
        client.say(channel, `${cats[randcat]}`);
        block.push(user.username);
        setTimeout(() =>{
            block = block.filter(u => u !== user.username);
        }, 10000)
    } 
    
    
}
let block = [];
var cats = ['aetenaE', 
 'borobushE',   
  'Effrereal',  
   'Fedotir',   
    'GreDDySS', 
     'GuyRalt',
      'Gvardovskiy',    
       'Iamplugg',  
        'iLotterytea',
         'm4X0nn',
          'Matria9',
           'PWGood',
            'RandomCancer',
             'Vexenigmus',
            "eggUrt",
            'BJlaguK']

exports.help = {
    name: 'кот',
    permissions: "everyone",
    description: 'рандомное слово из списка cats',
    cooldown: 5000,
    aliases: [
        'котёнок', 'котик'
    ]
}