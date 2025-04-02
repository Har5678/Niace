import React from "react";
import { useParams } from "react-router-dom";
import { courses } from "../assets/Courses";

const CourseList = () => {
  const { id } = useParams();

  // Find the course based on ID
  const courset = courses.find((course) => course.id === parseInt(id));

  // If no course is found, display a message
  if (!courset) {
    return <div className="text-center text-red-500 text-lg mt-10">Course not found</div>;
  }

  return (
    <div className="container mx-auto px-3 sm:px-5 lg:px-8 py-4">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-4">{courset.Course}</h2>

      {courset.SubCourses && courset.SubCourses.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full bg-white border border-gray-300 shadow-md rounded-lg text-sm sm:text-base">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-3 sm:px-4 py-2 border">Code</th>
                <th className="px-3 sm:px-4 py-2 border">Name</th>
                <th className="px-3 sm:px-4 py-2 border">Duration</th>
              </tr>
            </thead>
            <tbody>
              {courset.SubCourses.map((sub, index) => (
                <tr key={index} className="border text-center">
                  <td className="px-2 sm:px-4 py-2 border">{sub.Code}</td>
                  <td className="px-2 sm:px-4 py-2 border">{sub.Name}</td>
                  <td className="px-2 sm:px-4 py-2 border">{sub.Duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-600 mt-4">No subcourses available for this course.</p>
      )}
    </div>
  );
};

export default CourseList;
