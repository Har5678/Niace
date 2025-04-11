import React, { useEffect, useState } from "react";
import axios from "axios";
import { backenUrl } from "../App";
import { toast } from "react-toastify";

const ListFranchise = () => {
  const [franchises, setFranchises] = useState([]);
  const [students, setStudents] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFranchise, setSelectedFranchise] = useState("");

  useEffect(() => {
    fetchFranchises();
  }, []);

  const fetchFranchises = async () => {
    try {
      const response = await axios.get(`${backenUrl}/api/franchise/details`);
      setFranchises(response.data.franchises);
    } catch (error) {
      console.error("Error fetching franchise data:", error);
    }
  };

  const viewStudents = async (name) => {
    try {
      setSelectedFranchise(name);
      const response = await axios.post(`${backenUrl}/api/student/name`, { name });
      setStudents(response.data.students || []);
      setModalOpen(true);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const handleRemove = async (id) => {
    try {
      const response = await axios.post(`${backenUrl}/api/franchise/delete`, { id });
      if (response.data.success) {
        toast.success("Franchise deleted successfully");
        setFranchises(franchises.filter((franchise) => franchise._id !== id));
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Error deleting franchise");
    }
  };

  return (
    <div className="p-2 max-w-4xl mx-auto">
      <p className="mb-2 text-base font-bold text-center">All Franchises</p>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-xs sm:text-sm">
          <thead className="bg-gray-200">
            <tr className="text-left text-[10px] sm:text-xs">
              <th className="border px-2 py-1">#</th>
              <th className="border px-2 py-1">Name</th>
              <th className="border px-2 py-1">Email</th>
              <th className="border px-2 py-1">Address</th>
              <th className="border px-2 py-1">Password</th>
              <th className="border px-2 py-1 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {franchises.length > 0 ? (
              franchises.map((franchise, index) => (
                <tr key={franchise._id} className="hover:bg-gray-100 text-[10px] sm:text-xs">
                  <td className="border px-2 py-1">{index + 1}</td>
                  <td
                    onClick={() => viewStudents(franchise.name)}
                    className="border px-2 py-1 cursor-pointer hover:text-blue-500"
                  >
                    {franchise.name}
                  </td>
                  <td className="border px-2 py-1">{franchise.email}</td>
                  <td className="border px-2 py-1">{franchise.address}</td>
                  <td className="border px-2 py-1 text-center">{franchise.password}</td>
                  <td className="border px-2 py-1 text-center">
                    <button
                      onClick={() => handleRemove(franchise._id)}
                      className="bg-red-500 text-white px-2 py-1 rounded text-[10px] hover:bg-red-700"
                    >
                      ✖
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-2 text-gray-500">
                  No Franchise Data Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal for displaying students */}
      {modalOpen && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-white">
          <div className="bg-white p-5 rounded-lg shadow-lg w-full max-w-4xl max-h-[80vh] overflow-y-auto border border-gray-300">
            <div className="flex justify-between items-center border-b pb-2">
              <h2 className="text-lg font-semibold">{selectedFranchise} - Students</h2>
              <button onClick={() => setModalOpen(false)} className="text-red-500 text-xl">
                &times;
              </button>
            </div>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full border border-gray-300 text-xs">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="border px-2 py-1">#</th>
                    <th className="border px-2 py-1">Name</th>
                    <th className="border px-2 py-1">Email</th>
                    <th className="border px-2 py-1">Address</th>
                    <th className="border px-2 py-1">Contact</th>
                    <th className="border px-2 py-1">Father Name</th>
                    <th className="border px-2 py-1">Mother Name</th>
                    <th className="border px-2 py-1">Course</th>
                    <th className="border px-2 py-1">Reg. No</th>
                    <th className="border px-2 py-1">Certificate Issued</th>
                    <th className="border px-2 py-1">Created At</th>
                  </tr>
                </thead>
                <tbody>
                  {students.length > 0 ? (
                    students.map((student, index) => (
                      <tr key={index} className="hover:bg-gray-100">
                        <td className="border px-2 py-1">{index + 1}</td>
                        <td className="border px-2 py-1">{student.name}</td>
                        <td className="border px-2 py-1">{student.email}</td>
                        <td className="border px-2 py-1">{student.address}</td>
                        <td className="border px-2 py-1">{student.contact}</td>
                        <td className="border px-2 py-1">{student.fatherName}</td>
                        <td className="border px-2 py-1">{student.motherName}</td>
                        <td className="border px-2 py-1">{student.course}</td>
                        <td className="border px-2 py-1">{student.registrationNo}</td>
                        <td className="border px-2 py-1">{student.CertificateIssued}</td>
                        <td className="border px-2 py-1">
                          {new Date(student.createdAt).toLocaleDateString()}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="11" className="text-center py-2 text-gray-500">
                        No students found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListFranchise;
