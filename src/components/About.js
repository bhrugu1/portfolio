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
        I’m a data-driven developer with hands-on experience in SQL, Power BI, Tableau, and Python, passionate about transforming raw information into impactful insights. With a strong foundation in data analysis and dashboard development, I’ve created revenue tracking systems, built interactive reports, and resolved data quality issues in collaborative, Agile environments. I enjoy identifying patterns in data and using visual storytelling to help teams understand and act on their metrics.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        Currently pursuing a postgraduate certificate in Data Application Development at Seneca Polytechnic, I’ve also gained experience working with cloud platforms like AWS and Azure to scale data workflows. My projects range from building ETL pipelines and designing RESTful APIs to developing full-scale database systems and sales performance dashboards. I’m driven by curiosity and continuous learning, with a growing interest in big data, DevOps practices, and machine learning. I thrive in fast-paced environments where data is used to power real-world decision-making.
      </motion.p>
    </section>
  );
}

export default About;
