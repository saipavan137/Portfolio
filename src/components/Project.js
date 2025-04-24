import React from 'react';
import './Project.css'; // Ensure you create this CSS file for styling

const Projects = () => (
  <section id="projects" className="projects-section">
    <h2 className="section-title">Projects</h2>
    <div className="projects-container">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src="/images/F1 race.jpg" alt="F1 Race Analysis" className="project-image"/>
            <h3>F1 Race Analysis</h3>
          </div>
          <div className="flip-card-back">
            <p>Performed exploratory data analysis (EDA) and created visualizations to analyze race performance, improving decision-making by 25%.</p>
            <a href="https://github.com/priyal-11/F1-Race-Analysis.git" target="_blank" rel="noopener noreferrer" className="github-link">
              View on GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src="/images/Sales.png
            " alt="Sales Dashboard" className="project-image"/>
            <h3>Interactive Sales Dashboard</h3>
          </div>
          <div className="flip-card-back">
            <p>Developed a Streamlit dashboard for real-time data visualization, driving a 15% rise in quarterly sales.</p>
            <a href="https://github.com/priyal-11/SuperStore-Dashboard-using-Plotly-and-Streamlit.git" target="_blank" rel="noopener noreferrer" className="github-link">
              View on GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src="/images/Skyline Scumbles.png
            " alt="Sales Dashboard" className="project-image"/>
            <h3>Skyline Scumbles</h3>
          </div>
          <div className="flip-card-back">
            <p>Analyzed 5 years of flight delay data from 20+ airlines, identifying patterns that aided in optimizing airline scheduling and operations. </p>
            <a href="https://github.com/priyal-11/Skyline-Scumbles.git" target="_blank" rel="noopener noreferrer" className="github-link">
              View on GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src="/images/Netflix Trends.png
            " alt="Sales Dashboard" className="project-image"/>
            <h3>Netflix Trends</h3>
          </div>
          <div className="flip-card-back">
            <p>Developed an interactive dashboard in Tableau to analyze a dataset of 5000+ Netflix titles, showcasing genre distribution, release trends, and 
            rating analysis, providing deeper insights into content performance and viewer preferences. </p>
            <a href="https://github.com/priyal-11/Netflix-Trends.git" target="_blank" rel="noopener noreferrer" className="github-link">
              View on GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src="/images/coding.jpg
            " alt="Sales Dashboard" className="project-image"/>
            <h3>Photo Sharing Web Application</h3>
          </div>
          <div className="flip-card-back">
            <p>Streamlined user experience by optimizing backend code, resulting in a 20% increase in daily active users and a 15% improvement in user 
            retention rates.</p>
            <a href="https://github.com/NikhilVerma88/team3-project5.git" target="_blank" rel="noopener noreferrer" className="github-link">
              View on GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src="/images/meet up.jpg
            " alt="Sales Dashboard" className="project-image"/>
            <h3>Meet Up Application</h3>
          </div>
          <div className="flip-card-back">
            <p>Utilized advanced JavaScript and React skills to enhance user interface of Meet-up Application, resulting in a 30% increase in user engagement. </p>
            <a href="https://github.com/priyal-11/Meet-up-Application.git" target="_blank" rel="noopener noreferrer" className="github-link">
              View on GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src="/images/EMR.png
            " alt="Sales Dashboard" className="project-image"/>
            <h3>Electronic Medical System</h3>
          </div>
          <div className="flip-card-back">
            <p>Implemented Python-driven database normalization to BCNF, reducing redundancy by 30% and enhancing database
            efficiency significantly.</p>
            <a href="https://github.com/priyal-11/Electronic-Medical-Record-System.git" target="_blank" rel="noopener noreferrer" className="github-link">
              View on GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src="/images/recipe.jpg
            " alt="Sales Dashboard" className="project-image"/>
            <h3>Recipe App</h3>
          </div>
          <div className="flip-card-back">
            <p>Implemented a recipe app using React.js, enabling users to add, edit, delete, and rate recipes. The app features an intuitive user interface, state management for seamless updates, and interactive components for rating and recipe editing. </p>
            <a href="https://github.com/priyal-11/Recipe-App.git" target="_blank" rel="noopener noreferrer" className="github-link">
              View on GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src="/images/note.png
            " alt="Sales Dashboard" className="project-image"/>
            <h3>Note App</h3>
          </div>
          <div className="flip-card-back">
            <p>Implemented a basic note app using React.js, allowing users to write, edit, and delete notes. The app features a user-friendly interface and efficient state management to ensure smooth interaction and functionality. </p>
            <a href="https://github.com/priyal-11/NoteApp.git" target="_blank" rel="noopener noreferrer" className="github-link">
              View on GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src="/images/event-finder.jpg
            " alt="Sales Dashboard" className="project-image"/>
            <h3>Event-Finder</h3>
          </div>
          <div className="flip-card-back">
            <p>Built a React.js-based application allowing users to create events, book tickets, and filter/sort events. Integrated features for liking, sharing, and ticket management, ensuring a seamless and user-friendly experience. </p>
            <a href="https://github.com/priyal-11/Event_Finder.git" target="_blank" rel="noopener noreferrer" className="github-link">
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
