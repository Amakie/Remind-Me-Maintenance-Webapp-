const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
  Equipment: {
    type: String,
    required: true
  },
  MaintenanceDate: {
    type: Date,
    required: true
  },
  MaintenanceDescription: {
    type: String,
    required: true
  }
});

const Record = mongoose.model('Record', recordSchema);

module.exports = Record;
