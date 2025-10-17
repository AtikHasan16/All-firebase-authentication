import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../Config/firebase.config";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import Loading from "../Components/Loading";
// import { Link, useNavigate } from "react-router";

const AuthProvider = ({ children }) => {
  //   const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  //   const navigate = useNavigate();
  //   if (currentUser) {
  //     return navigate("login");
  //   }
  const createNewUser = (email, password) => {
    // setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    // setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInWIthGoogle = (provider) => {
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        console.log(user);
      } else {
        console.log(user);
      }
    });
    return () => unsubscribe();
  }, []);
  const logOutUser = () => {
    setCurrentUser(null);
    return signOut(auth);
  };

  const deleteUserData = () => {
    return deleteUser(auth.currentUser);
  };

  const userInformation = {
    createNewUser,
    signInUser,
    signInWIthGoogle,
    currentUser,
    logOutUser,
    deleteUserData,
  };
  return <AuthContext value={userInformation}>{children}</AuthContext>;
};

export default AuthProvider;
