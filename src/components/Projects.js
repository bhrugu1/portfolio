import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import { motion } from 'framer-motion';

const projectList = [
  {
    id: 'municipal-liability-analytics',
    title: 'CHICAGO LIABILITY ANALYTICS',
    summary: 'A comprehensive data analytics platform designed for the City of Chicago that processes 75,000 municipal liability claims to identify risk patterns and cost-saving opportunities.',
  },
  {
    id: 'sales-dashboard',
    title: 'SALES PERFORMANCE DASHBOARD',
    summary: 'Interactive dashboard built with Power BI to visualize regional sales performance.',
  },
  {
    id: 'restaurant-db',
    title: 'PERSONAL PORTFOLIO WEBSITE',
    summary: 'A sleek personal portfolio showcasing my skills and projects.',
  },
  {
    id: 'netflix-analysis',
    title: 'NETFLIX DATA ANALYSIS',
    summary: 'A Python-based exploratory data analysis on Netflix content trends using pandas and seaborn.',
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
