const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, require: true },
});

const User = mongoose.model('User', UserSchema);

const MaintenanceRecordSchema = new Schema({
    equipment: { type: String, required: true },
    maintenanceDate: { type: String, required: true },
    maintenanceDescription: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

const MaintenanceRecord = mongoose.model('MaintenanceRecord', MaintenanceRecordSchema);

module.exports = { User, MaintenanceRecord };
