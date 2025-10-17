import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import router from "./Routers/Routes.jsx";
import Root from "./Layouts/Root.jsx";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./Contexts/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
        <App></App>
      </RouterProvider>
    </AuthProvider>
    <ToastContainer></ToastContainer>
  </StrictMode>
);
