const axios = require('axios')

module.exports = {

	//76561198154382440
	
	name: 'ping',
	description: 'Ping!',
	execute(message, args) {

		// axios.get('http://localhost:3000/api/user')
		// 	.then(function (response) {
		// 		// message.channel.send(response)
		// 		message.channel.send(JSON.stringify(response.data[0]))
		// 		// console.log(response.data)
		// 	})
		// 	.catch(function (error) {
		// 		console.log(error)
		// 	})

		// axios.get('http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=440&count=3&maxlength=300&format=json')
		// 	.then(function (response) {
		// 		console.log(response.data)
		// 	})
		// 	.catch(function(error) {
		// 		console.log(error)
		// 	})

		message.channel.send('Pong.');
	},
};