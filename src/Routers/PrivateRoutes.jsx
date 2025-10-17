import React, { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { Navigate } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return children;
  }

  return <Navigate to={"/login"}></Navigate>;
};

export default PrivateRoutes;
