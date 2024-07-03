// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//! Production
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_FIREBASE,
  authDomain: "journalist-4be02.firebaseapp.com",
  projectId: "journalist-4be02",
  storageBucket: "journalist-4be02.appspot.com",
  messagingSenderId: "303103157373",
  appId: "1:303103157373:web:bc5127d265ed07bcf9bd14",
};

//! Development-Testing
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY_FIREBASE_TESTING,
//   authDomain: "journalist-4be02.firebaseapp.com",
//   projectId: "journalist-4be02",
//   storageBucket: "journalist-4be02.appspot.com",
//   messagingSenderId: "303103157373",
//   appId: "1:303103157373:web:60498d9f82f2618bf9bd14"
// };



// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
