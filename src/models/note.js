const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema(
    {
        text: {
            type: String,
            required: [true, 'Please provide the note text'],
        },
        link: {
            type: String,
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model('Note', NoteSchema)
