import { FaFacebookF, FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom"; 
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-[#0e1b3d] text-white py-12">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 text-center lg:text-left">
          
          {/* Logo Section */}
          <div className="flex flex-col items-center lg:items-start">
            <img
              src={assets.Niace}
              alt="Company Logo"
              className="max-w-[180px] sm:max-w-[240px] object-contain mix-blend-multiply"
            />
          </div>

          {/* Popular Links */}
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="text-3xl font-bold mb-4">Popular Links</h2>
            <ul className="text-lg space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Our Services", path: "/courses" },
                { name: "Contact Us", path: "/contact" },
              ].map((link, index) => (
                <li key={index} className="flex items-center gap-2">
                  ➜ <Link to={link.path} className="hover:text-[#ff9900]">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl flex items-center gap-2">
              📍 N-24, Vishnu Aawas, Opposite IIMT University, Ganga Nagar, Meerut
            </p>
            <p className="text-xl flex items-center gap-2 mt-3">
              📧 <a href="mailto:niacemrt@gmail.com" className="hover:text-[#ff9900]">niacemrt@gmail.com</a>
            </p>
            <p className="text-xl flex items-center gap-2 mt-3">
              📞 <a href="tel:+918533027077" className="hover:text-[#ff9900]">+91 8533027077</a>
            </p>
          </div>

          {/* Follow Us */}
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="text-3xl font-bold mb-4">Follow Us</h2>
            <div className="flex gap-4">
              {[
                { icon: FaWhatsapp, url: "https://wa.me/919012027077" },
                { icon: FaFacebookF, url: "https://www.facebook.com/niacedigital" },
                { icon: FaLinkedinIn, url: "https://linkedin.com" },
                { icon: FaInstagram, url: "https://www.instagram.com/the_niace/" },
              ].map(({ icon: Icon, url }, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#ff9900] p-4 rounded-full hover:bg-white hover:text-[#ff9900] transition"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-10 border-t border-gray-600 pt-6 text-xl">
          © NIACE. All Rights Reserved. Designed by{" "}
          <a href="#" className="text-[#ff9900] hover:text-white font-semibold">
            iBrandizer Pvt Ltd.
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
