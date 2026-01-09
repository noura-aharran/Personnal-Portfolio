"use client";

import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiLinkedin, FiGithub, FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Enhanced decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-screen opacity-30 animate-blob animation-delay-4000 filter blur-[60px]"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-pink-500/10 rounded-full mix-blend-screen opacity-30 animate-blob filter blur-[60px]"></div>
        <div className="absolute top-1/3 left-1/3 w-60 h-60 bg-purple-500/10 rounded-full mix-blend-screen opacity-30 animate-blob animation-delay-2000 filter blur-[60px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            <span className="text-white">Get In</span> <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Touch</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg mt-6">
            Have a project in mind or want to collaborate? I would love to hear from you!
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Card - Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(139, 92, 246, 0.3)' }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 text-center border border-white/10 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-500 to-purple-400"></div>
              <div className="mx-auto bg-purple-500/20 rounded-2xl w-16 h-16 flex items-center justify-center mb-5 border border-purple-500/30">
                <FiMapPin className="text-purple-300" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Location</h3>
              <p className="text-gray-300">Tétouan, Morocco</p>
            </motion.div>

            {/* Contact Card - Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(236, 72, 153, 0.3)' }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 text-center border border-white/10 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-pink-500 to-pink-400"></div>
              <div className="mx-auto bg-pink-500/20 rounded-2xl w-16 h-16 flex items-center justify-center mb-5 border border-pink-500/30">
                <FiMail className="text-pink-300" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <a href="mailto:aharrannoura9@gmail.com" className="text-pink-300 hover:text-pink-200 transition-colors">
                aharrannoura9@gmail.com
              </a>
            </motion.div>

            {/* Contact Card - Phone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(168, 85, 247, 0.3)' }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 text-center border border-white/10 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <div className="mx-auto bg-purple-500/20 rounded-2xl w-16 h-16 flex items-center justify-center mb-5 border border-purple-500/30">
                <FiPhone className="text-purple-300" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
              <a href="tel:+212 641-037101" className="text-purple-300 hover:text-purple-200 transition-colors">
                +212 641-037101
              </a>
            </motion.div>
          </div>

          {/* Social Connect Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-10 border border-white/10 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-8">My Contacts</h3>
            <div className="flex justify-center flex-wrap gap-6">
              {[
                { icon: <FiLinkedin size={22} />, label: "LinkedIn", url: "https://linkedin.com/in/noura-aharran-910b3827b", color: "bg-blue-500" },
                { icon: <FiGithub size={22} />, label: "GitHub", url: "https://github.com/noura-aharran", color: "bg-gray-200" },
                { icon: <FiMail size={22} />, label: "Email", url: "mailto:aharrannoura9@gmail.com", color: "bg-pink-500" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-lg shadow-lg border border-white/20 text-gray-200 hover:text-white transition-all"
                >
                  <span className={`text-white p-2 rounded-full ${social.color}`}>{social.icon}</span>
                  <span className="font-medium">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Link 
              href="#projects" 
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium shadow-lg hover:shadow-xl transition-shadow group"
            >
              View My Projects
              <motion.div
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                className="ml-2"
              >
                <FiArrowRight />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;