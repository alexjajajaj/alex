const {PermissionFlagsBits, EmbedBuilder} = require('discord.js')
const Discord = require('discord.js')


module.exports = {
    name: 'unban',
    alias: ['ub'],

    async execute (client, message, args, prefix) {
        if (!message.member.permissions.has(PermissionFlagsBits.BanMembers)) return message.reply({embeds: [new EmbedBuilder()
            .setTitle('¡Error !')
            .setDescription('❌ ¡Debes tener permisos de administrador para usar este comando!')
            .setColor(client.color)
        ]});
        
        

        if (!message.guild.members.me.permissions.has(PermissionFlagsBits.Administrator)) return;
        

        try {

            let userId = args[0]
            if (!userId) {
                return message.reply({embeds: [new EmbedBuilder()
                    .setTitle('¡Error !')
                    .setDescription('❌ ¡Tienes ingresar el ID del usuario!')
                    .setColor(client.color)
                ]});
            }   

            const usuarioBaneado = await message.guild.bans.fetch()
            const user = usuarioBaneado.find(user => user.user.id === userId)
            if (!user) {
                return message.reply({embeds: [new EmbedBuilder()
                    .setTitle('¡Error !')   
                    .setDescription('❌ ¡La ID del usuario que mencionaste no esta baneada')
                    .setColor(client.color)
                    
                ]})
            }
            await message.guild.members.unban(user.user)
            await message.reply({embeds: [new EmbedBuilder()
                .setTitle('¡Listo !')
                .setDescription(`✅ ¡El usuario **${user.user.tag}** ha sido desbaneado correctamente!\n\ 🔰 !Moderador: ${message.author.tag}`)
                .setColor(client.color)
                .setTimestamp()
            ]})


        } catch (error) {
            console.log(error);
            return message.reply({embeds: [new EmbedBuilder()
                .setTitle('¡Error !')
                .setDescription('❌ ¡Ocurrio un error al unbanear al usuario!')
                .setColor(client.color)
            ]});
        }
        
    }
}
    