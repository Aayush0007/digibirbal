import React from "react";
import TeamImage from "../assets/AboutUs.jpg"; // Ensure the path to the image is correct
import DigitalMarketingElements from "./CreativeImageSection";

const AboutUs = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section
        id="about"
        className="py-16 px-4 bg-gradient-to-r from-red-50 via-yellow-50 to-pink-50"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-12">
            Our Journey
          </h2>

          {/* Content Layout */}
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Text Section */}
            <div className="flex-1 space-y-8">
              <p className="text-gray-700 leading-relaxed text-lg md:text-xl">
                DigiBirbal began as the brainchild of passionate entrepreneurs
                one from IIM Calcutta and other is experienced digital marketing
                expert, each bringing their unique expertise in telecom and
                pharmaceuticals. Fueled by a commitment to ethical practices and
                innovation, their vision transformed into reality through
                rigorous brainstorming and research sessions at IIM.
              </p>
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
                Meet the Digipreneurs:
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg md:text-xl">
                A team of dreamers, doers, and innovators who thrive on blending
                tradition with technology to craft unparalleled digital
                experiences. We are committed to helping brands flourish in the
                digital landscape.
              </p>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-red-500 to-yellow-500 text-white px-6 py-3 rounded-full text-lg font-medium hover:shadow-lg hover:-translate-y-1 transform transition-all duration-300"
              >
                Learn More About Us
              </button>
            </div>

            {/* Image Section */}
            <div className="flex-1 relative">
              <div className="relative">
                <img
                  src={TeamImage}
                  alt="Our Team"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <DigitalMarketingElements />

    </>
  );
};

export default AboutUs;
