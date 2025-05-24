import React from "react";
import axios from "axios";

interface Habit {
  id: number;
  name: string;
  completed: boolean;
}

interface HabitListProps {
  habits: Habit[];
  onToggleHabit: (id: number) => void;
}

const HabitList: React.FC<HabitListProps> = ({ habits, onToggleHabit }) => {
  return (
    <div>
      <h2>Habit List</h2>
      <ul>
        {habits.map((habit) => (
          <li key={habit.id}>
            <label>
              <input
                type="checkbox"
                checked={habit.completed}
                onChange={() => onToggleHabit(habit.id)}
              />
              {habit.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HabitList;
