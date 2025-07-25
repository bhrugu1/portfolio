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
        <h3>JUNIOR DATA ANALYST</h3>
        <div className="company">GVT Software Solutions | Ahmedabad, India | 2016–2019</div>
        <p>
          • Developed an Excel-based revenue tracking system that improved portfolio 
          management efficiency by 20% for capital markets clients, supporting data-driven 
          decision making.<br />
          • Resolved data quality issues using Python and SQL, logging incidents in JIRA to 
          support uninterrupted business operations.<br />
          • Designed and maintained Tableau dashboards to visualize system performance and 
          deliver weekly insights reporting and change tracking updates to stakeholders.<br /> 
          • Partnered with cross-functional teams in Agile sprints to gather requirements and 
          deliver optimized application updates.<br />
          • Led training sessions on data management tools and supported self-serve analytics 
          adoption, helping teams interpret reports and make actionable business insights.<br />
          • Conducted data mining and trend analysis to support risk assessments, enabling 
          continuous improvement in financial reporting and decision support tools.<br /><br />
          <strong>Environment:</strong> Microsoft Excel, Power Query, Tableau, Python, PyCharm, JIRA, SQL
        </p>
      </motion.div>
    </section>
  );
}

export default Experience;
