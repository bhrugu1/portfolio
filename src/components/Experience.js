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
        Current Role
      </motion.h2>


    <motion.div
        className="job-entry"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h3>LEAD DATA ANALYST / ETL DEVELOPER – CAPITAL REPORTING & ANALYTICS</h3>
        <div className="company">TD, Toronto, CANADA | February 2026 – Present</div>
        <ul>
          <li>Architect and maintain end-to-end ETL pipelines using Python and complex sql, automating daily and monthly capital reporting cycles acros Global market.</li>
          <li>Build and optimize end-to-end data pipelines in Azure Synapse Analytics using PySpark, orchestrating large-scale transformations and landing curated staging datasets for downstream regulatory and capital reporting engines.</li>
          <li>Spearhead migration of legacy Excel, VBA, and Access workflows to enterprise Power BI semantic models, reducing manual touchpoints and accelerating report delivery.</li>
          <li>Develop automated Python reconciliation scripts and data-validation frameworks to detect anomalies, reconcile source-to-target variances, and strengthen regulatory data quality.</li>
          <li>Design and optimize star-schema data models and DAX measures in Power BI, including automated refresh schedules, dataflows, and row-level security.</li>
          <li>Perform root-cause analysis on pipeline failures and upstream data discrepancies, tuning SQL stored procedures and queries to improve reliability and performance.</li>
          <li>Document end-to-end data lineage, metadata definitions, and audit control points in Confluence to support internal risk oversight and OSFI/Basel compliance requirements.</li>
          <li>Partner with Capital Reporting subject-matter experts, Finance, and Risk teams to translate evolving analytics requirements into technical pipeline governance.</li>
          <li>Contribute within Agile delivery through sprint ceremonies, backlog grooming, code reviews, and continuous pipeline enhancements.</li>
          <li>Develop and deploy custom AI agents to automate routine operational tasks, error triage, and report workflows, reducing manual overhead.</li>
        </ul>

      </motion.div>
    </section>
  );
}

export default Experience;
