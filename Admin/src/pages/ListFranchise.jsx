import React, { useEffect, useState } from "react";
import axios from "axios";
import { backenUrl } from "../App";
import { toast } from "react-toastify";

const ListFranchise = () => {
  const [franchises, setFranchises] = useState([]);

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
                  <td className="border px-2 py-1">{franchise.name}</td>
                  <td className="border px-2 py-1">{franchise.email}</td>
                  <td className="border px-2 py-1">{franchise.address}</td>
                  <td className="border px-2 py-1 text-center">****</td>
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
    </div>
  );
};

export default ListFranchise;