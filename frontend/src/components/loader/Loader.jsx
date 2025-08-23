// Loader.jsx
import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <div className="w-16 h-16 rounded-full border-4 border-t-transparent border-r-transparent border-b-transparent border-l-black animate-spin-slow
                      bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      </div>

    </div>
  );
};

export default Loader;
