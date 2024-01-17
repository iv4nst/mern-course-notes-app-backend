const express = require('express')
const router = express.Router()

// /notes
router.get('/', (req, res) => {
    const notes = [
        {
            text: 'Note 1',
            link: 'some link 1...',
        },
        {
            text: 'Note 2',
            link: 'some link 2...',
        },
    ]
    res.json({ notes })
})

module.exports = router
