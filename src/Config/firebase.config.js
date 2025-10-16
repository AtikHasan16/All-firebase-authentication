// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBNpMh42EaRD_RuZV7p3rfoTAN7bf8p6I",
  authDomain: "private-authentication-page.firebaseapp.com",
  projectId: "private-authentication-page",
  storageBucket: "private-authentication-page.firebasestorage.app",
  messagingSenderId: "346402232327",
  appId: "1:346402232327:web:39fc43b34554050a3df2a2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
