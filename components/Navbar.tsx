"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home", id: "home" },
  { name: "About", href: "#about", id: "about" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Certifications", href: "#awards", id: "awards" },
  { name: "Projects", href: "#freelance", id: "freelance" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const scrollPosition = window.scrollY + 100;
      
      for (let i = navItems.length - 1; i >= 0; i--) {
        const element = document.getElementById(navItems[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].name);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6"
    >
      <div className="backdrop-blur-xl bg-[#2a2a2a]/60 border border-[#e8dcc0]/30 rounded-2xl px-6 py-3 shadow-2xl shadow-black/30">
        <div className="flex items-center">
          {navItems.map((item, index) => (
            <div key={item.name} className="flex items-center">
              <a
                href={item.href}
                className={`text-sm font-medium transition-all duration-200 px-3 ${
                  activeSection === item.name
                    ? "text-[#e8dcc0] font-semibold drop-shadow-lg"
                    : "text-[#e8dcc0]/90 hover:text-[#e8dcc0] drop-shadow-md"
                }`}
              >
                {item.name}
              </a>
              {index < navItems.length - 1 && (
                <span className="h-4 w-px bg-[#e8dcc0]/30"></span>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}

