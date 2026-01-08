"use client";

import { FiLinkedin, FiArrowUp } from 'react-icons/fi';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-white text-gray-800 border-t border-gray-100 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand */}
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#861088] to-[#660691]">
              Noura Aharran
            </Link>
          </div>
          
          {/* Creator Attribution */}
          <motion.a 
            href="https://ma.linkedin.com/in/abdellah-raissouni-1419432a8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 rounded-full border border-gray-200 group transition-all duration-300 hover:border-indigo-300 hover:bg-gray-50"
            whileHover={{ y: -2, boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)" }}
          >
            <span className="text-gray-600 text-sm">Made by Abdellah Raissouni</span>
            <div className="ml-2 flex items-center">
              <FiLinkedin className="text-indigo-500 transform transition-transform duration-300 group-hover:scale-110" size={16} />
            </div>
          </motion.a>
          
          {/* Scroll to top button */}
          <button 
            onClick={scrollToTop}
            className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-pink-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md hidden md:block"
            aria-label="Scroll to top"
          >
            <FiArrowUp size={16} />
          </button>
        </div>
        
        {/* Copyright */}
        <div className="text-center mt-4 text-xs text-gray-500">
          &copy; {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 