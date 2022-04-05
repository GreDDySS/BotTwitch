const tmi = require('tmi.js');
/**
 * @param {string} channel
 * @param {import("tmi.js").ChatUserstate} user
 * @param {string} message
 * @param {array} args
 */
 exports.help = {
    name: 'пинг',
    permissions: "everyone",
    description: 'Ping pong',
    cooldown: 5000,
    aliases: [
        'pong'
    ]
}
exports.run = async (client, channel, user, message, args) => {
    function timeformat(seconds){
        function pad(s){
            return (s < 10 ? '' : '') + s;
        }
        var days = Math.floor(seconds / (60*60*24))
        var hours = Math.floor(seconds / (60 * 60) % 24);
        var minutes = Math.floor(seconds % (60*60) / 60);
        var sec = Math.floor(seconds % 60); 
    
        
        return pad(days) + ' days ' + pad(hours) + ' hours ' + pad(minutes) + " min " + pad(sec) + " sec ";
      }
    if(!block.includes(user.username)){
        client.ping().then(function(data) {
            let ping = Math.floor(Math.round(data*1000))
            client.say(channel, `${user.username}, Pong! ${ping}ms | Uptime: ${timeformat(process.uptime())}` );
        })
        block.push(user.username);
        setTimeout(() =>{
            block = block.filter(u => u !== user.username);
        }, 5000)
    } 
    
}
let block = [];
