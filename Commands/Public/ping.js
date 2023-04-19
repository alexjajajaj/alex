const { EmbedBuilder } = require('discord.js')

module.exports = {
    name: 'ping',
    alias: ['latencia'],

execute (client, message, args, prefix) {
        const embed = new EmbedBuilder()
            .setTitle('🏓 ¡PONG!')
            .setAuthor({name: `${message.author.username}`, iconURL: message.author.displayAvatarURL({dynamic: true})})
            .setDescription(`**🏮 ¡EL PING DEL BOT ES DE! \`${client.ws.ping}ms\`!**`)
            .setThumbnail(`https://cdn.discordapp.com/attachments/1092521628895825920/1092525715204878468/1a8e2962dabc7a52e6b3a9c15dd86752.jpg`)
            .setTimestamp()
            .setImage(`https://cdn.discordapp.com/attachments/1092521628895825920/1092575618039824524/7eb215308cc9563b090058df46be775d.png`)
            .setColor(client.color)
        message.reply({embeds: [embed]})
    }
}