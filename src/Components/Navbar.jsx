import React from "react";
import Container from "./Container";
import { Link, NavLink } from "react-router";
import { AiOutlineMenuFold } from "react-icons/ai";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/profile"}>Profile</NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-linear-120 from-sky-900 to-gray-600 text-white">
      <Container className={"navbar"}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <AiOutlineMenuFold className="text-2xl"></AiOutlineMenuFold>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 text-black text-xl shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl">AUTHENTIC</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl">{links}</ul>
        </div>
        <div className="navbar-end">
          <Link to={"/registration"} className="btn text-xl">
            Sign Up
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
