const express = require("express");
const router = express.Router();
const { getHabits, createHabit } = require("../controllers/Habit");

// GET /api/habits
router.get("/", getHabits);

// POST /api/habits
router.post("/", createHabit);

module.exports = router;
