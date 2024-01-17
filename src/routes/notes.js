const express = require('express')
const router = express.Router()

const {
    getNotes,
    getOneNote,
    createNote,
    updateNote,
    deleteNote,
} = require('../controllers/notes')

// /notes
router.route('/').get(getNotes).post(createNote)
router.route('/:id').get(getOneNote).patch(updateNote).delete(deleteNote)

module.exports = router
