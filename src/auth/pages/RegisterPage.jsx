import { useState } from "react";
import { useDispatch } from "react-redux";
import { Grid, Typography, TextField, Button, Link } from "@mui/material";

import { Link as RouterLink } from "react-router-dom";

import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { startCreatingWithEmailPassword } from "../../store/auth/thunks";

const formData = {
  name: "Tu nombre completo",
  email: "correo@correo.com",
  password: "123456",
  samePassword: "123456",
  displayName: "Tu nombre completo",
};

const formValidations = {
  email: [(value) => value.includes("@"), 'El correo debe tener un "@"'],
  password: [
    (value) => value.length >= 6,
    "La contraseña debe tener al menos 6 caracteres",
  ],
  samePassword: [
    (value) => value === formData.password,
    "Las contraseñas no coinciden",
  ],
  displayName: [(value) => value.trim().length > 0, "El nombre es obligatorio"],
};

export const RegisterPage = () => {
  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    formState,
    name,
    email,
    password,
    samePassword,
    displayName,
    onInputChange,
    onResetForm,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
    samePasswordValid,
  } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();

    setFormSubmitted(true);
    if (!isFormValid) return;

    dispatch(startCreatingWithEmailPassword(formState));
  };

  return (
    <>
      <AuthLayout title="Register ⚒️ ">
        <h1>FormValid {isFormValid ? "Valido" : "Incorrecto"} </h1>
        <form onSubmit={onSubmit}>
          <Grid container>
            {/* Aquí van los campos de texto */}

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Nombre completo"
                type="text"
                placeholder="Ej. Juan Pérez"
                fullWidth
                name="displayName"
                value={displayName}
                onChange={onInputChange}
                error={!!displayNameValid && formSubmitted}
                helperText={displayNameValid}
              />
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Correo"
                type="email"
                placeholder="correo@correo.com"
                fullWidth
                name="email"
                value={email}
                onChange={onInputChange}
                error={!!emailValid && formSubmitted}
                helperText={emailValid}
              />
            </Grid>

            <Grid item xs={12} sx={{ mt: 4 }}>
              <TextField
                label="Contraseña"
                type="password"
                variant="outlined"
                fullWidth
                name="password"
                value={password}
                onChange={onInputChange}
                error={!!passwordValid && formSubmitted}
                helperText={passwordValid}
              />
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Verifica tu contraseña"
                type="password"
                variant="outlined"
                fullWidth
                name="samePassword"
                value={samePassword}
                onChange={onInputChange}
                error={!!samePasswordValid && formSubmitted}
                helperText={samePasswordValid}
              />
            </Grid>

            {/*  Aquí va el botón de crear una cuenta */}
            <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" fullWidth>
                   Crear cuenta
                </Button>
              </Grid>
            </Grid>

            <Grid container direction={"row"} justifyContent={"end"}>
              <Typography sx={{ mr: 2 }}>¿Ya tienes cuenta?</Typography>
              <Link
                component={RouterLink}
                to="/auth/login"
                color="inherit"
                sx={{ mt: 2 }}
              >
                Ingresar
              </Link>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
    </>
  );
};
