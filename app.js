require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')

// use "cors" only in DEV to allow access from everywhere (in PROD, whitelist domains)
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('/notes', (req, res) => {
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

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server listening on port ${port}...`)
})
