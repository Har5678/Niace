import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ token, setToken, token2,setToken2 }) => {
  const navigate = useNavigate();

  // Logout handler
  const handleLogout = () => {
    setToken("");  // Clear token
    localStorage.removeItem("token"); // Remove from localStorage
    navigate("/adminLogin"); // Redirect to login page
  };

  // Logout handler for Franchise
  const handleLogout2 = () => {
    setToken2("");  // Clear token
    localStorage.removeItem("token2"); // Remove from localStorage
    navigate("/franchise-login"); // Redirect to login page
  }

  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
      {/* Logo on the left */}
      
      <img onClick={()=>navigate("/")} className='w-[max(7%,80px)] mix-blend-multiply' src={assets.Logo} alt='' />

      {/* Centered Text with Side-to-Side Movement */}
      <motion.h1
        className='text-5xl font-semibold flex-1 text-center'
      >
        Welcome To Admin Panel
      </motion.h1>

      {/* Logout Button (only when token exists) */}
      {token && (
        <button 
          className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600"
          onClick={handleLogout}
        >
          Logout
        </button>
      )}

      {/* Logout Button (only when token exists) */}
      {token2 && (
        <button 
          className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600"
          onClick={handleLogout2}
        >
          Logout
        </button>
      )}


    </div>
  );
};

export default Navbar;
