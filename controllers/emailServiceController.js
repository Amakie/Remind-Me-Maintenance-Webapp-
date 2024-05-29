const cron = require('node-cron');
const { MaintenanceRecord } = require('../models/maintenanceRecord');
const { User } = require('../models/user');
const { sendEmail } = require('./controllerEmail');
const moment = require('moment-timezone');
require('dotenv').config();


function startScheduler() {
    cron.schedule('*/1 * * * *', async () => {
        try {
        const users = await User.find();
    
        for (const user of users) {
            const userLocalTime = moment().tz(user.timeZone);
            const currentHour = userLocalTime.hour();
            const currentMinute = userLocalTime.minute();
    
            if (currentHour === 0o7 && currentMinute === 0o0) {
            const startOfDay = userLocalTime.startOf('day').toDate();
            const endOfDay = userLocalTime.endOf('day').toDate();
    
            const dueMaintenanceRecords = await MaintenanceRecord.find({
                user: user._id,
                maintenanceDate: {
                $gte: startOfDay,
                $lt: endOfDay
                }
            });
    
            for (const record of dueMaintenanceRecords) {
                const emailText = `Dear ${user.firstname},\n\nThis is a reminder that the maintenance for your equipment "${record.equipment}" is due today.\n\nDescription: ${record.maintenanceDescription}\n\nBest regards,\nYour Maintenance Team`;
                await sendEmail(user.email, 'Maintenance Reminder', emailText);
                console.log(`Sent reminder to ${user.email} for equipment ${record.equipment}`);
            }
            }
        }
        } catch (error) {
            console.error('Error in scheduled task:', error);
        }
    });
}
module.exports = { startScheduler };