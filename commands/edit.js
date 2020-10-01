const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    
    var mensagemID = args[0]

    const templateEmbed = new Discord.RichEmbed();
    templateEmbed.setTitle('Investir')
    templateEmbed.setFooter('zF4ke#8556')
    templateEmbed.setDescription("Quer fazer o seu dinheiro valer? Chegou no lugar certo!\nAqui você poderá fazer empréstimos recebendo juros.\n\nPlanos:\n*FAST* • Dobrar o seu dinheiro (2x) até 100k. (Tempo limite: 5 dias)\n*BEST* • Receber metade do valor investido **por semana**! até 500k~750k. **(Requer que o mesmo valor seja investido no mês seguinte.)**\n*RAFFLE* • Patrocinar as nossas rifas! **20% do lucro** (Negociável, mais informações necessárias)\n\nEnvie o seu formulário abaixo.\n\n* (Não corra riscos, apostar é com a gente!)*")
    templateEmbed.setColor('#FFC100')
    templateEmbed.setTimestamp()

    message.channel.fetchMessages({around: mensagemID, limit: 1})
    .then(msge => {
        const fetchedMsg = msge.first();
        fetchedMsg.edit(embed);
    });

}
