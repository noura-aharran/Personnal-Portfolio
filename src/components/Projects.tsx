"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiCode, FiLayers, FiDatabase, FiBarChart2, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const constraintsRef = useRef(null);

  // Add keyboard event listeners for navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeProject === null) return;
      
      switch (e.key) {
        case 'ArrowLeft':
          navigateProject('prev');
          break;
        case 'ArrowRight':
          navigateProject('next');
          break;
        case 'Escape':
          setActiveProject(null);
          break;
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProject]);

  // Navigate to previous or next project
  const navigateProject = (direction: 'prev' | 'next') => {
    if (activeProject === null) return;
    
    if (direction === 'prev') {
      setActiveProject(prev => {
        if (prev === null) return 0;
        return prev === 0 ? projects.length - 1 : prev - 1;
      });
    } else {
      setActiveProject(prev => {
        if (prev === null) return 0;
        return prev === projects.length - 1 ? 0 : prev + 1;
      });
    }
  };

  // Mouse position state for card tilt effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    if (hoveredCard === index) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
    }
  };

  const projects = [
    {
      title: "Sentiment Analysis Model",
      description: "Developed a sentiment analysis model using NLP techniques to analyze customer feedback for a retail company. Implemented using BERT and achieved 92% accuracy.",
      technologies: ["Python", "PyTorch", "BERT", "NLP"],
      imageUrl: "/images/project1.jpg", // Placeholder image
      demoLink: "#",
      githubLink: "#",
      color: "indigo",
      icon: <FiCode size={24} />
    },
    {
      title: "Big Data Pipeline",
      description: "Built a scalable data processing pipeline for handling large volumes of IoT sensor data. Utilized Apache Kafka for real-time streaming and Spark for data processing.",
      technologies: ["Apache Spark", "Kafka", "HDFS", "Python"],
      imageUrl: "/images/project2.jpg", // Placeholder image
      demoLink: "#",
      githubLink: "#",
      color: "pink",
      icon: <FiDatabase size={24} />
    },
    {
      title: "Predictive Maintenance System",
      description: "Designed a machine learning model to predict equipment failures before they occur. Reduced downtime by 35% and maintenance costs by 28%.",
      technologies: ["Python", "TensorFlow", "Time Series Analysis", "Docker"],
      imageUrl: "/images/project3.jpg", // Placeholder image
      demoLink: "#",
      githubLink: "#",
      color: "indigo",
      icon: <FiLayers size={24} />
    },
    {
      title: "Data Visualization Dashboard",
      description: "Created an interactive dashboard for visualizing complex datasets, providing actionable insights for business decision-making.",
      technologies: ["Tableau", "Power BI", "SQL", "Data Analysis"],
      imageUrl: "/images/project4.jpg", // Placeholder image
      demoLink: "#",
      githubLink: "#",
      color: "pink",
      icon: <FiBarChart2 size={24} />
    },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-10 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply opacity-20 animate-blob"></div>
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply opacity-10 animate-blob animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.8, 
              type: "spring", 
              bounce: 0.4 
            }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              <span className="text-black">Featured</span> <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#861088] to-[#660691]">Projects</span>
            </h2>
            <div className="h-1.5 w-64 bg-gradient-to-r from-[#861088] to-[#660691] mx-auto rounded-full shadow-sm"></div>
          </motion.div>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-indigo-900 max-w-2xl mx-auto text-lg font-medium mt-6"
          >
            A selection of my recent work in the fields of Big Data and Artificial Intelligence
          </motion.p>
        </motion.div>

        {/* Featured Project Showcase */}
        <motion.div
          ref={constraintsRef}
          className="relative overflow-hidden rounded-2xl backdrop-blur-sm mb-16 shadow-2xl border border-white/30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Glass morph background with improved gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-pink-500/10 z-0"></div>
          <div className="absolute inset-0 bg-white/60 backdrop-blur-sm z-0"></div>
          
          {/* Enhanced Glowing orb decorations with animation */}
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-indigo-400 rounded-full opacity-20 blur-xl animate-pulse-slow z-0"></div>
          <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-pink-400 rounded-full opacity-20 blur-xl animate-pulse-slow animation-delay-2000 z-0"></div>
          <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-purple-400 rounded-full opacity-10 blur-xl animate-float animation-delay-4000 z-0"></div>
          
          {/* Moving particle effect */}
          <div className="absolute inset-0 overflow-hidden opacity-30 z-0">
            <div className="absolute h-2 w-2 bg-indigo-500 rounded-full top-[10%] left-[20%] animate-float"></div>
            <div className="absolute h-2 w-2 bg-pink-500 rounded-full top-[70%] left-[80%] animate-float animation-delay-2000"></div>
            <div className="absolute h-3 w-3 bg-purple-500 rounded-full top-[30%] left-[55%] animate-float animation-delay-4000"></div>
            <div className="absolute h-1 w-1 bg-indigo-500 rounded-full top-[60%] left-[10%] animate-float"></div>
          </div>
          
          <div className="grid md:grid-cols-5 min-h-[450px] relative z-10">
            {/* Project Navigation Sidebar */}
            <div className="md:col-span-1 border-r border-gray-200/50 backdrop-blur-sm bg-white/30">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">My Work</h3>
                <div className="space-y-1">
                  {projects.map((project, index) => (
                    <motion.button
                      key={index}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center ${
                        activeProject === index 
                          ? 'bg-gradient-to-r from-indigo-500/10 to-pink-500/10 shadow-sm border border-white/50' 
                          : 'hover:bg-white/50'
                      }`}
                      onClick={() => setActiveProject(index)}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <span className={`mr-3 ${
                        project.color === 'indigo' ? 'text-indigo-500' : 'text-pink-500'
                      }`}>
                        {project.icon}
                      </span>
                      <span className={`font-medium ${
                        activeProject === index ? 'text-gray-800' : 'text-gray-600'
                      }`}>
                        {project.title}
                      </span>
                    </motion.button>
                  ))}
                </div>
                
                {/* Keyboard shortcuts info */}
                <div className="mt-8 px-4 py-3 bg-white/30 rounded-xl">
                  <p className="text-xs text-gray-500 mb-2">Keyboard Shortcuts:</p>
                  <div className="flex items-center text-xs text-gray-600 mb-1">
                    <kbd className="px-1.5 py-0.5 bg-white rounded mr-1.5 shadow-sm">←</kbd>
                    <span>Previous Project</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-600">
                    <kbd className="px-1.5 py-0.5 bg-white rounded mr-1.5 shadow-sm">→</kbd>
                    <span>Next Project</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project Details */}
            <div className="md:col-span-4 p-8 relative">
              {/* Navigation arrows - only show when a project is active */}
              {activeProject !== null && (
                <>
                  <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg text-gray-800 hover:text-indigo-600 hover:bg-white hover:shadow-indigo-100/50 transition-all duration-200"
                    onClick={() => navigateProject('next')}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Next project"
                  >
                    <FiChevronRight className="w-5 h-5" />
                  </motion.button>
                  
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg text-gray-800 hover:text-indigo-600 hover:bg-white hover:shadow-indigo-100/50 transition-all duration-200"
                    onClick={() => navigateProject('prev')}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Previous project"
                  >
                    <FiChevronLeft className="w-5 h-5" />
                  </motion.button>
                  
                  {/* Project navigation indicator */}
                  <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-600">
                    {activeProject + 1} / {projects.length}
                  </div>
                </>
              )}

              <AnimatePresence mode="wait">
                {activeProject !== null ? (
                  <motion.div
                    key={`project-${activeProject}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="h-full flex flex-col"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                        {projects[activeProject].title}
                        <div className="text-sm font-normal text-gray-500 mt-1">
                          Project {activeProject + 1} of {projects.length}
                        </div>
                      </h3>
                      <div className="flex space-x-3">
                        <motion.a
                          href={projects[activeProject].demoLink}
                          className="p-2 rounded-full bg-white/80 shadow-sm text-indigo-500 hover:text-indigo-700 hover:bg-white hover:shadow transition-all duration-300"
                          whileHover={{ y: -3, scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <FiExternalLink size={20} />
                        </motion.a>
                        <motion.a
                          href={projects[activeProject].githubLink}
                          className="p-2 rounded-full bg-white/80 shadow-sm text-indigo-500 hover:text-indigo-700 hover:bg-white hover:shadow transition-all duration-300"
                          whileHover={{ y: -3, scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <FiGithub size={20} />
                        </motion.a>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-6 text-lg">
                      {projects[activeProject].description}
                    </p>
                    
                    <div className="mb-8">
                      <h4 className="text-lg font-medium text-gray-800 mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-3">
                        {projects[activeProject].technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            onMouseEnter={() => setHoveredTech(tech)}
                            onMouseLeave={() => setHoveredTech(null)}
                            whileHover={{ y: -5, scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ 
                              type: "spring", 
                              stiffness: 500, 
                              damping: 10 
                            }}
                            className={`px-4 py-2 rounded-full shadow-sm ${
                              projects[activeProject].color === 'indigo'
                                ? 'bg-gradient-to-r from-indigo-50 to-indigo-100 text-indigo-600 hover:from-indigo-100 hover:to-indigo-200'
                                : 'bg-gradient-to-r from-pink-50 to-pink-100 text-pink-600 hover:from-pink-100 hover:to-pink-200'
                            } transition-all duration-300 font-medium relative z-10`}
                          >
                            {hoveredTech === tech && (
                              <motion.span
                                layoutId="techHighlight"
                                className="absolute inset-0 rounded-full bg-white opacity-30"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                                transition={{ duration: 0.2 }}
                              />
                            )}
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Enhanced Project Image or Preview with interactive elements */}
                    <div className="mt-auto relative h-48 overflow-hidden rounded-xl shadow-lg">
                      <div className={`absolute inset-0 bg-gradient-to-br ${
                        projects[activeProject].color === 'indigo'
                          ? 'from-indigo-100 to-purple-100'
                          : 'from-pink-100 to-purple-100'
                      } opacity-50`}></div>
                      
                      {/* Abstract code pattern background */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="h-full w-full overflow-hidden">
                          <div className="animate-slide-left h-full flex flex-col gap-2 opacity-50">
                            {[...Array(10)].map((_, i) => (
                              <div key={i} className="h-2 bg-current rounded opacity-40" 
                                style={{ 
                                  width: `${Math.random() * 50 + 20}%`, 
                                  marginLeft: `${Math.random() * 40}%` 
                                }} 
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <motion.div 
                        className="absolute inset-0 flex items-center justify-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                      >
                        <motion.div 
                          className="p-4 bg-white/80 backdrop-blur-sm rounded-full shadow-lg"
                          whileHover={{ 
                            boxShadow: "0 0 25px rgba(99, 102, 241, 0.5)",
                            rotate: [0, 5, -5, 0]
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          {projects[activeProject].icon}
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center h-full text-center p-8"
                  >
                    <div className="p-5 bg-white/70 backdrop-blur-sm rounded-full shadow mb-6">
                      <FiCode size={36} className="text-indigo-500" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                      Select a Project
                    </h3>
                    <p className="text-gray-700 max-w-md">
                      Click on a project from the sidebar to view details about my work, technologies used, and more.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Project navigation dots */}
              {projects.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {projects.map((_, index) => (
                    <motion.button
                      key={`dot-${index}`}
                      className={`w-2.5 h-2.5 rounded-full ${
                        activeProject === index 
                          ? 'bg-indigo-500' 
                          : 'bg-gray-300 hover:bg-indigo-300'
                      } transition-colors duration-200`}
                      onClick={() => setActiveProject(index)}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={`Go to project ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Enhanced Tech Stack Scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative mt-8 mb-10 overflow-hidden py-12"
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-1/3 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply opacity-10 animate-blob animation-delay-4000"></div>
            <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply opacity-10 animate-blob"></div>
          </div>

          {/* Title for tech stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h3 className="text-2xl font-bold mb-2">
              <span className="text-black">Tech</span> <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#861088] to-[#660691]">Stack</span>
            </h3>
            <div className="h-1 w-24 bg-gradient-to-r from-[#861088] to-[#660691] mx-auto rounded-full"></div>
          </motion.div>
          
          {/* Edge fades for infinite scroll */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          {/* First scroll track - moves left */}
          <div className="mb-8">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ 
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear"
              }}
              className="flex whitespace-nowrap"
            >
              {[...Array(2)].map((_, loopIndex) => (
                <div key={loopIndex} className="flex items-center space-x-20 mx-10">
                  {[
                    { name: "Python", color: "indigo", icon: "🐍" },
                    { name: "TensorFlow", color: "pink", icon: "🧠" },
                    { name: "PyTorch", color: "indigo", icon: "🔥" },
                    { name: "Spark", color: "pink", icon: "⚡" },
                    { name: "AWS", color: "indigo", icon: "☁️" },
                    { name: "Docker", color: "pink", icon: "🐳" },
                    { name: "Kubernetes", color: "indigo", icon: "🚢" },
                    { name: "SQL", color: "pink", icon: "🗃️" },
                    { name: "NoSQL", color: "indigo", icon: "📊" },
                    { name: "React", color: "pink", icon: "⚛️" },
                  ].map((tech, index) => (
                    <motion.div
                      key={`${loopIndex}-${index}`}
                      className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/70 backdrop-blur-sm shadow-sm border ${
                        tech.color === 'indigo' 
                          ? 'border-indigo-100 shadow-indigo-100/20' 
                          : 'border-pink-100 shadow-pink-100/20'
                      }`}
                      whileHover={{ 
                        y: -5, 
                        scale: 1.05,
                        boxShadow: tech.color === 'indigo' 
                          ? '0 10px 20px -10px rgba(99, 102, 241, 0.3)' 
                          : '0 10px 20px -10px rgba(236, 72, 153, 0.3)'
                      }}
                    >
                      <span className="text-xl">{tech.icon}</span>
                      <span className={`font-medium ${
                        tech.color === 'indigo' ? 'text-indigo-600' : 'text-pink-600'
                      }`}>
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Second scroll track - moves right (opposite direction) */}
          <div>
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ 
                repeat: Infinity,
                repeatType: "loop",
                duration: 35,
                ease: "linear"
              }}
              className="flex whitespace-nowrap"
            >
              {[...Array(2)].map((_, loopIndex) => (
                <div key={loopIndex} className="flex items-center space-x-20 mx-10">
                  {[
                    { name: "Machine Learning", color: "pink", icon: "🤖" },
                    { name: "Data Science", color: "indigo", icon: "📈" },
                    { name: "Node.js", color: "pink", icon: "🟢" },
                    { name: "TypeScript", color: "indigo", icon: "🔷" },
                    { name: "Git", color: "pink", icon: "🔄" },
                    { name: "GraphQL", color: "indigo", icon: "📊" },
                    { name: "Next.js", color: "pink", icon: "▲" },
                    { name: "Tailwind", color: "indigo", icon: "🎨" },
                    { name: "Redis", color: "pink", icon: "🚀" },
                    { name: "MongoDB", color: "indigo", icon: "🍃" }
                  ].map((tech, index) => (
                    <motion.div
                      key={`${loopIndex}-${index}`}
                      className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/70 backdrop-blur-sm shadow-sm border ${
                        tech.color === 'indigo' 
                          ? 'border-indigo-100 shadow-indigo-100/20' 
                          : 'border-pink-100 shadow-pink-100/20'
                      }`}
                      whileHover={{ 
                        y: -5, 
                        scale: 1.05,
                        boxShadow: tech.color === 'indigo' 
                          ? '0 10px 20px -10px rgba(99, 102, 241, 0.3)' 
                          : '0 10px 20px -10px rgba(236, 72, 153, 0.3)'
                      }}
                    >
                      <span className="text-xl">{tech.icon}</span>
                      <span className={`font-medium ${
                        tech.color === 'indigo' ? 'text-indigo-600' : 'text-pink-600'
                      }`}>
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 