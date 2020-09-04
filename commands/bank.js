const scalc = require('scalc')
const { Client, RichEmbed } = require('discord.js');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('users.json')
const db = low(adapter)
const { Message } = require('discord.js');

module.exports.run = async (bot, msg, args) => {
    const { red, green, blue, yellow, cyan } = require('chalk');

    var subcomando = args[0]
    var info = args[1]
    var info2 = args[2]

    if(typeof(db.get(msg.author.id).find({"id": msg.author.id}).value()) === "undefined") {
        let errEmbed = new RichEmbed();
        errEmbed.setTitle('❌ Você tem não permissões suficientes (0).')
        msg.channel.send(errEmbed)
        return;
    } 

    var opLevel = db.get(msg.author.id).find({"id": msg.author.id}).value().opLevel

    if(!subcomando)  {subcomando = "help";} else {subcomando = subcomando.toLowerCase()}


    switch(subcomando) {
        case "help":
            const helpEmbed = new RichEmbed()
            .setColor('#CF1802')
            .setTitle('Comandos')
            .setDescription('Estes são os comandos do Banco Capitalista:')
            .addField("Money","Use `$bank money` para ver quanto dinheiro há no banco.")
            .addField("Withdraw", "Use `$bank withdraw quantia` para retirar dinheiro.")
            .addField("Pay","Use `$bank pay usuario quantia` para enviar dinheiro a uma pessoa especifica.")
            .addField("Perms","Use `$bank perms` para saber mais.")
            .setTimestamp();
            msg.channel.send(helpEmbed)
            msg.delete()
        break
        case "money":
            if(typeof(opLevel) === "undefined" || opLevel < 0) { 
                let errEmbed = new RichEmbed();
                errEmbed.setTitle('❌ Você tem não permissões suficientes (0).')
                msg.channel.send(errEmbed)
            return;
            }

            msg.channel.send(`+atm`).then((botMsg) => {
                botMsg.delete()
                msg.delete()
            })
        break
        case "withdraw":
            if(typeof(opLevel) === "undefined" || opLevel < 2) { 
                let errEmbed = new RichEmbed();
                errEmbed.setTitle('❌ Você tem não permissões suficientes (2).')
                msg.channel.send(errEmbed)
            return;
            }

            if(!info || Number.isInteger(Number(info)) === false) { 
                let errEmbed = new RichEmbed();
                errEmbed.setTitle('❌ Use: `$bank withdraw [quantia]`.')
                msg.channel.send(errEmbed)
            return;
            }
            msg.channel.send(`+pay ${msg.author} ${info}`).then((botMsg) => {
                botMsg.delete()
            })

            const withdrawCollector = msg.channel.createMessageCollector(withdrawC => withdrawC.author.id === "297153970613387264" && withdrawC.content.includes(`<@${msg.author.id}>`) && withdrawC.content.includes("transferir"), { max: 1, time: 15000 })
            withdrawCollector.on('collect', withdrawC => {
                withdrawC.react("✅")
                withdrawC.react("⚙️")
            });
        break
        case "pay":
            if(typeof(opLevel) === "undefined" || opLevel < 2) { 
                let errEmbed = new RichEmbed();
                errEmbed.setTitle('❌ Você tem não permissões suficientes (2).')
                msg.channel.send(errEmbed)
            return;
            }

            if(!info || !info2 || Number.isInteger(Number(info2)) === false) { 
                let errEmbed = new RichEmbed();
                errEmbed.setTitle('❌ Use: `$bank pay [usuario] [quantia]`.')
                msg.channel.send(errEmbed)
            return;
            }
            msg.channel.send(`+pay ${info} ${info2}`)
            let membro = msg.mentions.users.first()

            const payCollector = msg.channel.createMessageCollector(payC => payC.author.id === "297153970613387264" && payC.content.includes(`<@${membro.id}>`) && payC.content.includes("transferir"), { max: 1, time: 15000 })
            payCollector.on('collect', payC => {
                payC.react("✅")
                payC.react("⚙️")
            });
        break
        case "perms":
            if(typeof(opLevel) === "undefined" || opLevel < 3) { 
                let errEmbed = new RichEmbed();
                errEmbed.setTitle('❌ Você tem não permissões suficientes (3).')
                msg.channel.send(errEmbed)
            return;
            }

            if(!info) info = "help";
            switch(info) {
                case "help":
                    const permsHelpEmbed = new RichEmbed()
                    .setColor('#CF1802')
                    .setTitle('🛡️ Permissões')
                    .setDescription('Lista de comandos:')
                    .addField("Create","Use `$bank perms create usuario` para criar uma conta no banco.")
                    .addField("Set", "Use `$bank perms set usuario permissão` para as permissões de um usuário.")
                    .addField("List","Use `$bank perms list` para ver a lista de permissões.")
                    .setTimestamp();
                    msg.channel.send(permsHelpEmbed)
                    msg.delete()
                break
                case "create":
                    let usuario = msg.mentions.users.first()
                    if(!usuario) {
                        let errEmbed = new RichEmbed();
                        errEmbed.setTitle('❌ Use: `$bank perms create [usuario]`.')
                        msg.channel.send(errEmbed)
                    return;                    
                    }
                    try {
                        db.set(usuario.id, []).write();
                        db.get(usuario.id)
                        .push({
                            id: usuario.id,
                            nick: usuario.username,
                            opLevel: 0
                        }).write()
                    } catch {}
                        let permsCreatedEmbed = new RichEmbed();
                        permsCreatedEmbed.setTitle('✅ Conta criada com sucesso.')
                        msg.channel.send(permsCreatedEmbed)
                break
                case "set":
                    let usuario2 = msg.mentions.users.first()
                    let permissao = args[4]

                    if(!usuario2) {
                        let errEmbed = new RichEmbed();
                        errEmbed.setTitle('❌ Use: `$bank perms set [usuario] [permissão]`.')
                        msg.channel.send(errEmbed)
                    return;                    
                    }
                    try {
                        db.set(usuario2.id, []).write();
                        db.get(usuario2.id)
                        .push({
                            id: usuario2.id,
                            nick: usuario2.username,
                            opLevel: permissao
                        }).write()
                    } catch {}
                    let permsSettedEmbed = new RichEmbed();
                    permsSettedEmbed.setTitle('✅ Permissões setadas com sucesso.')
                    msg.channel.send(permsSettedEmbed)
                break
                case "list":
                    const permsListEmbed = new RichEmbed()
                    .setColor('#CF1802')
                    .setTitle('🛡️ Permissões')
                    .setDescription('Lista de permissões:')
                    .addField("0","Permissão para usar `$bank help` e `$bank money`.")
                    .addField("1","Permissões equivalentes ao nivel 0 + permissão para enviar dinheiro para o banco.")
                    .addField("2","Permissões equivalentes aos níveis 0 e 1 + permissão para usar `$bank pay` e `$bank withdraw`.")
                    .addField("3","Permissões equivalentes aos níveis 0, 1 e 2 + permissão para gerir `$bank perms`.")
                    .setTimestamp();
                    msg.channel.send(permsListEmbed)
                break
            }

        break
    }
}