require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')

// connectDB
const connectDB = require('./db/connect')

const notesRouter = require('./api/v1/index')

// use "cors" only in DEV to allow access from everywhere (in PROD, whitelist domains)
app.use(cors())

// root (/)
app.get('/', (req, res) => {
    res.send('Hello world!')
})

// use routers
app.use('/notes', notesRouter)

const port = process.env.PORT || 3000

const start = async () => {
    try {
        // connect to DB
        await connectDB(process.env.MONGO_URI)
        console.log('Connected to DB')

        app.listen(port, () => {
            console.log(`Server listening on port ${port}...`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()
