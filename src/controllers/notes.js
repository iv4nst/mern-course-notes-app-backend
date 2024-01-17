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
const getOneNote = async (req, res) => {
    const {
        // user: { userID }, // user ID
        params: { id: noteID },
    } = req

    const note = await Note.findOne({ _id: noteID })

    res.status(200).json({ note })
}

// CREATE a note
const createNote = async (req, res) => {
    // req.body.createdBy = req.user.userID // create a property "createdBy" on req.body
    const note = await Note.create(req.body)
    res.status(201).json({ note })
}

// UPDATE a note
const updateNote = async (req, res) => {
    res.status(200).json({ msg: 'UPDATE' })
}

// DELETE a note
const deleteNote = async (req, res) => {
    res.status(200).json({ msg: 'DELETE' })
}

module.exports = { getNotes, getOneNote, createNote, updateNote, deleteNote }
