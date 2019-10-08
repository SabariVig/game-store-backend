const Game = require('../../Models/games')

module.exports = {
	Query: {
		async getGames() {
			const game = await Game.find()
			console.log(game)
			return game
		},
		async getGamesSize() {
			const game = await Game.count({})
			// console.log(game)
			return game
		},

		async getGame(_, { name }) {
			const game = await Game.findOne({ name })
			console.log(game)
			return (game)
		},


		async getGamesPage(_, { limit,skip }) {
			const game = await Game.find().limit(3).skip(skip)
			// console.log(game)
			const lol= await Game.count({})
			console.log(lol)
			return (game)
		}
	},
	Mutation: {
		async addGame(_, { game }) {
			const findgame = await Game.findOne({ name: game.name })
			if (findgame) return Error('Game Already Exists')
			// console.log(game)
			const game2 = new Game(game)
			await game2.save()
			return game2
		}
	}
}
