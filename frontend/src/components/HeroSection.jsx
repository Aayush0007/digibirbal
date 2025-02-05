import React from "react";
import HeroImg from "../assets/HeroSection.png";
const HeroSection = ({ scrollToSection }) => {
  return (
    <section
      id="home"
      className="pt-24 pb-16 px-4 bg-gradient-to-b from-indigo-100 via-purple-50 to-white"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              Empower Your Vision
            </span>
            <br />
            <span className="text-gray-800">
              Bridging Technology with Creativity
            </span>
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            Unlock the full potential of digital innovation. At DigiBirbal, we
            fuse tradition with modern marketing strategies to build a brighter
            future for your brand. Let’s shape your success, together.
          </p>
          <div className="space-x-4">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-full text-lg font-medium
              hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Get Started
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="border border-purple-600 text-purple-600 px-8 py-3 rounded-full text-lg font-medium
              hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              Explore Services
            </button>
          </div>
        </div>

        {/* Image Content */}
        <div className="md:w-1/2 mt-8 md:mt-0 relative">
          <div className="relative">
            <img
              src={HeroImg}
              alt="Hero Section"
              className="w-full h-auto rounded-lg "
            />
            {/* <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full blur-2xl"></div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
