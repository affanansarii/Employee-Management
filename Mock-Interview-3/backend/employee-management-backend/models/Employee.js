const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  salary: { type: Number, required: true },
});

module.exports = mongoose.model("Employeeee", EmployeeSchema);
