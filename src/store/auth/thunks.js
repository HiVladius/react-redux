import { registerWithEmailPassword, singInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, logout, login } from "./";


export const ckeckingAuthenticaction = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    
    dispatch(checkingCredentials());

    const result = await singInWithGoogle();

    if (!result.ok) dispatch(logout(result.errorMessage));

    dispatch(login(result));
  };
};

export const startCreatingWithEmailPassword = ({email, name, password, displayName}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const resp = await registerWithEmailPassword({email, name, password, displayName});
    console.log(resp);
  };
};