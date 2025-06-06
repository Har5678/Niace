import React, { useEffect, useState } from "react";
import { backenUrl } from "../App";
import axios from "axios";
import { toast } from "react-toastify";

const ListStudents = ({ token, token2 }) => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true); // 👈 Added loading state

  const removeStudent = async (Id) => {
    try {
      const response = await axios.post(backenUrl + "/api/student/delete", { Id });
      if (response.data.success) {
        setStudents(students.filter((student) => student._id !== Id));
        toast.success("Student deleted successfully");
      }
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  const fetchStudents = async () => {
    try {
      setLoading(true); // 👈 Set loading to true before fetching data

      let response;
      if (token) {
        response = await axios.get(backenUrl + "/api/student/list");
      } else {
        response = await axios.get(backenUrl + "/api/student/list", {
          headers: { token2 },
        });
      }

      if (response.data.success) {
        const sortedStudents = response.data.students.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt) // Sorting by latest first
        );
        setStudents(sortedStudents);
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.error("Error fetching students:", error);
    } finally {
      setLoading(false); // 👈 Set loading to false after fetching data
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);
  console.log(students);

  return (
    <div className="p-2 max-w-6xl ml-2">
      <p className="mb-2 text-base font-bold text-center">All Students List</p>

      <div className="overflow-x-auto">
        {loading ? ( // 👈 Show loading indicator while fetching
          <p className="text-center py-2 text-gray-500">Loading students...</p>
        ) : students.length > 0 ? (
          <table className="w-full border border-gray-300 text-xs sm:text-sm">
            {/* Table Header */}
            <thead className="bg-gray-200">
              <tr className="text-left text-[10px] sm:text-xs">
                <th className="border px-2 py-1">Reg No</th>
                <th className="border px-2 py-1">Img</th>
                <th className="border px-2 py-1">Name</th>
                <th className="border px-2 py-1">Mother</th>
                <th className="border px-2 py-1">Father</th>
                <th className="border px-2 py-1">Course</th>
                <th className="border px-2 py-1">Contact</th>
                <th className="border px-2 py-1">Email</th>
                <th className="border px-2 py-1">Franchise</th>
                <th className="border px-2 py-1">Cert</th>
                <th className="border px-2 py-1">Action</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {students.map((student, index) => (
                <tr key={index} className="hover:bg-gray-100 text-[10px] sm:text-xs">
                  <td className="border px-2 py-1">{student.registrationNo}</td>
                  <td className="border px-2 py-1">
                    <img
                      className="w-8 h-8 object-cover rounded-md"
                      src={backenUrl + `/${student.image}`}
                      alt="Student"
                    />
                  </td>
                  
                  <td className="border px-2 py-1">{student.name}</td>
                  <td className="border px-2 py-1">{student.motherName}</td>
                  <td className="border px-2 py-1">{student.fatherName}</td>
                  <td className="border px-2 py-1">{student.course}</td>
                  <td className="border px-2 py-1">{student.contact}</td>
                  <td className="border px-2 py-1">{student.email}</td>
                  <td className="border px-2 py-1">{student.FranchiseName}</td>
                  <td className="border px-2 py-1 text-center">
                    {student.CertificateIssued === "Yes" ? (
                      <span className="text-green-600 font-semibold">✔</span>
                    ) : (
                      <span className="text-red-600 font-semibold">✘</span>
                    )}
                  </td>
                  
                  <td className="border px-2 py-1 text-center">
                    <button
                      onClick={() => removeStudent(student._id)}
                      className="bg-red-500 text-white px-2 py-1 rounded text-[10px] hover:bg-red-700"
                    >
                      ✖
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center py-2 text-gray-500">No Student Data Found</p>
        )}
      </div>
    </div>
  );
};

export default ListStudents;
