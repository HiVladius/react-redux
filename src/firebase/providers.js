import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

//!-------------------Login with Google---------------------------

export const singInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    return {
      ok: false,

      errorMessage,
    };
  }
};

//!-------------------Register with email and password-------------------
export const registerWithEmailPassword = async ({
  email,
  password,
  displayName,
}) => {
  console.log(email, password, displayName);

  try {
    const resp = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );

    const { uid, photoURL } = resp.user;

    await updateProfile(FirebaseAuth.currentUser, { displayName });

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    console.log(error);
    return { 
      ok: false, 
      errorMessage: 'El correo ya está en uso'
    };
  }
};

//!-------------------Login with email and password-------------------

export const loginWithEmailPassword = async ({ email, password }) => {

  try {
    const resp = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );

    const { displayName, photoURL, uid } = resp.user;

    return {
      ok: true,
      displayName,
      photoURL,
      uid,
    };

  
  } catch (error) {
    console.log(error)
    return { 
      ok: false, 
      errorMessage: 'Email o contraseña incorrectos'
    };
  }
};


//!-------------------Logout-------------------

export const logoutFirebase = async () => {

  return await FirebaseAuth.signOut( )
};
