import React from "react";
import "./Certifications.css";

const Certifications = () => (
  <section id="certifications" className="certifications-section">
    <h2 className="section-title">Certifications</h2>
    <div className="certifications-container">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="certification-icon">
              <img
                src="/images/microsoft logo.png"
                alt="Microsoft Logo"
                className="certification-logo"
              />
            </div>
            <h3>Azure Fundamentals</h3>
            <p>Issued by Microsoft</p>
          </div>
          <div className="flip-card-back">
            <img
              src="/images/az900.jpg"
              alt="Microsoft Certificate"
              className="certificate-image"
            />
          </div>
        </div>
      </div>

      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="certification-icon">
              <img
                src="/images/badge.png"
                alt="AWS "
                className="certification-logo"
              />
            </div>
            <h3>Data Engineering</h3>
            <p>Issued by AWS</p>
          </div>
          <div className="flip-card-back">
            <img
              src="/images/Aws.png"
              alt="AWS Certificate"
              className="certificate-image"
            />
          </div>
        </div>
      </div>

      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="certification-icon">
              <img
                src="/images/datacamp.png"
                alt="Simplilearn "
                className="certification-logo"
              />
            </div>
            <h3>Associate Data Engineering in SQL</h3>
            <p>Issued by Datacamp</p>
          </div>
          <div className="flip-card-back">
            <img
              src="/images/machine learning.png"
              alt="Simplilearn Certificate"
              className="certificate-image"
            />
          </div>
        </div>
      </div>

      {/* Add more flip cards as needed */}
    </div>
  </section>
);

export default Certifications;
