import React, { useState } from "react";
import axios from "axios";
import { AiOutlineClose } from "react-icons/ai";
import { toast } from "react-toastify";
import { backenUrl } from "../App";

const StudentVerification = () => {
  const [regNumber, setRegNumber] = useState("");
  const [student, setStudent] = useState(null);
  const [error, setError] = useState("");
  
  const handleVerify = async (e) => {
    e.preventDefault();
    setError(""); 
    setStudent(null);

    try {
      const response = await axios.post(backenUrl+"/api/student/sv", { regNumber });
      if (response.data.success) {
        setStudent(response.data.student);
        setRegNumber("");
      } else {
        setError(response.data.message);
        toast.error("Not Registered");
        setRegNumber("");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Student not found.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[100px] bg-gray-100 px-6 py-20">
      <div className="w-full max-w-2xl bg-white shadow-2xl rounded-2xl p-10 h-auto">
        <h2 className="text-4xl font-bold text-center text-gray-700 mb-8">
          Student Verification
        </h2>

        {/* Input Field */}
        <form onSubmit={handleVerify} className="flex gap-4 mb-6">
          <input
            type="text"
            placeholder="Enter Registration Number"
            value={regNumber}
            onChange={(e) => setRegNumber(e.target.value)}
            className="border border-gray-300 p-4 rounded-lg w-full text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition duration-300"
          >
            Verify
          </button>
        </form>

        {/* Student Details Card */}
        {student && (
          <div className="mt-8 bg-gray-50 p-8 rounded-lg shadow-lg relative">
            {/* Close Icon */}
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl"
              onClick={() => setStudent(null)}
            >
              <AiOutlineClose />
            </button>
            
            <h3 className="text-2xl font-semibold text-gray-800 text-center mb-6">
              Student Details
            </h3>
            <table className="w-full text-gray-700 text-lg">
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Name:</td>
                  <td className="p-4">{student.name}</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Registration Number:</td>
                  <td className="p-4">{student.registrationNo}</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Course:</td>
                  <td className="p-4">{student.course}</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Address:</td>
                  <td className="p-4">{student.address}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Certificate Issued:</td>
                  <td className="p-4">{student.CertificateIssued}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentVerification;
