const mongoose = require('../node_modules/mongoose');

const routineSchema = mongoose.Schema({
    title: {
        type: String,
    },
    author: {
        type: String,
    },
    content: {
        type: [
            {
                name: String,
                repeats: String
            }
        ],
    },
}, { timestamps: true })

module.exports = mongoose.model('Routine', routineSchema);
