const mongoose = require('../node_modules/mongoose');

const routineSchema = mongoose.Schema({
    title: {
        type: String,
    },
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        nickname: String,
    },
    content: {
        type: [
            {
                name: String,
                repeats: String
            }
        ],
    },
    likes: {
        type: Number,
        default: 0
    },
}, { timestamps: true })

module.exports = mongoose.model('Routine', routineSchema);
