const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')

const routes = require('./routes/routesapp')

require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())
app.use(bodyParser.json())

mongoose
    .connect(process.env.MONGODB_URL)
    .then(()=> console.log('connected to MongoDB...'))
    .catch((err) => console.log(err))

app.use("/api", routes)

app.listen(PORT, () => console.log('Listening on: ${PORT}'))
