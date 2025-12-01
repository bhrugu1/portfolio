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
        <h3>SENIOR DATA ANALYST</h3>
        <div className="company">CITY Group, Toronto, CANADA | January 2023 – Present</div>
        <ul>
          <li>Managed day-to-day data pipeline operations, remediating failed jobs, optimizing PySpark scripts, and ensuring data landed correctly for regulatory reporting.</li>
          <li>Worked closely with business teams to understand reporting gaps, clarify data definitions, and update dashboards or data models as requirements evolved.</li>
          <li>Performed root-cause analysis on data quality issues, tracing problems back to source systems and implementing fixes in SQL, ADF, or Databricks.</li>
          <li>Built and enhanced Power BI dashboards, updating DAX measures and refreshing datasets to support financial oversight and audit needs.</li>
          <li>Developed and scheduled ETL workflows in ADF/Airflow, monitoring run times, improving performance, and automating manual data preparation tasks.</li>
          <li>Coordinated with cloud and DevOps teams to deploy new dataflows, test pipelines in lower environments, and push updates to production using CI/CD.</li>
          <li>Regularly validated large datasets, checking for schema changes, duplicates, outliers, and compliance issues before publishing reports.</li>
          <li>Engaged in daily stand-ups, providing updates on pipeline health, open tickets, blockers, and sprint deliverables in an Agile environment.</li>
          <li>Supported ML and analytics teams by preparing feature-ready datasets, documenting transformations, and managing data versioning.</li>
          <li>Created and maintained documentation including data flow diagrams, pipeline runbooks, business rules, and operational procedures for knowledge sharing.</li>
        </ul>
      </motion.div>

      <motion.div
        className="job-entry"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h3>DATA ANALYST</h3>
        <div className="company">Genious Infotech, Toronto, CANADA | January 2018 – December 2022</div>
        <ul>
          <li>Gathered, cleaned, and analyzed large datasets to identify meaningful trends and insights.</li>
          <li>Designed interactive dashboards and reports in Power BI and Tableau to support data-driven decisions.</li>
          <li>Worked closely with business teams to understand data needs and define key performance indicators (KPIs).</li>
          <li>Used Python (Pandas, NumPy, Matplotlib) to perform exploratory data analysis and visualize patterns.</li>
          <li>Developed and optimized complex SQL queries for data extraction, transformation, and reporting.</li>
          <li>Automated recurring reports and dashboards using Excel (macros, pivot tables) and Power BI, reducing manual effort.</li>
          <li>Performed A/B testing and statistical analyses to measure product performance and guide enhancements.</li>
          <li>Created clear documentation for data pipelines, models, and business logic to ensure transparency.</li>
          <li>Applied rigorous validation and cleaning techniques to maintain high data accuracy and integrity.</li>
          <li>Shared insights through engaging presentations and concise reports for stakeholders and leadership teams.</li>
        </ul>
      </motion.div>
    </section>
  );
}

export default Experience;
