const Habit = require("../models/Habit");

// GET /api/habits
exports.getHabits = async (req, res) => {
  try {
    const habits = await Habit.find();
    res.json(habits);
  } catch (err) {
    console.error("❌ Failed to get habits:", err.message);
    res.status(500).json({ error: err.message });
  }
};

// POST /api/habits
exports.createHabit = async (req, res) => {
  const { name, description, frequency } = req.body;

  console.log("📥 Incoming habit:", req.body);

  if (!name || !frequency) {
    return res.status(400).json({ error: "Name and frequency are required" });
  }

  try {
    const habit = new Habit({ name, description, frequency });
    await habit.save();
    res.status(201).json(habit);
  } catch (err) {
    console.error("❌ Error saving habit:", err.message);
    res.status(400).json({ error: err.message });
  }
};
