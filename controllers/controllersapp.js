const modelsapp = require('../models/modelsapp')

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
