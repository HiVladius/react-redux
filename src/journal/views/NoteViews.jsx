import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid, Snackbar, TextField, Typography } from "@mui/material";
import { SaveOutlined } from "@mui/icons-material";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css';

import { useForm } from "../../hooks";
import { ImageGalery } from "../components/ImageGalery";
import { setActiveNote, startSaveNote } from "../../store/journal";




export const NoteViews = () => {
  const dispatch = useDispatch();

  const { active: note, messageSave, isSaving } = useSelector((state) => state.journal);

  const { body, title, date, onInputChange, formState } = useForm(note);

  const dataString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString("es-ES", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    });
  }, [date]);

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  useEffect(() => {
    if (messageSave.length > 0) {
      Swal.fire({
        title: "Nota actualizada!",
        text: messageSave,
        icon: "success",
        showConfirmButton: true,
        timer: 5000,
      });
    }
  }, [messageSave]);

  const onSaveNote = () => {
    dispatch(startSaveNote());
  };

  return (
    <Grid
      className="animate__animated animate__fadeIn animate__faster"
      container
      direction={"row"}
      justifyContent={"space-between"}
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography
          fontSize={dataString.length > 10 ? 20 : 40}
          fontWeight="light"
          // component={dataString.length > 10 ? "h6" : "h3"} // Add component prop
        >
          {dataString}
        </Typography>
      </Grid>

      <Grid item>
        <Button disable={isSaving} onClick={onSaveNote} color="secondary" sx={{ padding: 2 }}>
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
          name="title"
          value={title}
          onChange={onInputChange}
        />

        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="Que hay de nuevo hoy?"
          minRows={5}
          name="body"
          value={body}
          onChange={onInputChange}
        />
      </Grid>

      <ImageGalery />
    </Grid>
  );
};
