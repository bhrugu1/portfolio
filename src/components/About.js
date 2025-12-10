import React from 'react';
import './About.css';
import { motion } from 'framer-motion';

function About() {
  return (
    <section id="about" className="about">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        I’m a data-driven developer with hands-on experience in SQL, Power BI, Tableau, and Python, passionate about transforming raw information into impactful insights. With a strong foundation in data analysis, cloud data engineering, and dashboard development, I’ve built and automated reporting pipelines, created interactive reports, and resolved data quality issues in collaborative, Agile environments. I enjoy identifying patterns in data and using visual storytelling to help teams understand and act on their metrics.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        Currently pursuing a Postgraduate Certificate in Data Application Development at Seneca Polytechnic, I’ve gained practical experience using Azure Synapse, PySpark, SQL and Power BI to design scalable data workflows and dashboards. My projects range from building ETL pipelines and automating reports to developing production-ready data models and visualization solutions. I’m driven by curiosity and continuous learning, with interests in machine learning, industrial analytics, and cloud-native data engineering. I thrive in fast-paced environments where data is used to power real-world decision-making.
      </motion.p>

      <motion.div
        className="education"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h3>Education</h3>
        <div className="education-list">
          <div className="education-item">
            <div className="edu-left">
              <strong>Database Application Developer</strong>
              <div className="edu-degree">Diploma</div>
            </div>
            <div className="edu-right">
              <div className="edu-school">Seneca Polytechnic, ON, Canada</div>
              <div className="edu-date">January 2017 – December 2017</div>
            </div>
          </div>

          <div className="education-item">
            <div className="edu-left">
              <strong>B.Tech in Information Technology</strong>
              <div className="edu-degree">Diploma</div>
            </div>
            <div className="edu-right">
              <div className="edu-school">Nirma University, Ahmedabad, Gujarat</div>
              <div className="edu-date">May 2012 – June 2016</div>
            </div>
          </div>
        </div>
        {/* If you want additional qualifications shown, we can add them here. */}
      </motion.div>
    </section>
  );
}

export default About;
