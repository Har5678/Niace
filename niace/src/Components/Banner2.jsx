import React from "react";
import { assets } from "../assets/assets";

const Banner2 = () => {
  return (
    <div className="w-full min-h-[70vh] flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 md:px-16 lg:px-24 py-10">
      
      {/* Left Section - Heading, Paragraph, Button */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-6">
        
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          WELCOME TO <br />
          <span className="uppercase text-yellow-600">
            National Institute of Advance Computer Education (NIACE)
          </span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl font-medium text-gray-600 leading-relaxed max-w-3xl">
        At NIACE, we provide high-quality education in <strong> Computers, Tally, and Digital Marketing </strong> to help students and professionals build successful careers. Our industry-focused courses offer <strong> practical learning experiences</strong>, ensuring that every student gains the skills needed tso thrive in today's digital world.
        </p>
        
        <button onClick={() => window.location.href = 'tel:+918533027077'} className="px-6 py-3 sm:px-8 sm:py-4 text-lg sm:text-xl bg-yellow-500 text-white font-semibold rounded-full shadow-lg transition-all duration-300 ease-in-out hover:bg-blue-700">
          Get Quote
        </button>
      </div>

      {/* Right Section - Image */}
      <div className="w-full lg:w-1/2 flex justify-center mt-6 lg:mt-0">
        <img
          src={assets.Nb} // Replace with actual image URL
          alt="NIACE Banner"
          className="w-full max-w-[350px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[1000px] rounded-lg shadow-lg"
        />
      </div>

    </div>
  );
};

export default Banner2;
