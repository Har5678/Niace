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
            className="w-16 sm:w-20 md:w-24 lg:w-28 h-auto mix-blend-multiply"
            alt="Logo"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8 text-gray-800 text-xl mx-auto font-bold">
          {[{ name: "Home", path: "/" },
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

        {/* Desktop Contact Us Button */}
        <Link
          onClick={() => window.location.href = "tel:+918533027077"}
          className="hidden lg:block bg-orange-500 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-orange-600 transition-all duration-300"
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
        className={`fixed top-0 left-0 w-3/4 sm:w-2/3 md:w-1/2 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="relative h-full flex flex-col">
          {/* Close Button */}
          <button className="absolute top-5 right-5 text-black" onClick={() => setIsOpen(false)}>
            <X size={28} />
          </button>

          {/* Navigation Links */}
          <ul className="flex flex-col text-gray-800 text-lg mt-16 px-6 h-full">
            {[{ name: "Home", path: "/" },
              { name: "Course", path: "/course" },
              { name: "About", path: "/about" },
              { name: "Privacy", path: "/privacy" },
              { name: "Student Verification", path: "/sv" },
            ].map((item) => (
              <li key={item.name} className="py-4 border-b border-gray-300">
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-orange-500 transition-colors duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Contact Us Button for Mobile */}
          <div className="px-6 mt-auto pb-10">
            <Link
              to="/contact"
              className="block bg-orange-500 text-white text-center px-6 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-orange-600 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
