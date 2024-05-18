const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");
const employeeRoutes = require("./routes/employees");
const { authenticateJWT } = require("./middleware/auth");

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api", authRoutes);
app.use("/api/amployees", authenticateJWT, employeeRoutes);

mongoose.connect(
  "mongodb+srv://affanansarii:Safwaan@7@atlascluster.imsn6ck.mongodb.net/",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
    app.listen(8080, () => {
      console.log("Server is running");
    });
  }
);
