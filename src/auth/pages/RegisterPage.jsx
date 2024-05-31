import { Google } from "@mui/icons-material";
import { Grid, Typography, TextField, Button, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <>
      <AuthLayout title="Register ⚒️ ">
        <form action="">
          <Grid container>
            {/* Aquí van los campos de texto */}

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Nombre completo"
                type="text"
                placeholder="Ej. Juan Pérez"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Correo"
                type="email"
                placeholder="correo@correo.com"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sx={{ mt: 4 }}>
              <TextField
                label="Contraseña"
                type="password"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Verifica tu contraseña"
                type="password"
                variant="outlined"
                fullWidth
              />
            </Grid>

            {/*  Aquí va el botón de crear una cuenta */}
            <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
              <Grid item xs={12}>
                <Button variant="contained" fullWidth>
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
