import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetails.css';

const projectData = {
  'sales-dashboard': {
    title: 'Sales Performance Dashboard',
    description: `The Sales Performance Dashboard is an interactive and visually-driven analytics solution built in Power BI, designed for a fictional supermarket business to analyze and monitor sales and profit performance across multiple dimensions. It leverages DAX formulas and Excel-based data modeling to present real-time insights into key sales metrics.

The dashboard highlights total sales, total profit, and profit percentage at a glance, followed by detailed visual breakdowns including:
- Monthly performance comparison of sales and profit
- Top-selling products and their contribution to revenue
- Sales distribution by type (Online, Wholesale, Direct)
- Payment method breakdown
- Daily sales trend analysis

It features fully interactive slicers for year, month, sale type, and payment mode, allowing end users to filter and drill into the data instantly. Designed with a clean dark theme and clear KPIs, the dashboard helps stakeholders quickly identify sales trends, product performance, and operational focus areas.

This project demonstrates skills in data modeling, DAX calculations, and dashboard storytelling, making it ideal for business users looking to make data-informed decisions.`,
    features: [
      'Built using Power BI and Excel with real sales data',
      'Tracked KPIs such as total revenue, monthly trends, and top-selling products',
      'Used DAX to calculate dynamic metrics and year-over-year growth',
      'Interactive visuals with slicers and drill-through pages',
      'Designed for business users to make informed decisions quickly'
    ],
    technologies: [
      'Power BI',
      'DAX',
      'Excel',
      'Data Visualization',
      'KPI Dashboards',
      'Data Analysis'
    ],
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
     <p style={{ whiteSpace: 'pre-line' }}>{project.description}</p>


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


      {project.screenshots && (
        <div className="screenshots">
          <h3>Screenshots</h3>
          {project.screenshots.map((src, index) => (
            <img key={index} src={src} alt={`Screenshot ${index + 1}`} />
          ))}
        </div>
      )}

    </div>
  );
}

export default ProjectDetail;
