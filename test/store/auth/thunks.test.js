import { beforeEach, describe, expect, test, vi } from "vitest";
import {
  ckeckingAuthenticaction,
  startGoogleSignIn,
} from "../../../src/store/auth/thunks";
import { checkingCredentials, login, logout } from "../../../src/store/auth";
import { demoUser } from "../../fixtures/authFixtures";
import { singInWithGoogle } from "../../../src/firebase/providers/";

vi.mock("../../../src/firebase/providers/");

const dispatch = vi.fn();


describe("pruebas en AuthThunks", () => {
  test("debe de invocar el checklnAuthentication", async () => {
   
    beforeEach( () => vi.resetAllMocks() ); 

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

  test("startGoogleSignIn debe de llamar al checkCredentials y logout", async() => {

    const loginData = {ok: false, errorMessage: 'un error en google'}
    await singInWithGoogle.mockResolvedValue(loginData);   

    await startGoogleSignIn()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage));

  });
});
