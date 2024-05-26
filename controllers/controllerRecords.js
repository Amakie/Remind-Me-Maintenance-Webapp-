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
  const { Equipment, MaintenanceDate, MaintenanceDescription } = req.body;

  try {
    await MaintenanceRecord.findByIdAndUpdate(id, { Equipment, MaintenanceDate, MaintenanceDescription });
    res.send("Updated Successfully....");
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message, msg: "Something went wrong!" });
  }
};

const deleteRecord = async (req, res) => {
  const { id } = req.params;

  try {
    await MaintenanceRecord.findByIdAndDelete(id);
    res.send("Deleted Successfully....");
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message, msg: "Something went wrong!" });
  }
};

module.exports = { getRecords, updateRecord, deleteRecord };