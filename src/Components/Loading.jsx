import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="spinner-3 w-10 h-10 rounded-full bg-sky-700 relative">
        <div className="absolute w-full h-full bg-gray-800 rounded-full animate-ping"></div>
        <div className="absolute w-full h-full bg-gray-800 rounded-full animate-ping delay-200"></div>
      </div>
    </div>
  );
};

export default Loading;
