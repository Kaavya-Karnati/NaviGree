import React from "react";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 100;
      const elementPosition =
        section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <div>
      <div className="w-screen min-h-screen overflow-hidden">
        <div className="flex flex-col items-center justify-center min-h-screen bg-white relative text-center text-black">
          <img
            src={require("../images/MainBackground.jpg")}
            className="w-full h-screen opacity-70 z-2 absolute"

          />
          <div className="relative">
            <h1 className="text-8xl mb-4 font-bold">
            <span>
              <TypeAnimation
                sequence={[
                  "Navigree",
                  2500,
                  "Your Future, Your Plan!",
                  2500,
                ]}
                wrapper="span"
                speed={6}
                repeat={Infinity}
              />
            </span>
            </h1>
            <p className="text-lg">Easy way to access academic plans.</p>
            <button
              className="mt-4 px-4 py-2 bg-gray-800 rounded hover:bg-slate-400 text-white"
              onClick={() => handleScrollToSection("chat")}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
