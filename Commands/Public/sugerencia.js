const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'sugerencias',
    alias: ['sg', 'suggestion'],

    execute (client, message, args, prefix) {
        message.delete();
        const sugerencia = args.join(' ');
        if (!sugerencia) return;
        message.channel.send({embeds: [new EmbedBuilder()
            .setAuthor({name: `Sugerencia de ${message.author.username}`})
            .setDescription(sugerencia)
            .setColor(client.color)
            .setFooter({text: `¡Si quiere compartir tus ideas usa! ${prefix}sugerencia <sugerencia>`})
        ]}).then((msg) => {
            msg.react('✅')
            msg.react('❌')
        });
    }
}