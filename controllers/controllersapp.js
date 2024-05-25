const modelsapp = require('../models/modelsapp')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/modelsapp')
const App = require('../models/modelsapp')
const { application } = require('express')

/*const get_App = async (req, res) => {
    const _App = modelsapp.find()
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

const register = async (req, res) => {
    User.create(req.body)
    .then(_User => res.json(_User))
    .catch(err => res.json(err))
}*/


/*// Login function
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

module.exports = { get_App, save_App, update_App, delete_App, register }*/


module.exports.get_Apps = async (req, res) => {
  const _Apps = await modelsapp.find()
  res.send(_Apps)
}

module.exports.save_App = (req, res) => {
  const { _App } = req.body

  modelsapp.create({ _App })
    .then((data) => {
      console.log("Saved Successfully...")
      res.status(201).send(data)
    })
    .catch((err) => {
      console.log(err)
      res.send({ error: err, msg: "Something went wrong!" })
    })
}

module.exports.update_App = (req, res) => {
  const { id } = req.params
  const { _App } = req.body

  modelsapp.findByIdAndUpdate(id, { _App })
    .then(() => {
      res.send("Updated Successfully....")
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!" })
    })
}

module.exports.delete_App = (req, res) => {
  const { id } = req.params

  modelsapp.findByIdAndDelete(id)
    .then(() => {
      res.send("Deleted Successfully....")
    })
    .catch((err) => {
      console.log(err)
      res.send({ error: err, msg: "Something went wrong!" })
    })
}

app.post('/register', (req, res) => {
    User.create(req.body)
    .then(_User => res.json(_User))
    .catch(err => res.json(err))
})


module.exports.login = (req, res) => {
    const { email, password } = req.body

    try {
        // Check if the user exists
        const app = App.findOne({ email })
        if (!app) {
            return res.status(400).json({ message: 'Invalid email or password' })
        }

        // Check if the password is correct
        const isPasswordValid = bcrypt.compare(password, app.password) // Corrected line
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid username or password' })
        }

        // Create a JWT token
        const token = jwt.sign({ id: app._id, email: app.email }, 'your_jwt_secret_key', { expiresIn: '6h' })

        // Respond with the token
        res.json({ token })
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' })
    }
}

module.exports.logout = (req, res) => {
    // On the client side, the token should be removed from localStorage or cookies
    res.json({ message: 'Logout successful' });
}
