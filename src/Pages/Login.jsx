import React from "react";
import { BiUser } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { Link } from "react-router";

const Login = () => {
  return (
    <div>
      <div className="bg-gray-50">
        <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
          <div className="max-w-[480px] w-full">
            <a href="javascript:void(0)">
              <img
                alt="logo"
                className="w-40 mb-8 mx-auto block"
                src="https://readymadeui.com/readymadeui.svg"
              />
            </a>
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 shadow-sm">
              <h1 className="text-slate-900 text-center text-3xl font-semibold">
                Sign in
              </h1>
              <form className="mt-12 space-y-6">
                <div>
                  <label className="text-slate-900 text-sm font-medium mb-2 block">
                    User name
                  </label>
                  <div className="relative flex items-center">
                    <input
                      className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600"
                      name="username"
                      placeholder="Enter user name"
                      required
                      type="text"
                    />
                    <BiUser className="absolute right-2 text-gray-400 text-2xl"></BiUser>
                  </div>
                </div>
                <div>
                  <label className="text-slate-900 text-sm font-medium mb-2 block">
                    Password
                  </label>
                  <div className="relative flex items-center">
                    <input
                      className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600"
                      name="password"
                      placeholder="Enter password"
                      required
                      type="password"
                    />
                    <BsEye className="absolute right-2 text-gray-400 text-2xl"></BsEye>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center">
                    <input
                      className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                    />
                    <label
                      className="ml-3 block text-sm text-slate-900"
                      htmlFor="remember-me"
                    >
                      Remember me
                    </label>
                  </div>
                  <div className="text-sm">
                    <a
                      className="text-blue-600 hover:underline font-semibold"
                      href="jajvascript:void(0);"
                    >
                      Forgot your password?
                    </a>
                  </div>
                </div>
                <div className="!mt-12">
                  <button
                    className="w-full py-2 px-4 text-[15px] font-medium tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer"
                    type="button"
                  >
                    Sign in
                  </button>
                </div>
                <p className="text-slate-900 text-sm !mt-6 text-center">
                  Don't have an account?{" "}
                  <Link
                    to={"/registration"}
                    className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold"
                  >
                    Register here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
