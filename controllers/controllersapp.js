const modelsapp = require('../models/modelsapp')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/modelsapp')

const get_App = async (req, res) => {
    const _App = await modelsapp.find()
    res.send(_App)
}

const save_App = async (req, res) => {
    const {text} = req.body

    modelsapp
    .create({ text })
    .then((data) => {
        console.log("Added successfully ...");
        console.log(data);
        res.send(data)
    })
}

const update_App = async (req, res) => {
    const {_id, text} = req.body
    modelsapp
    .findByIdAndUpdate(_id, {text})
    .then(()=> res.send("Successfully updated"))
    .catch((err) => console.log(err))
}

const delete_App = async (req, res) => {
    const {_id} = req.body
    modelsapp
    .findByIdAndDelete(_id)
    .then(()=> res.send("Successfully deleted"))
    .catch((err) => console.log(err))
}


// Login function
const login = async (req, res) => {
    const { username, password } = req.body

    try {
        // Check if the user exists
        const user = await User.findOne({ username })
        if (!user) {
            return res.status(400).json({ message: 'Invalid username or password' })
        }

        // Check if the password is correct
        const isPasswordValid = await bcrypt.compare(password, user.password) // Corrected line
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid username or password' })
        }

        // Create a JWT token
        const token = jwt.sign({ id: user._id, username: user.username }, 'your_jwt_secret_key', { expiresIn: '1h' })

        // Respond with the token
        res.json({ token })
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' })
    }
}

module.exports = { get_App, save_App, update_App, delete_App, login }
