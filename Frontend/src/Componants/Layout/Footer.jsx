import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-teal-700 text-black-400 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info Section */}
        <div className="flex flex-col items-start space-y-4">
          <div className="flex items-center space-x-2">
            {/* Replace with your logo */}
           
            <span style={{ fontFamily: "'Playfair Display', serif" }}   className="text-xl font-bold  text-black border-2 border-black">RIDEtoLADAKH</span>
          </div> 
          
          <p className="text-sm">
            Discover the land of high passes, ancient monasteries, and serene lakes. Your adventure in the Himalayas awaits.
          </p>
        </div>

       

        {/* Explore Section */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Explore Ladakh</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white transition-colors duration-200">Pangong Tso</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors duration-200">Nubra Valley</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors duration-200">Leh & Surrounds</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors duration-200">Zanskar Valley</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors duration-200">Monastery Tours</a>
            </li>
          </ul>
        </div>

        {/* Contact and Social Section */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Get In Touch</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <p>Email: <a href="mailto:info@ladakhexpeditions.com" className="hover:text-white transition-colors duration-200">info@ladakhexpeditions.com</a></p>
            </li>
            <li>
              <p>Phone: <a href="tel:+919876543210" className="hover:text-white transition-colors duration-200">+91 98765 43210</a></p>
            </li>
            <li>
              <p>Address: Main Market, Leh, Ladakh, 194101</p>
            </li>
          </ul>
          
          <div className="flex space-x-4 mt-4 text-xl">
            <a href="#" aria-label="Facebook" className="hover:text-white transition-colors duration-200">
              <FaFacebook />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white transition-colors duration-200">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-white transition-colors duration-200">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Ladakh Expeditions. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;