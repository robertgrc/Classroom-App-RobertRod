import { Avatar, Button, Link, TextField } from "@material-ui/core";
import { Close } from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./JoinClass.css";

const JoinClass = () => {
  let navigate = useNavigate();
  const handleLogout = () => {
    console.log("logout");
    navigate("/");
  };

  return (
    <div>
      <div className="joinClass">
        <div className="joinClass__wrapper">
          <div className="joinClass__wraper2">
            <Close className="joinClass__svg" />
            <div className="joinClass__topHead">Unirse a una clase</div>
          </div>
          <Button
            className="joinClass__btn"
            variant="contained"
            color="primary"
          >
            Join
          </Button>
        </div>
        <div className="joinClass__form">
          <p className="joinClass__formText">Has iniciado sesión como</p>
          <div className="joinClass__loginInfo">
            <div className="joinClass__classLeft">
              <Avatar />
              <div className="joinClass__loginText">
                <div className="joinClass__loginName"></div>
                <div className="joinClass__loginEmail"></div>
              </div>
            </div>
            <Button variant="outlined" color="primary" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>
        <div className="joinClass__form">
          <div
            style={{ fontSize: "1.25rem", color: "#3c4043" }}
            className="joinClass__formText"
          >
            Código de clase
          </div>
          <div
            style={{ color: "#3c4043", marginTop: "-5px" }}
            className="joinClass__formText"
          >
            Pídele a tu profesor el código de clase e introdúcelo aquí.
          </div>
          <div className="joinClass__loginInfo">
            <TextField
              id="outlined-basic"
              label="Código de clase"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="correo electrónico"
              variant="outlined"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinClass;
