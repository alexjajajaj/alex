const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, InteractionCollector, Component } = require('discord.js');

module.exports = {
    name: 'historia',
    alias: ['historias', 'his'],

async execute (client, message, args, prefix, interaction) {
        message.delete();
        const historia = args.join(' ');
        if (!historia) return message.channel.send({embeds: [new EmbedBuilder()
            .setTitle('❌ ¡Error!')
            .setDescription(`¡Debes especificar mejor tu historia !**Uso:** \`${prefix}historia <Título> - <Descripción> - <Footer> - <Thumbnail> - <Image>\``)
            .setColor(client.color)
        ]}); 
        if (historia.length > 1000) return message.channel.send({embeds: [new EmbedBuilder()
            .setTitle(`¡Error!`)
            .setDescription(`Santas cachucas ❌ ¡Debes detenerte o dejarlo para la pate 2!`)
            .setColor(client.color)
            .setTimestamp()
        ]}); 
        const opciones = historia.split(' - ');
        message.channel.send({embeds: [new EmbedBuilder()
            .setTitle(opciones[0])
            .setDescription(opciones[1])
            .setDescription(opciones[1])
            .setDescription(opciones[1])
            .setDescription(opciones[1])
            .setDescription(opciones[1])
            .setDescription(opciones[1])
            .setDescription(opciones[1])
            .setDescription(opciones[1])
            .setDescription(opciones[1])
            .setDescription(opciones[1])
            .setDescription(opciones[1])
            .setDescription(opciones[1])
            .setFooter({text: opciones[2]})
            .setThumbnail(opciones[3])
            .setImage(opciones[4])
            .setAuthor({name: `${client.user.username}`})
            .setColor(client.color)
        ]})
}   }






