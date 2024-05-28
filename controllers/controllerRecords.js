// Functions for handling Maintenance Record data on Data base
const { MaintenanceRecord } = require('../models/maintenanceRecord');


const createMaintenanceData = async (req, res) => {
  const { equipment, maintenanceDate, maintenanceDescription } = req.body;

  if (!equipment || !maintenanceDate || !maintenanceDescription) {
      return res.status(400).json({ message: 'All fields are required' });
  }

  try {
      const maintenanceRecord = new MaintenanceRecord({
          equipment,
          maintenanceDate: new Date(maintenanceDate),
          maintenanceDescription,
          user: req.user.id
      });
      await maintenanceRecord.save();
      res.status(201).json({ message: 'Maintenance Reminder Created successfully' });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
  }
};


const getMaintenanceData = async (req, res) => {
  try {
      const maintenanceData = await MaintenanceRecord.find({ user: req.user.id });
      res.json(maintenanceData);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
  }

}


const updateRecord = async (req, res) => {
    const { id } = req.params;
    const { equipment, maintenanceDate, maintenanceDescription } = req.body;
    console.log("put request received for ID:", id); 


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
  console.log("Delete request received for ID:", id); 

  try {
    const deletedRecord = await MaintenanceRecord.findByIdAndDelete(id);
    if (!deletedRecord) {
      console.log(`Record with ID ${id} not found`);
      return res.status(404).json({ error: `Record with ID ${id} not found` });
    }
    res.json({ message: "Deleted Successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message, msg: "Something went wrong!" });
  }
};



module.exports = { updateRecord, deleteRecord, createMaintenanceData, getMaintenanceData };