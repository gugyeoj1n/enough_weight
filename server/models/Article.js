const mongoose = require("../node_modules/mongoose")

const articleSchema = mongoose.Schema({

    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        nickname: String,
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
    likes: {
        type: Number,
        default: 0
    },
}, { timestamps : true })

module.exports = mongoose.model('Article', articleSchema)