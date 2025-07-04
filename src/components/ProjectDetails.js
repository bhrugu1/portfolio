import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetails.css';

const projectData = {
  'sales-dashboard': {
    title: 'Sales Performance Dashboard',
    description: 'An interactive dashboard using Power BI, tracking sales KPIs with DAX calculations.',
    screenshots: ['/images/FinalScreenshot.png', '/images/otherproject.png'], // Add these to public/images
  },
  'restaurant-db': {
    title: 'Personal Portfolio Website',
    description: 'A responsive React-based personal portfolio website designed to showcase my projects, skills, and experience. The site features smooth scroll navigation, dark mode toggle, project routing with React Router, and a contact form powered by EmailJS — all optimized for both desktop and mobile devices. It is deployed live on Vercel and integrates with GitHub for continuous deployment.',
    features: [
      'Built with React and React Router',
      'Responsive design with smooth scroll navigation',
      'Dark mode toggle with state management',
      'EmailJS integration for contact form',
      'Project detail pages using dynamic routing',
      'Deployed on Vercel with GitHub CI/CD',
    ],
    technologies: [
      'React',
      'React Router',
      'CSS',
      'EmailJS',
      'Git & GitHub',
      'Vercel'
    ],
    liveDemo: 'https://portfolio-bhrugu1s-projects.vercel.app/',       // 👈 replace with your real URL
    githubRepo: 'https://github.com/bhrugu1/portfolio'
    //screenshots: ['/images/restaurant1.png'],
  },
};

function ProjectDetail() {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) return <p>Project not found.</p>;

  return (
    <div className="project-detail">
      <h2>{project.title}</h2>
      <p>{project.description}</p>

      {project.features && (
        <div className="features">
          <h3>Key Features</h3>
          <ul>
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      )}

      {project.technologies && (
        <div className="technologies">
          <h3>Tools & Technologies</h3>
          <ul>
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="project-links">
        {project.liveDemo && (
          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="project-button">
            🔗 Live Demo
          </a>
        )}
        {project.githubRepo && (
          <a href={project.githubRepo} target="_blank" rel="noopener noreferrer" className="project-button">
            💻 GitHub Repo
          </a>
        )}
      </div>


      {/* <div className="screenshots">
        {project.screenshots.map((src, index) => (
          <img key={index} src={src} alt={`Screenshot ${index + 1}`} />
        ))}
      </div> */}
    </div>
  );
}

export default ProjectDetail;
