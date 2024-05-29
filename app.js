const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser'); 
const routes = require('./routes/routesUser');
require('dotenv').config();
const { startScheduler } = require('./controllers/emailServiceController'); // Start the scheduler


const jwtSecret = process.env.JWT_SECRET;
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use((req, res, next) => {
    console.log(`Incoming ${req.method} request to ${req.originalUrl}`);
    next();
});

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch((err) => console.log(err));

app.use('/api', routes); 

app.listen(PORT, () => {
    console.log(`Listening on: ${PORT}`);
    startScheduler();
});
