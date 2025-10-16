import React from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../Config/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

const AuthProvider = ({ children }) => {
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInWIthGoogle = (provider) => {
    return signInWithPopup(auth, provider);
  };
  const userInformation = {
    createNewUser,
    signInUser,
    signInWIthGoogle,
  };
  return <AuthContext value={userInformation}>{children}</AuthContext>;
};

export default AuthProvider;
