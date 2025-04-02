import { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const slides = [
  assets.ComputerB,
  assets.ComputerB2,
  assets.ComputerB3,
];

const Banner1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[230px] sm:h-[320px] md:h-[370px] lg:h-[420px] xl:h-[520px] relative overflow-hidden">
      {/* Background Image */}
      <div className="relative w-full h-full transition-opacity duration-1000 ease-in-out">
        <img
          src={slides[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover brightness-90"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-xs"></div>
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="uppercase text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 drop-shadow-xl">
          Best Course Provided
        </h1>
        <h2 className="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl mb-4 drop-shadow-md">
          We Provide the Best Courses at <br /> NIACE
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="px-4 sm:px-5 md:px-6 py-2 sm:py-3 md:py-4 text-xs sm:text-sm md:text-lg bg-yellow-600 text-black font-semibold rounded-full shadow-lg transition-all duration-300 hover:bg-gray-700 hover:text-white"
            onClick={() => window.location.href = "tel:+918533027077"}
          >
            Get Quote
          </button>

          <button
            onClick={() => navigate("/contact")}
            className="px-4 sm:px-5 md:px-6 py-2 sm:py-3 md:py-4 text-xs sm:text-sm md:text-lg bg-white text-black font-semibold rounded-full shadow-lg transition-all duration-300 hover:bg-gray-900 hover:text-white"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
