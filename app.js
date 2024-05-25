const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const recordRoutes = require('./routes/routesRecords');
const userRoutes = require('./routes/routesUser');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch((err) => console.log(err));

app.use('/api/records', recordRoutes);
app.use('/api/users', userRoutes);

app.listen(PORT, () => console.log(`Listening on: ${PORT}`));
