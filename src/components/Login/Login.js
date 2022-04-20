import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  let navigate = useNavigate();
  const handleCancel = () => {
    navigate("/");
  };
  return (
    <div className="home">
      <h1 className="form__title"> Login de Usuario </h1>
      <div className="home__container">
        <form>
          <div>
            <div className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
              <label
                className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated"
                data-shrink="false"
              >
                Email
              </label>

              <div className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-fullWidth MuiInput-fullWidth MuiInputBase-formControl MuiInput-formControl" />
              <input
                aria-invalid="false"
                name="email"
                placeholder="Email"
                type="text"
                className="MuiInputBase-input MuiInput-input"
                value=""
              />
            </div>

            <div className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
              <label
                className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated"
                data-shrink="false"
              >
                Contraseña
              </label>

              <div className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-fullWidth MuiInput-fullWidth MuiInputBase-formControl MuiInput-formControl">
                <input
                  aria-invalid="false"
                  name="password"
                  placeholder="Contraseña"
                  type="password"
                  className="MuiInputBase-input MuiInput-input"
                  value=""
                />
              </div>
            </div>
          </div>
          <button type="button" disabled="" className="home__login">
            Ingresar
          </button>
          <p className="form__action" onClick={handleCancel}>
            Cancelar
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
