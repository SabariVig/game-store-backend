const mongoose= require('mongoose')

const Mixed = mongoose.Schema.Types.Mixed
const Game = mongoose.Schema(
	{
		name: String,
		price: Number,
		about: Mixed,
		url:String,
		specification:Mixed
	},
	{ strict: false }
)

module.exports = mongoose.model('games', Game)
