const mongoose = require("../node_modules/mongoose")

const articleSchema = mongoose.Schema({
    /*
    author: {
        type: User
    },
    */
    datetime: {
        type: String
    },
    content: {
        type: String
    },
    picture: {
        type: String
    },
    likes: {
        type: Number,
        default: 0
    },
    title: {
        type: String
    }
})

module.exports = mongoose.model('Article', articleSchema)