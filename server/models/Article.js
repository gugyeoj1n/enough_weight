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
    pictures: {
        type: [Object]
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