const { EmbedBuilder } = require('discord.js');
const PrefixSchema = require(`${process.cwd()}/models/prefixSchema`);

module.exports = {
    name: 'setprefix',
    alias: ['sp'],

    execute: async (client, message, args, prefix) => {
        if (!message.content.startsWith(prefix)) return;
        if (!message.member.permissions.has('Administrator')) return message.reply({embeds: [new EmbedBuilder()
            .setTitle(`¡Error !`)
            .setDescription(`❌ ¡No tienes permisos suficientes para ejecutar este comando!`)
            .setColor(client.color)
        ]});
        const newprefix = args[0]
        if (!newprefix) return message.reply({embeds: [new EmbedBuilder()
            .setTitle(`¡Error !`) 
            .setDescription(`❌ ¡Debes especificar el nuevo prefijo!`)
            .setColor(client.color)
        ]});
        if (newprefix.length > 5) return message.reply({embeds: [new EmbedBuilder()
            .setTitle(`¡Error !`)
            .setDescription(`❌ ¡El prefix no puede tener mas de 5 caracteres!`)
            .setColor(client.color)
        ]}); 

        let data;
        try {
            data = await PrefixSchema.findOne({
                _id: message.guild.id
            })
            if (!data) {
                let newdata = await PrefixSchema.create({
                    _id: message.guild.id,
                    newPrefix: newprefix
                });
                newdata.save()
            } else {
                await PrefixSchema.findOneAndUpdate({
                    _id: message.guild.id,
                    newPrefix: newprefix,
                });
            }
            message.reply({embeds: [new EmbedBuilder()
                .setTitle(`¡Listo!`)
                .setDescription(`📌 ¡El prefix a sido actualizado a \`${newprefix}\`!`)
                .setColor(client.color)
            ]})
        } catch (err) {
            console.log(err)
            return message.reply({embeds: [new EmbedBuilder()
                .setTitle('¡Error !')
                .setDescription('❌ ¡Ocurrio un error al cambiar el prefix!')
                .setColor(client.color)
            ]});
        }
    }
}


    