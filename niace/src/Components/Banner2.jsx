import React from "react";
import { assets } from "../assets/assets";

const Banner2 = () => {
  return (
    <div className="w-full min-h-[70vh] flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28 py-10">
      {/* Left Section - Heading, Paragraph, Button */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight">
          WELCOME TO <br />
          <span className="uppercase text-yellow-600">
            National Institute of Advance Computer Education (NIACE)
          </span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg font-medium text-gray-600 leading-relaxed max-w-3xl">
          At NIACE, we provide high-quality education in{" "}
          <strong>Computers, Tally, and Digital Marketing</strong> to help
          students and professionals build successful careers. Our
          industry-focused courses offer{" "}
          <strong>practical learning experiences</strong>, ensuring that every
          student gains the skills needed to thrive in today's digital world.
        </p>

        <button
          onClick={() => window.location.href = "tel:+918533027077"}
          className="px-5 py-2 sm:px-6 sm:py-3 md:px-6 md:py-3 text-base sm:text-lg md:text-xl bg-yellow-500 text-white font-semibold rounded-full shadow-lg transition-all duration-300 ease-in-out hover:bg-blue-700"
        >
          Get Quote
        </button>
      </div>

      {/* Right Section - Image */}
      <div className="w-full lg:w-1/2 flex justify-center mt-6 lg:mt-0">
        <img
          src={assets.Nb}
          alt="NIACE Banner"
          className="w-[90%] max-w-[350px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Banner2;
