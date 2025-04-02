import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { backenUrl } from "../App";
import axios from "axios";
import { toast } from "react-toastify";

const FranchiseLogin = ({ setToken2 }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(backenUrl + "/api/franchise/login", {
        formData,
      });

      if (response.data.success) {
        setToken2(response.data.token);
      } else {
        toast.error(response.data.message);
      }
      
      setFormData({ email: "", password: "" });
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-gray-100 overflow-hidden">
      <div className="bg-white p-8 rounded-lg shadow-md w-[95%] max-w-[450px]">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Franchise Login
        </h2>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Input */}
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none text-base"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none text-base"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md font-medium text-base transition-all hover:bg-blue-700 hover:scale-105"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default FranchiseLogin;
