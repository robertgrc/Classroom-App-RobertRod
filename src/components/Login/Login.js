import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../auth/authContext";
import { types } from "../types/types";
import "./Login.css";

const initialForm = {
  email: "",
  password: "",
};

const validationsForm = (form) => {
  let errors = {};
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexPassword = /^.{4,12}$/; // 4 a 12 digitos.

  if (!form.email.trim()) {
    errors.email = "El campo 'Email' es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo 'Email' es incorrecto";
  }

  if (!form.password.trim()) {
    errors.password = "El campo 'password' es requerido";
  } else if (!regexPassword.test(form.password.trim())) {
    errors.password =
      "El campo 'Password' es incorrecto, introduce de 4 a 12 digitos";
  }

  return errors;
};

const Login = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  let navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    const action = {
      type: types.login,
      payload: { name: "camilita" },
    };
    dispatch(action);
    navigate("/begin", { replace: true });
    console.log("loginsubmit");
  };

  const handleCancel = () => {
    navigate("/", { replace: true });
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
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.email}
                required
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <div className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
              <label
                className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated"
                data-shrink="false"
              >
                Contrase??a
              </label>

              <div className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-fullWidth MuiInput-fullWidth MuiInputBase-formControl MuiInput-formControl">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.password}
                  required
                />
                {errors.password && <p className="error">{errors.password}</p>}
              </div>
            </div>
          </div>
          <button
            type="button"
            disabled=""
            className="home__login"
            onClick={handleLogin}
          >
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

{
  /* <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.email}
          required
        />
        {errors.email && <p className="error">{errors.email}</p>}
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.password}
          required
        />
        {errors.password && <p className="error">{errors.password}</p>} */
}
