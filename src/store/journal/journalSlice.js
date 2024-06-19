import { createSlice } from "@reduxjs/toolkit";


export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: false,
    messageSave: "",
    notes: [],
    active: null,
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

    setSaving: (state) => {},

    updateNote: (state, action) => {},

    deleteNote: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const {
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNote,
  savingNewNote,
} = journalSlice.actions;
