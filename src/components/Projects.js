import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import { motion } from 'framer-motion';

const projectList = [
  {
    id: 'municipal-liability-analytics',
    title: 'CHICAGO LIABILITY ANALYTICS',
    summary: 'Comprehensive data analytics platform designed for the City of Chicago that processes 75,000 municipal liability claims using advanced ETL pipelines, NLP root cause analysis, and interactive geospatial visualization to identify risk patterns, operational oversights, and strategic cost-saving opportunities.',
  },
  {
    id: 'sales-dashboard',
    title: 'SALES PERFORMANCE DASHBOARD',
    summary: 'Advanced business intelligence dashboard built with Power BI that transforms raw transactional supermarket data into interactive visualizations for sales performance monitoring, KPI tracking, and strategic decision-making.',
  },
  {
    id: 'restaurant-db',
    title: 'PERSONAL PORTFOLIO WEBSITE',
    summary: 'Modern responsive React SPA featuring dynamic project routing, dark/light theme toggle, EmailJS contact integration, and professional UI/UX design optimized for both desktop and mobile recruitment scenarios.',
  },
  {
    id: 'netflix-analysis',
    title: 'NETFLIX DATA ANALYSIS',
    summary: 'Comprehensive Python-based exploratory data analysis of Netflix\'s Movies and TV Shows dataset using advanced data science techniques to uncover content trends, genre patterns, and geographical distribution insights.',
  },
];


function Projects() {
  return (
    <section id="projects" className="projects">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        Projects
      </motion.h2>

      <div className="project-grid">
        {projectList.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <Link to={`/project/${project.id}`} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
