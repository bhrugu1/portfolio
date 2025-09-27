import React from 'react';
import './Experience.css';
import { motion } from 'framer-motion';

function Experience() {
  return (
    <section id="experience" className="experience">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        Experience
      </motion.h2>

      <motion.div
        className="job-entry"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h3>Data Analyst Co-op</h3>
        <div className="company">Office of the Superintendent of Financial Institutions (OSFI) – Banking Department, Toronto, ON | September 2025 to Present</div>
        <ul>
          <li>Built and maintained scalable data pipelines using Azure Synapse, PySpark, SQL, Power BI, and Datalake to support regulatory banking analytics and reporting.</li>
          <li>Developed and automated dashboards in Power BI to communicate insights and support business decision-making for financial oversight.</li>
          <li>Validated, cleansed, and profiled large structured and unstructured datasets, ensuring data quality and compliance with regulatory standards.</li>
          <li>Collaborated with cross-functional teams, including IT and business analysts, to gather requirements, document business processes, and enhance data workflows.</li>
          <li>Applied technical and analytical skills to support machine learning model deployment and data engineering workflows.</li>
          <li>Participated in project planning and documentation, integrating lessons learned and supporting Agile and SDLC practices.</li>
          <li>Conducted feasibility studies and contributed to business cases for system enhancements and innovation initiatives.</li>
          <li>Demonstrated strong communication skills by presenting findings and collaborating with stakeholders in meetings and project reviews.</li>
          <li>Gained hands-on experience in cloud data engineering, financial analytics, and data governance within a regulated environment.</li>
          <li>Promoted a respectful, inclusive, and accessible work environment in accordance with organizational policies and provincial regulations.</li>
        </ul>
      </motion.div>
    </section>
  );
}

export default Experience;
