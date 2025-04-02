import React from "react";
import { assets } from "../assets/assets";

const teamMembers = [
  { id: 1, name: "Ankit Malik", image: assets.Ankit },
  { id: 2, name: "Shivam Sharma", image: assets.Shivam },
  { id: 3, name: "Shobhit Agarwal", image: assets.Shobhit },
  { id: 4, name: "Piyush Agarwal", image: assets.piyush },
];

const Banner3 = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 bg-black py-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-6">
        Our Team Members
      </h2>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="relative w-full max-w-[250px] group rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
          >
            {/* Image */}
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-[250px] object-cover rounded-lg"
            />

            {/* Hover Effect */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg sm:text-xl font-semibold">
                {member.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner3;
