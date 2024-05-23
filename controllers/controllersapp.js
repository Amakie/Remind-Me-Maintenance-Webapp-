const modelsapp = require('../models/modelsapp')
const bcrypt = require('bycrypt')
const jwt = require('jsonwebtoken')

module.exports.get_App = async (req, res) => {
    const _App = await modelsapp.find()
    res.send(_App)
}

module.exports.save_App = async (req, res) => {
    const {text} = req.body

    modelsapp
    .create({ text })
    .then((data) => {
        console.log("Added successfully ...");
        console.log(data);
        res.send(data)
    })
}

module.exports.update_App = async (req, res) => {
    const {_id, text} = req.body
    modelsapp
    .findByIdAndUpdate(_id, {text})
    .then(()=> res.send("Successfully updated"))
    .catch((err) => console.log(err))
}

module.exports.delete_App = async (req, res) => {
    const {_id} = req.body
    modelsapp
    .findByIdAndDelete(_id)
    .then(()=> res.send("Successfully deleted"))
    .catch((err) => console.log(err))
}

// login function
const login = async (req, res) => {
    const { username, password } = req.body
}

    // check is user exists
    const user = userModel.findUserByUsername(username)
    if (!user) {
        return res.status(400).json({ message: 'Invalid username or password' })
    }



    // authenticate password
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPassword) {
        return res.status(400).json({ message: "Invalid username or password" })
    }

    // create jwt token
    const token = jwt.sign({ id: user.id, username: user.name}, "your_jwt_secret_key", { expiresIn: "1hr" })

    // respond with token
    res.json({ token })

module.exports = { login }


