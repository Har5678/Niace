import React, { useEffect, useState } from "react";
import { FaUserGraduate, FaBuilding, FaCertificate } from "react-icons/fa";
import axios from "axios";
import { backenUrl } from "../App";
import { toast } from "react-toastify";

const Dashboard = () => {
  const [data, setData] = useState({
    totalStudents: 0,
    totalFranchises: 0,
    totalCertificates: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await axios.get(backenUrl + "/api/dashboard/count");

        if (response.data.success) {
          setData({
            totalStudents: response.data.data.studentCount,
            totalFranchises: response.data.data.franchiseCount,
            totalCertificates: response.data.data.certifiedCount,
          });
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl sm:text-2xl font-bold mb-6 text-center">
        Admin Dashboard
      </h1>

      {loading ? (
        <p className="text-center text-sm font-semibold">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500 text-sm">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-5xl mx-auto">
          {/* Total Students Added */}
          <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center w-full min-h-32">
            <FaUserGraduate className="text-blue-500 text-4xl mb-2" />
            <h2 className="text-md font-semibold">Total Students</h2>
            <p className="text-xl font-bold">{data.totalStudents}</p>
          </div>

          {/* Total Franchises Registered */}
          <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center w-full min-h-32">
            <FaBuilding className="text-green-500 text-4xl mb-2" />
            <h2 className="text-md font-semibold">Total Franchises</h2>
            <p className="text-xl font-bold">{data.totalFranchises}</p>
          </div>

          {/* Total Certificates Issued */}
          <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center w-full min-h-32">
            <FaCertificate className="text-yellow-500 text-4xl mb-2" />
            <h2 className="text-md font-semibold">Certificates Issued</h2>
            <p className="text-xl font-bold">{data.totalCertificates}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
