"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const experiences = [
  {
    title: "Python Developer / Data Engineer",
    company: "CompsiPrep",
    type: "COMPANY",
    location: "Remote",
    period: "Aug 2025 – Present",
    achievements: [
      "Designed a serverless resume ingestion pipeline using AWS Lambda and S3 triggers for real-time processing",
      "Built Python-based NLP parsing logic to convert unstructured resumes into structured, searchable data",
      "Integrated GET APIs to fetch job metadata prior to POST pipeline creation, ensuring complete pipeline setup",
      "Developed an embeddings-based resume–job matching engine using OpenAI embeddings and vector search",
      "Created modular Python components for preprocessing, validation, embedding generation, and ranking",
      "Implemented CloudWatch monitoring, structured logging, and exception handling to improve reliability",
      "Optimized Lambda execution using batching and lightweight dependencies, reducing latency and AWS costs",
      "Ensured secure data handling using IAM least privilege, encrypted S3 storage, and Secrets Manager",
      "Followed Git Flow and Agile/Scrum practices, managing tasks and releases via JIRA",
    ],
    technologies: [
      "Python",
      "AWS Lambda",
      "AWS S3",
      "OpenAI",
      "NLP",
      "Vector Search",
      "CloudWatch",
      "IAM",
      "Secrets Manager",
      "Git Flow",
      "Agile/Scrum",
      "JIRA",
    ],
    verified: true,
  },
  {
    title: "Data Engineer / PySpark Developer",
    company: "Stellantis (Client: Accenture)",
    type: "COMPANY",
    location: "Remote",
    period: "Sept 2022 – Jan 2024",
    achievements: [
      "Designed and implemented PySpark ETL pipelines on AWS EMR to consolidate financial data from files and APIs",
      "Built Spark SQL workflows to compute revenue, expenses, profit margins, and cost allocations",
      "Architected an AWS S3 data lake partitioned by fiscal period and region, improving query performance by ~40%",
      "Integrated processed datasets with AWS Hive and Power BI dashboards for near real-time reporting",
      "Automated multi-step data validation and aggregation using AWS Step Functions and Lambda",
      "Implemented data quality checks to detect missing records, duplicates, and reconciliation issues",
      "Tuned Spark joins, partitioning, and EMR cluster configurations for ~30% faster processing",
      "Developed and executed large-scale Spark jobs reading from and writing to AWS S3",
    ],
    technologies: [
      "PySpark",
      "AWS EMR",
      "Spark SQL",
      "AWS S3",
      "Data Lake",
      "AWS Hive",
      "Power BI",
      "AWS Step Functions",
      "AWS Lambda",
      "ETL",
      "Data Quality",
      "Data Validation",
    ],
    verified: true,
  },
  {
    title: "Research Assistant – Computer Science",
    company: "University of North Carolina at Charlotte",
    type: "EDUCATION",
    location: "Charlotte, NC",
    period: "May 2024 – May 2025",
    achievements: [
      "Built full-stack applications using Spring Boot and React.js/Angular for analytics dashboards",
      "Designed secure RESTful APIs for a QR-based supply chain tracking system",
      "Integrated applications with Google Maps API and university ERP systems",
      "Supported research data processing and visualization tools for the CS department",
      "Developed and tested Java and C# backend services integrated with databases and APIs",
      "Assisted with academic reporting workflows and backend data validation",
      "Automated builds and deployments using Jenkins, GitHub Actions, and Docker",
      "Collaborated with faculty and research teams to deliver stable, data-driven applications",
    ],
    technologies: [
      "Spring Boot",
      "React.js",
      "Angular",
      "RESTful APIs",
      "Google Maps API",
      "Java",
      "C#",
      "Jenkins",
      "GitHub Actions",
      "Docker",
      "Data Processing",
      "Data Visualization",
    ],
    verified: true,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
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
          <h2 className="text-4xl md:text-6xl font-bold text-[#e8dcc0]">WORK RECORDS</h2>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-[#e8dcc0]/10 border border-[#e8dcc0]/20 rounded-lg p-8"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-2xl md:text-3xl font-bold">
                      {exp.title}
                    </h3>
                    {exp.verified && (
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                    )}
                  </div>
                  <p className="text-sm text-[#e8dcc0]/70 uppercase mb-1">
                    {exp.type}
                  </p>
                  <p className="text-xl font-semibold mb-2 text-[#e8dcc0]">{exp.company}</p>
                  <p className="text-[#e8dcc0]/80">{exp.period}</p>
                  <p className="text-[#e8dcc0]/80">{exp.location}</p>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-4">Key Achievements:</h4>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start">
                      <span className="mr-2 text-[#e8dcc0]/70">▸</span>
                      <span className="text-[#e8dcc0]">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-3">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-[#e8dcc0]/20 px-3 py-1 rounded text-sm text-[#e8dcc0]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {exp.verified && (
                <div className="mt-4">
                  <span className="text-sm text-green-400 font-semibold">
                    VERIFIED
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12 text-[#e8dcc0]/80"
        >
          <p>* 3+ years of professional software engineering and data engineering experience</p>
        </motion.div>
      </div>
    </section>
  );
}

