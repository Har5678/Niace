import React from "react";
import { FaDesktop, FaCalculator, FaShieldAlt, FaCode, FaBullhorn, FaLaptopCode } from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaDesktop size={35} />,
    title: "Computer Course",
    description: "Gain expertise in essential computer skills, including MS Office, internet usage, and troubleshooting techniques. This course is perfect for beginners and professionals looking to enhance their digital literacy."
  },
  {
    id: 2,
    icon: <FaCalculator size={35} />,
    title: "Tally Course",
    description: "Master financial accounting with Tally ERP. Learn ledger creation, GST, taxation, payroll management, and more to build a strong foundation in accounting and business finance."
  },
  {
    id: 3,
    icon: <FaShieldAlt size={35} />,
    title: "Security Course",
    description: "Understand the fundamentals of cybersecurity, ethical hacking, and data protection. Learn how to secure networks, prevent cyber threats, and safeguard sensitive information from unauthorized access."
  },
  {
    id: 4,
    icon: <FaCode size={35} />,
    title: "Web Development Course",
    description: "Develop full-stack web applications using HTML, CSS, JavaScript, React, Node.js, and databases. Gain hands-on experience in designing responsive websites and deploying web projects efficiently."
  },
  {
    id: 5,
    icon: <FaBullhorn size={35} />,
    title: "Digital Marketing",
    description: "Explore SEO, social media marketing, content creation, PPC advertising, and analytics. Learn how to strategize, optimize campaigns, and grow businesses using modern digital marketing tools."
  },
  {
    id: 6,
    icon: <FaLaptopCode size={35} />,
    title: "Programming Languages",
    description: "Learn coding fundamentals and advanced concepts in Python, Java, C++, and JavaScript. Develop applications, automate tasks, and enhance problem-solving skills through real-world projects."
  },
];

const Banner4 = () => {
  return (
    <div className="w-full px-6 py-12 bg-gray-100">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">What We Offer</h2>

      {/* Responsive Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-9xl mx-auto place-items-center justify-center">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative w-full sm:w-[90%] md:w-[80%] lg:w-[500px] h-auto bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center transition-all duration-300 group hover:scale-105 hover:shadow-2xl overflow-hidden"
          >
            {/* Icon */}
            <div className="text-blue-500 mb-4 transition-transform duration-300 group-hover:-translate-y-2">
              {service.icon}
            </div> 
            
            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 transition-all duration-300 group-hover:text-blue-600">
              {service.title}
            </h3>
            
            {/* Description */}
            <p className="text-gray-600 text-base sm:text-lg transition-opacity duration-300 group-hover:opacity-80">
              {service.description}
            </p>

            {/* Bottom Border Animation */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-blue-500 transition-all duration-300 group-hover:w-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner4;
