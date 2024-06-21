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
    savingNewNote: (state) => {
      state.isSaving = true;
    },

    addNewEmptyNote: (state, action) => {
      state.notes = [...state.notes, action.payload];
      state.isSaving = false;
    },

    setActiveNote: (state, action) => {
      state.active = action.payload;
      state.messageSave = "";
    },

    setNotes: (state, action) => {
      state.notes = action.payload;
    },

    setSaving: (state) => {
      state.isSaving = true;
      state.messageSave = "";
    },

    noteUpdate: (state, action) => {
      state.isSaving = false;
      state.notes = state.notes.map((note) =>
        note.id === action.payload.id ? action.payload : note
      );

      state.messageSave = `${action.payload.title} ha sido actualizado`;
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
