import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <>
      <div className="relative bg-[#0e1b3d] text-white text-center py-20">
        <h1 className="text-3xl md:text-5xl font-bold mt-20">About Us</h1>
        <div className="mt-4 text-lg">
          <Link to="/" className="text-[#ff9900] hover:underline">
            Home
          </Link>
          <span className="mx-2 text-[#ff9900]">▢</span>
          <span className="text-gray-300">About Us</span>
        </div>
      </div>
      <div className="w-full min-h-[80vh] flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 md:px-16 lg:px-24 py-10">
        {/* Left Section - Heading, Paragraph, Button */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Welcome to{" "}
            <span className="uppercase text-yellow-600">
              National Institute of Advance Computer Education (NIACE)
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-medium text-gray-500 leading-relaxed max-w-3xl">
            NIACE was set up in 1998 to carry out Human Resource Development and related activities in the area of Information, Electronics & Communications Technology. NIACE is engaged both in Formal & Non-Formal Education in these fields, besides developing industry-oriented quality education and training programs in state-of-the-art areas.
          </p>
          <p className="text-base sm:text-lg md:text-xl font-medium text-gray-500 leading-relaxed max-w-3xl">
            NIACE has acquired a distinct place of honor among different industries owing to its innovative and objective approach to its studies. The courses provided equip students with the latest business strategies and technical advancements, enhancing their career prospects in various industries.
          </p>
          <p className="text-base sm:text-lg md:text-xl font-medium text-gray-500 leading-relaxed max-w-3xl">
            The basket of activities at NIACE includes R&D projects, consultancy services, software development, and website development. NIACE has planned a road map to transform itself into an Institute of National Importance through continuous innovation and high-quality education.
          </p>
          <button onClick={() => window.location.href = 'tel:+918533027077'} className="px-6 py-3 sm:px-8 sm:py-4 text-lg sm:text-xl bg-yellow-500 text-white font-semibold rounded-full shadow-lg transition-all duration-300 ease-in-out hover:bg-blue-700">
            Get Quote
          </button>
        </div>
        {/* Right Section - Image */}
        <div className="w-full lg:w-1/2 flex justify-center mt-6 lg:mt-0">
          <img
            src={assets.Nb} // Replace with actual image URL
            alt="NIACE Banner"
            className="w-full max-w-[350px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[1000px] rounded-lg shadow-lg"
          />
        </div>
      </div>
    </>
  );
};

export default About;
