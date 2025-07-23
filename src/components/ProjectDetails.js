import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetails.css';

const projectData = {
  'sales-dashboard': {
  title: 'Sales Performance Dashboard',
  description: `I was tasked with transforming raw transactional data from a supermarket into a fully interactive Sales Performance Dashboard using Power BI. The goal was to enable stakeholders to monitor key performance indicators (KPIs), analyze trends, and make informed decisions about sales strategies.

The dashboard provides:
- A high-level summary of sales, profit, and growth
- Dynamic visualizations for monthly and yearly trends
- Filtering by region, product category, payment method, and more
- Tools to identify underperforming products or peak sale periods

This project demonstrates strong skills in data modeling, DAX calculations, and dashboard storytelling for business impact.`,

  features: [
    'YoY Sales and Revenue Growth visualizations',
    'Category-wise performance breakdown',
    'Time-based filtering and dynamic comparisons',
    'Top & bottom 10 performing product insights',
    'Regional sales heat maps and KPIs'
  ],

  technologies: [
    'Power BI',
    'DAX',
    'Excel',
    'Data Modeling',
    'Data Visualization',
    'KPI Dashboards'
  ],

  screenshots: ['/images/FinalScreenshot.png', '/images/otherproject.png'],

  challenges: [
    {
      title: 'Complex Relationships in the Data',
      solution: 'Used Power BI’s model view and USERELATIONSHIP() in DAX to handle multiple date fields and ensure accurate relationships.'
    },
    {
      title: 'Inconsistent Date Formats',
      solution: 'Used Power Query Editor to clean and standardize formats across all data sources.'
    },
    {
      title: 'Performance Optimization',
      solution: 'Optimized DAX formulas and avoided volatile functions to improve dashboard load speed.'
    }
  ],

  outcome: `The dashboard helped business stakeholders reduce manual reporting efforts and make quicker data-driven decisions. It supported better visibility into sales performance and allowed for targeted business improvements.`
},  
  'restaurant-db': {
  title: 'Personal Portfolio Website',
  description: `This project is my personal developer portfolio built with React to showcase my work, skills, and contact information. It serves as a centralized hub for recruiters, employers, and collaborators to learn more about me and explore my projects in detail.

The website features:
- A modern, responsive UI with smooth scroll navigation
- Dynamic project detail pages using React Router
- Dark mode toggle with saved preferences
- Contact form integration using EmailJS
- Hosted on Vercel with continuous deployment from GitHub

It reflects my skills in frontend development, React component design, and clean UI/UX principles, and is optimized for both desktop and mobile users.`,

  features: [
    'Responsive React SPA with mobile-first design',
    'Dark/light theme toggle with saved preferences',
    'Project detail pages using dynamic routing',
    'EmailJS-powered contact form',
    'Live deployment on Vercel with GitHub CI/CD',
    'SEO-friendly with clean meta structure'
  ],

  technologies: [
    'React',
    'React Router',
    'CSS',
    'EmailJS',
    'Git & GitHub',
    'Vercel',
    'HTML5',
    'JavaScript'
  ],  

  challenges: [
    {
      title: 'Routing Dynamic Content',
      solution: 'Used React Router to handle individual project detail pages based on URL parameters.'
    },
    {
      title: 'Dark Mode Implementation',
      solution: 'Used React state and `localStorage` to persist the user’s theme preference across sessions.'
    },
    {
      title: 'Form Submission Without Backend',
      solution: 'Integrated EmailJS to handle contact form messages without building a custom server.'
    }
  ],

  outcome: `The portfolio helped me present my development work in a clean and professional way, supported job applications, and received positive feedback from peers and recruiters. It stands as a strong reflection of my personal brand and frontend skills.`,

  liveDemo: 'https://portfolio-bhrugu1s-projects.vercel.app/',
  githubRepo: 'https://github.com/bhrugu1/portfolio'
},  

'netflix-analysis': {
  title: 'Netflix Data Analysis',
  description: `This project is an exploratory data analysis of Netflix's Movies and TV Shows dataset using Python, Pandas, and Seaborn. The goal was to uncover patterns in content types, country-wise contributions, genre popularity, and year-wise additions.

Key focus areas included:
- Cleaning and transforming messy data (e.g., missing dates, country names)
- Extracting insights such as trends in content addition and genre diversity
- Visualizing findings using Matplotlib and Seaborn charts
- Handling common data issues like inconsistent formats, missing values, and grouped text fields`,

  features: [
    'Content trend analysis by year',
    'Top contributing countries for Netflix titles',
    'Most frequent genres and categories',
    'TV Show vs Movie breakdown',
    'Cleaned and structured messy data with null handling'
  ],

  technologies: [
    'Python',
    'Pandas',
    'Seaborn',
    'Matplotlib',
    'Jupyter Notebook',
    'CSV Data Handling'
  ],
  
  screenshots: ['/images/NetflixSS1.png', '/images/NetflixSS2.png', '/images/NetflixSS3.png', '/images/NetflixSS4.png'],

  challenges: [
    {
      title: 'Missing and malformed values',
      solution: 'Used pandas functions like `fillna`, `dropna`, and `astype` to clean and standardize the data safely.'
    },
    {
      title: 'Parsing genres from grouped strings',
      solution: 'Used string splitting and the `Counter` class to aggregate genre frequencies.'
    },
    {
      title: 'Visual clarity and compatibility',
      solution: 'Refined chart formatting and handled font/glyph warnings for cross-platform presentation.'
    }
  ],

  outcome: `The project effectively demonstrated my ability to wrangle real-world datasets, analyze structured and unstructured data, and communicate findings through clear visualizations. It's a strong example of applied data storytelling using Python.`,

  liveDemo: '', // If hosted anywhere
  githubRepo: 'https://github.com/bhrugu1/netflix_analysis' // Replace with your actual repo if applicable
}


};

