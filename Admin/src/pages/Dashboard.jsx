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
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Admin Dashboard</h1>

      {loading ? (
        <p className="text-center text-lg font-semibold">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500 text-lg">{error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-center">
          {/* Total Students Added */}
          <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center justify-center w-full md:w-80 min-h-40">
            <FaUserGraduate className="text-blue-500 text-6xl mb-4" />
            <h2 className="text-xl font-semibold">Total Students</h2>
            <p className="text-3xl font-bold">{data.totalStudents}</p>
          </div>

          {/* Total Franchises Registered */}
          <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center justify-center w-full md:w-80 min-h-40">
            <FaBuilding className="text-green-500 text-6xl mb-4" />
            <h2 className="text-xl font-semibold">Total Franchises</h2>
            <p className="text-3xl font-bold">{data.totalFranchises}</p>
          </div>

          {/* Total Certificates Issued */}
          <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center justify-center w-full md:w-80 min-h-40">
            <FaCertificate className="text-yellow-500 text-6xl mb-4" />
            <h2 className="text-xl font-semibold">Certificates Issued</h2>
            <p className="text-3xl font-bold">{data.totalCertificates}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
