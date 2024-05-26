const { MaintenanceRecord } = require('../models/user');

const getRecords = async (req, res) => {
  try {
    const records = await MaintenanceRecord.find();
    res.send(records);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message, msg: "Something went wrong!" });
  }
};


const updateRecord = async (req, res) => {
    const { id } = req.params;
    const { equipment, maintenanceDate, maintenanceDescription } = req.body;
    console.log("put request received for ID:", id); // Debugging step


    try {
        const updatedReminder = await MaintenanceRecord.findByIdAndUpdate(
            id,
            { equipment, maintenanceDate, maintenanceDescription },
            { new: true }
        );

        if (!updatedReminder) {
            return res.status(404).json({ error: 'Reminder not found' });
        }

        res.json(updatedReminder);
    } catch (error) {
        console.error('Error updating reminder:', error);
        res.status(500).json({ error: 'Failed to update reminder' });
    }
};

const deleteRecord = async (req, res) => {
  const { id } = req.params;
  console.log("Delete request received for ID:", id); // Debugging step

  try {
    const deletedRecord = await MaintenanceRecord.findByIdAndDelete(id);
    if (!deletedRecord) {
      console.log(`Record with ID ${id} not found`); // Debugging step
      return res.status(404).json({ error: `Record with ID ${id} not found` });
    }
    res.json({ message: "Deleted Successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message, msg: "Something went wrong!" });
  }
};



module.exports = { updateRecord, deleteRecord };