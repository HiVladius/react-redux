import { registerWithEmailPassword, singInWithGoogle, loginWithEmailPassword, logoutFirebase } from "../../firebase/providers/";
import { checkingCredentials, logout, login } from "./";
import { clearNoteLogout } from "../journal";


export const ckeckingAuthenticaction = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    
    dispatch(checkingCredentials());

    const result = await singInWithGoogle();

    if (!result.ok) return  dispatch(logout(result.errorMessage));

    dispatch(login(result));
  };
};

export const startCreatingWithEmailPassword = ({email, name, password, displayName}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const {ok, uid, photoURL, errorMessage } = await registerWithEmailPassword({email, name, password, displayName});
    
    if(!ok) return dispatch(logout({errorMessage}));

    dispatch(login({uid, displayName, email, photoURL}))

  };
};

export const startLoginWhitEmailPassword = ({email, password}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await loginWithEmailPassword({email, password});
    // console.log(result);

    if (!result.ok) return  dispatch(logout(result));
    dispatch(login(result));

  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await logoutFirebase();
    dispatch(clearNoteLogout());
    dispatch(logout({errorMessage: 'No hay usuario logueado'}));
  };
};


