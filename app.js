const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express();
const PORT = process.env.port || 3000

app.listen(PORT, () => console.log('Listening on port 3000'));