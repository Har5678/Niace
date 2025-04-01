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
        console.log("hello");
      const response= await axios.post(backenUrl+"/api/franchise/delete",{id});
      if(response.data.success){
        toast.success("Franchise deleted successfully");
        setFranchises(franchises.filter(franchise => franchise._id !== id));
      }else{
        toast.error(response.data.message);
      }
      
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold text-center mb-4">List of Franchises</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
          <thead className="bg-gray-200">
            <tr className="text-left">
              <th className="px-4 py-2 border">#</th>
              <th className="px-4 py-2 border">Franchise Name</th>
              <th className="px-4 py-2 border">Franchise Email</th>
              <th className="px-4 py-2 border">Address</th>
              <th className="px-4 py-2 border">Password</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {franchises.length > 0 ? (
              franchises.map((franchise, index) => (
                <tr key={franchise._id} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border">{index + 1}</td>
                  <td className="px-4 py-2 border">{franchise.name}</td>
                  <td className="px-4 py-2 border">{franchise.email}</td>
                  <td className="px-4 py-2 border">{franchise.address}</td>
                  <td className="px-4 py-2 border">{franchise.password}</td> {/* Masking password */}
                  <td className="px-4 py-2 border">
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-200"
                      onClick={() => handleRemove(franchise._id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <th colSpan="6" className="text-center py-4">No Franchise Data Found</th>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListFranchise;
