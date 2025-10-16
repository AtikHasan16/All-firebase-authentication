import React, { useContext } from "react";

import {
  FaApple,
  FaEye,
  FaFacebook,
  FaGoogle,
  FaMailBulk,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import { Bounce, toast, ToastContainer } from "react-toastify";

const Registration = () => {
  const { createNewUser } = useContext(AuthContext);

  const handleRegistration = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    createNewUser(email, password)
      .then((result) => {
        console.log(result);
        toast.success("Successfully Registered", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      })
      .catch((err) => {
        toast.error(err.code, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      });
  };
  return (
    <div>
      <div className="bg-slate-50 flex items-center md:h-screen p-4">
        <div className="w-full max-w-3xl max-md:max-w-xl mx-auto">
          <div className="bg-white grid md:grid-cols-2 gap-10 w-full sm:p-8 p-6 shadow-md rounded-md overflow-hidden">
            <div className="max-md:order-1 space-y-6">
              <div className="md:mb-16 mb-8">
                <h2 className="text-slate-900 font-bold text-4xl ">
                  Create your Account
                </h2>
              </div>
              <div className="space-y-4">
                <button
                  className="px-4 py-2.5 flex items-center justify-center cursor-pointer rounded-md text-white  font-medium tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700"
                  type="button"
                >
                  <FaFacebook className="text-xl mr-2"></FaFacebook>
                  Continue with Facebook
                </button>
                <button
                  className="px-4 py-2.5 flex items-center justify-center cursor-pointer rounded-md text-slate-900  font-medium tracking-wider border-none outline-none bg-slate-100 hover:bg-slate-200"
                  type="button"
                >
                  <FaGoogle className="text-xl mr-2"></FaGoogle>
                  Continue with Google
                </button>
                <button
                  className="px-4 py-2.5 flex items-center justify-center cursor-pointer rounded-md text-white font-medium tracking-wider border-none outline-none bg-black hover:bg-[#222]"
                  type="button"
                >
                  <FaApple className="text-xl mr-2"></FaApple>
                  Continue with Apple
                </button>
              </div>
            </div>
            <form onSubmit={handleRegistration} className="w-full">
              <div className="mb-8">
                <h2 className="text-slate-900 text-2xl font-medium">
                  Register
                </h2>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="text-slate-900  font-medium mb-2 block">
                    Name
                  </label>
                  <div className="relative flex items-center">
                    <input
                      className="bg-white border border-slate-300 w-full  text-slate-900 pl-4 pr-10 py-2.5 rounded-md outline-blue-500"
                      name="name"
                      placeholder="Enter name"
                      required
                      type="text"
                    />
                    <FaUser className="absolute right-2 text-gray-400"></FaUser>
                  </div>
                </div>
                <div>
                  <label className="text-slate-900  font-medium mb-2 block">
                    Email Id
                  </label>
                  <div className="relative flex items-center">
                    <input
                      className="bg-white border border-slate-300 w-full  text-slate-900 pl-4 pr-10 py-2.5 rounded-md outline-blue-500"
                      name="email"
                      placeholder="Enter email"
                      required
                      type="email"
                    />
                    <FaMailBulk className="absolute right-2 text-gray-400"></FaMailBulk>
                  </div>
                </div>
                <div>
                  <label className="text-slate-900  font-medium mb-2 block">
                    Password
                  </label>
                  <div className="relative flex items-center">
                    <input
                      className="bg-white border border-slate-300 w-full  text-slate-900 pl-4 pr-10 py-2.5 rounded-md outline-blue-500"
                      name="password"
                      placeholder="Enter password"
                      required
                      type="password"
                    />
                    <FaEye className="absolute right-2 text-gray-400"></FaEye>
                  </div>
                </div>
                <div className="flex items-center">
                  <input
                    className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-slate-300 rounded-md"
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                  />
                  <label
                    className="text-slate-600 ml-3 block "
                    htmlFor="remember-me"
                  >
                    I accept the{" "}
                    <a
                      className="text-blue-600 font-medium hover:underline ml-1"
                      href="javascript:void(0);"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <div className="!mt-8">
                <button className="w-full py-2.5 px-4  font-medium tracking-wider cursor-pointer rounded-md bg-blue-600 hover:bg-blue-700 text-white focus:outline-none">
                  Create Account
                </button>
              </div>
              <p className="text-slate-600  mt-4 text-left">
                Already have an account?{" "}
                <Link
                  to={"/login"}
                  className="text-blue-600 font-medium hover:underline ml-1"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Registration;
