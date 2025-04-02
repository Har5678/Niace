import React from "react";
import { FaDesktop, FaCalculator, FaShieldAlt, FaCode, FaBullhorn, FaLaptopCode } from "react-icons/fa";

const services = [
  { id: 1, icon: <FaDesktop size={30} />, title: "Computer Course", description: "Gain expertise in essential computer skills, including MS Office, internet usage, and troubleshooting techniques." },
  { id: 2, icon: <FaCalculator size={30} />, title: "Tally Course", description: "Master financial accounting with Tally ERP. Learn ledger creation, GST, taxation, payroll management, and more." },
  { id: 3, icon: <FaShieldAlt size={30} />, title: "Security Course", description: "Understand cybersecurity basics, ethical hacking, and data protection. Learn how to prevent cyber threats." },
  { id: 4, icon: <FaCode size={30} />, title: "Web Development", description: "Develop full-stack web apps using HTML, CSS, JavaScript, React, and Node.js. Learn responsive design and deployment." },
  { id: 5, icon: <FaBullhorn size={30} />, title: "Digital Marketing", description: "Explore SEO, social media, PPC, and analytics. Learn to strategize campaigns and grow businesses online." },
  { id: 6, icon: <FaLaptopCode size={30} />, title: "Programming Languages", description: "Learn Python, Java, C++, and JavaScript. Develop applications and improve problem-solving skills." },
];

const Banner4 = () => {
  return (
    <div className="w-full px-4 sm:px-6 py-8 bg-gray-100">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6">
        What We Offer
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1100px] mx-auto">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative w-full max-w-[350px] min-h-[250px] flex flex-col items-center text-center bg-white p-5 md:p-6 rounded-lg shadow-md transition-transform duration-300 group hover:scale-105 hover:shadow-xl"
          >
            {/* Centered Icon */}
            <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full mb-3 transition-transform duration-300 group-hover:-translate-y-2">
              <div className="text-blue-500">{service.icon}</div>
            </div>

            {/* Title */}
            <h3 className="text-base sm:text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-blue-600">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base flex-grow transition-opacity duration-300 group-hover:opacity-80">
              {service.description}
            </p>

            {/* Bottom Border Animation */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner4;
