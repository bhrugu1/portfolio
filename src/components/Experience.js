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
        <p>
          • Support regulatory banking analytics by building and maintaining data pipelines using Azure Synapse, PySpark, SQL, and Datalake.<br />
          • Develop and automate Power BI dashboards to deliver actionable insights for banking supervision and risk management.<br />
          • Cleanse, validate, and profile large financial datasets to ensure data quality and compliance with regulatory standards.<br />
          • Collaborate with banking analysts and IT teams to optimize data workflows and reporting processes.<br />
          • Document business requirements and data processes for internal knowledge sharing and audit readiness.<br />
          • Gain hands-on experience in cloud data engineering and financial analytics within a regulatory environment.<br />
          • Implemented data ingestion and transformation workflows to streamline regulatory reporting and reduce manual intervention.<br />
          • Conducted ad-hoc data analysis to support banking risk assessments and presented findings to senior management.<br />
        </p>
      </motion.div>
    </section>
  );
}

export default Experience;
