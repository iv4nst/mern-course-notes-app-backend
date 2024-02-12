require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')

// connectDB
const connectDB = require('./src/db/connect')

const notesRouter = require('./src/routes/notes')

app.use(express.json())
// use "cors" only in DEV to allow access from everywhere (in PROD, whitelist domains)
app.use(cors())

// root (/)
app.get('/', (req, res) => {
    res.send('Hello world!')
})

// use routers
app.use('/api/v1/notes', notesRouter)

const port = process.env.PORT || 3000

const start = async () => {
    try {
        // connect to DB
        const { DB_USER, DB_PASSWORD, DB_URL, DB_NAME } = process.env
        const db_uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_URL}/${DB_NAME}?retryWrites=true&w=majority`
        await connectDB(db_uri)
        console.log('Connected to DB')

        app.listen(port, () => {
            console.log(`Server listening on port ${port}...`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()
