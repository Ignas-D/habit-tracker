require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const habitRoutes = require("./routes/habits");

const app = express();
const PORT = process.env.PORT || 5173;

// Middleware
app.use(cors());
app.use(express.json()); // Parses incoming JSON

// Health check route
app.get("/", (req, res) => {
  res.send("Habit Tracker API is running");
});

// Routes
app.use("/api/habits", habitRoutes);

// MongoDB connection and server start
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`✅ Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  }
};

startServer();
