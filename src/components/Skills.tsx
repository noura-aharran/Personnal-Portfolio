"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiCode, FiDatabase, FiServer, FiLayers, FiBarChart2, FiZap, FiCpu, FiCloud, FiTerminal, FiType } from 'react-icons/fi';
import { SiPython, SiTensorflow, SiPytorch, SiApachespark, SiMongodb, SiPostgresql, SiDocker, SiGit, SiTableau, SiScikitlearn, SiApachehadoop } from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { GiBrain } from 'react-icons/gi';

const Skills = () => {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <FiCode size={24} />,
      color: "indigo",
      skills: [
        { name: "Python", icon: <SiPython size={20} />, level: 95 },
        { name: "SQL", icon: <FiDatabase size={20} />, level: 60 },
        { name: "Java", icon: <DiJava size={20} />, level: 80 },
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: <FiLayers size={24} />,
      color: "pink",
      skills: [
        { name: "TensorFlow", icon: <SiTensorflow size={20} />, level: 85 },
        { name: "Scikit-Learn", icon: <SiScikitlearn size={20} />, level: 90 },
        { name: "Numpy", icon: <FiCpu size={20} />, level: 95 },
        { name: "Pandas", icon: <FiDatabase size={20} />, level: 95 },
        { name: "OpenCV", icon: <FiZap size={20} />, level: 85 },
        { name: "NLP/NLTK", icon: <GiBrain size={20} />, level: 80 },
        { name: "Matplotlib", icon: <FiBarChart2 size={20} />, level: 90 },
        { name: "Seaborn", icon: <FiBarChart2 size={20} />, level: 90 },
      ]
    },
    {
      title: "Big Data",
      icon: <FiDatabase size={24} />,
      color: "indigo",
      skills: [
        { name: "Apache Spark", icon: <SiApachespark size={20} />, level: 75 },
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <FiServer size={24} />,
      color: "pink",
      skills: [
        { name: "Power BI", icon: <FiBarChart2 size={20} />, level: 90 },
        { name: "VS Code", icon: <FiTerminal size={20} />, level: 95 },
        { name: "GitHub", icon: <SiGit size={20} />, level: 95 },
        { name: "Django", icon: <FiType size={20} />, level: 85 },
      ]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const skillItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    },
    hover: { 
      scale: 1.05,
      x: 8,
      transition: { duration: 0.2, type: "spring", stiffness: 400, damping: 10 }
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-100 rounded-full mix-blend-multiply opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-40 left-40 w-80 h-80 bg-pink-100 rounded-full mix-blend-multiply opacity-20 animate-blob animation-delay-1000"></div>
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
            <span className="text-black">My</span> <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#861088] to-[#660691]">Skills</span>
          </h2>
          <div className="h-1.5 w-64 bg-gradient-to-r from-[#861088] to-[#660691] mx-auto rounded-full shadow-sm"></div>
          <p className="text-indigo-900 max-w-2xl mx-auto text-lg font-medium mt-6">
            My technical expertise spans across various domains of data science, AI, and software development.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              className="relative group backdrop-blur-sm"
              variants={itemVariants}
              onHoverStart={() => setHoveredCategory(index)}
              onHoverEnd={() => setHoveredCategory(null)}
            >
              {/* Card background effects */}
              <div className="absolute inset-0 bg-white rounded-2xl shadow-lg opacity-80"></div>
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color === 'indigo' ? 'from-indigo-500/10 to-purple-500/10' : 'from-pink-500/10 to-purple-500/10'} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              <div className="absolute -inset-0.5 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300"></div>
              
              <div className="p-6 relative rounded-2xl overflow-hidden z-10 h-full">
                <div className="relative z-10">
                  <div className={`flex items-center mb-6`}>
                    <div className={`p-3 rounded-lg ${category.color === 'indigo' ? 'bg-gradient-to-br from-indigo-50 to-indigo-100 text-indigo-500 group-hover:from-indigo-500 group-hover:to-indigo-600' : 'bg-gradient-to-br from-pink-50 to-pink-100 text-pink-500 group-hover:from-pink-500 group-hover:to-pink-600'} group-hover:text-white mr-4 transition-all duration-300 shadow-sm`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.li 
                        key={skillIndex} 
                        className="flex items-center justify-between text-gray-700 relative"
                        variants={skillItemVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        onHoverStart={() => setHoveredSkill(skill.name)}
                        onHoverEnd={() => setHoveredSkill(null)}
                      >
                        {hoveredSkill === skill.name && (
                          <motion.div 
                            layoutId="skill-highlight"
                            className={`absolute inset-0 -mx-2 -my-1 px-2 py-1 rounded-md ${category.color === 'indigo' ? 'bg-indigo-50' : 'bg-pink-50'} -z-10`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          />
                        )}
                        <div className="flex items-center">
                          {skill.icon ? (
                            <span className={`mr-3 ${category.color === 'indigo' ? 'text-indigo-500' : 'text-pink-500'} opacity-80 group-hover:opacity-100 transition-opacity`}>{skill.icon}</span>
                          ) : (
                            <span className="w-5 h-5 mr-3"></span>
                          )}
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <div className="w-16 flex-shrink-0">
                          <div className="h-1 w-full bg-gray-100 rounded overflow-hidden">
                            <motion.div 
                              className={`h-full ${category.color === 'indigo' ? 'bg-indigo-500' : 'bg-pink-500'}`}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${(skill.level / 100) * 100}%` }}
                              transition={{ duration: 0.5, delay: 0.2 + skillIndex * 0.1 }}
                              viewport={{ once: true }}
                            />
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Floating indicator for hovered category */}
                <AnimatePresence>
                  {hoveredCategory === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute bottom-3 right-3"
                    >
                      <div className={`p-1.5 rounded-full ${category.color === 'indigo' ? 'bg-indigo-500' : 'bg-pink-500'} text-white shadow-lg`}>
                        <FiZap size={12} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Proficiency with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24 max-w-3xl mx-auto"
        >
          <div className="backdrop-blur-sm bg-white/80 rounded-2xl p-8 shadow-xl border border-white/50 relative overflow-hidden">
            {/* Card glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-pink-500/20 rounded-2xl blur opacity-70"></div>
            
            <div className="relative">
              <h3 className="text-2xl font-semibold mb-8 text-center text-gray-800">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#861088] to-[#660691]">Proficiency</span>
              </h3>
              <div className="space-y-7">
                {[
                  { name: "Data Analysis", percentage: 70, color: "from-indigo-500 via-indigo-600 to-purple-500" },
                  { name: "Machine Learning", percentage: 85, color: "from-pink-400 via-pink-500 to-purple-500" },
                  { name: "Big Data Technologies", percentage: 30, color: "from-indigo-400 via-indigo-500 to-purple-500" },
                  { name: "Data Visualization", percentage: 75, color: "from-pink-500 via-purple-500 to-indigo-500" },
                  { name: "Cloud Computing", percentage: 50, color: "from-indigo-500 via-purple-500 to-pink-500" }
                ].map((skill, index) => (
                  <div key={index} className="relative">
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex justify-between mb-3"
                    >
                      <span className="font-medium text-gray-800">{skill.name}</span>
                      <motion.span 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-600"
                      >
                        {skill.percentage}%
                      </motion.span>
                    </motion.div>
                    <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden shadow-inner relative">
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        transition={{ 
                          duration: 1.5, 
                          delay: 0.2 + index * 0.1,
                          ease: [0.34, 1.56, 0.64, 1] // Spring-like effect
                        }}
                        viewport={{ once: true }}
                      />
                      <motion.div
                        className={`absolute inset-0 h-full rounded-full bg-gradient-to-r ${skill.color} opacity-30`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        transition={{ 
                          duration: 2, 
                          delay: 0.5 + index * 0.1,
                          ease: [0.25, 0.1, 0.25, 1]
                        }}
                        viewport={{ once: true }}
                        style={{ filter: 'blur(4px)' }}
                      />
                      {/* Animated glow particles */}
                      <motion.div
                        className="absolute top-0 right-0 h-full flex items-center"
                        initial={{ x: 0 }}
                        whileInView={{ x: `${skill.percentage}%` }}
                        transition={{ 
                          duration: 1.5, 
                          delay: 0.2 + index * 0.1,
                          ease: [0.34, 1.56, 0.64, 1]
                        }}
                        viewport={{ once: true }}
                      >
                        <span className="h-4 w-2 bg-white rounded-full opacity-70 blur-sm"></span>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 