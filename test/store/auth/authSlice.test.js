import { describe, test, expect } from "vitest";

import {
  authenticatedState,
  demoUser,
  inicialState,
  notAuthenticatedState,
} from "../../fixtures/authFixtures";
import {
  authSlice,
  login,
  logout,
  errorMessage,
  checkingCredentials,
} from "../../../src/store/auth/";

describe("Pruenbas en el authSlice", () => {
  test('debe de regresar el estado inicial y debe de llamarse "auth"', () => {
    // console.log(authSlice);
    const auth = authSlice.reducer(inicialState, {});
    expect(authSlice.name).toBe("auth");
    expect(auth).toEqual(inicialState);
  });

  test("debe de realizar la autenticacion", () => {
    // console.log(login({ payload: demoUser }));


    const state = authSlice.reducer(inicialState, login(demoUser));
    // console.log(state);
    expect(state).toEqual({
      status: "authenticated",
      uid: demoUser.uid,
      email: demoUser.email,
      displayName: demoUser.displayName,
      photoURL: demoUser.photoURL,
      errorMessage: null,
    });
  });

  test("debe de realizar el logout", () => {
    const state = authSlice.reducer(authenticatedState, logout());
    expect(state).toEqual({
      status: "not-authenticated",
      uid: null,
      email: null,
      displayName: null,
      photoURL: null,
      errorMessage: undefined,
    });
  });

  test("debe de realizar el logout y mostrar un mensaje de error", () => {
    const state = authSlice.reducer(notAuthenticatedState, logout(errorMessage));
    expect(state).toEqual({
      status: "not-authenticated",
      uid: null,
      name: null,
      email: null,
      displayName: null,
      photoURL: null,
      errorMessage: errorMessage,
    });
  });

  test("debe de realizar el checkingCredentials", () => {
    const state = authSlice.reducer(authenticatedState, checkingCredentials());

    expect(state.status).toBe('checking')
  
  });
});
