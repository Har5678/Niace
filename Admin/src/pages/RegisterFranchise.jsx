import React, { useState } from "react";
import { backenUrl } from "../App";
import axios from "axios";
import { toast } from "react-toastify";

const RegisterFranchise = () => {
  const [formData, setFormData] = useState({
    franchiseName: "",
    email: "",
    password: "",
    address: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation check
    if (!formData.franchiseName || !formData.email || !formData.password || !formData.address) {
      alert("Please fill in all fields.");
      return;
    }

    // Email validation check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    console.log("Franchise Registration Data:", formData);

    const response = await axios.post(backenUrl+"/api/franchise/register",{formData});
    if(response.data.success){
      toast.success("Details Added Successfully");
    }else{
      toast.error(response.data.message);
    }
    

    // Reset form
    setFormData({
      franchiseName: "",
      email: "",
      password: "",
      IssueDate:"",
      address: "",
    });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-6xl -mt-50">
        <h2 className="text-xl font-semibold text-center mb-4">Register Franchise</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div>
            <label className="block text-gray-700 font-medium">Franchise Name</label>
            <input
              type="text"
              name="franchiseName"
              value={formData.franchiseName}
              onChange={handleChange}
              placeholder="Enter franchise name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
              >
                {showPassword ? "🙈" : "👁"}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter address"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Register Franchise
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterFranchise;
