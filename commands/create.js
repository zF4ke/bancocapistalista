
const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    
    const templateEmbed = new Discord.RichEmbed();
    templateEmbed.setTitle('')
    templateEmbed.setDescription('')
    templateEmbed.setFooter('')
    templateEmbed.setColor('Grey')
    templateEmbed.setTimestamp()

    templateEmbed.setTitle('Digite um título: (escreva "pular" para deixar em branco)')
    const titleMsg = message.channel.send(templateEmbed).then(msg => {
        /* const cancelFilter = (reaction, user) => {
            return reaction.emoji.name === '❌' && user.id === message.author.id;
        }; */
        /* const cancelCollector = message.createReactionCollector(filter, { max: 1 });

         cancelCollector.on('collect', cancelC => {
            message.channel.send("wut")
            console.log("Kkkkkkkkkkk")
            msg.delete()
            return
        }) */

        var deleted = 0;

        const cancelFilter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
        const cancelCollector = msg.createReactionCollector(cancelFilter, { max: 1, time: 60000 });
        cancelCollector.on('collect', r => {
            msg.delete()
            let cancelTemplate = new Discord.RichEmbed();
            cancelTemplate.setTitle('❌ Embed cancelado com sucesso.')
            message.channel.send(cancelTemplate);

            return
        });

        msg.react('❌');
        titleCollect()

        function titleCollect() {
            const titleCollector = message.channel.createMessageCollector(titleC => titleC.author.id === message.author.id, { max: 1 })
            

            titleCollector.on('collect', titleC => {
                
                var title = titleC.content

                if(title.startsWith("b!")) {
                    return titleCollect()
                }

                if(title === "pular") {
                    title = " "
                }

                if(!title || title.length > 256) {
                    let errTemplate = new Discord.RichEmbed();
                    errTemplate.setTitle('❌ Título invalido ou maior que 256 caracteres, digite novamente.')
                    titleC.delete()

                    msg.edit(errTemplate)
                    titleCollect()
                
                } else {
                    templateEmbed.setTitle(title)
                    templateEmbed.setDescription('Digite uma descrição: (escreva "pular" para deixar em branco)')

                    msg.edit(templateEmbed)
                    descCollect()

                    function descCollect() {

                        const descCollector = message.channel.createMessageCollector(descC => descC.author.id === message.author.id, { max: 1 })
                        descCollector.on('collect', descC => {

                            var description = descC.content

                            if(description === "pular") {
                                description = " "
                            }

                            if(description.startsWith("b!")) {
                                return descCollect()
                            }

                            if(!description || description.length > 2048) {
                                let errTemplate = new Discord.RichEmbed();
                                errTemplate.setTitle('❌ Descrição invalida ou maior que 2048 caracteres, digite novamente.')
                                descC.delete().catch()

                                msg.edit(errTemplate)
                                descCollect()
                            } else {
                                templateEmbed.setTitle(title)
                                templateEmbed.setDescription(description)
                                templateEmbed.setFooter('Digite o footer: (escreva "pular" para deixar em branco)')

                                msg.edit(templateEmbed)
                                footerCollect()

                                function footerCollect() {
                                    const footerCollector = message.channel.createMessageCollector(footerC => footerC.author.id === message.author.id, { max: 1 })
                                    footerCollector.on('collect', footerC => {
                                        
                                        var footer = footerC.content

                                        if(footer === "pular") {
                                            footer = " "
                                        }

                                        if(footer.startsWith("b!")) {
                                            return footerCollect()
                                        }

                                        if(!footer || footer.length > 2048) {
                                            let errTemplate = new Discord.RichEmbed();
                                            errTemplate.setTitle('❌ footer invalido ou maior que 2048 caracteres, digite novamente.')
                                            footerC.delete()
            
                                            msg.edit(errTemplate)
                                            footerCollect()
                                        } else {
                                            templateEmbed.setTitle(title)
                                            templateEmbed.setDescription(description)
                                            templateEmbed.setFooter(footer)
            
                                            msg.edit(templateEmbed)
                                            msg.react('✅')

                                            const sendFilter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
                                            const sendCollector = msg.createReactionCollector(sendFilter, { max: 1 });
                                            sendCollector.on('collect', r => {
                                                msg.delete()
                                                message.channel.send(templateEmbed);

                                                return
                                            });
                                        }
                                    })
                                }
                            }
                        })
                    }
                }
            })
        }
    })
    
}