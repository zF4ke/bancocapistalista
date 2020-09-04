/*
Author: zF4ke
Youtube: https://www.youtube.com/c/JokarxDyt
Discord: zF4ke#8556
github: https://github.com/zF4ke
Twitter: @zFaked
*/

const { Client, RichEmbed } = require('discord.js');
const { red, green, blue, yellow, cyan } = require('chalk');
const bot = new Client();
const settings = require('./settings.json');
const scalc = require('scalc')

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('users.json')
const db = low(adapter)

bot.on('ready', () => {
    console.log(green(`[SELF BOT] :: ${bot.user.tag} está online e pronto!`));
    console.log(green(`[SELF BOT] :: O prefixo é: ${settings.prefix}`));

    let activities = [`💸`],
        i = 0;
    setInterval(
        () =>
        bot.user.setActivity(`${activities[i++ % activities.length]}`, {
            type: "PLAYING"

        }),
        5000
    ); //WATCHING, LISTENING, PLAYING, STREAMING.

    bot.user.setStatus('idle')

    

});




bot.on('message', async (msg) => {

    //O bot não responde caso
    if (!msg.content.startsWith(settings.prefix)) return; //caso não comece com o seu prefixo
    if (
      msg.content.startsWith(`<@!${bot.user.id}>`) ||
      msg.content.startsWith(`<@${bot.user.id}>`)
    )
    if(msg.author.id !== "111591984245780480" || msg.author.id !== "676156690395037713" || msg.author.id !== "650411898096844820") {
    }
        
    //formata os comandos
    let args = msg.content.split(" ").slice(1);
    let command = msg.content.split(" ")[0];
    command = command.slice(settings.prefix.length);
    command = command.toLocaleLowerCase()
  
    try {
      let commandFile = require(`./commands/${command}.js`);
      delete require.cache[require.resolve(`./commands/${command}.js`)];
      return commandFile.run(bot, msg, args);
    } catch (err) {
      //console.error("Erro" + err);
    }
});

bot.on('messageUpdate', async (msg) => { 

})


bot.login(settings.token);