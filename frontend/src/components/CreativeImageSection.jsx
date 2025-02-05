import React from "react";
import PalindromicImage from "../assets/PalindromicSection.jpg"; // Ensure the path to the image is correct

const CreativeImageSection = () => {
  return (
    <section
      className="relative w-full h-screen bg-fixed bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${PalindromicImage})` }}
    >
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
        <h2 className="text-4xl md:text-6xl font-bold text-white text-center mb-8 animate-fadeIn">
          Discover the Marketing Magic
        </h2>
      </div>
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1.5s forwards;
        }
      `}</style>
    </section>
  );
};

export default CreativeImageSection;
