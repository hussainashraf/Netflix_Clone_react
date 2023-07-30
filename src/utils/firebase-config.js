// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-Lhe2txTGqSfaMAiws4u2BDJxy9YF5i4",
  authDomain: "netflix-clone-project-ab639.firebaseapp.com",
  projectId: "netflix-clone-project-ab639",
  storageBucket: "netflix-clone-project-ab639.appspot.com",
  messagingSenderId: "29443312431",
  appId: "1:29443312431:web:11a438883f88590df1efda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);