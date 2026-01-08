"use client";

import { motion } from 'framer-motion';
import { FiArrowDown, FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

const Hero = () => {
  const containerRef = useRef(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [tiltRotation, setTiltRotation] = useState({ x: 0, y: 0 });

  // 3D tilt effect based on mouse position
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Calculate tilt angles (max 10 degrees)
      const rotateY = ((x / rect.width) - 0.5) * -20;
      const rotateX = ((y / rect.height) - 0.5) * 20;
      
      setTiltRotation({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
      setTiltRotation({ x: 0, y: 0 });
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center py-20"
    >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 z-10"
      >
        <div className="grid grid-cols-1 gap-16 items-center md:grid-cols-12">
          {/* Text content */}
          <motion.div
            className="text-center md:text-left md:col-span-7"
          >
            {/* Subtle tag line */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-block mb-4 px-4 py-1.5 bg-white bg-opacity-50 backdrop-blur-sm text-indigo-600 rounded-full text-sm font-medium border border-indigo-100/30 shadow-sm"
            >
              Big Data & AI Engineering Student
            </motion.div>
            
            {/* Main headings */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900">
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="block mb-1"
                >
                  Hi, I'm
                </motion.span>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="relative inline-block"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#861088] via-[#7a0990] to-[#660691] relative z-10">
                    Noura Aharran
                  </span>
                  <motion.div 
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
                    className="absolute -bottom-2 left-0 h-3 bg-gradient-to-r from-[#861088]/60 to-[#660691]/60 w-full -z-10 rounded-sm"
                  ></motion.div>
                </motion.div>
              </h1>
              
              {/* Description paragraph */}
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-gray-600 text-lg max-w-xl mx-auto md:mx-0 leading-relaxed"
              >
                Passionate about leveraging data and AI to solve complex problems.
                I transform raw data into meaningful insights that drive innovation and create 
                impactful solutions for real-world challenges across various domains.
              </motion.p>
            </div>
            
            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="mt-8 flex flex-col sm:flex-row gap-5 justify-center md:justify-start"
            >
              {/* Primary button - Get in Touch */}
              <Link 
                href="#contact" 
                className="group relative overflow-hidden rounded-full bg-white/10 p-[1px] shadow-lg"
              >
                <div className="absolute inset-[-2px] bg-gradient-to-r from-[#861088] to-[#660691] rounded-full opacity-70 group-hover:opacity-100 blur-sm transition duration-500 group-hover:blur-md"></div>
                <div className="relative flex items-center justify-center bg-white backdrop-blur-sm hover:bg-gradient-to-r hover:from-[#861088] hover:to-[#660691] px-8 py-3.5 rounded-full transition-all duration-300 group-hover:text-white">
                  <span className="relative z-10 flex items-center font-medium">
                    Get in Touch
                    <motion.svg 
                      className="w-5 h-5 ml-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                      initial={{ x: 0 }}
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", repeatDelay: 3 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </motion.svg>
                  </span>
                </div>
              </Link>
              
              {/* Secondary button - View Projects */}
              <Link 
                href="#projects" 
                className="group relative overflow-hidden rounded-full"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/40 to-pink-500/40 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 blur-sm"></div>
                <div className="relative flex items-center justify-center text-gray-800 rounded-full transition-all duration-300 bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm hover:shadow-lg px-8 py-3.5 overflow-hidden">
                  <span className="relative z-10 flex items-center font-medium">
                    <span className="mr-1">View Projects</span>
                    <svg className="w-4 h-4 ml-1 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="mt-12 flex gap-5 justify-center md:justify-start"
            >
              <motion.a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                whileHover={{ y: -5, scale: 1.1 }}
                className="group relative p-0.5 rounded-full"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 blur-[1px]"></div>
                <div className="relative p-3 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/60 text-gray-600 group-hover:text-white group-hover:border-indigo-200 group-hover:bg-indigo-500 transition-all duration-300 shadow-sm group-hover:shadow-indigo-500/20 group-hover:shadow-lg"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin size={20} />
                </div>
              </motion.a>
              
              <motion.a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                whileHover={{ y: -5, scale: 1.1 }}
                className="group relative p-0.5 rounded-full"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 blur-[1px]"></div>
                <div className="relative p-3 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/60 text-gray-600 group-hover:text-white group-hover:border-indigo-200 group-hover:bg-indigo-500 transition-all duration-300 shadow-sm group-hover:shadow-indigo-500/20 group-hover:shadow-lg"
                  aria-label="GitHub"
                >
                  <FiGithub size={20} />
                </div>
              </motion.a>
              
              <motion.a 
                href="mailto:contact@example.com" 
                whileHover={{ y: -5, scale: 1.1 }}
                className="group relative p-0.5 rounded-full"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 blur-[1px]"></div>
                <div className="relative p-3 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/60 text-gray-600 group-hover:text-white group-hover:border-pink-200 group-hover:bg-pink-500 transition-all duration-300 shadow-sm group-hover:shadow-pink-500/20 group-hover:shadow-lg"
                  aria-label="Email"
                >
                  <FiMail size={20} />
                </div>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Image/Visual column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="relative hidden md:block md:col-span-5"
          >
            <motion.div 
              className="relative w-full aspect-square max-w-lg mx-auto"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glowing orb background */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 blur-2xl"></div>
              
              {/* Card with glass effect and 3D perspective tilt */}
              <motion.div 
                ref={cardRef}
                className="relative w-full h-full rounded-2xl bg-white/20 backdrop-filter backdrop-blur-lg border border-white/30 shadow-xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                animate={{
                  rotateX: tiltRotation.x,
                  rotateY: tiltRotation.y,
                  transition: { type: "spring", stiffness: 300, damping: 30 }
                }}
                style={{ perspective: 1000 }}
              >
                {/* Inner design elements */}
                <motion.div
                  animate={{ 
                    rotate: [0, 5, 0, -5, 0],
                    scale: [1, 1.02, 1, 0.98, 1]
                  }}
                  transition={{ duration: 15, repeat: Infinity }}
                  className="absolute inset-4 rounded-xl bg-gradient-to-br from-white/60 to-white/20 backdrop-blur-md flex items-center justify-center"
                >
                  {/* Orbit ring */}
                  <div className="absolute w-[90%] h-[90%] rounded-full border border-indigo-200/40 animate-spin-very-slow">
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-indigo-400 rounded-full shadow-lg shadow-indigo-400/30"></div>
                  </div>
                  
                  {/* Profile circle with enhanced interactivity */}
                  <motion.div 
                    className="relative w-[65%] h-[65%] bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40 shadow-lg overflow-hidden group"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.4)"
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 400, 
                      damping: 10 
                    }}
                  >
                    {/* Interactive glow effects on hover */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-[#861088]/0 via-[#7a0990]/0 to-[#660691]/0 opacity-0 group-hover:opacity-100 group-hover:from-[#861088]/30 group-hover:via-[#7a0990]/30 group-hover:to-[#660691]/30 transition-all duration-700 blur-xl"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    ></motion.div>
                    
                    {/* Rotating gradient border with pulse effect */}
                    <motion.div 
                      className="absolute -inset-1 bg-gradient-to-r from-[#861088] via-[#7a0990] to-[#660691] rounded-full blur-md opacity-70 group-hover:opacity-100 animate-spin-very-slow"
                      animate={{ 
                        scale: [1, 1.05, 1],
                        opacity: [0.7, 0.9, 0.7]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        repeatType: "mirror" 
                      }}
                    ></motion.div>
                    
                    {/* White inner container */}
                    <div className="absolute inset-[3px] bg-white rounded-full flex items-center justify-center z-10">
                      {/* Animated background pattern */}
                      <div className="absolute inset-0 opacity-30">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white"></div>
                        <div className="absolute inset-0" style={{ 
                          backgroundImage: `radial-gradient(circle at 20% 40%, rgba(99, 102, 241, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 60%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)`,
                          backgroundSize: '100% 100%'
                        }}></div>
                      </div>
                    
                      {/* Profile image placeholder with enhanced styling */}
                      <div className="relative w-full h-full rounded-full flex items-center justify-center overflow-hidden z-20 cursor-pointer" 
                        onClick={(e) => {
                          // Create ripple effect on click
                          const circle = document.createElement('div');
                          const diameter = Math.max(e.currentTarget.clientWidth, e.currentTarget.clientHeight);
                          const radius = diameter / 2;
                          
                          circle.style.width = circle.style.height = `${diameter}px`;
                          circle.style.left = `${e.clientX - e.currentTarget.getBoundingClientRect().left - radius}px`;
                          circle.style.top = `${e.clientY - e.currentTarget.getBoundingClientRect().top - radius}px`;
                          circle.classList.add('absolute', 'bg-white/30', 'rounded-full', 'pointer-events-none', 'origin-center', 'scale-0');
                          
                          e.currentTarget.appendChild(circle);
                          
                          // Trigger animation
                          requestAnimationFrame(() => {
                            circle.classList.add('transition-all', 'duration-700');
                            circle.classList.remove('scale-0');
                            circle.classList.add('scale-100', 'opacity-0');
                            
                            // Remove after animation
                            setTimeout(() => {
                              circle.remove();
                            }, 700);
                          });
                        }}
                      >
                        {/* Dynamic gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
                        
                        {/* Animated mesh grid pattern */}
                        <div className="absolute inset-0 opacity-10"
                          style={{
                            backgroundImage: `linear-gradient(to right, rgba(99, 102, 241, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(99, 102, 241, 0.3) 1px, transparent 1px)`,
                            backgroundSize: '10px 10px'
                          }}
                        ></div>
                        
                        {/* Animated particles */}
                        {Array.from({ length: 6 }).map((_, i) => (
                          <motion.div
                            key={`particle-${i}`}
                            className="absolute w-1 h-1 rounded-full bg-indigo-400/50"
                            initial={{ 
                              x: Math.random() * 100 - 50, 
                              y: Math.random() * 100 - 50,
                              opacity: 0 
                            }}
                            animate={{ 
                              x: Math.random() * 100 - 50, 
                              y: Math.random() * 100 - 50,
                              opacity: [0, 1, 0]
                            }}
                            transition={{ 
                              duration: 3 + Math.random() * 3,
                              repeat: Infinity,
                              delay: Math.random() * 2
                            }}
                          />
                        ))}
                        
                        {/* Profile image */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 1 }}
                          className="relative w-full h-full z-30 flex items-center justify-center"
                        >
                          <div className="w-full h-full relative">
                            {/* Fallback placeholder shown by default */}
                            <div className="absolute inset-0 rounded-full flex items-center justify-center bg-gradient-to-br from-[#861088]/80 to-[#660691]/80">
                              <span className="text-white font-medium text-xl">NA</span>
                            </div>
                            
                            {/* Try multiple image paths to find the correct one */}
                            <Image
                              src="/images/tech/noura.jpg"
                              alt="Noura Aharran"
                              fill
                              sizes="(max-width: 768px) 100vw, 300px"
                              priority
                              className="object-cover rounded-full z-10 relative"
                              onError={(e) => {
                                // If image still fails to load, hide it and show fallback
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                              }}
                            />
                          </div>
                        </motion.div>
                      </div>
                    </div>
                    
                    {/* Multiple scanner line effects */}
                    <motion.div
                      initial={{ y: -100, opacity: 0.7 }}
                      animate={{ y: 100, opacity: 0 }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity, 
                        repeatType: "loop",
                        repeatDelay: 0.5
                      }}
                      className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-indigo-400/70 to-transparent z-20"
                    ></motion.div>
                    
                    <motion.div
                      initial={{ y: -80, opacity: 0 }}
                      animate={{ y: 100, opacity: 0.5 }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        repeatType: "loop",
                        delay: 0.7,
                        repeatDelay: 1
                      }}
                      className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-pink-400/70 to-transparent z-20"
                    ></motion.div>
                  </motion.div>
                  
                  {/* Outer orbit rings */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[115%] h-[115%] rounded-full border border-indigo-200/20"
                  >
                    <div className="absolute -top-1 -left-1 w-2 h-2 bg-indigo-400 rounded-full shadow-lg shadow-indigo-400/50"></div>
                    <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-pink-400 rounded-full shadow-lg shadow-pink-400/50"></div>
                  </motion.div>
                  
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[105%] h-[105%] rounded-full border border-pink-200/20"
                  >
                    <div className="absolute top-1/2 -right-1 w-1.5 h-1.5 bg-pink-400 rounded-full shadow-lg shadow-pink-400/50"></div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
      >
        <Link href="#about">
          <motion.div 
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg text-indigo-500 hover:text-pink-500 transition-colors border border-white/30 group"
          >
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FiArrowDown size={20} className="group-hover:stroke-[2.5px]" />
            </motion.div>
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero; 