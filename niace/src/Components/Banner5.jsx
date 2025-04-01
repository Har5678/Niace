import React from "react";
import { FaAward, FaSmile, FaUserTie, FaGraduationCap } from "react-icons/fa";
import { BsPercent } from "react-icons/bs";
import { assets } from "../assets/assets";
import {  useNavigate } from "react-router-dom";

const Banner5 = () => {
  const navigate=useNavigate();
  return (
    <section className=" py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-8 md:mb-10">
          Why Choose Us!!!
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Side */}
          <div className="space-y-8 md:space-y-10">
            {[
              { icon: <FaAward />, title: "Best In Industry", desc:"NIACE is committed to delivering industry-leading education and training programs" },
              { icon: <BsPercent />, title: "99% Success Rate",desc:"Our learners successfully complete their courses and gain the skills needed to excel in their careers." },
              { icon: <FaAward />, title: "Award Winning", desc:"Our excellence in training, innovative teaching methods, and industry-aligned courses have earned us accolades in the field of computer education, Tally, and digital marketing." },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center space-y-3">
                <div className="bg-orange-500 p-3 rounded-full">{React.cloneElement(item.icon, { size: 30, className: "text-white" })}</div>
                <h3 className="text-lg md:text-2xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm md:text-lg text-gray-600 px-2 md:px-4">
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
              className=" w-full max-w-[250px] md:max-w-xs lg:max-w-sm mix-blend-multiply"
            />
            <div className="bg-orange-500 text-white p-4 md:p-6 mt-4 rounded-lg w-full max-w-xxl md:max-w-xl lg:max-w-sm">
              <p className="text-sm md:text-lg">
              NIACE (National Institute of Advanced Education) offers one of the most prestigious Computer Applications programs in the country, providing top-tier education and skill development for aspiring professionals.
              </p>
              <button onClick={()=>navigate("/about")} className="cursor-pointer mt-3 w-full px-4 py-2 md:px-6 md:py-3 bg-white text-orange-500 font-bold text-sm md:text-lg rounded-full shadow">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-8 md:space-y-10">
            {[
              { icon: <FaSmile />, title: "100% Happy Students", desc:"With expert faculty, hands-on practical training, career guidance, and modern infrastructure, we ensure that every student gains real-world skills and confidence." },
              { icon: <FaUserTie />, title: "Professional Teachers", desc:"Our instructors bring years of industry experience and academic expertise, ensuring that students receive the best guidance and practical knowledge." },
              { icon: <FaGraduationCap />, title: "Best Courses",desc:'We offer a diverse range of industry-leading courses designed to equip students with practical skills and in-depth knowledge.' },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center space-y-3">
                <div className="bg-orange-500 p-3 rounded-full">{React.cloneElement(item.icon, { size: 30, className: "text-white" })}</div>
                <h3 className="text-lg md:text-2xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm md:text-lg text-gray-600 px-2 md:px-4">
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
