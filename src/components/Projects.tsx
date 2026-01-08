"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiExternalLink,
  FiGithub,
  FiDatabase,
  FiCode,
  FiBarChart2,
  FiLayers,
} from "react-icons/fi";
import Image from "next/image";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeProject === null) return;
      if (e.key === "ArrowLeft") navigateProject("prev");
      if (e.key === "ArrowRight") navigateProject("next");
      if (e.key === "Escape") setActiveProject(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeProject]);

  const navigateProject = (direction: "prev" | "next") => {
    if (activeProject === null) return;
    if (direction === "prev") {
      setActiveProject(prev => (prev === 0 ? projects.length - 1 : (prev || 0) - 1));
    } else {
      setActiveProject(prev => (prev === projects.length - 1 ? 0 : (prev || 0) + 1));
    }
  };

  const projects = [
    {
      title: "Real-Time Human Behavior Analysis",
      description:
        "Real-time human behavior analysis, including person detection, individual tracking with unique IDs, and extraction of temporal sequences (trajectories and movements). The system performs anomaly detection using models trained on normal behavior only, identifying unusual gestures, threats, or falls in real time. Results are visualized through a Streamlit interface with alerts. Designed to be lightweight, real-time, and operable on a local machine without high-end GPU requirements.",
      technologies: ["Python", "Transformers", "OpenCV", "ByteTrack", "YOLOv8"],
      imageUrl: "/images/project1.jpg",
      videoUrl: "/videos/project1-demo.mp4",
      demoLink: "#",
      githubLink: "#",
      color: "indigo",
      icon: FiCode,
    },
    {
      title: "Intelligent Chatbot based on LLM",
      description:
        "Chatbot that answers questions and provides information using advanced language models, and RAG. Integrated to an ASSisstant for supply chain , build with multi-agents systems include decision algorithms, Reinforcement LEanring and NLP, ",
      technologies: ["LLM (Transformers/LLMs)", "Python", "Angular", "FastAPI", "RAG", "NLP"],
      media: [
        { type: "video", url: "/images/nego/Negociation.mp4" },
        { type: "image", url: "/images/nego/img1.png" },
        { type: "image", url: "/images/nego/img2.png" },
        { type: "image", url: "/images/nego/img3.png" },
      ],
      demoLink: "#",
      githubLink: "#",
      color: "pink",
      icon: FiDatabase,
    },
    {
      title: "Fake News Detection With Explainability",
      description:
        "A system that automatically identifies false or misleading news articles by analyzing textual content and linguistic patterns. Includes explainable AI features to highlight why an article is classified as fake or real.",
      technologies: [
        "Transformers (BERT/Roberta)",
        "TALN",
        "Python",
        "Streamlit",
        "Fine Tunning",
        "Explainable AI",
      ],
      media: [{ type: "video", url: "/images/fakenews/media.mp4" }],
      demoLink: "#",
      githubLink: "#",
      color: "pink",
      icon: FiBarChart2,
    },
    {
      title: "ETL & Multi-Source Data Modeling (Modeling — European Player Performance)",
      description:
        "Extract, transform, and analyze data to build predictive models and interactive dashboards showing European Football Player Performances during the whole season in the 5 big competitions.",
      technologies: [
        "Python",
        "SQL",
        "React for Interacting Dashboard",
        "Web Scrapping",
        "Data Processing and Modeling",
      ],
      media: [
        { type: "image", url: "/images/football/foot0.png" },
        { type: "image", url: "/images/football/foot1.png" },
      ],
      demoLink: "#",
      githubLink: "#",
      color: "indigo",
      icon: FiLayers,
    },
    {
      title: "Job Search Dashboard",
      description:
        "An interactive platform that predicts equipment failures using machine learning, provides actionable insights, highlights anomalies, and visualizes performance. Built with Python, TensorFlow, and Docker, it supports time-series analysis and can run locally or in the cloud.",
      technologies: ["Python", "HTML", "CSS", "Web Scrapping"],
      media: [
        { type: "video", url: "/images/job/dashboard.mp4" },
        { type: "image", url: "/images/job/im1.png" },
        { type: "image", url: "/images/job/im2.png" },
        { type: "image", url: "/images/job/img3.png" },
      ],
      demoLink: "#",
      githubLink: "#",
      color: "indigo",
      icon: FiBarChart2,
    },
    {
      title: "Sign Language Recognition",
      description:
        "Development of an advanced gesture recognition system capable of interpreting sign language from videos. The project involves data collection, preprocessing, and augmentation to create a robust dataset. A Convolutional Neural Network (CNN) is trained to recognize hand gestures, while OpenCV and Mediapipe are used for hand tracking and keypoint detection. This system aims to bridge communication gaps and provide real-time sign language translation with high accuracy.",
      technologies: [
        "Deep Learning",
        "CNN",
        "Data Collecting and Processing",
        "OpenCV",
        "Mediapipe",
      ],
      demoLink: "#",
      githubLink: "#",
      color: "pink",
      icon: FiCode,
    },
    {
      title: "Deep Learning for Cancer Detection",
      description:
        "Implementation of a deep learning pipeline for the automated detection of cancer from radiology images. The project leverages image preprocessing, feature extraction, and Convolutional Neural Networks (CNN) combined with LSTM layers for temporal or sequence-based analysis. This approach enhances the classification accuracy for detecting cancerous regions, potentially assisting medical professionals in early diagnosis and improving patient outcomes.",
      technologies: ["Deep Learning", "Python", "Image Processing", "CNN", "LSTM"],
      demoLink: "#",
      githubLink: "#",
      color: "pink",
      icon: FiDatabase,
    },
    {
      title: "Blockchain platform ensuring exchanges between teachers and students",
      description:
        "Secure platform for teacher-student exchanges with traceability and transparency.",
      technologies: [
        "Blockchain",
        "Hardhat",
        "Solidity",
        "Smart Contracts",
        "Web3",
        "Python",
        "JavaScript",
        "HTML",
        "CSS",
      ],
      media: [
        { type: "image", url: "/images/blockchain/image1.jpeg" },
        { type: "image", url: "/images/blockchain/image2.jpeg" },
        { type: "image", url: "/images/blockchain/image3.jpeg" },
        { type: "image", url: "/images/blockchain/image4.jpeg" },
      ],
      demoLink: "#",
      githubLink: "#",
      color: "pink",
      icon: FiLayers,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Projects</span>
          </h2>
          <p className="text-gray-300 text-lg">Explore my latest work and innovations</p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sticky top-8">
              <h3 className="text-2xl font-bold text-white mb-6">My Work</h3>
              <div className="space-y-3">
                {projects.map((project, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveProject(index)}
                    whileHover={{ x: 5 }}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center gap-3 ${
                      activeProject === index
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                        : "bg-white/5 text-gray-300 hover:bg-white/10"
                    }`}
                  >
                    <project.icon className="text-xl flex-shrink-0" />
                    <span className="text-sm font-medium line-clamp-2">{project.title}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {activeProject !== null ? (
                <motion.div
                  key={activeProject}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl"
                >
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {projects[activeProject].title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {projects[activeProject].description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {projects[activeProject].technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-200 rounded-full text-sm font-medium border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Media Carousel */}
                  <div className="space-y-6">
                    {projects[activeProject].media?.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="rounded-xl overflow-hidden shadow-2xl bg-black/20"
                      >
                        {item.type === "image" && (
                          <img
                            src={item.url}
                            alt={`${projects[activeProject].title} - Image ${idx + 1}`}
                            className="w-full h-auto object-contain"
                          />
                        )}
                        {item.type === "video" && (
                          <video
                            src={item.url}
                            controls
                            className="w-full h-auto"
                          />
                        )}
                      </motion.div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 mt-8">
                    <motion.a
                      href={projects[activeProject].demoLink}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <FiExternalLink /> Live Demo
                    </motion.a>
                    <motion.a
                      href={projects[activeProject].githubLink}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-colors"
                    >
                      <FiGithub /> View Code
                    </motion.a>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-16 text-center h-full flex items-center justify-center"
                >
                  <div>
                    <FiLayers className="text-6xl text-purple-400 mx-auto mb-4" />
                    <p className="text-gray-300 text-lg">
                      Select a project from the sidebar to view details and media.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;