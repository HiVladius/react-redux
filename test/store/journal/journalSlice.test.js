import { expect, describe, expect, vi, test } from "vitest";
import { addNewEmptyNote } from "../../../src/store/journal/journalSlice";

describe("prueba para journalSlice", () => {
  test("debe de agregar una nueva nota", () => {
    const note = { title: "nueva nota", body: "cuerpo de la nota" };
    const state = addNewEmptyNote({ notes: [] }, { payload: note });
    console.log(state);
    expect(state.type).toBe("journal/addNewEmptyNote");
  });
});
