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

const validationsForm = (form) => {};

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
        <input
          type="text"
          name="apellido"
          placeholder="Apellido"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.apellido}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.email}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.password}
          required
        />
        <input
          type="number"
          name="phone"
          placeholder="Telefono"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.phone}
          required
        />
        <input
          type="date"
          name="date"
          placeholder="Fecha de Nacimiento"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.date}
          required
        />
      </form>
    </div>
  );
};

export default FormContact;
