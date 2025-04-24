import React from "react";
import "./Skills.css"; // Assuming you add your CSS here
import {
  FaPython,
  FaDatabase,
  FaChartBar,
  FaToolbox,
  FaProjectDiagram,
  FaConnectdevelop,
} from "react-icons/fa"; // Font Awesome Icons

const Skills = () => (
  <section id="skills" className="skills-section">
    <h2 className="section-title">Skills</h2>
    <div className="skills-grid">
      <div className="skill-card">
        <FaPython className="skill-icon" />
        <h3>Programming Languages</h3>
        <p>Python, SQL, Java</p>
      </div>

      <div className="skill-card">
        <FaDatabase className="skill-icon" />
        <h3>Database & Cloud</h3>
        <p>MySQL, MongoDB, Oracle, AWS (Athena, Cloud9, AWS Glue)</p>
      </div>

      <div className="skill-card">
        <FaChartBar className="skill-icon" />
        <h3>Data Analysis & Manipulation</h3>
        <p>EDA, NLP, Pandas, NumPy, Scikit-learn</p>
      </div>

      <div className="skill-card">
        <FaProjectDiagram className="skill-icon" />
        <h3>Data Visualization</h3>
        <p>Tableau, PowerBI, Plotly, Seaborn, matplotlib, Streamlit</p>
      </div>

      <div className="skill-card">
        <FaToolbox className="skill-icon" />
        <h3>Tools</h3>
        <p>Git, AWS, Azure, Docker, Postman, Jira, D3, Adobe XD,APIs</p>
      </div>

      <div className="skill-card">
        <FaConnectdevelop className="skill-icon" />
        <h3>Web Development</h3>
        <p>HTML, CSS, Java Script, Angular, Node.js, React.js, Express.js </p>
      </div>
    </div>
  </section>
);

export default Skills;
