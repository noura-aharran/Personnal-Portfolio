"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Update scrolled state
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ['home', 'education', 'skills', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', text: 'Home' },
    { href: '#about', text: 'Education' },
    { href: '#skills', text: 'Skills' },
    { href: '#projects', text: 'Projects' },
    { href: '#certifications', text: 'Certifications' },
    { href: '#contact', text: 'Contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link 
          href="/" 
          className={`text-xl font-bold transition-colors duration-300 ${
            scrolled 
              ? 'bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-600' 
              : 'text-white'
          }`}
        >
          Noura Aharran
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`font-medium transition-all duration-300 relative ${
                activeSection === link.text.toLowerCase()
                  ? scrolled ? 'text-purple-600' : 'text-pink-400'
                  : scrolled ? 'text-gray-700 hover:text-purple-600' : 'text-gray-300 hover:text-pink-400'
              }`}
            >
              {link.text}
              {activeSection === link.text.toLowerCase() && (
                <motion.span 
                  className={`absolute -bottom-1 left-0 w-full h-0.5 rounded-full ${
                    scrolled 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-600' 
                      : 'bg-gradient-to-r from-pink-400 to-purple-400'
                  }`}
                  layoutId="navIndicator"
                />
              )}
            </Link>
          ))}
          
          <a 
            href="/AHARRAN_Noura.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 flex items-center group"
          >
            Resume 
            <FiArrowRight className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden transition-colors p-1 ${
            scrolled ? 'text-gray-700 hover:text-purple-600' : 'text-gray-300 hover:text-pink-400'
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-slate-900/95 backdrop-blur-md shadow-lg overflow-hidden border-t border-white/10"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link 
                    href={link.href}
                    className={`font-medium py-2 block transition-colors ${
                      activeSection === link.text.toLowerCase()
                        ? 'text-pink-400'
                        : 'text-gray-300 hover:text-pink-400'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.text}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="pt-2"
              >
                <a 
                  href="/AHARRAN_Noura.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 text-white font-medium inline-flex items-center hover:shadow-lg hover:shadow-purple-500/50 transition-shadow"
                  onClick={() => setIsOpen(false)}
                >
                  Resume <FiArrowRight className="ml-1" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;