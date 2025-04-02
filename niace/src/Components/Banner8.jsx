import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { assets } from "../assets/assets";

const reviews = [
  {
    id: 1,
    email: "markhooverfx1980@gmail.com",
    text: "Great service! Highly recommended.",
  },
  {
    id: 2,
    email: "janedoe@example.com",
    text: "The best experience I've ever had!",
  },
  {
    id: 3,
    email: "johndoe@example.com",
    text: "Absolutely fantastic! 5 stars!",
  },
];

const Banner8 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  return (
    <div className="flex flex-col lg:flex-row w-full h-auto lg:h-[400px] mt-4">
      {/* Left Side - Fixed Image */}
      <div className="w-full md:w-1/2 h-[200px] md:h-full max-h-[300px] md:max-h-[350px]">
        <img
          src={assets.Rev}
          alt="Client"
          className="w-full h-full object-contain md:object-contain mix-blend-multiply"
        />
      </div>

      {/* Right Side - Review Carousel */}
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center p-4 md:p-8">
        <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
          What Our Clients Say!!!
        </h2>

        <div className="text-md md:text-xl italic text-gray-600 mb-3 text-center px-3 md:px-6">
          "{reviews[currentIndex].text}"
        </div>
        <p className="text-sm md:text-md text-gray-700 font-semibold text-center">
          {reviews[currentIndex].email}
        </p>

        {/* Navigation Buttons */}
        <div className="mt-4 flex gap-3">
          <button
            onClick={prevReview}
            className="p-2 md:p-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
          >
            <FaArrowLeft className="text-lg md:text-xl" />
          </button>
          <button
            onClick={nextReview}
            className="p-2 md:p-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
          >
            <FaArrowRight className="text-lg md:text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner8;