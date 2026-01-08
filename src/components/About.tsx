"use client";

import { motion } from 'framer-motion';
import { FiBookOpen, FiCode, FiDatabase, FiUserCheck } from 'react-icons/fi';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-indigo-100 rounded-full mix-blend-multiply opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-black">About</span> <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#861088] to-[#660691]">Me</span>
          </h2>
          <div className="h-1.5 w-64 bg-gradient-to-r from-[#861088] to-[#660691] mx-auto rounded-full shadow-sm"></div>
          <p className="text-indigo-900 max-w-2xl mx-auto text-lg font-medium mt-6">
            Discovering the world through data and artificial intelligence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-white/50 overflow-hidden group"
          >
            {/* Card highlight effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-xl blur opacity-10 group-hover:opacity-20 transition duration-300"></div>
            
            <div className="relative">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">My Journey</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                I'm Noura Aharran, a dedicated 4th year Big Data and AI Engineering student at ENSA Tetouan.
                My academic journey has equipped me with a strong foundation in data analysis, machine learning,
                and artificial intelligence.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                I'm passionate about solving complex problems through innovative data-driven solutions.
                My goal is to leverage my technical skills and creativity to make meaningful contributions
                to the fields of Big Data and AI.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <motion.div 
                  className="flex items-center group/item"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-50 to-indigo-100 text-indigo-500 mr-4 group-hover/item:bg-indigo-500 group-hover/item:text-white transition-all duration-300 shadow-sm">
                    <FiUserCheck size={22} />
                  </div>
                  <span className="text-gray-700 font-medium">Team Collaboration</span>
                </motion.div>
                <motion.div 
                  className="flex items-center group/item"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="p-3 rounded-lg bg-gradient-to-br from-pink-50 to-pink-100 text-pink-500 mr-4 group-hover/item:bg-pink-500 group-hover/item:text-white transition-all duration-300 shadow-sm">
                    <FiDatabase size={22} />
                  </div>
                  <span className="text-gray-700 font-medium">Artificial Intelligence</span>
                </motion.div>
                <motion.div 
                  className="flex items-center group/item"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-50 to-indigo-100 text-indigo-500 mr-4 group-hover/item:bg-indigo-500 group-hover/item:text-white transition-all duration-300 shadow-sm">
                    <FiCode size={22} />
                  </div>
                  <span className="text-gray-700 font-medium">Problem Solving</span>
                </motion.div>
                <motion.div 
                  className="flex items-center group/item"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="p-3 rounded-lg bg-gradient-to-br from-pink-50 to-pink-100 text-pink-500 mr-4 group-hover/item:bg-pink-500 group-hover/item:text-white transition-all duration-300 shadow-sm">
                    <FiBookOpen size={22} />
                  </div>
                  <span className="text-gray-700 font-medium">Continuous Learning</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-white/50 overflow-hidden group"
          >
            {/* Card highlight effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-xl blur opacity-10 group-hover:opacity-20 transition duration-300"></div>
            
            <div className="relative">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Education & Experience</h3>
              
              <div className="mb-8 pl-6 border-l-2 border-gradient-to-b from-indigo-400 to-purple-400 relative">
                <div className="absolute w-5 h-5 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full -left-[11px] top-0 shadow-md shadow-indigo-500/20"></div>
                <h4 className="text-xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#861088] to-[#660691]">ENSA Tetouan</h4>
                <p className="text-gray-700">Big Data & AI Engineering</p>
                <p className="text-gray-600 text-sm mt-1">2021 - Present (4th Year)</p>
              </div>
              
              <div className="mb-8 pl-6 border-l-2 border-gradient-to-b from-indigo-400 to-purple-400 relative">
                <div className="absolute w-5 h-5 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full -left-[11px] top-0 shadow-md shadow-indigo-500/20"></div>
                <h4 className="text-xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#861088] to-[#660691]">FST Tanger</h4>
                <p className="text-gray-700">DEUST BCG</p>
                <p className="text-gray-600 text-sm mt-1">2021</p>
              </div>
              
              {/* You can add more education or experience items here */}
              
              <h3 className="text-2xl font-semibold mt-12 mb-6 text-gray-800">Areas of Interest</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div 
                  className="px-5 py-4 bg-white rounded-lg shadow-sm border border-indigo-100/50 hover:shadow-md transition-all hover:border-indigo-300 group/card"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <h4 className="text-indigo-600 font-medium mb-1 group-hover/card:text-indigo-700">Machine Learning</h4>
                  <p className="text-gray-700 text-sm">Deep Learning, Neural Networks</p>
                </motion.div>
                <motion.div 
                  className="px-5 py-4 bg-white rounded-lg shadow-sm border border-pink-100/50 hover:shadow-md transition-all hover:border-pink-300 group/card"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <h4 className="text-pink-600 font-medium mb-1 group-hover/card:text-pink-700">Big Data Analytics</h4>
                  <p className="text-gray-700 text-sm">Processing & Analysis Techniques</p>
                </motion.div>
                <motion.div 
                  className="px-5 py-4 bg-white rounded-lg shadow-sm border border-indigo-100/50 hover:shadow-md transition-all hover:border-indigo-300 group/card"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <h4 className="text-indigo-600 font-medium mb-1 group-hover/card:text-indigo-700">Natural Language Processing</h4>
                  <p className="text-gray-700 text-sm">Text Analysis & Understanding</p>
                </motion.div>
                <motion.div 
                  className="px-5 py-4 bg-white rounded-lg shadow-sm border border-pink-100/50 hover:shadow-md transition-all hover:border-pink-300 group/card"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <h4 className="text-pink-600 font-medium mb-1 group-hover/card:text-pink-700">Data Visualization</h4>
                  <p className="text-gray-700 text-sm">Interactive Analytics & Dashboards</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 