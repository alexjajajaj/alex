module.exports = {
    name: 'interactionCreate',
    execute: (client, interaction) => {
        const comando = client.comandos.get(interaction.commandName);
        if (comando) {
            comando.execute(client, interaction);
        } else {
            interaction.reply({content: '❌ | ¡El comando no existe o está desactualizado!'});
        }
    }
}