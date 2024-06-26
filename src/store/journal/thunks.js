import { collection, setDoc, doc, deleteDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import {
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  noteUpdate,
  setPhotosToActiveNote,
  deleteNoteById,
} from "./";
import { fileUpload, loadNotes } from "../../helpers";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));

    await setDoc(newDoc, newNote);

    newNote.id = newDoc.id;

    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));
  };
};

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    if (!uid) throw new Error("El uid no existe");

    const notes = await loadNotes(uid);

    dispatch(setNotes(notes));
  };
};

export const startSaveNote = () => {
  return async (dispatch, getState) => {
    dispatch(setSaving());

    const { uid } = getState().auth;
    const { active: note } = getState().journal;

    const noteToFirestore = { ...note };
    delete noteToFirestore.id;

    const noteRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);

    await setDoc(noteRef, noteToFirestore, { merge: true });

    dispatch(noteUpdate(note));
  };
};

export const startUploadingImage = (file = []) => {
  return async (dispatch) => {
    dispatch(setSaving());

    // await fileUpload(file[0])

    const fileUploadPromise = [];
    for (const fileItem of file) {
      fileUploadPromise.push(fileUpload(fileItem));
    }

    const photoUrls = await Promise.all(fileUploadPromise);
    // console.log(photoUrls);

    dispatch(setPhotosToActiveNote(photoUrls));
  };
};

export const startDeleteNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const { active: note } = getState().journal;

    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
    await deleteDoc(docRef);

    dispatch(deleteNoteById(note.id));
  };
};
