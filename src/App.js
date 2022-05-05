import "./App.css";
import Begin from "./components/Begin/Begin";
import JoinClass from "./components/JoinClass/JoinClass";
import React, { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import ClassManager from "./components/ClassManager/ClassManager";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import FormContact from "./components/FormContact/FormContact";
import { AuthContext } from "./components/auth/authContext";
import { authReducer } from "./components/auth/authReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
};
function App() {
  const [user, dispatch] = useReducer(authReducer, {}, init);

  return (
    <AuthContext.Provider
      value={{
        user,
        dispatch,
      }}
    >
      <div className="App">
        <Routes>
          <Route path="/" element={<ClassManager />} />
          <Route path="/joinclass" element={<JoinClass />} />
          <Route path="/begin" element={<Begin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/formcontact" element={<FormContact />} />
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
