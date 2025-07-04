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
    title: 'Restaurant Management System',
    description: 'A SQL-based system to manage restaurant orders, menus, staff, and inventory.',
    screenshots: ['/images/restaurant1.png'],
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
      <div className="screenshots">
        {project.screenshots.map((src, index) => (
          <img key={index} src={src} alt={`Screenshot ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default ProjectDetail;
