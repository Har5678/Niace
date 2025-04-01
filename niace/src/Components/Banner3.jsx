import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";

const teamMembers = [
  { id: 1, name: "Ankit Malik", image: assets.Ankit },
  { id: 2, name: "Shivam Sharma", image: assets.Shivam },
  { id: 3, name: "Shobhit Agarwal", image: assets.Shobhit },
  { id: 4, name: "Piyush Agarwal", image: assets.piyush },
];

const Banner3 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Determine number of items to display based on screen size
  const getItemsPerSlide = () => (window.innerWidth < 768 ? 1 : 2);
  const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide());

  useEffect(() => {
    const updateItemsPerSlide = () => setItemsPerSlide(getItemsPerSlide());
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex + itemsPerSlide) % teamMembers.length
        );
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [itemsPerSlide]);

  return (
    <div className="relative w-full px-6 sm:px-10 md:px-16 lg:px-24 bg-black">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center py-6 sm:py-8">
        Our Team Members
      </h2>

      {/* Members Container with Smooth Transition */}
      <div className="flex justify-center items-center">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-10 px-4 py-4 transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {teamMembers
            .slice(currentIndex, currentIndex + itemsPerSlide)
            .map((member) => (
              <div
                key={member.id}
                className="flex flex-col items-center w-[90vw] sm:w-[80vw] md:w-[40vw] lg:w-[40vw] xl:w-[30vw] shadow-lg rounded-lg overflow-hidden transition-all duration-500 ease-in-out"
              >
                {/* Image */}
                <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>

                {/* Name Centered Below Image */}
                <div className="mt-4 text-white text-lg sm:text-xl md:text-2xl font-semibold text-center">
                  {member.name}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Banner3;
