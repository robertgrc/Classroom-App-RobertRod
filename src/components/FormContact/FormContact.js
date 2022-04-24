import React from "react";
import { useForm } from "../../hooks/useForm";
import "./formContact.css";

const initialForm = {
  name: "",
  apellido: "",
  email: "",
  password: "",
  phone: "",
};

// const expresiones = {
//   usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
//   name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
//   password: /^.{4,12}$/, // 4 a 12 digitos.
//   correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
//   telefono: /^\d{7,14}$/, // 7 a 14 numeros.
// };

const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexApellido = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexPassword = /^.{4,12}$/; // 4 a 12 digitos.
  let regexPhone = /^\d{7,14}$/; // 7 a 14 numeros.

  if (!form.name.trim()) {
    errors.name = "El campo 'Nombre' es requerido";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El campo 'Nombre' sólo acepta letras y espacios en blanco";
  }

  if (!form.apellido.trim()) {
    errors.apellido = "El campo 'Apellido' es requerido";
  } else if (!regexApellido.test(form.apellido.trim())) {
    errors.apellido =
      "El campo 'Apellido' sólo acepta letras y espacios en blanco";
  }

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

  if (!form.phone.trim()) {
    errors.phone = "El campo 'telefono' es requerido";
  } else if (!regexPhone.test(form.phone.trim())) {
    errors.phone =
      "El campo 'Phone' es incorrecto, introduce de 7 a 12 digitos";
  }

  return errors;
};

const FormContact = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <div className="container__form">
      <h1>Registrar Usuario</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.name}
          required
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <input
          type="text"
          name="apellido"
          placeholder="Apellido"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.apellido}
          required
        />
        {errors.apellido && <p className="error">{errors.apellido}</p>}
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
        <input
          type="number"
          name="phone"
          placeholder="Telefono"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.phone}
          required
        />
        {errors.phone && <p className="error">{errors.phone}</p>}
        <input
          type="date"
          name="fecha"
          placeholder="Fecha de Nacimiento"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.fecha}
          required
        />
        {errors.fecha && <p className="error">{errors.fecha}</p>}
        <button type="submit" value="Enviar">
          Enviar
        </button>
        <button>Cancelar</button>
      </form>
    </div>
  );
};

export default FormContact;
