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

const adapterRifas = new FileSync('settingsRifas.json')
const dbRifas = low(adapterRifas)

const express = require("express");
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(
    `Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`
  );
  response.sendStatus(200);
});
app.listen(process.env.PORT); // Recebe solicitações que o deixa online


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

const accounts = require('./accounts.json');
const rifaBot1 = new Client();
const rifaBot2 = new Client();
const rifaBot3 = new Client();
const rifaBot4 = new Client();
const rifaBot5 = new Client();

const rifas1Number = dbRifas.get("rifas1").find({"id": "rifas1"}).value().rifas
const rifas2Number = dbRifas.get("rifas2").find({"id": "rifas2"}).value().rifas
const rifas3Number = dbRifas.get("rifas3").find({"id": "rifas3"}).value().rifas
const rifas4Number = dbRifas.get("rifas4").find({"id": "rifas4"}).value().rifas
const rifas5Number = dbRifas.get("rifas5").find({"id": "rifas5"}).value().rifas

const lorittaPrefix = dbRifas.get("prefixo").find({"id": "prefixo"}).value().lorittaPrefix

bot.on('message', async (msg) => {

  if(msg.content.includes("$rifa login")) {

    if(typeof(db.get(msg.author.id).find({"id": msg.author.id}).value()) === "undefined") {
      let errEmbed = new RichEmbed();
      errEmbed.setTitle('❌ Você tem não permissões suficientes (3).')
      msg.channel.send(errEmbed)
      return;
    } 

    var opLevel = db.get(msg.author.id).find({"id": msg.author.id}).value().opLevel

    if(typeof(opLevel) === "undefined" || opLevel < 3) { 
      let errEmbed = new RichEmbed();
      errEmbed.setTitle('❌ Você tem não permissões suficientes (2).')
      msg.channel.send(errEmbed)
    return;
    }

    rifaBot1.login(accounts.zF4ke2)
        rifaBot1.on('ready', () => {
          let rifaBot1Embed = new RichEmbed();
          rifaBot1Embed.setDescription(`✅ ${rifaBot1.user} logado com sucesso.`)
          msg.channel.send(rifaBot1Embed)
        })

        rifaBot1.on('message', (msg) => {
          if(msg.content.includes("$rifa comprar")) {

            if(typeof(db.get(msg.author.id).find({"id": msg.author.id}).value()) === "undefined") {
              let errEmbed = new RichEmbed();
              errEmbed.setTitle('❌ Você tem não permissões suficientes (3).')
              msg.channel.send(errEmbed)
              return;
            } 
        
            var opLevel = db.get(msg.author.id).find({"id": msg.author.id}).value().opLevel
        
            if(typeof(opLevel) === "undefined" || opLevel < 3) { 
              let errEmbed = new RichEmbed();
              errEmbed.setTitle('❌ Você tem não permissões suficientes (2).')
              msg.channel.send(errEmbed)
            return;
            }

            msg.channel.send(lorittaPrefix +"rifa buy " + rifas1Number)
          }
        })


    rifaBot2.login(accounts.xFaker)
        rifaBot2.on('ready', () => {
          let rifaBot2Embed = new RichEmbed();
          rifaBot2Embed.setDescription(`✅ ${rifaBot2.user} logado com sucesso.`)
          msg.channel.send(rifaBot2Embed)
        })

        rifaBot2.on('message', (msg) => {
          if(msg.content.includes("$rifa comprar")) {

            if(typeof(db.get(msg.author.id).find({"id": msg.author.id}).value()) === "undefined") {
              let errEmbed = new RichEmbed();
              errEmbed.setTitle('❌ Você tem não permissões suficientes (3).')
              msg.channel.send(errEmbed)
              return;
            } 
        
            var opLevel = db.get(msg.author.id).find({"id": msg.author.id}).value().opLevel
        
            if(typeof(opLevel) === "undefined" || opLevel < 3) { 
              let errEmbed = new RichEmbed();
              errEmbed.setTitle('❌ Você tem não permissões suficientes (2).')
              msg.channel.send(errEmbed)
            return;
            }
            
            msg.channel.send(lorittaPrefix +"rifa buy " + rifas2Number)
          }
        })

    rifaBot3.login(accounts.DiscordOfficialAccount)
        rifaBot3.on('ready', () => {
          let rifaBot3Embed = new RichEmbed();
          rifaBot3Embed.setDescription(`✅ ${rifaBot3.user} logado com sucesso.`)
          msg.channel.send(rifaBot3Embed)
        })

        rifaBot3.on('message', (msg) => {
          if(msg.content.includes("$rifa comprar")) {

            if(typeof(db.get(msg.author.id).find({"id": msg.author.id}).value()) === "undefined") {
              let errEmbed = new RichEmbed();
              errEmbed.setTitle('❌ Você tem não permissões suficientes (3).')
              msg.channel.send(errEmbed)
              return;
            } 
        
            var opLevel = db.get(msg.author.id).find({"id": msg.author.id}).value().opLevel
        
            if(typeof(opLevel) === "undefined" || opLevel < 3) { 
              let errEmbed = new RichEmbed();
              errEmbed.setTitle('❌ Você tem não permissões suficientes (2).')
              msg.channel.send(errEmbed)
            return;
            }
            
            msg.channel.send(lorittaPrefix +"rifa buy " + rifas3Number)
          }
        })

    rifaBot4.login(accounts.OConselho)
        rifaBot4.on('ready', () => {
          let rifaBot4Embed = new RichEmbed();
          rifaBot4Embed.setDescription(`✅ ${rifaBot4.user} logado com sucesso.`)
          msg.channel.send(rifaBot4Embed)
        })

        rifaBot4.on('message', (msg) => {
          if(msg.content.includes("$rifa comprar")) {

            if(typeof(db.get(msg.author.id).find({"id": msg.author.id}).value()) === "undefined") {
              let errEmbed = new RichEmbed();
              errEmbed.setTitle('❌ Você tem não permissões suficientes (3).')
              msg.channel.send(errEmbed)
              return;
            } 
        
            var opLevel = db.get(msg.author.id).find({"id": msg.author.id}).value().opLevel
        
            if(typeof(opLevel) === "undefined" || opLevel < 3) { 
              let errEmbed = new RichEmbed();
              errEmbed.setTitle('❌ Você tem não permissões suficientes (2).')
              msg.channel.send(errEmbed)
            return;
            }
            
            msg.channel.send(lorittaPrefix +"rifa buy " + rifas4Number)
          }
        })

    rifaBot5.login(accounts.zF4ke0)
        rifaBot5.on('ready', () => {
          let rifaBot5Embed = new RichEmbed();
          rifaBot5Embed.setDescription(`✅ ${rifaBot5.user} logado com sucesso.`)
          msg.channel.send(rifaBot5Embed)
        })

        rifaBot5.on('message', (msg) => {
          if(msg.content.includes("$rifa comprar")) {

            if(typeof(db.get(msg.author.id).find({"id": msg.author.id}).value()) === "undefined") {
              let errEmbed = new RichEmbed();
              errEmbed.setTitle('❌ Você tem não permissões suficientes (3).')
              msg.channel.send(errEmbed)
              return;
            } 
        
            var opLevel = db.get(msg.author.id).find({"id": msg.author.id}).value().opLevel
        
            if(typeof(opLevel) === "undefined" || opLevel < 3) { 
              let errEmbed = new RichEmbed();
              errEmbed.setTitle('❌ Você tem não permissões suficientes (2).')
              msg.channel.send(errEmbed)
            return;
            }
            
            msg.channel.send(lorittaPrefix +"rifa buy " + rifas5Number)
          }
        })

  }

  if(msg.content.includes("+pay") && msg.content.includes(`<@${bot.user.id}>`)) {
    if(typeof(db.get(msg.author.id).find({"id": msg.author.id}).value()) === "undefined") {
      let errEmbed = new RichEmbed();
      errEmbed.setTitle('❌ Você tem não permissões suficientes (1).')
      msg.channel.send(errEmbed)
      return;
    }

    var opLevel = db.get(msg.author.id).find({"id": msg.author.id}).value().opLevel

    if(typeof(opLevel) === "undefined" || opLevel < 1) { 
      let errEmbed = new RichEmbed();
      errEmbed.setTitle('❌ Você tem não permissões suficientes (1).')
      msg.channel.send(errEmbed)
    return;
    }
    const acceptCollector = msg.channel.createMessageCollector(acceptC => acceptC.author.id === "297153970613387264" && acceptC.content.includes(`<@${msg.author.id}>`) && acceptC.content.includes("transferir"), { max: 1, time: 15000 })
    acceptCollector.on('collect', acceptC => {
        acceptC.react("✅")
        acceptC.react("⚙️")
    });
  }

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