const mongoose = require("../node_modules/mongoose")

const articleSchema = mongoose.Schema({
    /*
    author: {
        type: User
    },
    */
    title: {
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
}, { timestamps : true})

module.exports = mongoose.model('Article', articleSchema)