import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ token, setToken, token2, setToken2 }) => {
  const navigate = useNavigate();

  // Common logout function
  const handleLogout = () => {
    if (token) {
      setToken("");
      localStorage.removeItem("token");
      navigate("/adminLogin");
    } else if (token2) {
      setToken2("");
      localStorage.removeItem("token2");
      navigate("/franchise-login");
    }
  };

  return (
    <div className="flex items-center py-1 px-[3%] justify-between bg-gray-100 shadow-md">
      {/* Logo - Smaller Size */}
      <img
        className="w-16 sm:w-20 md:w-24 lg:w-28 h-auto mix-blend-multiply"
        src={assets.Logo}
        alt="Logo"
      />

      {/* Centered Title - Smaller Text */}
      <motion.h1
        className="text-base sm:text-lg md:text-xl font-semibold flex-1 text-center"
      >
        Admin Panel
      </motion.h1>

      {/* Logout Button - Smaller Size */}
      {(token || token2) && (
        <button
          className="bg-red-500 text-white px-3 py-1 text-xs sm:text-sm rounded-md font-medium hover:bg-red-600 transition duration-300"
          onClick={handleLogout}
        >
          Logout {token ? "Admin" : "Franchise"}
        </button>
      )}
    </div>
  );
};

export default Navbar;
