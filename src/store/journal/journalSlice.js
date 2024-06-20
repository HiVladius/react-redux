import { createSlice } from "@reduxjs/toolkit";


export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: false,
    messageSave: "",
    notes: [],
    active: null,
    //active: {
    // imageUrls: [],}
  },

  reducers: {
    //TODO: evitar que se pueda guardar una nota vacia
    savingNewNote: (state) => {
        state.isSaving = true;
    },

    addNewEmptyNote: (state, action) => {
        state.notes = [...state.notes, action.payload];
        state.isSaving = false;
    },

    setActiveNote: (state, action) => {
        state.active = action.payload;
    },

    setNotes: (state, action) => {
        state.notes = action.payload;
    },

    setSaving: (state) => {
        state.isSaving = true;

        //TODO: Agregar un mensaje de error
    },

    noteUpdate: (state, action) => {
      state.isSaving = false;
      state.notes = state.notes.map((note) =>
        note.id === action.payload.id ? action.payload : note
      );

      //TODO: Mostrar mensaje de actualizacion
    },

    deleteNote: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const {
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  noteUpdate,
  deleteNote,
  savingNewNote,
} = journalSlice.actions;
