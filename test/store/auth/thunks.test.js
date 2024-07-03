import { beforeEach, describe, expect, test, vi } from "vitest";
import {
  ckeckingAuthenticaction,
  startGoogleSignIn,
  startLoginWhitEmailPassword,
  startLogout,
} from "../../../src/store/auth/thunks";
import { checkingCredentials, login, logout } from "../../../src/store/auth";
import { demoUser } from "../../fixtures/authFixtures";
import {
  singInWithGoogle,
  loginWithEmailPassword,
} from "../../../src/firebase/providers/";
import { logoutFirebase } from "../../../src/firebase/providers";
import { clearNoteLogout } from "../../../src/store/journal";

vi.mock("../../../src/firebase/providers/");

const dispatch = vi.fn();

describe("pruebas en AuthThunks", () => {
  test("debe de invocar el checklnAuthentication", async () => {
    beforeEach(() => vi.resetAllMocks());

    await ckeckingAuthenticaction()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
  });

  test("startGoogleSignIn debe de llamar chekingCredential y login", async () => {
    const loginData = { ok: true, ...demoUser };

    await singInWithGoogle.mockResolvedValue(loginData);

    //Thunk

    await startGoogleSignIn()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(loginData));
  });

  test("startGoogleSignIn debe de llamar al checkCredentials y logout", async () => {
    const loginData = { ok: false, errorMessage: "un error en google" };
    await singInWithGoogle.mockResolvedValue(loginData);

    await startGoogleSignIn()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage));
  });

  test("startLoginWhitEmailPassword debe de llamar el checkCredentials y login", async () => {
    const loginData = { ok: true, ...demoUser };
    const formdata = { email: demoUser.email, password: "123456" };

    await loginWithEmailPassword.mockResolvedValue(loginData);

    await startLoginWhitEmailPassword(formdata)(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(loginData));
  });

  test("startLogout debe de llamar logoutFirebaSE, clearNote ", async () => {
    await startLogout()(dispatch);

    expect(logoutFirebase).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(clearNoteLogout());
    expect(dispatch).toHaveBeenCalledWith(logout({ errorMessage: 'No hay usuario logueado' }));
  });
});
