import React from "react";
import { Link } from "react-router";

const Home = () => {
  return (
    <div>
      <div className="px-6 sm:px-10 py-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid lg:grid-cols-2 justify-center items-center gap-x-12 gap-y-16">
            <div>
              <div className="max-w-3xl max-lg:mx-auto max-lg:text-center">
                <h1 className="text-slate-900 md:text-5xl text-4xl font-bold !leading-tight">
                  Simple <span className="text-sky-800">Authentication</span>{" "}
                  Page With Minimal Design
                </h1>
                <p className="text-slate-600 text-base leading-relaxed mt-6">
                  Showcase your products and connect with your audience. Our
                  all-in-one platform helps you manage operations and boost
                  visibility — whether you're in fashion, beauty, wellness, or
                  beyond.
                </p>
                <div className="mt-12 flex flex-wrap gap-6 max-lg:justify-center">
                  <Link to={"login"}>
                    <button
                      className="bg-sky-700 hover:bg-sky-700 border border-sky-700 transition-all text-base text-white font-medium rounded-full px-6 py-3 cursor-pointer outline-0"
                      type="button"
                    >
                      Sign In
                    </button>
                  </Link>
                  <Link to={'registration'}>
                  <button
                    className="bg-transparent border border-sky-700 transition-all text-base text-slate-900 font-medium rounded-full px-6 py-3 cursor-pointer outline-0"
                    type="button"
                    >
                    Create an Account
                  </button>
                      </Link>
                </div>
              </div>
            </div>
            <div>
              <img
                alt="kpi-img"
                className="w-full object-contain"
                src="https://readymadeui.com/images/kpi-img-3.webp"
              />
            </div>
          </div>
        </div>
      </div>{" "}
     
    </div>
  );
};

export default Home;
