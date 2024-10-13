import React from "react";

const Home = () => {
  return (
    <div>
      <div className="w-screen min-h-screen bg-black overflow-hidden">
        <div className="flex flex-col items-center justify-center min-h-screen bg-black relative text-center text-white">
          <h1 className="text-8xl mb-4">NaviGree</h1>
          <p className="text-lg">Easy way to access academic plans.</p>
          <button className="mt-4 px-4 py-2 bg-slate-200 rounded hover:bg-slate-400 text-black">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
