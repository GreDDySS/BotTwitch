require('dotenv').config();
const tmi = require('tmi.js');
const fs = require('fs');
const options = {
    options: { debug: false },
    connection: { reconnect: true, secure: true },
    identity: { username: process.env.BOT_USERNAME, password: process.env.BOT_PASSWORD },
    channels: ['greddyss']
}

const client = new tmi.client(options);
client.connect();

client.on('connected', async (address, port) => {
    console.log('Connected done!');
    require('./utils/commandsLoader')(client);
});

client.on('message', async (channel, user, message, self) =>{
    if(self) return;
    const prefix = '`';
    const messageArray = message.split(' ');
    const args = messageArray.slice(1);
    const allArgs = args.join(' ');
    const command = messageArray[0];
    let mes = `\n${user['display-name']}: ${message}`;
    fs.appendFileSync('./src/log.txt', mes);

    var isMod = false;
    var isDev = false;

    if(process.env.BOT_OWNER == user['user-id']) isDev = true;
    if(process.env.BOT_OWNER == user['user-id'] || user.mod || user.username == channel.slice(1)) isMod = true;

    if(!message.startsWith(prefix)) return;

    let cmd = client.commands.get(command.slice(prefix.length).toLowerCase()) || client.commands.get(client.aliases.get(command.slice(prefix.length).toLowerCase()));

    if(!cmd) return;

    if(cmd.help.permission && (cmd.help.permission != "" || cmd.help.permission != "everyone")) {
        if(cmd.help.permission == "dev" && !isDev) return;
        if(cmd.help.permission == "mod" && !isMod) return;
    }

    cmd.run(client, channel, user, message, args);

})