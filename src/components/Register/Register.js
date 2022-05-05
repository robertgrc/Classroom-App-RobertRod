import {
  Button,
  Card,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@material-ui/core";
import { CardContent } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const expresiones = {
  usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  password: /^.{4,12}$/, // 4 a 12 digitos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{7,14}$/, // 7 a 14 numeros.
};

const Register = () => {
  let navigate = useNavigate();
  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className="register_container">
      <Typography gutterBottom variant="h3" align="center">
        <h3>Registrar Usuario</h3>
      </Typography>
      <Card>
        <CardContent>
          <Grid container spacing={1}>
            <Grid xs={12}>
              <TextField
                type="text"
                label="Nombre"
                placeholder="Ingresa tu Nombre"
                variant="filled"
                fullWidth
                required
                expresionRegular={expresiones.nombre}
                leyendaError="El nombre solo puede contener letras, acentos y espacios"
              />
            </Grid>
            <Grid xs={12}>
              <TextField
                label="Apellido"
                placeholder="Ingresa tu Apellido"
                variant="filled"
                fullWidth
                required
              />
            </Grid>

            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Genero</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="mujer"
                  control={<Radio />}
                  label="Mujer"
                />
                <FormControlLabel
                  value="hombre"
                  control={<Radio />}
                  label="Hombre"
                />
              </RadioGroup>
            </FormControl>

            <Grid xs={12}>
              <TextField
                label="Email"
                placeholder="Ingresa tu Email"
                variant="filled"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12}>
              <TextField
                label="Password"
                placeholder="Ingresa tu contraseña"
                variant="filled"
                fullWidth
                required
              />
              <Button variant="contained" color="primary" type="submit">
                Enviar
              </Button>
              <Button variant="text" onClick={handleCancel}>
                Cancelar
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
