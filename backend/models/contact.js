const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    mail: {
        type: String
    },
    tel: {
        type: String
    }
})

module.exports = mongoose.model('Contact', contactSchema)