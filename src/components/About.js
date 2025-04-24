import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faHackerrank,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-main">
        {/* Profile Picture on the Left */}
        <div className="about-image">
          <img
            src="/images/Profile Pro.jpeg"
            alt="Venkata Sai Pavan Bommuluri"
          />
        </div>

        {/* About Me, Contact Info, and Social Links on the Right */}
        <div className="about-content">
          <h2 className="title">About Me</h2>
          <div className="about-text">
            <p>
              I am a graduate student in Information Technology at University of
              North Carolina at Charlotte with expertise in machine learning,
              data analysis, and software development. I have experience
              building AI solutions, optimizing ETL pipelines, and developing
              web applications, with a strong focus on delivering impactful,
              data-driven results.
            </p>
          </div>

          {/* Contact Information Section */}
          <div className="contact-info">
            <h3 className="h3">Contact Me</h3>
            <p>Email: vbommul1@charlotte.edu</p>
            <p>Phone: +1(980)-348-8088</p>
          </div>

          {/* Social Media Links with Icons */}
          <div className="social-links">
            <h3>Connect with Me</h3>
            <div className="links">
              <a
                href="https://www.linkedin.com/in/venkata-sai-pavan-bommuluri-9921b7126/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" /> LinkedIn
              </a>
              <a
                href="https://github.com/saipavan137"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" /> GitHub
              </a>
              <a
                href="https://www.hackerrank.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faHackerrank} size="lg" /> HackerRank
              </a>
              {/* Download Resume Button */}
              <a
                href="/Venkata_Sai_Pavan_Resume.pdf"
                download="Venkata Sai Pavan Bommuluri Resume"
                className="resume-button"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
