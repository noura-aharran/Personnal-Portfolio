"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiCode, FiDatabase, FiServer, FiMessageSquare, FiUsers, FiTool, FiRefreshCw, FiSearch,  FiLayers, FiBarChart2, FiPackage, FiZap, FiCpu, FiTerminal, FiType, FiEye } from 'react-icons/fi';
import { SiPython, SiTensorflow, SiPytorch, SiApachespark, SiFlask, SiReact, SiMapbox, SiFastapi, SiMongodb, SiMysql, SiGoogle, SiJavascript, SiKeras, SiDeepnote,  SiDocker, SiGit, SiScikitlearn } from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { GiBrain } from 'react-icons/gi';

const Skills = () => {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
  {
    title: "Programming, Big Data & Data Engineering",
    icon: <FiCode size={24} />,
    color: "indigo",
    skills: [
      { name: "Python", icon: <SiPython size={20} />, level: 95 },
      { name: "SQL", icon: <FiDatabase size={20} />, level: 85 },
      { name: "Java", icon: <DiJava size={20} />, level: 30 },
      { name: "JavaScript", icon: <SiJavascript size={20} />, level: 30 },
      { name: "Apache Spark", icon: <SiApachespark size={20} />, level: 75 },
      { name: "ETL", icon: <FiPackage size={20} />, level: 80 },
      { name: "MongoDB", icon: <SiMongodb size={20} />, level: 75 },
      { name: "MySQL", icon: <SiMysql size={20} />, level: 80 },
      { name: "PySpark", icon: <FiDatabase  size={20} />, level: 70 },
    ]
  },
  {
    title: "AI & Machine Learning",
    icon: <FiLayers size={24} />,
    color: "pink",
    skills: [
      { name: "TensorFlow", icon: <SiTensorflow size={20} />, level: 90 },
      { name: "Keras", icon: <SiKeras size={20} />, level: 85 },
      { name: "Scikit-Learn", icon: <SiScikitlearn size={20} />, level: 95 },
      { name: "PyTorch", icon: <SiPytorch size={20} />, level: 70 },
      { name: "Numpy", icon: <FiCpu size={20} />, level: 95 },
      { name: "Pandas", icon: <FiDatabase size={20} />, level: 95 },
      { name: "OpenCV", icon: <FiZap size={20} />, level: 85 },
      { name: "MediaPipe", icon: <SiGoogle size={20} />, level: 70 },
      { name: "NLP/NLTK", icon: <GiBrain size={20} />, level: 80 },
      { name: "Matplotlib", icon: <FiBarChart2 size={20} />, level: 90 },
      { name: "Seaborn", icon: <FiBarChart2 size={20} />, level: 90 },
      { name: "Computer Vision", icon: <FiEye size={20} />, level: 85 },
      { name: "Deep Learning", icon: <SiDeepnote size={20} />, level: 85 },
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
      { name: "FastAPI", icon: <SiFastapi size={20} />, level: 80 },
      { name: "Flask", icon: <SiFlask size={20} />, level: 75 },
      { name: "Docker", icon: <SiDocker size={20} />, level: 80 },
      { name: "REST APIs", icon: <FiServer size={20} />, level: 85 },
      { name: "React", icon: <SiReact size={20} />, level: 70 },
      { name: "Mapbox", icon: <SiMapbox size={20} />, level: 65 },
    ]
  },
  {
    title: "Soft Skills",
    icon: <FiUsers size={24} />,
    color: "yellow-400",
    skills: [
      { name: "Communication", icon: <FiMessageSquare size={20} />, level: 90 },
      { name: "Teamwork", icon: <FiUsers size={20} />, level: 95 },
      { name: "Problem Solving", icon: <FiTool size={20} />, level: 90 },
      { name: "Adaptability", icon: <FiRefreshCw size={20} />, level: 85 },
      { name: "Curiosity", icon: <FiSearch size={20} />, level: 90 },
      { name: "Analytical Thinking", icon: <FiCpu size={20} />, level: 95 },
    ]
  },
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
    <section id="skills" className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-screen opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-pink-500/10 rounded-full mix-blend-screen opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/10 rounded-full mix-blend-screen opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-40 left-40 w-80 h-80 bg-pink-500/10 rounded-full mix-blend-screen opacity-30 animate-blob animation-delay-1000"></div>
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
            <span className="text-white">My</span> <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Skills</span>
          </h2>
          <div className="h-1.5 w-64 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full shadow-lg"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg font-medium mt-6">
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
              className="relative group"
              variants={itemVariants}
              onHoverStart={() => setHoveredCategory(index)}
              onHoverEnd={() => setHoveredCategory(null)}
            >
              {/* Card background effects */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl"></div>
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color === 'indigo' ? 'from-purple-500/20 to-indigo-500/20' : 'from-pink-500/20 to-purple-500/20'} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-300"></div>
              
              <div className="p-6 relative rounded-2xl overflow-hidden z-10 h-full">
                <div className="relative z-10">
                  <div className={`flex items-center mb-6`}>
                    <div className={`p-3 rounded-lg ${category.color === 'indigo' ? 'bg-purple-500/20 text-purple-300 group-hover:bg-purple-500 group-hover:text-white' : 'bg-pink-500/20 text-pink-300 group-hover:bg-pink-500 group-hover:text-white'} mr-4 transition-all duration-300 shadow-lg border border-white/10`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.li 
                        key={skillIndex} 
                        className="flex items-center justify-between text-gray-200 relative"
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
                            className={`absolute inset-0 -mx-2 -my-1 px-2 py-1 rounded-md ${category.color === 'indigo' ? 'bg-purple-500/20' : 'bg-pink-500/20'} -z-10`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          />
                        )}
                        <div className="flex items-center">
                          {skill.icon ? (
                            <span className={`mr-3 ${category.color === 'indigo' ? 'text-purple-400' : 'text-pink-400'} opacity-80 group-hover:opacity-100 transition-opacity`}>{skill.icon}</span>
                          ) : (
                            <span className="w-5 h-5 mr-3"></span>
                          )}
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <div className="w-16 flex-shrink-0">
                          <div className="h-1 w-full bg-white/10 rounded overflow-hidden">
                            <motion.div 
                              className={`h-full ${category.color === 'indigo' ? 'bg-purple-500' : 'bg-pink-500'}`}
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
                      <div className={`p-1.5 rounded-full ${category.color === 'indigo' ? 'bg-purple-500' : 'bg-pink-500'} text-white shadow-lg`}>
                        <FiZap size={12} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;