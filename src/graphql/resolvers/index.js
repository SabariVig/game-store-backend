const gameResolver = require('./game')

module.exports={
    Query:{
        ...gameResolver.Query
    },
    Mutation:{
        ...gameResolver.Mutation
    }
}

