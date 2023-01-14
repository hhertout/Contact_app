const ContactRepository = require('../Models/Contact')

exports.createContact = (req, res, next) => {
    delete req.body._id
    const contact = new ContactRepository({
        ...req.body
    })
    contact.save()
        .then(() => res.status(201).json({ message: "Contact enregistré !" }))
        .catch(err => res.status(400).json({ err }))
}

exports.findAllContacts = (req, res, next) => {
    ContactRepository.find()
    .then(contacts => res.status(200).json(contacts))
    .catch(err => res.status(400).json({ err }))
}

exports.findOneContact = (req, res, next) => {
    ContactRepository.findOne({ _id : req.params.id })
    .then(contact => {
        res.status(200).json(contact)
    })
    .catch(err => res.status(400).json({ err }))
}

exports.editContact = (req, res, next) => {
    ContactRepository.updateOne(
        { _id : req.params.id }, 
        {...req.body, _id: req.params.id}
    )
    .then(() => {
        res.status(200).json({ message : 'Modification Effectuée' })
    })
    .catch(err => res.status(400).json({err}))
}

exports.deleteContact = (req, res, next) => {
    ContactRepository.deleteOne(
        { _id: req.params.id })
        .then(() => {
            res.status(200).json({message: "Contact supprimé"})
        })
        .catch(err => res.status(400).json({err}))
}