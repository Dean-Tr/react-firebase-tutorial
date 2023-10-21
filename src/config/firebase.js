import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBAg1kF6NQ4ZVky-cvo3MbJxLGR-bQMgcc",
  authDomain: "react-firebase-tutorial-9cecb.firebaseapp.com",
  projectId: "react-firebase-tutorial-9cecb",
  storageBucket: "react-firebase-tutorial-9cecb.appspot.com",
  messagingSenderId: "822765574302",
  appId: "1:822765574302:web:745bec96178f4f8f45c38f",
  measurementId: "G-C0GYTBEN52",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
