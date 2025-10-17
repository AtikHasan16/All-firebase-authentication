import React from "react";

const Loading = () => {
  return (
    <div>
      <div class="spinner-3 w-10 h-10 rounded-full bg-gray-800 relative">
        <div class="absolute w-full h-full bg-gray-800 rounded-full animate-ping"></div>
        <div class="absolute w-full h-full bg-gray-800 rounded-full animate-ping delay-200"></div>
      </div>
    </div>
  );
};

export default Loading;
