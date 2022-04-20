import React from "react";
import "./ClassManager.css";
import { useNavigate } from "react-router-dom";

const ClassManager = () => {
  let navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };
  // let navigate = useNavigate();
  // const handleLogout = () => {
  //   console.log("logout");
  //   navigate("/");

  return (
    <div className="home">
      <h1>ClassManager</h1>
      <div className="home__container">
        <img
          className="home__login"
          src="https://upload.wikimedia.org/wikipedia/commons/5/59/Google_Classroom_Logo.png"
          alt="Google Classroom"
        />
        <button class="home__login" onClick={handleLogin}>
          Iniciar Sesión!
        </button>
        <div class="home__actionContainer">
          <p>Aún no tienes una cuenta? </p>
          <p class="home__action" onClick={handleRegister}>
            {" "}
            Regístrate!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClassManager;
