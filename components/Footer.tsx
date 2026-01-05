"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Certifications", href: "#awards" },
  { name: "Projects", href: "#freelance" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-[#1f1f1f]/80 border-t border-[#e8dcc0]/20 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-[#e8dcc0]">VENKATA SAI PAVAN BOMMULURI</h3>
            <p className="text-[#e8dcc0]/80 mb-4">
              Full Stack Developer & Data Engineer specializing in building scalable,
              production-grade web applications and data engineering solutions with modern technologies.
            </p>
            <p className="text-[#e8dcc0]/60">Available for immediate hire</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-[#e8dcc0]">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#e8dcc0]/80 hover:text-[#e8dcc0] transition-colors flex items-center gap-2"
                  >
                    → {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-[#e8dcc0]">Get In Touch</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:bommulurisai137@gmail.com"
                  className="text-[#e8dcc0]/80 hover:text-[#e8dcc0] transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  bommulurisai137@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+19803488088"
                  className="text-[#e8dcc0]/80 hover:text-[#e8dcc0] transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  (+1) 980-348-8088
                </a>
              </li>
              <li className="text-[#e8dcc0]/80 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Charlotte, NC
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#e8dcc0]/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span className="text-xl text-[#DAA520]">★</span>
            <p className="text-[#e8dcc0]/80 text-sm">
              © 2025 Venkata Sai Pavan Bommuluri. All rights reserved.
            </p>
            <span className="text-xl text-[#DAA520]">★</span>
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[#e8dcc0]/80 hover:text-[#e8dcc0] transition-colors"
            aria-label="Back to top"
          >
            <span className="text-sm">↑ BACK TO TOP</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}

