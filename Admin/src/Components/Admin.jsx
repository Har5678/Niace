import React from 'react';
import { assets } from '../assets/assets'; // Import assets if needed
import { Link, useNavigate } from 'react-router-dom';

const Admin = () => {

    const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Admin Image */}
      <img 
        src={assets.AdminImage1} // Replace with actual image path
        alt="Admin Panel"
        className="w-70 h-70 mb-6 mix-blend-multiply lg:-mt-50"
      />

      {/* Buttons Container */}
      <div className="flex gap-6">
        {/* Admin Login Button */}
        <Link to="/adminLogin" className="px-9 py-4 text-white text-lg font-semibold bg-blue-600 rounded-full shadow-md transition-all hover:bg-blue-700 hover:scale-105">
          Login as Admin
        </Link>

        {/* Franchise Login Button */}
        <Link to="/franchise-login" className="px-9 py-4 text-white text-lg font-semibold bg-green-600 rounded-full shadow-md transition-all hover:bg-green-700 hover:scale-105">
          Login as Franchise
        </Link>
      </div>
    </div>
  );
};

export default Admin;
