import { Google } from "@mui/icons-material";
import { Grid, Typography, TextField, Button, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPages = () => {
  return (
    <>
      <AuthLayout title="Login✍️ ">
        <form action="">
          <Grid container>
            {/* Aquí van los campos de texto */}

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Correo"
                type="email"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Contraseña"
                type="password"
                variant="outlined"
                fullWidth
              />
            </Grid>

            {/*  Aquí va el botón de login y register */}
            <Grid container spacing={2} sx={{ mb: 2, mt: "2rem" }}>
              <Grid item xs={12} sm={6}>
                <Button variant="contained" fullWidth>
                  Login
                </Button>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Button variant="contained" fullWidth>
                  <Google />
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid>
            </Grid>

            <Grid container direction={"row"} justifyContent={"end"}>
              <Link
                component={RouterLink}
                to="/auth/register"
                color={"inherit"}
                sx={{ mt: 2 }}
              >
                No tienes cuenta? Registrate
              </Link>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
    </>
  );
};
