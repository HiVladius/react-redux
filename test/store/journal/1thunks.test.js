import { expect, describe, expect, vi, test, beforeEach } from "vitest";

import {
  addNewEmptyNote,
  savingNewNote,
  startNewNote,
  setActiveNote,
} from "../../../src/store/journal";

import { collection, getDocs, deleteDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../../src/firebase/config";

const dispatch = vi.fn();
const getState = vi.fn();
beforeEach(() => vi.clearAllMocks());

const emptyNote = {
  body: "",
  title: "",
  id: expect.any(String),
  date: expect.any(Number),
};

describe("prueba en journal thunks", () => {
  test("debe de agregar una nueva nota", async () => {
    const uid = "TESTING-UID";
    getState.mockReturnValue({ auth: { uid: uid } });
    await startNewNote()(dispatch, getState);

    expect(dispatch).toHaveBeenCalled(savingNewNote());
    expect(dispatch).toHaveBeenCalledWith(addNewEmptyNote(emptyNote));
    expect(dispatch).toHaveBeenCalledWith(setActiveNote(emptyNote));

    //! Borrar de firebase para no generar basura

    const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`);

    const docs = await getDocs(collectionRef);
    const deletePromises = [];
    docs.forEach((doc) => deletePromises.push(deleteDoc(doc.ref)));

    await Promise.all(deletePromises);
  });
});
