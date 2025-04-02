import React, { useState } from "react";
import axios from "axios";
import { backenUrl } from "../App";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AdminLogin = ({ token, setToken }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(backenUrl + "/api/user/admin", {
        email,
        password,
      });

      if (response.data.success) {
        setToken(response.data.token);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-gray-100 overflow-hidden">
      <div className="bg-white p-8 rounded-lg shadow-md w-[95%] max-w-[450px]">
        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Admin Login
        </h2>

        {/* Login Form */}
        <form className="space-y-5" onSubmit={onSubmitHandler}>
          {/* Email Input */}
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">
              Email ID
            </label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none text-base"
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
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none text-base"
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

export default AdminLogin;
