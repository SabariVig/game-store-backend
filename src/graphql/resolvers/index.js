const gameResolver = require('./game')

module.exports={
    Game:{
        hasMore(parent){
            // console.log(parent)
            return true
        }
    },
    Query:{
        ...gameResolver.Query
    },
    Mutation:{
        ...gameResolver.Mutation
    }
}

