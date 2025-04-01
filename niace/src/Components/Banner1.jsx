import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const slides = [
  assets.ComputerB, // Replace with actual image URLs
  assets.ComputerB2,
  assets.ComputerB3,
];

const Banner1 = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] relative">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            {/* Background Image */}
            <div className="relative w-full h-full">
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover brightness-90"
              />
              {/* Overlay with Backdrop Blur */}
              <div className="absolute inset-0 bg-black/30 backdrop-blur-xs"></div>
            </div>

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
              <h1 className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 drop-shadow-xl">
                Best Course Provided
              </h1>
              <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-6 drop-shadow-md">
                We Provide Best Course In <br /> NIACE
              </h2>
              <div className="flex flex-wrap gap-4 justify-center">
                <button
                  className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg bg-yellow-600 text-black font-semibold rounded-full shadow-lg transition-all duration-300 hover:bg-gray-700 hover:text-white"
                  onClick={() => window.location.href = 'tel:+918533027077'} // Replace with your number
                >
                  Get Quote
                </button>

                <button onClick={() => navigate("/contact")} className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg bg-white text-black font-semibold rounded-full shadow-lg transition-all duration-300 hover:bg-gray-900 hover:text-white">
                  Contact Us
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner1;
