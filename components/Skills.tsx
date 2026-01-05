"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "PROGRAMMING LANGUAGES",
    proficiency: "HIGH",
    skills: ["Python", "SQL", "Java", "UNIX Shell Script", "NoSQL"],
  },
  {
    title: "WEB DEVELOPMENT",
    proficiency: "HIGH",
    skills: [
      "HTML5",
      "CSS3",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Bootstrap",
      "Webpack",
      "Email.js",
      "Vue.js",
    ],
  },
  {
    title: "AUTHENTICATION & SECURITY",
    proficiency: "HIGH",
    skills: ["OAuth", "JWT", "RBAC", "PII/PHI compliance"],
  },
  {
    title: "MESSAGING",
    proficiency: "HIGH",
    skills: ["Kafka", "Redis", "Elasticsearch", "Memcached"],
  },
  {
    title: "ACCESSIBILITY & PERFORMANCE",
    proficiency: "HIGH",
    skills: ["WCAG 2.1 / Section 508", "Lighthouse", "SEO", "CDT"],
  },
  {
    title: "STATE MANAGEMENT",
    proficiency: "HIGH",
    skills: ["Redux", "Zustand", "Context API", "React Query"],
  },
  {
    title: "WEB FUNDAMENTALS",
    proficiency: "HIGH",
    skills: ["HTTP/HTTPS", "Browser Rendering", "DOM"],
  },
  {
    title: "ARCHITECTURE & PATTERNS",
    proficiency: "HIGH",
    skills: ["MVC design pattern", "Component-driven design", "Modular architecture"],
  },
  {
    title: "APIs & INTEGRATIONS",
    proficiency: "HIGH",
    skills: [
      "REST API",
      "Fast API",
      "Web Sockets",
      "WebHooks",
    ],
  },
  {
    title: "DATABASES & ORMs",
    proficiency: "HIGH",
    skills: [
      "MySQL",
      "MS SQL",
      "PostgreSQL",
      "MongoDB",
    ],
  },
  {
    title: "CLOUD & DEVOPS",
    proficiency: "HIGH",
    skills: [
      "AWS (EC2, Lambda, S3, CloudWatch)",
      "Docker",
      "Kubernetes",
      "Vercel",
      "Cloudflare",
      "Cloudinary",
      "CI/CD",
    ],
  },
  {
    title: "TESTING & AUTOMATION",
    proficiency: "HIGH",
    skills: [
      "Jest",
      "Pytest",
      "unit test",
      "Mocha",
      "Vitest",
      "Postman",
      "Cypress",
      "Sandbox Testing",
      "Functional Testing",
    ],
  },
  {
    title: "AI & LLM TOOLS",
    proficiency: "HIGH",
    skills: [
      "OpenAI",
      "Hugging Face Transformers",
      "LangChain",
      "Claude",
      "Firebase Studio",
      "GitHub Copilot",
      "Cursor",
      "Gemini",
      "Grok",
      "Sonnet",
    ],
  },
  {
    title: "DISTRIBUTED SYSTEMS",
    proficiency: "HIGH",
    skills: [
      "Hadoop",
      "HDFS (Hadoop Distributed File System)",
      "MapReduce",
      "YARN",
      "Hive",
      "HBase",
      "Spark",
      "RPC handlers",
      "Asynchronous pipelines",
      "System Design",
      "Performance Tuning",
      "Reliability Optimization",
      "Lazy Loading",
      "Bundle Optimization",
      "Code Splitting",
    ],
  },
  {
    title: "COLLABORATION & PRODUCTIVITY",
    proficiency: "HIGH",
    skills: [
      "Git",
      "GitHub",
      "GitLab",
      "Taiga",
      "Scrum",
      "Agile",
      "VS Code",
      "Vite",
      "Jira",
      "Notion",
      "Clerk",
      "Prompt Engineering",
      "MS Word",
      "MS Excel",
      "WordPress",
    ],
  },
];

const coreCompetencies = [
  "Full-Stack Development",
  "Microservices Architecture",
  "Performance Optimization",
  "Security Best Practices",
  "Agile/Scrum Methodology",
  "CI/CD Pipelines",
  "Cloud Infrastructure",
  "API Design & Integration",
];

export default function Skills() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll =
        direction === "left"
          ? currentScroll - scrollAmount
          : currentScroll + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="skills" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
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
          <h2 className="text-4xl md:text-6xl font-bold text-[#e8dcc0]">SKILL INVENTORY</h2>
          <p className="text-lg md:text-xl text-[#e8dcc0]/80 mt-4">
            Known proficiencies and technical capabilities
          </p>
        </motion.div>

        <div className="relative">
          <div className="flex items-center mb-8">
            <button
              onClick={() => handleScroll("left")}
              className="text-[#e8dcc0]/60 hover:text-[#e8dcc0] transition-colors mr-4"
              aria-label="Scroll left"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <span className="text-sm text-[#e8dcc0]/70">←Scroll to explore skills→</span>
            <button
              onClick={() => handleScroll("right")}
              className="text-[#e8dcc0]/60 hover:text-[#e8dcc0] transition-colors ml-4"
              aria-label="Scroll right"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <div
            ref={scrollContainerRef}
            className="overflow-x-auto pb-8 skills-scrollbar w-full"
          >
            <div className="flex space-x-4 min-w-max px-2">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#f5e6d3] border-2 border-[#8b6f47] rounded-lg p-4 min-w-[240px] max-w-[240px]"
                >
                  <h3 className="text-base font-bold mb-1.5 text-[#1f1f1f] uppercase">{category.title}</h3>
                  <p className="text-xs text-[#1f1f1f] mb-2">
                    PROFICIENCY: {category.proficiency}
                  </p>
                  <div className="border-t border-[#8b6f47] mb-3"></div>
                  <ul className="space-y-1.5">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="text-xs text-[#1f1f1f]">
                        ▸ {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 flex justify-center"
        >
          <div className="bg-[#f5e6d3] border-2 border-[#8b6f47] rounded-lg p-8 max-w-4xl w-full">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#1f1f1f]">
              CORE COMPETENCIES
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {coreCompetencies.map((competency, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white border border-[#1f1f1f] rounded px-6 py-3"
                >
                  <span className="text-sm md:text-base text-[#1f1f1f] font-medium">{competency}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .skills-scrollbar::-webkit-scrollbar {
          height: 8px;
        }
        .skills-scrollbar::-webkit-scrollbar-track {
          background: rgba(245, 230, 211, 0.2);
          border-radius: 4px;
        }
        .skills-scrollbar::-webkit-scrollbar-thumb {
          background: #8b6f47;
          border-radius: 4px;
        }
        .skills-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #6b5433;
        }
        .skills-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #8b6f47 rgba(245, 230, 211, 0.2);
        }
      `}</style>
    </section>
  );
}

