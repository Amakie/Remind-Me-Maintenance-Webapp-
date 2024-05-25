const Record = require('../models/records');

module.exports.get_Records = async (req, res) => {
  try {
    const records = await Record.find();
    res.send(records);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message, msg: "Something went wrong!" });
  }
};

module.exports.save_Record = async (req, res) => {
  const { Equipment, MaintenanceDate, MaintenanceDescription } = req.body;

  try {
    const newRecord = await Record.create({ Equipment, MaintenanceDate, MaintenanceDescription });
    console.log("Saved Successfully...");
    res.status(201).send(newRecord);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message, msg: "Something went wrong!" });
  }
};

module.exports.update_Record = async (req, res) => {
  const { id } = req.params;
  const { Equipment, MaintenanceDate, MaintenanceDescription } = req.body;

  try {
    await Record.findByIdAndUpdate(id, { Equipment, MaintenanceDate, MaintenanceDescription });
    res.send("Updated Successfully....");
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message, msg: "Something went wrong!" });
  }
};

module.exports.delete_Record = async (req, res) => {
  const { id } = req.params;

  try {
    await Record.findByIdAndDelete(id);
    res.send("Deleted Successfully....");
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message, msg: "Something went wrong!" });
  }
};
