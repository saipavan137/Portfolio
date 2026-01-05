"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative px-4 pt-24">
      <div className="text-center space-y-8">
        {/* Three golden stars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="text-3xl md:text-4xl text-[#DAA520]">★★★</span>
        </motion.div>

        {/* Name in larger font */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-name text-4xl md:text-5xl lg:text-6xl text-[#8b6f47] font-normal mb-8 tracking-wider"
        >
          VENKATA SAI PAVAN BOMMULURI
        </motion.h1>

        {/* Main Title with horizontal line separator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-6"
        >
          <h2 className="hero-title text-xl md:text-2xl text-[#8b6f47] leading-tight tracking-tight">
            FULL STACK
          </h2>
          
          <h2 className="hero-title text-xl md:text-2xl text-[#8b6f47] leading-tight tracking-tight">
            DEVELOPER & DATA ENGINEER
          </h2>
          
          {/* Horizontal line separator */}
          <div className="w-32 md:w-48 h-px bg-[#8b6f47] mx-auto my-6"></div>
          
          {/* Italicized description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hero-description text-base md:text-lg text-[#8b6f47] max-w-2xl mx-auto"
          >
            I enjoy building clean, scalable systems that solve real-world problems and improve user experience.
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-8 flex flex-col items-center"
      >
        <span className="text-sm mb-2 text-[#8b6f47]">SCROLL</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-[#8b6f47]" />
        </motion.div>
      </motion.div>
    </section>
  );
}

