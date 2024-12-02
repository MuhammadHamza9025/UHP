import React from "react";
import image from "../../Assests/F.jpeg";

const Hero = () => {
  return (
    <>
      <div
        className="relative bg-cover bg-center h-[100dvh] flex items-center justify-start pl-10"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Overlay */}
        <div className="relative z-10 text-left ">
          <h1 className="mb-2 text-lg font-bold tracking-wide text-teal-500">
            AWESOME UNIVERSITIES ADMISSION GUIDELINES
          </h1>
          <h2 className="mb-6 text-5xl font-bold leading-tight text-white">
            Join The Biggest Community <br /> Of Education
          </h2>
          <button className="bg-teal-500 text-black font-semibold py-3 px-6 rounded-xl text-lg hover:bg-[#22C55E] transition">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
