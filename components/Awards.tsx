"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const certifications = [
  {
    type: "CERTIFICATION",
    title: "AWS Certified AI Practitioner",
    issuer: "AWS",
    date: "May 21, 2025",
    viewUrl: "#",
  },
  {
    type: "CERTIFICATION",
    title: "AWS Academy Graduate - Machine Learning Foundations",
    issuer: "AWS Academy",
    date: "Feb 22, 2025",
    viewUrl: "https://www.credly.com/go/9vnPH7nS",
  },
  {
    type: "CERTIFICATION",
    title: "AWS Academy Graduate - Data Engineering",
    issuer: "AWS Academy",
    date: "Apr 27, 2025",
    viewUrl: "https://www.credly.com/go/TyyTghr5",
  },
  {
    type: "CERTIFICATION",
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "July 10, 2024",
    viewUrl: "#",
  },
  {
    type: "CERTIFICATION",
    title: "Associate Data Engineer",
    issuer: "DataCamp",
    date: "Nov 30, 2025",
    viewUrl: "#",
  },
];

export default function Awards() {
  return (
    <section id="awards" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
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
          <h2 className="text-4xl md:text-6xl font-bold text-[#e8dcc0]">
            CERTIFICATIONS
          </h2>
        </motion.div>

        <div className="space-y-12">
          {/* Certifications Section */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#e8dcc0]/10 border border-[#e8dcc0]/20 rounded-lg p-6"
                >
                  <span className="text-xs text-[#e8dcc0]/70 uppercase mb-2 block">
                    {cert.type}
                  </span>
                  <h4 className="text-xl font-bold mb-2 text-[#e8dcc0]">{cert.title}</h4>
                  <p className="text-sm text-[#e8dcc0]/80 mb-1">{cert.issuer}</p>
                  <p className="text-sm text-[#e8dcc0]/60 mb-4">{cert.date}</p>
                  <a
                    href={cert.viewUrl}
                    className="text-sm text-[#DAA520] hover:text-[#e8dcc0] flex items-center gap-1"
                  >
                    VIEW <ExternalLink className="w-3 h-3" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

