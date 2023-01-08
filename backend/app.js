require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const ContactRepository = require('./models/contact') 


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

app.post('/api/contacts', (req, res, next) => {
   delete req.body._id
    const contact = new ContactRepository({
        ...req.body
    })
    contact.save()
    .then(()=>res.status(201).json({message: "Contact enregistré !"}))
    .catch(err => res.status(400).json({ err }))
})

app.get('/api/contacts', (req, res, next) => {
    ContactRepository.find()
    .then(contacts => res.status(200).json(contacts))
    .catch(err => res.status(400).json({ err }))
})

app.get('/api/contacts/:id', (req, res, next) => {
    ContactRepository.findOne({ name : req.params.id })
    .then(contact => {
        res.status(200).json(contact)
        console.log(contact)
    })
    .catch(err => res.status(400).json({ err }))
})

module.exports = app

