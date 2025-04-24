import React from 'react';
import './Experience.css'; // Ensure to link the above CSS file

const Experience = () => {
  return (
    <div className="experience-section">
      <h2 className="section-title">Experience</h2>
      
      <div className="experience-container">
        {/* Experience 1 */}
        <div className="experience-card">
          <div className="experience-icon">IA</div> {/* Example icon, you can change it */}
          <h3 className="job-title">Instructional Assistant</h3>
          <p className="company">UNC Charlotte</p>
          <p className="job-duration">August 2024 - Present</p>
          <ul className="experience-details">
            <li>Assisted in developing course materials for IT and Data Science programs, resulting in 75% improvement in student comprehension.</li>
            <li>Facilitated interactive STEM workshops for more than 50 students, enhancing problem-solving skills while fostering a collaborative enviornment.</li>
            <li>Managed course content, grading, and communication using Canvas applications, improving workflow efficiency for both instructors and students.</li>
          </ul>
        </div>

        {/* Experience 2 */}
        <div className="experience-card">
          <div className="experience-icon">ML</div> {/* Example icon, you can change it */}
          <h3 className="job-title">Machine Learning Engineer</h3>
          <p className="company">Omdena</p>
          <p className="job-duration">May 2023 - July 2024</p>
          <ul className="experience-details">
            <li>Performed Exploratory Data Analysis(EDA) on large datasets, utilizing Python, Scikit-learn and Pandas to uncover key insights into hosuing affordability trends, resulting in 30% more reliable market predictions.</li>
            <li>Implemented Natural Language Processing(NLP) techniques to analyze text data and generate real-time insights , providing better fraud detection in housing applications, which improved data reliability by 25%.</li>
            <li>Collaborated with cross-functional teams to build AI-driven models for housing affordability predictions, using Scikit-learn and other machine learning tools, achieving 80% accuracy and reducing data transformation times by 20%.</li>
            <li>Developed interactive reports and dashboards using PowerBI to visualize housing market trends, contributing to a 20% improvement in market analysis accuracy and enhancing stakeholder decision-making.</li>
          </ul>
        </div>

        <div className="experience-card">
          <div className="experience-icon">SE</div> {/* Example icon, you can change it */}
          <h3 className="job-title">Software Engineer</h3>
          <p className="company">Enlighten Infosystems</p>
          <p className="job-duration">October 2022 - June 2023</p>
          <ul className="experience-details">
            <li>Ulitized ASP.NET MVC to develop web applications, leading to the successful launch of client project and achieving a 76% increase in customer satisfaction.</li>
            <li>Implementef database design and optimization techniques, resulting in a 42% improvement in query performance and reduced page load times for pipeline operations.</li>
            <li>Led the development of using Agile methodologies, facilitating sprint planning, daily stand-ups, and retrospectives, resulting in a 20% 
            improvement in project delivery time and enhanced cross-functional team collaboration. </li>
            
          </ul>
        </div>

        {/* Add more experience cards as needed */}
      </div>
    </div>
  );
};

export default Experience;
