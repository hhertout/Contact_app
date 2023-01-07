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
    console.log(contact)
    contact.save()
    .then(()=>res.status(201).json({message: "Contact enregistré !"}))
    .catch(err => res.status(400).json({ err }))
})

app.get('/api/contacts', (req, res, next) => {
    ContactRepository.find()
    .then(contacts => res.status(200).json(contacts))
    .catch(err => res.status(400).json({ err }))
})

app.get('/api/contacts', (req, res, next) => {
    const contacts = [
        {
            "id": 0,
            "name": "Emmanuel",
            "mail": "emmanuel@email.com",
            "tel": "23423434",
            "isDeletable": true,
            "isVisible": true
        },
        {
            "id": 1,
            "name": "Johana",
            "mail": "johana@ElementInternals.com",
            "tel": "6764563456",
            "isDeletable": true,
            "isVisible": true
        },
        {
            "id": 2,
            "name": "Lucas",
            "mail": "lucas@email.com",
            "tel": "12125465",
            "isDeletable": false,
            "isVisible": true
        },
        {
            "id": 3,
            "name": "Marie",
            "mail": "marie@rm.com",
            "tel": "12125465",
            "isDeletable": true,
            "isVisible": true
        },
        {
            "id": 4,
            "name": "Pedro",
            "mail": "pedro@rn.com",
            "tel": "34634571234",
            "isDeletable": true,
            "isVisible": true
        }
    ]
    res.status(200).json(contacts)
  });

module.exports = app

