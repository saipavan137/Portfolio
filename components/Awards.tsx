"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const certifications = [
  {
    type: "CERTIFICATION",
    title: "AWS Certified AI Practitioner",
    issuer: "AWS",
    date: "May 21, 2025",
    viewUrl: "https://drive.google.com/file/d/1FU1UIcXv9n3j0mnDUkXfdicB6qVqmPor/view?usp=drive_link",
  },
  {
    type: "CERTIFICATION",
    title: "AWS Certified Cloud Practitioner",
    issuer: "AWS",
    date: "Oct 7, 2025",
    viewUrl: "https://drive.google.com/file/d/1w26pmlejepzLv3LP_uwp_jxMs0a3XEhV/view?usp=drive_link",
  },
  {
    type: "CERTIFICATION",
    title: "AWS Academy Graduate - Machine Learning Foundations",
    issuer: "AWS Academy",
    date: "Feb 22, 2025",
    viewUrl: "https://drive.google.com/file/d/100yOSdQ4VvGtnl8SQK6SpGLK4ca0EcFw/view?usp=drive_link",
  },
  {
    type: "CERTIFICATION",
    title: "AWS Academy Graduate - Data Engineering",
    issuer: "AWS Academy",
    date: "Apr 27, 2025",
    viewUrl: "https://drive.google.com/file/d/1oXmg8vZr7hAYbzMsz0oWB_AY4BkPxmaT/view?usp=drive_link",
  },
  {
    type: "CERTIFICATION",
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "July 10, 2024",
    viewUrl: "https://drive.google.com/file/d/1Tx2Xd_Hg_efx6_a_FUQSG9qHKs2kaR-I/view?usp=drive_link",
  },
  {
    type: "CERTIFICATION",
    title: "Associate Data Engineer",
    issuer: "DataCamp",
    date: "Nov 30, 2025",
    viewUrl: "https://www.datacamp.com/certificate/DEA0019976500434",
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
          <h2 className="text-4xl md:text-6xl font-bold text-[#8b6f47]">
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
                  className="bg-[#8b6f47]/10 border border-[#8b6f47]/20 rounded-lg p-6"
                >
                  <span className="text-xs text-[#8b6f47]/70 uppercase mb-2 block">
                    {cert.type}
                  </span>
                  <h4 className="text-xl font-bold mb-2 text-[#8b6f47]">{cert.title}</h4>
                  <p className="text-sm text-[#8b6f47]/80 mb-1">{cert.issuer}</p>
                  <p className="text-sm text-[#8b6f47]/60 mb-4">{cert.date}</p>
                  <a
                    href={cert.viewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#DAA520] hover:text-[#8b6f47] flex items-center gap-1"
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

