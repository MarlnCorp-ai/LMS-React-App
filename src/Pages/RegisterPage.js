import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import nexushive from "../images/nexus.png";
import OIP from "../images/OIP.jpg";
import R from "../images/R.jpg";

const CreateAccountPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f7fa] via-[#e8ecf4] to-[#dee3ed] text-gray-900 flex flex-col">

      <main className="flex-grow flex flex-col items-center justify-center px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-purple-800">
          Get Started with Nexus Hive
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
          
          <div className="bg-white text-black rounded-xl shadow-md p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
            <img
              src={OIP}
              alt="For Individuals"
              className="rounded-md w-full h-40 object-cover mb-4"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/300x160?text=Individual";
              }}
            />
            <h3 className="text-xl font-semibold mb-2">For Individuals</h3>
            <p className="text-sm text-gray-700 mb-4">
              Explore opportunities, grow your skills, and build confidence with hands-on coding and personalized learning.
            </p>
            <Link
              to="/individuals/pricing"
              className="block text-center bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md font-medium transition"
            >
              View Individual Plan
            </Link>
          </div>

          <div className="bg-white text-black rounded-xl shadow-md p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
            <img
              src={R}
              alt="For Organizations"
              className="rounded-md w-full h-40 object-cover mb-4"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/300x160?text=Organization";
              }}
            />
            <h3 className="text-xl font-semibold mb-2">For Organizations</h3>
            <p className="text-sm text-gray-700 mb-4">
              Empower your teams with technical upskilling, collaborative tools, and real-world learning experiences.
            </p>
            <Link
              to="/businesses/pricing"
              className="block text-center bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md font-medium transition"
            >
              View Team Plan
            </Link>
          </div>
        </div>

        <p className="mt-12 text-sm text-gray-600 text-center">
          Not sure what you're looking for?{" "}
          <a href="#" className="text-purple-500 hover:underline">
            Start a live chat
          </a>
        </p>
      </main>

 
      <footer className="bg-white text-gray-700 py-10 px-6 border-t mt-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg text-purple-700 mb-2">About Nexus Hive</h3>
            <p className="text-sm leading-relaxed">
              Nexus Hive is your gateway to modern learning—empowering individuals and organizations through hands-on coding, personalized upskilling, and collaborative learning platforms.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-purple-700 mb-2">Quick Links</h3>
            <ul className="text-sm space-y-1">
              <li><Link to="/terms" className="hover:underline">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
              <li><Link to="/faq" className="hover:underline">FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-purple-700 mb-2">Follow Us</h3>
            <div className="flex gap-4 text-lg mt-2">
              <a href="#" className="hover:text-purple-600"><FaFacebookF /></a>
              <a href="#" className="hover:text-purple-600"><FaTwitter /></a>
              <a href="#" className="hover:text-purple-600"><FaLinkedinIn /></a>
              <a href="#" className="hover:text-purple-600"><FaInstagram /></a>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-gray-500">
          © 2025 Nexus Hive. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default CreateAccountPage;
