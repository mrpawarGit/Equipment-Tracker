const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const app = express();
const equipmentRoutes = require("./routes/equipmentRoutes");

// Connect to DB
connectDB();

// cors - all origins
app.use(cors());

// Midlleware
app.use(express.json());

// Routes
app.use("/api/equipment", equipmentRoutes);

// API status
app.get("/", (req, res) => {
  res.status(200).json({ msg: "Equipment Tracker API Is Live" });
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// server start
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
