import React from "react";
import { useParams } from "react-router-dom";
import { courses } from "../assets/Courses";

const CourseList = () => {
  const { id } = useParams();
  
  // Find the course based on ID
  const courset = courses.find((course) => course.id === parseInt(id));

  // If no course is found, display a message
  if (!courset) {
    return <div className="text-center text-red-500 text-xl mt-20">Course not found</div>;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h2 className="text-4xl font-semibold text-center mb-6 mt-5">{courset.Course}</h2>

      {courset.SubCourses && courset.SubCourses.length > 0 ? (
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full">
            <table className="w-full bg-white border border-gray-300 shadow-md rounded-lg">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 sm:px-6 py-3 text-center border">Code</th>
                  <th className="px-4 sm:px-6 py-3 text-center border">Name</th>
                  <th className="px-4 sm:px-6 py-3 text-center border">Duration</th>
                </tr>
              </thead>
              <tbody>
                {courset.SubCourses.map((sub, index) => (
                  <tr key={index} className="border">
                    <td className="px-2 sm:px-6 py-2 border text-sm md:text-lg lg:text-xl text-center">{sub.Code}</td>
                    <td className="px-2 sm:px-6 py-2 border text-sm md:text-lg lg:text-xl text-center">{sub.Name}</td>
                    <td className="px-2 sm:px-6 py-2 border text-sm md:text-lg lg:text-xl text-center">{sub.Duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-600 mt-6">No subcourses available for this course.</p>
      )}
    </div>
  );
};

export default CourseList;
