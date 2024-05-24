const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const appschema = new mongoose.Schema({
    text: {
        type: String,
        require: true
    }
})



// Define the user schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

// Pre-save hook to hash the password before saving the user
userSchema.pre('save', async function (next) {
    if (this.isModified('password') || this.isNew) {
        const salt = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password, salt)
    }
    next()
});

// Create the user model
const User = mongoose.model('User', userSchema)
const App = mongoose.model('_App', appschema)

module.exports = { User, App }


