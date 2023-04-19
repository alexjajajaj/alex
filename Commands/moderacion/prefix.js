const { EmbedBuilder } = require('discord.js')

module.exports = {
    name: 'prefix',
    alias: ['pf'],

execute (client, message, args, prefix) {
        const embed = new EmbedBuilder()
            .setTitle('📕 ¡Recordatorio!')
            .setDescription(`¡El prefix actual es \`${prefix}\`!`)
            .setThumbnail(`https://cdn.discordapp.com/attachments/1092521628895825920/1094344332242329751/ed0c45cd902877afd782dc9cfcb0f3bb.jpg`)
            .setColor(client.color)
            .setImage('https://cdn.discordapp.com/attachments/1092521628895825920/1094343281191694356/4151869449fac8fedf10b245f4488680.jpg')
            .setTimestamp()
        message.reply({embeds: [embed]});

    },
};
