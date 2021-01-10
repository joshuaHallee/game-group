const axios = require("axios")

module.exports = {
    name:'track',
    description:'Track a Steam64 ID to a user.',
    execute(message, args) {

        const discordUser = `${message.author.username}#${message.author.discriminator}`
        const steam64 = args[0]

        if (args.length > 1) return message.reply('too many arguments given.')
        if (args.length == 0) return message.reply('you need to give one argument.')

        try {
            axios.post('http://localhost:3001/api/user/', {
                discordUser: discordUser,
                steam64: steam64,
                })
                .then(function (response) {
                    console.log(`${discordUser} is being tracked at ${steam64}.`)
                    message.reply(`you are being tracked at ${steam64}.`)
                })
                .catch(function (error) {
                    console.log(error)
                })
        } catch (error) {
            console.log(error)
        }
    }
}