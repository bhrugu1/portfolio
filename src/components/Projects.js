import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const projectList = [
  {
    id: 'sales-dashboard',
    title: 'SALES PERFORMANCE DASHBOARD',
    summary: 'Interactive dashboard built with Power BI to visualize regional sales performance.',
  },
  {
    id: 'restaurant-db',
    title: 'PORTFOLIO WEBSITE',
    summary: 'A sleek personal portfolio showcasing my skills and projects.',
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projectList.map(project => (
          <Link to={`/project/${project.id}`} className="project-card" key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Projects;

// import React from 'react';
// import './Projects.css';

// function Projects() {
//   return (
//     <section id="projects" className="projects">
//       <h2>Projects</h2>
//       <div className="project-grid">
//         <div className="project-card">
//           <h3>SALES PERFORMANCE DASHBOARD </h3>
//           <p>Interactive dashboard to track sales performance across products, regions, and time.</p>
//         </div>
//         <div className="project-card">
//           <h3>PORTFOLIO WEBSITE</h3>
//           <p>A sleek personal portfolio showcasing my skills and projects.</p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Projects;
