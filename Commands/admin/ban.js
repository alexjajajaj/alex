const {PermissionFlagsBits, EmbedBuilder} = require('discord.js')
const Discord = require('discord.js')


module.exports = {
    name: 'ban',
    alias: ['b'],

    async execute (client, message, args, prefix) {
        if (!message.member.permissions.has(PermissionFlagsBits.BanMembers)) return message.reply({embeds: [new EmbedBuilder()
            .setTitle('¡Error !')
            .setDescription('❌ ¡Debes tener permisos de administrador para usar este comando!')
            .setColor(client.color)
        ]});
        

        if (!message.guild.members.me.permissions.has(PermissionFlagsBits.Administrator)) return message.reply({embeds: [EmbedBuilder()
            .setTitle(`¡Error !`) 
            .setDescription(`❌ ¡No tengo los permisos suficientes para banear a este usurio!`)
            .setColor(client.color)
        ]});
        
        try {

            let usuario = message.mentions.members.first()
            if (!usuario) {
                return message.reply({embeds: [new EmbedBuilder()
                    .setTitle('¡Error !')
                    .setDescription('❌ ¡Tienes que mensionar un usuario!')
                    .setColor(client.color)
                ]});
            } 
            if (message.member.roles.highest.position = usuario.roles.highest.position) {
                return message.reply({embeds: [new EmbedBuilder()
                    .setTitle('¡Error !')
                    .setDescription('❌ ¡El usuario que intentas banear tiene el mismo rol que tu o superior!')
                    .setColor(client.color)
                ]});
            }

            let razon = args.slice(1).join(" ")
            if(!razon) {
                razon = 'No hubo razones en este baneo'

            }   
                usuario.ban({reason: razon})
                const embed = new Discord.EmbedBuilder()
                .setTitle("¡Listo !")
                .setDescription(`✅ ¡Banear a: **${usuario.user.username}** \n\ 📜 ¡Razones: **${razon}**\n\ 🔰 !Moderador: **${message.author.tag}**`)
                .setColor(client.color)
                .setTimestamp() 
                message.reply({embeds: [embed]})
        } catch (error) {
            console.log(error);
            return message.reply({embeds: [new EmbedBuilder()
                .setTitle('¡Error !')
                .setDescription('❌ ¡Ocurrio un error al banear al usuario!')
                .setColor(client.color)
            ]});
        }
        
    }
}
    