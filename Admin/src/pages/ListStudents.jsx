import React, { useEffect, useState } from 'react'
import { backenUrl } from '../App'
import axios from "axios"
import { toast } from 'react-toastify'

const ListStudents = () => {
  const [students, setStudents] = useState([])

  const removeStudent = async (Id) => {
    try {
      console.log(Id);
      const response = await axios.post(backenUrl + "/api/student/delete", { Id });
      if (response.data.success) {
        setStudents(students.filter(student => student._id !== Id));
        toast.success("Student deleted successfully")
      }
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  }

  const fetchStudents = async () => {
    try {
      const response = await axios.get(backenUrl + "/api/student/list");
      console.log(response.data)
      if (response.data.success) {
        const sortedStudents = response.data.students.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt) // Sorting by latest first
        );
        setStudents(sortedStudents);
        console.log(sortedStudents);
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };
  

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <>
      <p className="mb-4 text-lg font-bold">All Students List</p>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          {/* Table Header */}
          <thead className="bg-gray-200">
            <tr className="text-left">
              <th className="border px-4 py-2">Registration No</th>
              <th className="border px-4 py-2">Image</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Mother's Name</th>
              <th className="border px-4 py-2">Father's Name</th>
              <th className="border px-4 py-2">Course</th>
              <th className="border px-4 py-2">Contact</th>
              <th className="border px-4 py-2">Address</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Certificate Issued</th> {/* New Field */}
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {students.length > 0 ? (
              students.map((student, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className='border px-4 py-2'>{student.registrationNo}</td>
                  <td className="border px-4 py-2">
                    <img className="w-12 h-12 object-cover rounded"
                      src={`http://localhost:4000/${student.image}`}
                      alt="Student Image" />
                  </td>
                  <td className="border px-4 py-2">{student.name}</td>
                  <td className="border px-4 py-2">{student.motherName}</td>
                  <td className="border px-4 py-2">{student.fatherName}</td>
                  <td className="border px-4 py-2">{student.course}</td>
                  <td className="border px-4 py-2">{student.contact}</td>
                  <td className="border px-4 py-2">{student.address}</td>
                  <td className="border px-4 py-2">{student.email}</td>
                  <td className="border px-4 py-2 text-center">
                    {student.CertificateIssued === "Yes" ? (
                      <span className="text-green-600 font-semibold">Yes</span>
                    ) : (
                      <span className="text-red-600 font-semibold">No</span>
                    )}
                  </td>
                  <td className="border px-4 py-2 text-center">
                    <button
                      onClick={() => removeStudent(student._id)}
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700">
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="11" className="text-center py-4">No Student Data Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ListStudents;
