import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import Registration from "../Pages/Registration";
import Login from "../Pages/Login";
import AuthProvider from "../Contexts/AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { index: true, path: "/", element: <Home></Home> },
      { path: "profile", element: <Profile></Profile> },
      {
        path: "registration",
        element: (
          <AuthProvider>
            <Registration></Registration>
          </AuthProvider>
        ),
      },
      {
        path: "login",
        element: (
          <AuthProvider>
            <Login></Login>
          </AuthProvider>
        ),
      },
    ],
  },
]);

export default router;
