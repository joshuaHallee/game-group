//'npm start' for production
//'npm run dev' for development

const fs = require('fs')
const Discord = require('discord.js')
const dotenv = require('dotenv')

// Load config
dotenv.config({ path: './.env'})

// Discord client setup
const client = new Discord.Client()
client.commands = new Discord.Collection()

// Discord bot config / token
const { prefix } = require('./config')
const BOT_TOKEN = process.env.BOT_TOKEN

// Set command files as commands
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
    //console.log(command.name + " file command name")
}

// Client routing
client.login(BOT_TOKEN)

client.on('ready', () => {
    console.info(`Logged in as ${client.user.tag}!`);
});
  
client.on('message', message => {

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();

    // console.log(command)
    // console.log(args)

    if (!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
});