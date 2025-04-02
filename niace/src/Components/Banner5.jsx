import React from "react";
import { FaAward, FaSmile, FaUserTie, FaGraduationCap } from "react-icons/fa";
import { BsPercent } from "react-icons/bs";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Banner5 = () => {
  const navigate = useNavigate();

  return (
    <section className="py-12 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-gray-900 mb-8">
          Why Choose Us!!!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          {/* Left Side */}
          <div className="space-y-6">
            {[
              { icon: <FaAward />, title: "Best In Industry", desc: "NIACE is committed to delivering industry-leading education and training programs." },
              { icon: <BsPercent />, title: "99% Success Rate", desc: "Our learners successfully complete their courses and gain the skills needed to excel in their careers." },
              { icon: <FaAward />, title: "Award Winning", desc: "Our excellence in training, innovative teaching methods, and industry-aligned courses have earned us accolades in the field of computer education, Tally, and digital marketing." },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center space-y-3">
                <div className="bg-orange-500 p-4 rounded-full">{React.cloneElement(item.icon, { size: 30, className: "text-white" })}</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm sm:text-md text-gray-600 px-2">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="relative text-center flex flex-col items-center">
            <img
              src={assets.ChooseEmoji}
              alt="Professional"
              className="w-48 sm:w-56 md:w-64 lg:w-72 mix-blend-multiply"
            />
            <div className="bg-orange-500 text-white p-4 sm:p-6 mt-4 rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              <p className="text-sm sm:text-md">
                NIACE (National Institute of Advanced Education) offers one of the most prestigious Computer Applications programs in the country, providing top-tier education and skill development for aspiring professionals.
              </p>
              <button
                onClick={() => navigate("/about")}
                className="cursor-pointer mt-3 w-full px-4 py-2 sm:px-6 sm:py-3 bg-white text-orange-500 font-bold text-sm sm:text-md rounded-full shadow hover:bg-orange-100"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-6">
            {[
              { icon: <FaSmile />, title: "100% Happy Students", desc: "With expert faculty, hands-on practical training, career guidance, and modern infrastructure, we ensure that every student gains real-world skills and confidence." },
              { icon: <FaUserTie />, title: "Professional Teachers", desc: "Our instructors bring years of industry experience and academic expertise, ensuring that students receive the best guidance and practical knowledge." },
              { icon: <FaGraduationCap />, title: "Best Courses", desc: "We offer a diverse range of industry-leading courses designed to equip students with practical skills and in-depth knowledge." },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center space-y-3">
                <div className="bg-orange-500 p-4 rounded-full">{React.cloneElement(item.icon, { size: 30, className: "text-white" })}</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm sm:text-md text-gray-600 px-2">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner5;
