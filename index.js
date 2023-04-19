Discord = require('discord.js')
const { Client,
    GatewayIntentBits,
    Partials,
    Collection,
} = require("discord.js")

const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember} = Partials
const client = new Client({
    intents: [Guilds, GuildMembers, GuildMessages, GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers,   GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
    partials: [User, Message, GuildMember, ThreadMember],
});


const config = require(`${process.cwd()}/config.json`);

const fs = require('fs');


require('colors');

client.on('ready')

client.login(config.token)


client.commands = new Collection();

fs.readdirSync('./commands').forEach((dir) => {
    const commands = fs.readdirSync(`./commands/${dir}/`).filter((file) => file.endsWith('.js'));
    for (let file of commands) {
        let command = require(`./commands/${dir}/${file}`);
        console.log(`Comandos - ${file} cargado`.yellow)
        client.commands.set(command.name, command);
    }
});






