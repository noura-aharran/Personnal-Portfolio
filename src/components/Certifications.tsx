"use client";

import { motion } from 'framer-motion';
import { FiAward, FiExternalLink } from 'react-icons/fi';
import Image from 'next/image';

const Certifications = () => {
  const certificates = [
    {
      title: "Natural Language Processing with Classification and Vector Spaces",
      issuer: "DeepLearning.AI",
      date: "November 2024",
      description: "Sentiment analysis, word vectors, machine translation and more using classification techniques and vector spaces.",
      badgeColor: "indigo",
      link: "https://www.coursera.org/account/accomplishments/verify/BT5ZV1I9ULOA",
      image: "/images/certificats/ctf1.jpeg"
    },
    {
      title: "AI For Everyone",
      issuer: "DeepLearning.AI",
      date: "September 2024",
      description: "AI concepts, terminology, and implementation strategies for non-technical professionals.",
      badgeColor: "pink",
      link: "https://www.coursera.org/account/accomplishments/verify/Z03WNGEZ61HL",
      image: "/images/certificats/ctf2.jpeg"
    },
    {
      title: "Data Visualization with Power BI: Storytelling with Data",
      issuer: "Coursera",
      date: "May 2024",
      description: "Creating impactful data narratives using Microsoft Power BI visualization tools.",
      badgeColor: "indigo",
      link: "https://www.coursera.org/account/accomplishments/verify/33KAJ3GLTT7L",
      image: "/images/certificats/ctf3.jpeg"
    },
    {
      title: "Data Visualisation",
      issuer: "ATI - Analytics Training Institute",
      date: "May 2024",
      description: "Advanced techniques for effective data visualization and presentation.",
      badgeColor: "pink",
      link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-c70cc34c-70ed-497d-bec5-aa1e4d0e04cb.pdf",
      image: "/images/certificats/ctf4.jpeg"
    },
    {
      title: "Introduction to PySpark",
      issuer: "Datacamp",
      date: "April 2025",
      description: "Introduction to PySpark",
      badgeColor: "pink",
      image: "/images/certificats/cer1.jpeg"
    },
    {
      title: "Understanding Microsoft Azure Architecture and Services",
      issuer: "Datacamp",
      date: "Mars 2025",
      description: "Understanding Microsoft Azure Architecture and Services",
      badgeColor: "pink",
      image: "/images/certificats/cer2.jpeg"
    }
  ];

  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Animation variants for items
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-40 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-screen opacity-30 animate-blob"></div>
        <div className="absolute top-40 left-20 w-72 h-72 bg-pink-500/10 rounded-full mix-blend-screen opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-40 right-20 w-88 h-88 bg-purple-500/10 rounded-full mix-blend-screen opacity-30 animate-blob animation-delay-4000"></div>
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
            <span className="text-white">My</span> <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Certifications</span>
          </h2>
          <div className="h-1.5 w-64 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full shadow-lg"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg font-medium mt-6">
            Professional credentials that validate my expertise and continuous learning journey
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group rounded-2xl overflow-hidden"
            >
              {/* Card background effects */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl"></div>
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                cert.badgeColor === 'indigo' 
                  ? 'bg-gradient-to-br from-purple-500/20 to-indigo-500/20' 
                  : 'bg-gradient-to-br from-pink-500/20 to-purple-500/20'
              }`}></div>
              <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-300"></div>
              
              <div className="p-8 relative">
                <div className="flex items-start mb-4">
                  <div className={`p-3 rounded-lg mr-4 shadow-lg transition-all duration-300 border ${
                    cert.badgeColor === 'indigo'
                      ? 'bg-purple-500/20 text-purple-300 border-purple-500/30 group-hover:bg-purple-500 group-hover:text-white' 
                      : 'bg-pink-500/20 text-pink-300 border-pink-500/30 group-hover:bg-pink-500 group-hover:text-white'
                  }`}>
                    <FiAward size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">{cert.title}</h3>
                    <p className="text-gray-300 flex items-center text-sm mt-1">
                      {cert.issuer} 
                      <span className="mx-2">•</span> 
                      {cert.date}
                    </p>
                  </div>
                </div>
                
                <div className="mb-5 overflow-hidden rounded-lg shadow-lg border border-white/10">
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block hover:opacity-90 transition-opacity"
                  >
                    <Image
                      src={cert.image}
                      alt={`${cert.title} Certificate`}
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover"
                    />
                  </a>
                </div>
                
                <p className="text-gray-300 mb-5">{cert.description}</p>
                
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`inline-flex items-center font-medium transition-colors duration-300 ${
                    cert.badgeColor === 'indigo' ? 'text-purple-400 hover:text-purple-300' : 'text-pink-400 hover:text-pink-300'
                  }`}
                >
                  View Certificate
                  <motion.span 
                    className="ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <FiExternalLink size={16} />
                  </motion.span>
                </a>
              </div>
              
              {/* Decorative corner accent */}
              <div className={`absolute top-0 right-0 w-20 h-20 rounded-bl-3xl transform origin-top-right group-hover:scale-110 transition-transform duration-300 ${
                cert.badgeColor === 'indigo'
                  ? 'bg-gradient-to-bl from-purple-500/20 via-purple-400/10 to-transparent' 
                  : 'bg-gradient-to-bl from-pink-500/20 via-pink-400/10 to-transparent'
              }`}></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;