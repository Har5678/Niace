import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-white text-black shadow-md w-full">
      <div className="mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold">
          <img
            src={assets.Niace}
            className="w-25 h-15 sm:w-30 sm:h-27 lg:w-40 mix-blend-multiply"
            alt="Logo"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-10 text-gray-800 text-3xl mx-auto font-sans font-bold">
          {[
            { name: "Home", path: "/" },
            { name: "Course", path: "/course" },
            { name: "About", path: "/about" },
            { name: "Privacy", path: "/privacy" },
            { name: "Student Verification", path: "/sv" },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="py-2 hover:text-orange-500 transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <Link
          onClick={() => window.location.href = 'tel:+918533027077'}
          className="hidden lg:block bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-xl shadow-lg hover:bg-orange-600 hover:shadow-xl transition-all duration-300"
        >
          Contact Us
        </Link>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-black" onClick={() => setIsOpen(!isOpen)}>
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-2/3 md:w-1/2 h-full bg-white shadow-md z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button className="absolute top-5 right-5 text-black" onClick={() => setIsOpen(false)}>
          <X size={28} />
        </button>

        <ul className="flex flex-col text-gray-800 text-lg mt-16 px-6 h-full overflow-y-auto">
          {[
            { name: "Home", path: "/" },
            { name: "Course", path: "/course" },
            { name: "About", path: "/about" },
            { name: "Student Verification", path: "/sv" },
          ].map((item) => (
            <li key={item.name} className="py-2 border-b border-gray-300">
              <Link to={item.path} onClick={() => setIsOpen(false)} className="hover:text-orange-500 transition-colors duration-300">
                {item.name}
              </Link>
            </li>
          ))}
          {/* Contact Us Button for Mobile */}
          <li className="mt-4">
            <Link
              to="/contact"
              className="block bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-xl shadow-lg hover:bg-orange-600 hover:shadow-xl transition-all duration-300"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
