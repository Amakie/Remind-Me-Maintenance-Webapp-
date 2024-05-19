const mongoose = require('mongoose')

const appschema = new mongoose.Schema({
    text: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('_App', appschema)
