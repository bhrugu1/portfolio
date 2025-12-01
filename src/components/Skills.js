import React from 'react';
import './Skills.css';
import { motion } from 'framer-motion';

function Skills() {
  return (
    <section id="skills" className="section skills">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        Skills
      </motion.h2>

      <div className="skills-grid">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h4>Methodologies</h4>
          <ul>
            <li>Agile (Scrum), SDLC, Waterfall</li>
            <li>CI/CD Practices</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h4>Databases</h4>
          <ul>
            <li>Azure SQL, Microsoft SQL Server, MySQL</li>
            <li>Snowflake, Redshift, BigQuery</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h4>Programming Languages</h4>
          <ul>
            <li>Python (PySpark, OOP), R</li>
            <li>SQL (T-SQL, PL/SQL)</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h4>Libraries & Packages</h4>
          <ul>
            <li>Pandas, NumPy, Polars</li>
            <li>Matplotlib, Seaborn</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h4>BI & Visualization</h4>
          <ul>
            <li>Power BI (DAX, Power Query), Tableau, SSRS</li>
            <li>Looker, ThoughtSpot, Advanced Excel</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h4>Data Modeling & Transformation</h4>
          <ul>
            <li>dbt, Data Vault, Star Schema, Kimball</li>
            <li>Power Pivot</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h4>Cloud Platforms</h4>
          <ul>
            <li>Microsoft Azure (ADF, ADLS, Synapse, Databricks)</li>
            <li>AWS (S3, Redshift, Lambda)</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h4>Version Control & DevOps</h4>
          <ul>
            <li>Git, GitHub, GitHub Actions, Jenkins</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h4>ETL / ELT & Data Integration</h4>
          <ul>
            <li>Azure Data Factory, Databricks, Airflow</li>
            <li>Power Query, Alteryx</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h4>Other Tools</h4>
          <ul>
            <li>Jupyter Notebook, PyCharm, Jira, Confluence</li>
            <li>Microsoft Fabric, GitHub Copilot, Power BI Copilot</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
