const Note = require('../models/note')

// GET all notes
const getNotes = async (req, res) => {
    const notes = await Note.find({}).sort('createdAt')

    // const notes = [
    //     {
    //         text: 'Note 1',
    //         link: 'some link 1...',
    //     },
    //     {
    //         text: 'Note 2',
    //         link: 'some link 2...',
    //     },
    // ]
    res.status(200).json({ notes, count: notes.length })
}

// GET a note by ID
const getNoteByID = async (req, res) => {
    const {
        // user: { userID }, // user ID
        params: { id: noteID },
    } = req

    const note = await Note.findOne({ _id: noteID }) // or Note.findById(noteID)

    if (!note) {
        return res.status(404).json({ msg: 'Note not found' })
    }

    res.status(200).json({ note })
}

// CREATE a note
const createNote = async (req, res) => {
    // req.body.createdBy = req.user.userID // create a property "createdBy" on req.body
    const note = await Note.create(req.body)
    res.status(201).json({ note, success: true })
}

// UPDATE a note
const updateNote = async (req, res) => {
    const {
        // user: { userID }, // user ID
        params: { id: noteID },
        body: { text, link },
    } = req

    if (text === '' || link === '') {
        return res.status(400).json({ msg: 'Text or link missing.' })
    }

    const note = await Note.findOneAndUpdate({ _id: noteID }, req.body, {
        new: true,
        runValidators: true,
    })

    if (!note) {
        return res.status(404).json({ msg: 'Note not found' })
    }

    res.status(200).json({ msg: 'Note updated', note })
}

// DELETE a note
const deleteNote = async (req, res) => {
    const {
        // user: { userID }, // user ID
        params: { id: noteID },
    } = req

    const note = await Note.findOneAndDelete({ _id: noteID })

    if (!note) {
        return res.status(404).json({ msg: 'Note not found' })
    }
    res.status(200).json({ msg: 'Note deleted' })
}

module.exports = { getNotes, getNoteByID, createNote, updateNote, deleteNote }
