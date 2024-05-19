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