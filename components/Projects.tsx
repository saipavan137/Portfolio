"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    caseNumber: "CASE #001",
    title: "SamrAI - AI Investment Platform",
    description:
      "Intelligent investment dashboard with real-time financial data, AI-driven insights, quantitative analysis (Sharpe, Beta, Alpha, VaR), and behavioral analytics using Google Gemini",
    techStack: [
      "Next.js 15",
      "TypeScript",
      "Zustand",
      "Gemini (Genkit)",
      "Clerk",
      "Recharts",
      "Yahoo Finance API",
    ],
    achievements: [
      "Built production-grade dashboard with real-time financial insights and interactive UI",
      "AI Investment Advisor with natural-language recommendations and confidence scores",
      "Deployed on Vercel with CI/CD, achieving 2-3 sec load times",
      "Implemented panic-selling detection and market intelligence feeds",
    ],
    liveUrl: "https://samr-ai.vercel.app",
    codeUrl: "https://github.com/Sergio799/SamrAI",
  },
  {
    caseNumber: "CASE #002",
    title: "Property Pulse - Real Estate Platform",
    description:
      "Full-featured rental property web application with Google authentication, property listing CRUD, image uploads, internal messaging with unread notifications, and Mapbox integration",
    techStack: [
      "Next.js",
      "React",
      "MongoDB",
      "Mongoose",
      "NextAuth.js",
      "Cloudinary",
      "Mapbox",
      "Tailwind CSS",
    ],
    achievements: [
      "Built with Next.js Server Actions for optimized data handling",
      "Implemented property search, bookmarking, and social sharing features",
      "Integrated Cloudinary for image uploads and Photoswipe galleries",
      "Responsive design with internal messaging system and notifications",
    ],
    codeUrl: "https://github.com/Sergio799/PropertyPulse",
  },
  {
    caseNumber: "CASE #003",
    title: "Web Cloner",
    description:
      "Full-stack SPA with automated website cloning, AI-powered content summarization using Claude AI, and asynchronous ETL pipelines for data extraction and processing",
    techStack: [
      "Next.js",
      "TypeScript",
      "Fast API",
      "Claude AI",
      "Selenium",
      "PostgreSQL",
      "Supabase",
    ],
    achievements: [
      "AI-driven content extraction with RAG techniques, 40% efficiency boost",
      "Asynchronous web scraping with Selenium and aiohttp, 60% faster extraction",
      "Built ETL pipelines for data transformation and storage",
      "Strengthened security with CORS, Pydantic validation, input sanitization",
    ],
    codeUrl: "https://github.com/Sergio799/web-Cloner",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
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
          <h2 className="text-4xl md:text-6xl font-bold text-[#8b6f47]">FEATURED WORK</h2>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-[#8b6f47]/10 border border-[#8b6f47]/20 rounded-lg p-8 md:p-12"
            >
              <div className="mb-6">
                <span className="text-sm text-[#8b6f47]/70">{project.caseNumber}</span>
                <div className="mt-2 mb-4">
                  <span className="text-2xl text-[#DAA520]">★★★</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-[#8b6f47]">
                  {project.title}
                </h3>
                <p className="text-lg text-[#8b6f47]/80 mb-6">{project.description}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-[#8b6f47]/20 px-3 py-1 rounded text-sm text-[#8b6f47]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Key Achievements:</h4>
                <ul className="space-y-2">
                  {project.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start">
                      <span className="mr-2">▸</span>
                      <span className="text-[#8b6f47]">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#8b6f47]/20 hover:bg-[#8b6f47]/30 text-[#8b6f47] px-4 py-2 rounded transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>LIVE</span>
                  </a>
                )}
                {project.codeUrl && (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#8b6f47]/20 hover:bg-[#8b6f47]/30 text-[#8b6f47] px-4 py-2 rounded transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>CODE</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

