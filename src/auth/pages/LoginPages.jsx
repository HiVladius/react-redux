import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Google } from "@mui/icons-material";
import {
  Grid,
  Typography,
  TextField,
  Button,
  Link,
  Alert,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";

import { useForm } from "../../hooks/useForm";
import {
  startGoogleSignIn,
  startLoginWhitEmailPassword,
} from "../../store/auth";

const formData = {
  email: "",
  password: "",
};

export const LoginPages = () => {
  const { status, errorMessage } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const { email, password, onInputChange } = useForm(formData);

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(startLoginWhitEmailPassword({ email, password }));
  };

  const onGoogleSignIn = () => {
    console.log('onGoogleSignIn');
    dispatch(startGoogleSignIn());
  };

  return (
    <>
      <AuthLayout title="Login✍️ ">
        <form
          onSubmit={onSubmit}
          className="animate__animated animate__fadeIn animate__faster"
        >
          <Grid container>
            {/* Aquí van los campos de texto */}

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Correo"
                type="email"
                variant="outlined"
                placeholder="corre@correo.com"
                fullWidth
                name="email"
                value={email}
                onChange={onInputChange}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Contraseña"
                type="password"
                variant="outlined"
                fullWidth
                name="password"
                value={password}
                onChange={onInputChange}
              />
            </Grid>

            <Grid
              item
              xs={12}
              display={!!errorMessage ? "" : "none"}
              sx={{ mb: 2, mt: 1 }}
            >
              <Alert severity="error"> {errorMessage} </Alert>
            </Grid>

            {/*  Aquí va el botón de login y register */}
            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={12} sm={6}>
                <Button
                  disabled={isAuthenticating}
                  type="submit"
                  variant="contained"
                  fullWidth
                >
                  Login
                </Button>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Button
                  disabled={isAuthenticating ? true : undefined}
                  onClick={onGoogleSignIn}
                  data-testid="google-button"
                  variant="contained"
                  fullWidth
                >
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
                No tienes cuenta?
              </Link>
            </Grid>
          </Grid>
        </form>
        <Typography variant="caption" sx={{ mt: 2 }}></Typography>
      </AuthLayout>
    </>
  );
};
