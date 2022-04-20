import "./App.css";
import Begin from "./components/Begin/Begin";
import JoinClass from "./components/JoinClass/JoinClass";
import React from "react";
import { Routes, Route } from "react-router-dom";
import ClassManager from "./components/ClassManager/ClassManager";
import Login from "./components/Login/Login";
import Formulario from "./components/Formulario/Formulario";
import Register from "./components/Register/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ClassManager />} />
        <Route path="/joinclass" element={<JoinClass />} />
        <Route path="/begin" element={<Begin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
