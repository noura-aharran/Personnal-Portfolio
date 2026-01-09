"use client";

import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-screen opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-pink-500/10 rounded-full mix-blend-screen opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-purple-500/10 rounded-full mix-blend-screen opacity-30 animate-blob animation-delay-4000"></div>
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
            <span className="text-white">Education & </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Areas of Interest</span>
          </h2>
          <div className="h-1.5 w-64 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full shadow-lg"></div>
        </motion.div>

        <div className="space-y-16">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Education</h3>

              <div className="flex space-x-8 overflow-x-auto py-4 pb-6 scrollbar-thin scrollbar-thumb-purple-400/50 scrollbar-track-transparent">
                {[
                  {
                    title: "Ingénieure d'État en Big Data et IA",
                    school: "ENSA Tétouan",
                    year: "2021 - 2026",
                    color: "purple"
                  },
                  {
                    title: "DEUST en Biologie, Chimie et Géologie (BCG)",
                    school: "FST, Tanger",
                    year: "2021",
                    color: "pink"
                  },
                  {
                    title: "Baccalauréat sciences physiques",
                    school: "Candidat libre, Tétouan",
                    year: "2021",
                    color: "purple"
                  },
                  {
                    title: "Baccalauréat sciences de la Vie et de la Terre",
                    school: "Lycée Khadija Oum El Mouminin, Tétouan",
                    year: "2019",
                    color: "pink"
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8, scale: 1.05 }}
                    className="flex-shrink-0 w-72 relative bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-300 z-10 group/card"
                  >
                    {/* Point de la timeline */}
                    <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full shadow-lg z-20 ${
                      item.color === 'purple' 
                        ? 'bg-gradient-to-br from-purple-400 to-purple-600' 
                        : 'bg-gradient-to-br from-pink-400 to-pink-600'
                    }`}></div>

                    {/* Glow effect on hover */}
                    <div className={`absolute -inset-0.5 rounded-xl blur-sm opacity-0 group-hover/card:opacity-100 transition duration-300 ${
                      item.color === 'purple'
                        ? 'bg-gradient-to-r from-purple-500 to-purple-600'
                        : 'bg-gradient-to-r from-pink-500 to-pink-600'
                    }`}></div>

                    <div className="relative">
                      <h4 className={`text-lg font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r ${
                        item.color === 'purple'
                          ? 'from-purple-300 to-purple-500'
                          : 'from-pink-300 to-pink-500'
                      }`}>
                        {item.title}
                      </h4>
                      <p className="text-gray-200 text-sm font-medium">{item.school}</p>
                      <p className="text-gray-400 text-sm mt-2 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        {item.year}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Areas of Interest Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Areas of Interest</h3>
              
              
           
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {[
                  {
                    title: "General & Applied Artificial Intelligence",
                    description: "Applied AI for FootBall, Healthcare, and many other fields. Intelligent systems and multi-agent systems, Modeling and optimization of complex processes",
                    color: "purple",
                    icon: "🤖"
                  },
                  {
                    title: "Machine Learning & LLM / NLP",
                    description: "Deep Learning, Neural Networks, Natural Language Processing (NLP) and Large Language Models (LLMs), text generation, and automatic summarization",
                    color: "pink",
                    icon: "🧠"
                  },
                  {
                    title: "Data Engineering",
                    description: "ETL pipelines, SQL, PySpark, Python, data cleaning, preprocessing, integration, and workflow optimization for analytics",
                    color: "purple",
                    icon: "⚙️"
                  },
                  {
                    title: "Computer Vision & Data Sciences",
                    description: "Computer Vision: image recognition, object detection, Preparing data for Machine Learning and AI applications, and Interactive data visualization and dashboards",
                    color: "pink",
                    icon: "👁️"
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative px-6 py-5 bg-white/10 backdrop-blur-lg rounded-xl shadow-lg border transition-all group/card ${
                      item.color === 'purple'
                        ? 'border-purple-500/30 hover:border-purple-400'
                        : 'border-pink-500/30 hover:border-pink-400'
                    }`}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    {/* Glow effect */}
                    <div className={`absolute -inset-0.5 rounded-xl blur-sm opacity-0 group-hover/card:opacity-100 transition duration-300 ${
                      item.color === 'purple'
                        ? 'bg-gradient-to-r from-purple-500 to-purple-600'
                        : 'bg-gradient-to-r from-pink-500 to-pink-600'
                    }`}></div>

                    <div className="relative">
                      <div className="flex items-start gap-3 mb-2">
                        <span className="text-2xl">{item.icon}</span>
                        <h4 className={`text-lg font-semibold ${
                          item.color === 'purple'
                            ? 'text-purple-300 group-hover/card:text-purple-200'
                            : 'text-pink-300 group-hover/card:text-pink-200'
                        }`}>
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;