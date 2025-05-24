import React, { useState } from "react";
import axios from "axios";

const AddHabit: React.FC = () => {
  const [habitName, setHabitName] = useState("");
  const [description, setDescription] = useState("");
  const [frequency, setFrequency] = useState("daily");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting habit:", { habitName, description, frequency }); // Debug log

    try {
      await axios.post("/api/habits", {
        name: habitName,
        description: description,
        frequency: frequency,
      });
      alert("Habit added successfully!");
      setHabitName("");
      setDescription("");
      setFrequency("daily");
    } catch (err) {
      console.error("Error adding habit:", err);
      alert("Failed to add habit. Please try again.");
    }
  };

  return (
    <div className="add-habit">
      <h2>Add New Habit</h2>
      <form onSubmit={handleSubmit} className="bg-amber-300">
        <div>
          <label htmlFor="habitName">Habit Name:</label>
          <input
            type="text"
            id="habitName"
            value={habitName}
            onChange={(e) => setHabitName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="frequency">Frequency:</label>
          <select
            id="frequency"
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
        <button type="submit">Add Habit</button>
      </form>
    </div>
  );
};

export default AddHabit;
