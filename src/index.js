const { ApolloServer } = require('apollo-server')
require('dotenv').config()
const typeDefs = require('./graphql/typeDef')
const resolvers = require('./graphql/resolvers')
const mongoose = require('mongoose')


const server = new ApolloServer({ typeDefs, resolvers })

mongoose.connect('mongodb+srv://hawk:11111@cluster-dclbe.mongodb.net/hawk-games', { useNewUrlParser: true,useUnifiedTopology: true }, () =>
  console.log("Connected To DB")
);


server.listen(1215, () => {
	console.log('Server Running At http://localhost:1215')
})
