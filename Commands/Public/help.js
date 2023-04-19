const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, Collector } = require('discord.js');
const { Collection } = require('mongoose');

module.exports = {
    name: 'help',
    alias: ['ay', 'ayuda'],

    execute (client, message, args, prefix) {
        const button = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
        .setCustomId('button')
        .setLabel('INICIO')
        .setStyle(ButtonStyle.Success),

        new ButtonBuilder()
        .setCustomId('button2')
        .setLabel('PAGINA 1')
        .setStyle(ButtonStyle.Primary),

        new ButtonBuilder()
        .setCustomId('button3')
        .setLabel('PAGINA 2')
        .setStyle(ButtonStyle.Primary),

        new ButtonBuilder()
        .setCustomId('button4')
        .setLabel('ELIMINAR')
        .setStyle(ButtonStyle.Danger),
        );


        const embed = new EmbedBuilder()
        .setTitle('📜 ¡Lista de comandos!')
        .setAuthor({name: `${client.user.username}`})
        .setDescription('🏮 ¡Nuestro equipo de desarrolladores están trabajando para darte un mejor servicio!')
        .addFields({
            name: `📌 ${prefix}Help`, value: '¡Si necesitas ayuda, con gusto te ayudare!' 
        })
        .addFields({
            name: `🏓 ${prefix}Ping`, value: '¡Informacion de la latencia del bot!'
        })
        .addFields({
            name: `📔 ${prefix}Historias`, value: '¡Cuentanos tus historias mas conmovedoras !'
        })
        .addFields({
            name: `🌸 ${prefix}prefix`, value: '¡Cambia el prefjo con el que te respondere!'
        })
        .addFields({
            name: `💡 ${prefix}sugerencias`, value: '¡Usa este comando para mostrarles tus ideas a todos!'
        })
        .addFields({
            name: `⛔ ${prefix}ban`, value: '¡Banea a los usuarios que no cumplen con las reglas!'
        })
        .addFields({
            name: `⚔  ${prefix}kick`, value: '¡Kickea a los usuarios toxicos'
        })
        .addFields({
            name: `⚖  ${prefix}unban`, value: '¡Desbanea a los usuarios baneados!'
        })
        .addFields({
            name: `🔐 7 ${prefix}Procesado!`, value: 'estamos trabajando en este comando'
        })
        .setThumbnail('https://i.pinimg.com/564x/5e/8a/8a/5e8a8a0b7f56994fb24a2dec6f4db8a4.jpg')
        .setTimestamp()
        .setColor(client.color)


        const embed2 = new EmbedBuilder()
        .setTitle('📜 ¡Pagina 1!')
        .setAuthor({name: `${client.user.username}`})
        .setDescription('🏮 ¡Comandos de moderacion!')
        .addFields({
            name: `🌸 ${prefix}prefix`, value: '¡Cambia el prefjo con el que te respondere!'
        })
        .addFields({
            name: `⛔ ${prefix}ban`, value: '¡Banea a los usuarios que no cumplen con las reglas!'
        })
        .addFields({
            name: `⚔  ${prefix}kick`, value: '¡Kickea a los usuarios toxicos'
        })
        .addFields({
            name: `⚖  ${prefix}unban`, value: '¡Desbanea a los usuarios baneados!'
        })
        .setThumbnail('https://i.pinimg.com/564x/5e/8a/8a/5e8a8a0b7f56994fb24a2dec6f4db8a4.jpg')
        .setTimestamp()
        .setColor(client.color)


        const embed3 = new EmbedBuilder()
        .setTitle('📜 ¡Pagina 2!')
        .setAuthor({name: `${client.user.username}`})
        .setDescription('🏮 ¡Comandos de utilidad!')
        .addFields({
            name: `📌 ${prefix}Help`, value: '¡Si necesitas ayuda, con gusto te ayudare!' 
        })
        .addFields({
            name: `🏓 ${prefix}Ping`, value: '¡Informacion de la latencia del bot!'
        })
        .addFields({
            name: `📔 ${prefix}Historias`, value: '¡Cuentanos tus historias mas conmovedoras !'
        })
        .setThumbnail('https://i.pinimg.com/564x/5e/8a/8a/5e8a8a0b7f56994fb24a2dec6f4db8a4.jpg')
        .setTimestamp()
        .setColor(client.color)

        let button4 = '1'
        const embed4 = new EmbedBuilder()
        .setTitle('Despedida ')
        .setAuthor({name: `${client.user.username}`})
        .setDescription('Nuestro equipo de desarrolladores le complace en a verte ayudó con los comandos que tenemos para ofrecer. El equipo de legion of the legendary')
        .setThumbnail('https://cdn.discordapp.com/attachments/1096784206849380372/1097694778084315249/eac6ef2c76e0ead358061af25bc22fcf.jpg')
        .setColor(client.color)
        .setTimestamp()
        .setImage('https://cdn.discordapp.com/attachments/1096784206849380372/1097694802407067698/04e1c10be4eddd9a9074c7f771a2bdc5.jpg')

        message.reply({embeds: [embed], components: [button]});

        const collector = message.channel.createMessageComponentCollector();

        collector.on('collect', async (i) => {
            if(i.customId === `button`) {
                if (i.userId !== message.userId) {
                    return await i.reply({embeds: [new EmbedBuilder()
                        .setTitle('¡Error !')
                        .setDescription('❌ ¡No eres el dueño de esta interaccion!')
                        .setColor(client.color)
                    ]})
                }
                await i.update({embeds: [embed], components: [button]})

            }

            if(i.customId === `button2`) {
                if (i.userId !== message.userId) {
                    return await i.reply({embeds: [new EmbedBuilder()
                        .setTitle('¡Error !')
                        .setDescription('❌ ¡No eres el dueño de esta interaccion!')
                        .setColor(client.color)
                    ]})
                }
                await i.update({embeds: [embed2], components: [button]})
            }
            
            if(i.customId === `button3`) {
                if (i.userId !== message.userId) {
                    return await i.reply({embeds: [new EmbedBuilder()
                        .setTitle('¡Error !')
                        .setDescription('❌ ¡No eres el dueño de esta interaccion!')
                        .setColor(client.color)
                    ]})
                }
                await i.update({embeds: [embed3], components: [button]})
            } 

            
            if(i.customId === `button4`) {
                if (i.userId !== message.userId) {
                    return await i.reply({embeds: [new EmbedBuilder()
                        .setTitle('¡Error !')
                        .setDescription('❌ ¡No eres el dueño de esta interaccion!')
                        .setColor(client.color)
                    ]})
                }
                await i.update({embeds: [embed4], components: []}); 
            }

            if(i.customId === `button4`) {
                if (i.userId !== message.userId) {
                    return;
                }
                  await setTimeout(() => {
                    message.channel.bulkDelete(button4)
                }, 3000); 
            }
        });
       
    },
};

