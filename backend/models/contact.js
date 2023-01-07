const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    name: {type: String, required: true},
    mail: {type: String, required: true},
    tel: {type: String, required: true}
})

module.exports = mongoose.model('Contact', contactSchema)