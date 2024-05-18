const express = require("express");
const Employee = require("./models/Employee");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const employess = await Employee.find();
    res.json(employess);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/", async (req, res) => {
  const { firstName, lastName, email, salary } = req.body;

  try {
    const employee = new Employee({ firstName, lastName, email, salary });
    await employee.save();
    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ message: "Error creating employee" });
  }
});

router.put("/:id", async (req, res) => {
  const { firstName, lastName, email, salary } = req.body;

  try {
    const employee = await Employee.findByIdAndUpdate(
      req.params.id,
      { firstName, lastName, email, salary },
      { new: true }
    );
    res.json(employee);
  } catch (error) {
    res.status(400).json({ message: "Error updating employee" });
  }
});

router.delete("/:id", async (req, res) => {
  const { firstName, lastName, email, salary } = req.body;

  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({ message: "Employee deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
