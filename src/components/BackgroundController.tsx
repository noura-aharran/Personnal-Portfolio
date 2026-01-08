"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

const BackgroundController = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isClient, setIsClient] = useState(false);
  
  // Track scroll position for color transitions
  useEffect(() => {
    setIsClient(true);
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Calculate which section we're in
  const { scrollYProgress } = useScroll();
  
  // Transform values based on scroll
  const opacity1 = useTransform(
    scrollYProgress, 
    [0, 0.2, 0.3], 
    [0.7, 0.3, 0]
  );
  
  const opacity2 = useTransform(
    scrollYProgress, 
    [0.2, 0.3, 0.5, 0.6], 
    [0, 0.7, 0.7, 0]
  );
  
  const opacity3 = useTransform(
    scrollYProgress, 
    [0.5, 0.6, 0.8, 0.9], 
    [0, 0.7, 0.7, 0]
  );
  
  const opacity4 = useTransform(
    scrollYProgress, 
    [0.8, 0.9], 
    [0, 0.7]
  );

  const scale1 = useTransform(
    scrollYProgress,
    [0, 0.3],
    [1, 0.9]
  );

  const scale2 = useTransform(
    scrollYProgress,
    [0.2, 0.5],
    [0.9, 1]
  );

  // Seeded random number generator for consistent values
  const seededRandom = (seed: number) => {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  };

  // Generate consistent particle positions
  const particles = Array.from({ length: 40 }).map((_, i) => {
    const seed = i * 1000;
    return {
      top: `${seededRandom(seed) * 100}%`,
      left: `${seededRandom(seed + 1) * 100}%`,
      opacity: 0.1 + seededRandom(seed + 2) * 0.3,
      scale: 0.5 + seededRandom(seed + 3) * 0.5,
      color: i % 6 === 0 ? 'bg-indigo-400/30' : 
             i % 6 === 1 ? 'bg-pink-400/30' : 
             i % 6 === 2 ? 'bg-purple-400/30' :
             i % 6 === 3 ? 'bg-blue-400/30' : 
             i % 6 === 4 ? 'bg-teal-400/30' : 'bg-violet-400/30',
      size: i % 4 === 0 ? '1.5' : '1'
    };
  });

  return (
    <div className="fixed inset-0 -z-5 overflow-hidden pointer-events-none">
      {/* Enhanced animated spotlight that follows scroll */}
      <div 
        className="absolute opacity-30 w-[1000px] h-[1000px] rounded-full pointer-events-none transition-transform duration-1000 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 70%)',
          transform: isClient ? `translate(${scrollY * 0.05}px, ${Math.min(scrollY * 0.02, 30)}px)` : 'translate(0px, 0px)',
        }}
      />
      
      {/* Section 1 (Hero) accents - improved aesthetics */}
      <motion.div 
        style={{ opacity: opacity1, scale: scale1 }}
        className="absolute inset-0"
      >
        <div className="absolute top-1/3 right-1/4 w-[45rem] h-[45rem] bg-indigo-300/20 rounded-full mix-blend-normal filter blur-[140px]"></div>
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
          className="absolute bottom-1/3 left-1/4 w-[35rem] h-[35rem] bg-pink-300/20 rounded-full mix-blend-normal filter blur-[120px]"
        ></motion.div>
        <motion.div 
          animate={{ 
            scale: [0.9, 1, 0.9],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "mirror", delay: 2 }}
          className="absolute bottom-1/4 right-1/3 w-[25rem] h-[25rem] bg-purple-300/15 rounded-full mix-blend-normal filter blur-[90px]"
        ></motion.div>
      </motion.div>
      
      {/* Section 2 (About) accents - improved aesthetics */}
      <motion.div 
        style={{ opacity: opacity2, scale: scale2 }}
        className="absolute inset-0"
      >
        <div className="absolute top-1/4 left-1/4 w-[50rem] h-[50rem] bg-blue-300/20 rounded-full mix-blend-normal filter blur-[150px]"></div>
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
          className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] bg-cyan-300/20 rounded-full mix-blend-normal filter blur-[120px]"
        ></motion.div>
        <motion.div 
          animate={{ 
            scale: [0.95, 1.05, 0.95],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "mirror", delay: 1 }}
          className="absolute top-1/3 right-1/3 w-[25rem] h-[25rem] bg-teal-300/15 rounded-full mix-blend-normal filter blur-[100px]"
        ></motion.div>
      </motion.div>
      
      {/* Section 3 (Skills) accents - improved aesthetics */}
      <motion.div 
        style={{ opacity: opacity3 }}
        className="absolute inset-0"
      >
        <div className="absolute top-1/3 left-1/3 w-[45rem] h-[45rem] bg-purple-300/20 rounded-full mix-blend-normal filter blur-[140px]"></div>
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 9, repeat: Infinity, repeatType: "mirror" }}
          className="absolute bottom-1/3 right-1/3 w-[40rem] h-[40rem] bg-violet-300/20 rounded-full mix-blend-normal filter blur-[130px]"
        ></motion.div>
        <motion.div 
          animate={{ 
            scale: [0.9, 1, 0.9],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "mirror", delay: 3 }}
          className="absolute top-1/4 right-1/4 w-[30rem] h-[30rem] bg-amber-300/15 rounded-full mix-blend-normal filter blur-[110px]"
        ></motion.div>
      </motion.div>
      
      {/* Section 4 (Projects & Contact) accents - improved aesthetics */}
      <motion.div 
        style={{ opacity: opacity4 }}
        className="absolute inset-0"
      >
        <div className="absolute top-1/4 right-1/3 w-[50rem] h-[50rem] bg-rose-300/20 rounded-full mix-blend-normal filter blur-[150px]"></div>
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
          className="absolute bottom-1/4 left-1/3 w-[45rem] h-[45rem] bg-fuchsia-300/20 rounded-full mix-blend-normal filter blur-[140px]"
        ></motion.div>
        <motion.div 
          animate={{ 
            scale: [0.95, 1.05, 0.95],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 14, repeat: Infinity, repeatType: "mirror", delay: 2 }}
          className="absolute bottom-1/3 right-1/4 w-[35rem] h-[35rem] bg-violet-300/15 rounded-full mix-blend-normal filter blur-[120px]"
        ></motion.div>
      </motion.div>
      
      {/* Enhanced animated particles with better distribution and aesthetics */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle, i) => (
          <motion.div
            key={`particle-${i}`}
            className={`absolute w-${particle.size} h-${particle.size} rounded-full ${particle.color}`}
            style={{
              top: particle.top,
              left: particle.left,
              x: isClient ? `${scrollY * (seededRandom(i * 1000 + 4) * 0.1 - 0.05)}px` : '0px',
              y: isClient ? `${scrollY * (seededRandom(i * 1000 + 5) * 0.05 - 0.025)}px` : '0px',
              opacity: isClient ? particle.opacity + Math.sin(scrollY * 0.01 + i) * 0.3 : particle.opacity,
              scale: isClient ? particle.scale + Math.sin(scrollY * 0.005 + i) * 0.5 : particle.scale,
              filter: 'blur(0.5px)'
            }}
          />
        ))}
      </div>
      
      {/* Decorative grid lines that respond to scroll */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <motion.div 
          style={{ 
            y: isClient ? scrollY * 0.03 : 0,
            opacity: isClient ? 0.3 + Math.sin(scrollY * 0.001) * 0.1 : 0.3
          }}
          className="absolute top-[15%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent"
        ></motion.div>
        <motion.div 
          style={{ 
            y: isClient ? scrollY * -0.02 : 0,
            opacity: isClient ? 0.3 + Math.sin(scrollY * 0.001 + 2) * 0.1 : 0.3
          }}
          className="absolute top-[35%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-pink-400 to-transparent"
        ></motion.div>
        <motion.div 
          style={{ 
            y: isClient ? scrollY * 0.04 : 0,
            opacity: isClient ? 0.3 + Math.sin(scrollY * 0.001 + 4) * 0.1 : 0.3
          }}
          className="absolute top-[65%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent"
        ></motion.div>
        <motion.div 
          style={{ 
            y: isClient ? scrollY * -0.03 : 0,
            opacity: isClient ? 0.3 + Math.sin(scrollY * 0.001 + 6) * 0.1 : 0.3
          }}
          className="absolute top-[85%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-pink-400 to-transparent"
        ></motion.div>
      </div>
    </div>
  );
};

export default BackgroundController; 