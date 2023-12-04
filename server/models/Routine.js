const mongoose = require('../node_modules/mongoose');

const routineSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    datetime: {
        type: String,
        require: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    content: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('Routine', routineSchema);

module.exports = Routine;