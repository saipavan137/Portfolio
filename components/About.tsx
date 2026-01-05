"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, Github, Phone } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Parchment-style container */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          className="parchment-container relative shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)] transition-shadow duration-300"
        >
          {/* Title */}
          <motion.div 
            className="text-center mb-6"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-3">
              <motion.span 
                className="text-xl md:text-2xl text-[#DAA520]"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                ★★★
              </motion.span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1f1f1f] uppercase">
              ABOUT ME
            </h2>
            {/* Decorative divider line */}
            <div className="mt-4 mb-2 flex items-center justify-center">
              <div className="w-full max-w-md border-t-2 border-[#8b6f47]"></div>
            </div>
          </motion.div>

          {/* Profile Picture */}
          <motion.div 
            className="flex justify-center mb-5"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div 
              className="relative w-40 h-40 md:w-52 md:h-52 overflow-hidden shadow-lg"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
            >
              {/* Double border effect - white inner, dark brown outer */}
              <div className="absolute inset-0 border-2 border-white z-10 pointer-events-none"></div>
              <div className="absolute inset-[-4px] border-4 border-[#8b6f47] z-0"></div>
              <img
                src="/images/Profile Pro.jpeg"
                alt="Venkata Sai Pavan Bommuluri"
                className="w-full h-full object-cover hover:grayscale transition-all duration-500 relative z-0"
              />
            </motion.div>
          </motion.div>

          {/* Name in curly braces */}
          <motion.div 
            className="text-center mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-[#1f1f1f]">
              {"{"} VENKATA SAI PAVAN BOMMULURI {"}"}
            </h3>
          </motion.div>

          {/* Personal Information - Single Section */}
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="space-y-1.5 border-l-2 border-[#8b6f47] pl-4">
              <motion.p 
                className="text-xs md:text-sm text-[#1f1f1f] leading-relaxed"
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <span className="font-bold bg-[#F4E4BC]/50 px-1.5 py-0.5 rounded">SEEKING:</span> SDE • FULLSTACK DEVELOPER • FRONT END AND BACK END ENGINEER • DATA ENGINEER
              </motion.p>
              <motion.p 
                className="text-xs md:text-sm text-[#1f1f1f] leading-relaxed"
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <span className="font-bold bg-[#F4E4BC]/50 px-1.5 py-0.5 rounded">EXPERTISE:</span> DATA ECO SYSTEM: NUMPY, PANDAS, POWER BI, AWS (S3, LAMBDA, STEP FUNCTIONS) • DISTRIBUTIONS AND TOOLS: CLOUDERA 5.12, GITHUB, DOCKER • DATABASES: SQL SERVER, MYSQL, MONGODB • LANGUAGES: PYTHON, SQL, JAVA, UNIX SHELL SCRIPT, NOSQL • OPERATING SYSTEMS: LINUX AND WINDOWS
              </motion.p>
              <motion.p 
                className="text-xs md:text-sm text-[#1f1f1f] leading-relaxed"
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <span className="font-bold bg-[#F4E4BC]/50 px-1.5 py-0.5 rounded">PROVEN TRACK RECORD:</span> 3.5+ YEARS BUILDING PRODUCTION-GRADE WEB APPLICATIONS AND DATA ENGINEERING
              </motion.p>
              <motion.p 
                className="text-xs md:text-sm text-[#1f1f1f] leading-relaxed"
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <span className="font-bold bg-[#F4E4BC]/50 px-1.5 py-0.5 rounded">SPECIALIZATION:</span> END-TO-END DEVELOPMENT • SCALABLE SAAS PLATFORMS • CLOUD ARCHITECTURE • AI INTEGRATION
              </motion.p>
              <motion.p 
                className="text-xs md:text-sm text-[#1f1f1f] leading-relaxed"
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <span className="font-bold bg-[#F4E4BC]/50 px-1.5 py-0.5 rounded">EDUCATION:</span> MASTERS IN INFORMATION TECHNOLOGY AT UNCC
              </motion.p>
              <motion.p 
                className="text-xs md:text-sm text-[#1f1f1f] leading-relaxed"
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <span className="font-bold bg-[#F4E4BC]/50 px-1.5 py-0.5 rounded">AVAILABLE FOR IMMEDIATE HIRE • OPEN TO RELOCATION</span>
              </motion.p>
            </div>
          </motion.div>

          {/* Social Media Icons */}
          <motion.div 
            className="flex justify-center gap-4 mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.a
              href="https://www.linkedin.com/in/venkata-sai-pavan-bommuluri-9921b7126/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#F4E4BC] border-2 border-[#1f1f1f] rounded-lg flex items-center justify-center hover:bg-[#8b6f47] transition-colors shadow-sm"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-5 h-5 text-[#1f1f1f]" />
            </motion.a>
            <motion.a
              href="mailto:bommulurisai137@gmail.com"
              className="w-10 h-10 bg-[#F4E4BC] border-2 border-[#1f1f1f] rounded-lg flex items-center justify-center hover:bg-[#8b6f47] transition-colors shadow-sm"
              aria-label="Email"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5 text-[#1f1f1f]" />
            </motion.a>
            <motion.a
              href="https://github.com/saipavan137"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#F4E4BC] border-2 border-[#1f1f1f] rounded-lg flex items-center justify-center hover:bg-[#8b6f47] transition-colors shadow-sm"
              aria-label="GitHub"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5 text-[#1f1f1f]" />
            </motion.a>
            <motion.a
              href="tel:+19803488088"
              className="w-10 h-10 bg-[#F4E4BC] border-2 border-[#1f1f1f] rounded-lg flex items-center justify-center hover:bg-[#8b6f47] transition-colors shadow-sm"
              aria-label="Phone"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5 text-[#1f1f1f]" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
