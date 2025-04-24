import React from "react";
import "./Experience.css"; // Ensure to link the above CSS file

const Experience = () => {
  return (
    <div className="experience-section">
      <h2 className="section-title">Experience</h2>

      <div className="experience-container">
        {/* Experience 1 */}
        <div className="experience-card">
          <div className="experience-icon">IA</div>{" "}
          {/* Example icon, you can change it */}
          <h3 className="job-title">Data Engineer</h3>
          <p className="company">Accenture</p>
          <p className="job-duration">Aug 2022 - Jan 2024</p>
          <ul className="experience-details">
            <li>
              Collaborated with teams to develop data pipelines and documented
              process flows, optimizing ETL processes using Python and Apache
              Spark.
            </li>
            <li>
              Developed automation scripts for data validation, reducing data
              processing time by 30%.
            </li>
            <li>
              Implemented data transformation logic to support advanced
              analytics and reporting, improving data accuracy and insights.
            </li>
            <li>
              Utilized cloud-native services in Azure (Data Factory, Data Lake)
              to optimize data storage and processing costs.
            </li>
          </ul>
        </div>

        {/* Experience 2 */}
        <div className="experience-card">
          <div className="experience-icon">ASE</div>{" "}
          {/* Example icon, you can change it */}
          <h3 className="job-title">Associate Software Engineer</h3>
          <p className="company">Accenture</p>
          <p className="job-duration">Jan 2022 - Aug 2022</p>
          <ul className="experience-details">
            <li>
              Developed scalable ETL pipelines using Apache Spark and Hadoop,
              improving data processing efficiency and supporting large-scale
              data analysis.
            </li>
            <li>
              Created data models and storage solutions using Azure, enhancing
              data accessibility and supporting Stellantis' business
              decision-mak ing processes.
            </li>
            <li>
              Collaborated with cross-functional teams to build AI-driven models
              for housing affordability predictions, using Scikit-learn and
              other machine learning tools, achieving 80% accuracy and reducing
              data transformation times by 20%.
            </li>
            <li>
              Implemented analytics models using SQL and visualization tools
              like Power BI to derive insights on vehicle performance and
              predictive maintenance, while maintaining clear,
              version-controlled documentation to support stakeholder
              understanding.
            </li>
          </ul>
        </div>

        {/* Add more experience cards as needed */}
      </div>
    </div>
  );
};

export default Experience;
