const { gql } = require('apollo-server')

module.exports = gql`
	input AboutInput {
		sdescription: String!
		description: String!
		developer: String!
		publisher: String!
		releaseDate: String!
		tags: String!
		rating: String!
		platform: [String]!
	}
	type About {
		sdescription: String!
		description: String!
		developer: String!
		publisher: String!
		releaseDate: String!
		tags: String!
		rating: String!
		platform: [String]!
	}
	
	input OspecificationInput{
		OS:[String]!
		processor:[String]
		graphicCard:[String]!
		ram:[String]
		storage:[String]

	}

	type Ospecification{
		OS:[String]!
		processor:[String]
		graphicCard:[String]!
		ram:[String]
		storage:[String]

	}

	input SpecificationInput{
		windows:OspecificationInput!
		mac:OspecificationInput
		recomended:Boolean!
	}

	type Specification{
		windows:Ospecification!
		mac:Ospecification
		recomended:Boolean!
	}

	type Game {
		id: Int!
		name: String!
		price: Float!
		about:About
		specification:Specification
		additionalFeature:String
		languageSupport:String
		
	}

	input SGame {
		id: Int!
		name: String!
		price: Float!
		url: String!
		about:AboutInput!
		specification:SpecificationInput!
		additionalFeature:String
		languageSupport:String
	}

	type Query {
		getGame(name: String!): Game
		getGames: [Game]
	}

	type Mutation {
		addGame(game: SGame!):Game!
	}
`
