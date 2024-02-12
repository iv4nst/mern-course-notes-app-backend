const express = require('express')
const router = express.Router()

const {
    getNotes,
    getNoteByID,
    createNote,
    updateNote,
    deleteNote,
} = require('../controllers/notes')

// /notes
router.route('/').get(getNotes).post(createNote)
router.route('/:id').get(getNoteByID).patch(updateNote).delete(deleteNote)

module.exports = router
