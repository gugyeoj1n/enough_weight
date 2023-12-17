const mongoose = require("../node_modules/mongoose")

const articleSchema = mongoose.Schema({

    author: {
        type: String,
    },
    title: {
        type: String
    },
    content: {
        type: String
    },
    pictures: {
        type: [Object]
    },
}, { timestamps : true })

module.exports = mongoose.model('Article', articleSchema)