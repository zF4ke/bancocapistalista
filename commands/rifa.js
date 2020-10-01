const scalc = require('scalc')
const { Client, RichEmbed } = require('discord.js');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')


const adapter = new FileSync('users.json')
const db = low(adapter)

const adapterRifas = new FileSync('settingsRifas.json')
const dbRifas = low(adapterRifas)

const { Message } = require('discord.js');

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

const settings = require('../settings.json');
const accounts = require('../accounts.json');

module.exports.run = async (bot, msg, args) => {
    const { red, green, blue, yellow, cyan } = require('chalk');

    var subcomando = args[0]

    if(typeof(db.get(msg.author.id).find({"id": msg.author.id}).value()) === "undefined") {
        let errEmbed = new RichEmbed();
        errEmbed.setTitle('❌ Você tem não permissões suficientes (3).')
        msg.channel.send(errEmbed)
        return;
    } 

    var opLevel = db.get(msg.author.id).find({"id": msg.author.id}).value().opLevel

    if(!subcomando)  {subcomando = "help";} else {subcomando = subcomando.toLowerCase()}


    switch(subcomando) {
        case "help":
            const helpEmbed = new RichEmbed()
            .setColor('#ae27ff')
            .setTitle('Rifa')
            .setDescription('Lista de comandos:')
            .addField("Setar","Use `$rifa setar [numero da conta] [numero de rifas]` para setar a quantidade de rifas que serão compradas.")
            .addField("Comprar", "Use `$rifa comprar` para comprar as rifas.")
            .addField("Coletar","Use `$rifa coletar` para pegar todo o dinheiro de volta.")
            .addField("Ver","Use `$rifa ver` para ver quantas rifas cada bot vai comprar.")
            .addField("Login","Use `$rifa login` para logar todos os bots.")
            .setTimestamp();
            msg.channel.send(helpEmbed)
            msg.delete()
        break
        case "setar":
            if(typeof(opLevel) === "undefined" || opLevel < 3) { 
                let errEmbed = new RichEmbed();
                errEmbed.setTitle('❌ Você tem não permissões suficientes (3).')
                msg.channel.send(errEmbed)
            return;
            }

            if(Number(args[1]) < 1 || Number(args[1]) > 5 || !args[1]) return msg.channel.send('Escolha um número entre 1 e 5.')
            if(!args[2]) return msg.channel.send('Escolha um número de rifas para comprar.')

            dbRifas.set(`rifas${args[1]}`, []).write();
            dbRifas.get(`rifas${args[1]}`)
            .push({
                id: `rifas${args[1]}`,
                rifas: args[2]
            }).write()

            let setEmbed = new RichEmbed();
            setEmbed.setTitle(`ℹ️ Números de rifas do Bot${args[1]} setado para: ${args[2]}.`)
            msg.channel.send(setEmbed)
            return;
        break
        /* case "comprar":
            if(typeof(opLevel) === "undefined" || opLevel < 3) { 
                let errEmbed = new RichEmbed();
                errEmbed.setTitle('❌ Você tem não permissões suficientes (2).')
                msg.channel.send(errEmbed)
            return;
            }
        break */
        case "coletar":
            if(typeof(opLevel) === "undefined" || opLevel < 3) { 
                let errEmbed = new RichEmbed();
                errEmbed.setTitle('❌ Você tem não permissões suficientes (3).')
                msg.channel.send(errEmbed)
            return;
            }

            msg.reply("não fiz ainda senta e chora")
        break
        case "ver":
            if(typeof(opLevel) === "undefined" || opLevel < 3) { 
                let errEmbed = new RichEmbed();
                errEmbed.setTitle('❌ Você tem não permissões suficientes (3).')
                msg.channel.send(errEmbed)
            return;
            }
            
            let rifaVerEmbed = new RichEmbed();
            rifaVerEmbed.setTitle('Rifas:')
            rifaVerEmbed.addField('zF4ke2',`Vai comprar ${rifas1Number} rifas.`)
            rifaVerEmbed.addField('xFaker',`Vai comprar ${rifas2Number} rifas.`)
            rifaVerEmbed.addField('DiscordOfficialAccount',`Vai comprar ${rifas3Number} rifas.`)
            rifaVerEmbed.addField('OConselho',`Vai comprar ${rifas4Number} rifas.`)
            rifaVerEmbed.addField('zF4ke0',`Vai comprar ${rifas5Number} rifas.`)
            msg.channel.send(rifaVerEmbed)

        break
        /* case "lista":
            if(typeof(opLevel) === "undefined" || opLevel < 3) { 
                let errEmbed = new RichEmbed();
                errEmbed.setTitle('❌ Você tem não permissões suficientes (3).')
                msg.channel.send(errEmbed)
            return;

            var userNotify = msg.mentions.users.first()

            }

            rifaBot1.login(accounts.zF4ke2)

            rifaBot2.login(accounts.xFaker)

            rifaBot3.login(accounts.DiscordOfficialAccount)
            
            rifaBot4.login(accounts.OConselho)
            
            rifaBot5.login(accounts.zF4ke)
            
        break */
    }
}