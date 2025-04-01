import React from "react";
import { courses } from "../assets/Courses";
import { useNavigate, Link } from "react-router-dom";

const Course = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Banner Section */}
      <div className="relative bg-[#0e1b3d] text-white text-center py-20">
        <h1 className="text-3xl md:text-5xl font-bold mt-20">Courses</h1>
        <div className="mt-4 text-lg">
          <Link to="/" className="text-[#ff9900] hover:underline">
            Home
          </Link>
          <span className="mx-2 text-[#ff9900]">▢</span>
          <span className="text-gray-300">Courses</span>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="container mx-auto p-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 mt-10">
          Our Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center mt-10">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center h-full"
            >
              <img
                src={course.CourseImg}
                alt={course.Course}
                className="w-full max-w-xs h-40 object-contain rounded-md"
              />
              <h3 className="text-lg md:text-2xl font-semibold mt-4 text-center uppercase">
                {course.Course}
              </h3>
              <p className="text-gray-700 mt-2 text-sm md:text-lg text-center">
                {course.desc}
              </p>
              <div className="mt-auto">
                <button
                  onClick={() => navigate(`/courseList/${course.id}`)}
                  className="bg-[#ff9900] text-white text-lg font-semibold px-6 py-3 rounded-lg hover:bg-[#e68900] transition duration-300"
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
