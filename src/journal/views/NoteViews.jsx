import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { ImageGalery } from "../components/ImageGalery";

const hoy = new Date();
const fecha = hoy.setMonth(hoy.getMonth() + 1);

export const NoteViews = () => {
  return (
    <Grid
      className="animate__animated animate__fadeIn animate__faster"
      container
      direction={"row"}
      justifyContent={"space-between"}
      sx={{ mb: 1 }}
    >
      <Typography fontSize={39} fontWeight={"light"}>
        Notas
      </Typography>

      <Grid item>
        <Button color="secondary" sx={{ padding: 2 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          label="Título de la nota"
          placeholder="Ingrese el título de la nota"
          sx={{ mb: 1, border: "none" }}
        />

        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="Que hay de nuevo hoy?"
          minRows={5}
        />
      </Grid>

      <ImageGalery />
    </Grid>
  );
};
