import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Habitlist from "./pages/Habitlist";
import AddHabit from "./pages/AddHabit";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/habits"
            element={
              <Habitlist
                habits={[]}
                onToggleHabit={function (id: number): void {
                  throw new Error("Function not implemented.");
                }}
              />
            }
          />
          <Route path="/add" element={<AddHabit />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
