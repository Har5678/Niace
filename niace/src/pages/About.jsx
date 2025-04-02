import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <>
      {/* Banner Section */}
      <div className="relative bg-[#0e1b3d] text-white text-center py-12 md:py-16 lg:py-20">
        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-10 md:mt-16">
          About Us
        </h1>
        <div className="mt-2 sm:mt-4 text-sm sm:text-lg">
          <Link to="/" className="text-[#ff9900] hover:underline">
            Home
          </Link>
          <span className="mx-1 sm:mx-2 text-[#ff9900]">▢</span>
          <span className="text-gray-300">About Us</span>
        </div>
      </div>

      {/* About Section */}
      <div className="w-full min-h-[80vh] flex flex-col items-center text-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28 py-6 md:py-12">
        {/* Centered Heading */}
        <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight max-w-3xl">
          Welcome to{" "}
          <span className="uppercase text-yellow-600">
            National Institute of Advance Computer Education (NIACE)
          </span>
        </h1>

        {/* Content Layout - Center on Mobile, Row on Large Screens */}
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-20 mt-8 lg:mt-12">
          
          {/* Left Side - Text */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4 sm:space-y-6">
            <p className="text-sm sm:text-base md:text-md font-medium text-gray-500 leading-relaxed max-w-3xl">
              NIACE was set up in 1998 to carry out Human Resource Development and related activities in the area of Information, Electronics & Communications Technology. NIACE is engaged both in Formal & Non-Formal Education in these fields, besides developing industry-oriented quality education and training programs in state-of-the-art areas.
            </p>
            <p className="text-sm sm:text-base md:text-md font-medium text-gray-500 leading-relaxed max-w-3xl">
              NIACE has acquired a distinct place of honor among different industries owing to its innovative and objective approach to its studies. The courses provided equip students with the latest business strategies and technical advancements, enhancing their career prospects in various industries.
            </p>
            <p className="text-sm sm:text-base md:text-md font-medium text-gray-500 leading-relaxed max-w-3xl">
              The basket of activities at NIACE includes R&D projects, consultancy services, software development, and website development. NIACE has planned a road map to transform itself into an Institute of National Importance through continuous innovation and high-quality education.
            </p>

            {/* Button - Center on Mobile, Left on Large Screens */}
            <div className="w-full flex justify-center lg:justify-start">
              <button
                onClick={() => window.location.href = 'tel:+918533027077'}
                className="px-4 py-2 sm:px-8 sm:py-2 text-sm sm:text-lg bg-yellow-500 text-white font-semibold rounded-full shadow-lg transition-all duration-300 ease-in-out hover:bg-blue-700"
              >
                Get Quote
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={assets.Nb} 
              alt="NIACE Banner"
              className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
