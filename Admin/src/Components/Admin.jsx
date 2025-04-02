import React from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";

const Admin = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      {/* Admin Image */}
      <img
        src={assets.AdminImage1} // Replace with actual image path
        alt="Admin Panel"
        className="w-[250px] h-[250px] mb-6 mix-blend-multiply"
      />

      {/* Buttons Container */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Admin Login Button */}
        <Link
          to="/adminLogin"
          className="px-6 py-3 text-white text-base font-medium bg-blue-600 rounded-lg shadow-md transition-all hover:bg-blue-700 hover:scale-105"
        >
          Login as Admin
        </Link>

        {/* Franchise Login Button */}
        <Link
          to="/franchise-login"
          className="px-6 py-3 text-white text-base font-medium bg-green-600 rounded-lg shadow-md transition-all hover:bg-green-700 hover:scale-105"
        >
          Login as Franchise
        </Link>
      </div>
    </div>
  );
};

export default Admin;
