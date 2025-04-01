import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { backenUrl } from "../App";
import axios from "axios";
import { toast } from "react-toastify";

const FranchiseLogin = ({setToken2}) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    const response = await axios.post(backenUrl+"/api/franchise/login",{formData});
    if(response.data.success){
      setToken2(response.data.token);
      
    }else{
      toast.error(response.data.message);
    }
    setFormData({
      email: "",
      password: "",
    })

  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="bg-white p-10 rounded-xl shadow-2xl w-[600px] -mt-30">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Franchise Login
        </h2>

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700 mb-2">Email:</label>
            <input
              type="email"
              name="email"
              className="w-full px-5 py-3 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700 mb-2">Password:</label>
            <input
              type="password"
              name="password"
              className="w-full px-5 py-3 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white text-lg font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>

       
      </div>
    </div>
  );
};

export default FranchiseLogin;
