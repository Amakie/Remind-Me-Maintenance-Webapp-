const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MaintenanceRecordSchema = new Schema({
    equipment: { type: String, required: true },
    maintenanceDate: { type: Date, required: true },
    maintenanceDescription: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

const MaintenanceRecord = mongoose.model('MaintenanceRecord', MaintenanceRecordSchema);

module.exports = { MaintenanceRecord };