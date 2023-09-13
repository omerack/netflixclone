import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC63W7ks5LIrlNg9cBoT1uY0hIiuq3DRpk",
  authDomain: "netflixclone-ea389.firebaseapp.com",
  projectId: "netflixclone-ea389",
  storageBucket: "netflixclone-ea389.appspot.com",
  messagingSenderId: "153256055447",
  appId: "1:153256055447:web:f287593371a63eeca50fd2",
  measurementId: "G-H0YB2CZX09",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
