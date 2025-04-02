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
      const response = await axios.post(backenUrl + "/api/student/sv", {
        regNumber,
      });
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
    <div className="flex items-center justify-center min-h-[50vh] bg-gray-100 px-4 py-10">
      <div className="w-full max-w-xl bg-white shadow-md rounded-lg p-5">
        <h2 className="text-xl font-bold text-center text-gray-700 mb-4">
          Student Verification
        </h2>

        {/* Input Field */}
        <form onSubmit={handleVerify} className="flex flex-col sm:flex-row gap-3 mb-4">
          <input
            type="text"
            placeholder="Enter Registration Number"
            value={regNumber}
            onChange={(e) => setRegNumber(e.target.value)}
            className="border border-gray-300 p-2 rounded-md w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition"
          >
            Verify
          </button>
        </form>

        {/* Student Details Card */}
        {student && (
          <div className="mt-4 bg-gray-50 p-4 rounded-md shadow-sm relative">
            {/* Close Icon */}
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-lg"
              onClick={() => setStudent(null)}
            >
              <AiOutlineClose />
            </button>

            <h3 className="text-lg font-semibold text-gray-800 text-center mb-3">
              Student Details
            </h3>
            <table className="w-full text-gray-700 text-sm">
              <tbody>
                <tr className="border-b">
                  <td className="p-2 font-semibold">Name:</td>
                  <td className="p-2">{student.name}</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-semibold">Registration Number:</td>
                  <td className="p-2">{student.registrationNo}</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-semibold">Course:</td>
                  <td className="p-2">{student.course}</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-semibold">Address:</td>
                  <td className="p-2">{student.address}</td>
                </tr>
                <tr>
                  <td className="p-2 font-semibold">Certificate Issued:</td>
                  <td className="p-2">{student.CertificateIssued}</td>
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
