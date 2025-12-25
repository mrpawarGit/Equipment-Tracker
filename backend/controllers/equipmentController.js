const Equipment = require("../models/EquipmentModel");

// get all equipment
// GET /api/equipment
exports.getAllEquipment = async (req, res) => {
  try {
    const equipment = await Equipment.find().sort({ createdAt: -1 });
    res.status(200).json(equipment);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch equipment" });
  }
};

// add new equipment
// POST /api/equipment
exports.createEquipment = async (req, res) => {
  try {
    const newEquipment = await Equipment.create(req.body);
    res.status(201).json(newEquipment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update equipment by id
// PUT /api/equipment/:id
exports.updateEquipment = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedEquipment = await Equipment.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedEquipment) {
      return res.status(404).json({ message: "Equipment not found" });
    }

    res.status(200).json(updatedEquipment);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Delete equipment by id
// DELETE /api/equipment/:id
exports.deleteEquipment = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedEquipment = await Equipment.findByIdAndDelete(id);

    if (!deletedEquipment) {
      return res.status(404).json({ message: "Equipment not found" });
    }

    res.status(200).json({ message: "Equipment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete equipment" });
  }
};
