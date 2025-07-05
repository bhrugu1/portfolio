import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <section id="skills" className="section skills">
      <h2>Skills</h2>

      <div className="skills-grid">
        <div>
          <h4>Languages</h4>
          <ul>
            <li>Python</li>
            <li>JavaScript</li>
            <li>SQL</li>
          </ul>
        </div>

        <div>
          <h4>Tools & Libraries</h4>
          <ul>
            <li>Power BI</li>
            <li>Excel</li>
            <li>React</li>
            <li>Tableau</li>
            <li>Git & GitHub</li>
          </ul>
        </div>

        <div>
          <h4>Data & Analytics</h4>
          <ul>
            <li>DAX</li>
            <li>Pandas</li>
            <li>NumPy</li>
            <li>MySQL</li>
            <li>Data Visualization</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