function ProjectDetail() {
  const { id } = useParams();
  const project = projectData[id];
  const [selectedImage, setSelectedImage] = useState(null);

  const openImageModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && selectedImage) {
        closeImageModal();
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  if (!project) return <div className="project-not-found">
    <h2>🚫 Project not found</h2>
    <p>The project you're looking for doesn't exist.</p>
  </div>;

  return (
    <div className="project-detail">
      {/* Hero Section */}
      <div className="project-hero">
        <h1 className="project-title">{project.title}</h1>
        <div className="project-links-hero">
          {project.liveDemo && (
            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="project-button primary">
              🔗 Live Demo
            </a>
          )}
          {project.githubRepo && (
            <a href={project.githubRepo} target="_blank" rel="noopener noreferrer" className="project-button secondary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          )}
        </div>
      </div>

      {/* Description Section */}
      <div className="section-card">
        <div className="section-icon">📋</div>
        <h3>Project Overview</h3>
        <p className="project-description">{project.description}</p>
      </div>

      {/* Features Section */}
      {project.features && (
        <div className="section-card">
          <div className="section-icon">✨</div>
          <h3>Key Features</h3>
          <div className="features-grid">
            {project.features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">🚀</div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Technologies Section */}
      {project.technologies && (
        <div className="section-card">
          <div className="section-icon">🛠️</div>
          <h3>Tools & Technologies</h3>
          <div className="tech-tags">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Screenshots Section */}
      {project.screenshots && (
        <div className="section-card">
          <div className="section-icon">📸</div>
          <h3>Screenshots</h3>
          <div className="screenshots-gallery">
            {project.screenshots.map((src, index) => (
              <div 
                key={index} 
                className="screenshot-wrapper"
                onClick={() => openImageModal(src)}
                style={{ cursor: 'pointer' }}
              >
                <img 
                  src={src} 
                  alt={`${project.title} - Screenshot ${index + 1}`}
                  loading="lazy"
                />
                <div className="screenshot-overlay">
                  <span>View Full Size</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Challenges Section */}
      {project.challenges && (
        <div className="section-card">
          <div className="section-icon">⚡</div>
          <h3>Challenges & Solutions</h3>
          <div className="challenges-list">
            {project.challenges.map((item, index) => (
              <div key={index} className="challenge-card">
                <div className="challenge-header">
                  <div className="challenge-icon">🎯</div>
                  <h4>{item.title}</h4>
                </div>
                <p className="challenge-solution">{item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Outcome Section */}
      {project.outcome && (
        <div className="section-card outcome-card">
          <div className="section-icon">🎉</div>
          <h3>Project Outcome</h3>
          <p className="outcome-text">{project.outcome}</p>
        </div>
      )}

      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={closeImageModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeImageModal}>
              ×
            </button>
            <img 
              src={selectedImage} 
              alt="Full size screenshot" 
              className="modal-image"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectDetail;
