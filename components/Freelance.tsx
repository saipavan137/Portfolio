"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    type: "PROJECT",
    title: "Climate Data Processing and Forecasting",
    description:
      "Big Data project using Apache Spark (PySpark) for cleaning, analyzing, and forecasting weather data from 1910-1935. Features temperature analysis, extreme weather event detection, and ML forecasting models using Spark MLlib (Linear Regression, Random Forest, Gradient Boosted Trees).",
    techStack: ["Apache Spark", "PySpark", "Spark MLlib", "Hadoop", "HDFS", "Python", "Machine Learning"],
    viewUrl: "https://github.com/saipavan137/Climate-Data-Processing-and-Forecasting",
  },
  {
    type: "PROJECT",
    title: "Personal Budget",
    description:
      "A personal budget management application for tracking expenses, managing finances, and analyzing spending patterns. Built with modern web technologies for efficient financial planning and budget tracking.",
    techStack: ["Web Development", "Budget Management", "Financial Tracking"],
    viewUrl: "https://github.com/saipavan137/personal-budget",
  },
];

export default function Freelance() {
  return (
    <section id="freelance" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="mb-4">
            <span className="text-2xl md:text-3xl text-[#DAA520]">★★★</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[#8b6f47]">PROJECTS</h2>
          <p className="text-lg md:text-xl text-[#8b6f47]/80 mt-4">
            Personal projects and open-source contributions showcasing technical skills
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#8b6f47]/10 border border-[#8b6f47]/20 rounded-lg p-8"
            >
              <span className="text-xs text-[#8b6f47]/70 uppercase mb-2 block">
                {project.type}
              </span>
              <h3 className="text-2xl font-bold mb-4 text-[#8b6f47]">{project.title}</h3>
              <p className="text-[#8b6f47] mb-4">{project.description}</p>
              {project.techStack && (
                <div className="mb-4">
                  <p className="text-xs text-[#8b6f47]/70 mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs bg-[#8b6f47]/20 px-2 py-1 rounded text-[#8b6f47]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              <a
                href={project.viewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#DAA520] hover:text-[#8b6f47] transition-colors"
              >
                VIEW ON GITHUB <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center bg-[#8b6f47]/10 border border-[#8b6f47]/20 rounded-lg p-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-[#8b6f47]">
            Interested in collaborating?
          </h3>
          <p className="text-xl mb-8 text-[#8b6f47]">LET&apos;S WORK TOGETHER</p>
          <a
            href="#contact"
            className="inline-block bg-[#8b6f47] text-[#1f1f1f] px-8 py-3 rounded-lg font-semibold hover:bg-[#DAA520] transition-colors"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}

