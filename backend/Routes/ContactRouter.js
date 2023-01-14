const express = require('express')
const router = express.Router()
const ContactController = require('../Controllers/ContactController')

router.post('/', ContactController.createContact)

router.get('/', ContactController.findAllContacts)

router.get('/:id', ContactController.findOneContact)

router.put('/:id', ContactController.editContact)

router.delete('/:id', ContactController.deleteContact)

module.exports = router