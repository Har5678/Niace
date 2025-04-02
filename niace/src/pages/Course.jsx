import React from "react";
import { courses } from "../assets/Courses";
import { useNavigate, Link } from "react-router-dom";

const Course = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Banner Section */}
      <div className="relative bg-[#0e1b3d] text-white text-center py-10 md:py-14">
        <h1 className="text-lg sm:text-xl md:text-3xl font-bold mt-10 md:mt-14">
          Courses
        </h1>
        <div className="mt-2 text-xs sm:text-sm md:text-base">
          <Link to="/" className="text-[#ff9900] hover:underline">
            Home
          </Link>
          <span className="mx-1 text-[#ff9900]">▢</span>
          <span className="text-gray-300">Courses</span>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="w-full px-4 md:px-8 lg:px-12 py-4 md:py-6">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-center mb-4">
          Our Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-4">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white shadow-md rounded-lg p-4 sm:p-5 flex flex-col items-center h-full w-full"
            >
              <img
                src={course.CourseImg}
                alt={course.Course}
                className="w-full max-w-[120px] sm:max-w-[190px] h-auto object-contain rounded-md"
              />
              <h3 className="text-xs sm:text-sm md:text-lg font-semibold mt-2 text-center uppercase">
                {course.Course}
              </h3>
              <p className="text-gray-700 text-[10px] sm:text-sm leading-tight text-center mt-1 flex-grow mb-2">
                {course.desc}
              </p>
              <div className="mt-auto">
                <button
                  onClick={() => navigate(`/courseList/${course.id}`)}
                  className="bg-[#ff9900] text-white text-[10px] sm:text-xs font-semibold px-5 py-2 rounded-full hover:bg-[#e68900] transition duration-300"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
