import React from 'react'
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center py-6 mt-10">
      <p className="text-gray-600 mb-7">&copy; 2025 BlogSite. All rights reserved.</p>
      
      <div className="flex justify-center gap-5">
        <a href="#" className="text-gray-500 hover:text-blue-500">
          <FaFacebook size={24} />
        </a>
        <a href="#" className="text-gray-500 hover:text-blue-400">
          <FaSquareXTwitter size={24} />
        </a>
        <a href="#" className="text-gray-500 hover:text-blue-700">
          <FaLinkedin size={24} />
        </a>
        <a href="#" className="text-gray-500 hover:text-pink-500">
          <FaInstagram size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
