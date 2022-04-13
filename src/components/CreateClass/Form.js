import { TextField } from "@material-ui/core";

import React from "react";
import "./style.css";

const Form = () => {
  return (
    <div className="form">
      <p className="class__title">Crear una Clase</p>

      <div className="form__inputs">
        <TextField
          id="filled-basic"
          label="Nombre de la clase (obligatorio)"
          className="form__input"
          variant="filled"
        />
        <TextField
          id="filled-basic"
          label="Sección"
          className="form__input"
          variant="filled"
        />
        <TextField
          id="filled-basic"
          label="Asignatura"
          className="form__input"
          variant="filled"
        />
        <TextField
          id="filled-basic"
          label="Sala"
          className="form__input"
          variant="filled"
        />
      </div>
    </div>
  );
};

export default Form;
