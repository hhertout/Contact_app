require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const ContactRoutes = require('./Routes/ContactRouter')
const UserRoutes = require('./Routes/UserRouter')

const app = express()

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true,
    useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Connected to the MongoDB app'))

app.use(express.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
    next()
})


app.use('/api/contacts', ContactRoutes)
app.use('/api/auth', UserRoutes)

module.exports = app

