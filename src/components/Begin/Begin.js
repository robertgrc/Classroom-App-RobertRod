import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React from "react";
import Header from "../Header/Header";
import "./Begin.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Begin = () => {
  const classes = useStyles();

  return (
    <div className="container">
      <Header />
      <div className="begin">
        <div className="container__img">
          <img
            className="center"
            src="https://www.gstatic.com/classroom/empty_states_home.svg"
            alt="imgBegin"
          />
        </div>
      </div>
      <form className={classes.root} noValidate autoComplete="off">
        <span>
          <p className="add__class">Agrega una clase para empezar</p>
        </span>
        <div className="form__textfield">
          <TextField
            className="textfield class1"
            id="standard-basic"
            label="Crear una Clase"
          />
          <TextField
            className="textfield class2"
            id="filled-basic"
            label="Unirse a una Clase"
            variant="filled"
          />
        </div>
      </form>
    </div>
  );
};

export default Begin;
