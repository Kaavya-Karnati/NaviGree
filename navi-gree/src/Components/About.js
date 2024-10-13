import React from "react";

const About = () => {
  return (
    <section id="about" className="text-black px-14">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-18">
        <img src={require("../images/UniversityPic.jpg")} />
        <div className="flex flex-column justify-center items-center mt-4 md:mt-0 text-left flec flex-col h-full">
          <h2 className="text-4xl font-bold text-black mb-4">
            About Navigree:
          </h2>
          <p className="text-base lg:text-lg ">
            Navigree is web application for making plans for Universities in
            United States. It is a platform where students can easily access
            information about different universities and their programs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
