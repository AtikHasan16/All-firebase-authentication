import React, { useContext } from "react";
import Container from "./Container";
import { Link, NavLink } from "react-router";
import { AiOutlineMenuFold } from "react-icons/ai";

import { AuthContext } from "../Contexts/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { currentUser, logOutUser } = useContext(AuthContext);
  // console.log(currentUser);
  const handleSignOut = () => {
    logOutUser()
      .then(() => {
        // console.log(res);

        toast.success("Successfully logged out");
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "border-2" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink to={"/profile"}>Profile</NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-linear-120 from-purple-900 via-sky-600 to-blue-800 text-white">
      <Container className={"navbar"}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <AiOutlineMenuFold className="text-2xl"></AiOutlineMenuFold>
            </div>
            <ul
              tabIndex="-1"
              className="menu dropdown-content rounded-box z-1 mt-3 w-40 p-2 text-black font-bold shadow-xl bg-white"
            >
              {links}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-2xl font-bold">
            AUTHENTICA
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl">{links}</ul>
        </div>
        <div className="navbar-end">
          {currentUser ? (
            <button
              onClick={() => handleSignOut()}
              type="button"
              className="btn text-xl"
            >
              Sign Out
            </button>
          ) : (
            <Link to={"/login"} className="btn text-xl">
              Sign In
            </Link>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
