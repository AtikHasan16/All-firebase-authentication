import React from "react";
import { Link } from "react-router";
import Container from "../Components/Container";

const Home = () => {
  return (
    <div>
      <div className="sm:px-10 py-6">
        <Container>
          <div className=" flex flex-col  gap-y-16">
            <div>
              <div className="  text-center">
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
                <div className="mt-12 flex flex-wrap justify-center gap-6">
                  <Link to={"login"}>
                    <button
                      className="bg-sky-700 hover:bg-sky-700 border border-sky-700 transition-all text-base text-white font-medium rounded-full px-6 py-3 cursor-pointer outline-0"
                      type="button"
                    >
                      Sign In
                    </button>
                  </Link>
                  <Link to={"registration"}>
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
        </Container>
      </div>{" "}
    </div>
  );
};

export default Home;
