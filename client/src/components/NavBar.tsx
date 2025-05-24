import React from "react";
import { Link } from "react-router-dom";
{
  /* make look not so awful*/
}
const NavBar: React.FC = () => {
  return (
    <nav className="flex flex-row items-center bg-amber-400 p-2">
      <div className="flex items-center ml-5">
        <Link to="/" className="text-3xl">
          HabitTracker
        </Link>
      </div>
      <div className="flex ml-auto">
        <ul className="flex mr-10">
          <li>
            <Link to="/habits" className="text-2xl mr-6">
              Habit List
            </Link>
          </li>
          <li>
            <Link to="/add" className="text-2xl mr-6">
              Add Habit
            </Link>
          </li>
          <li>
            <Link to="/login" className="text-2xl">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
