import "./App.css";
import Begin from "./components/Begin/Begin";
import JoinClass from "./components/JoinClass/JoinClass";
import React from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Begin />} />
        <Route path="/joinclass" element={<JoinClass />} />
      </Routes>
    </div>
  );
}

export default App;
