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
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h4>Languages</h4>
          <ul>
            <li>Python</li>
            <li>JavaScript</li>
            <li>SQL</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h4>Tools & Libraries</h4>
          <ul>
            <li>Power BI</li>
            <li>Excel</li>
            <li>React</li>
            <li>Tableau</li>
            <li>Git & GitHub</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h4>Data & Analytics</h4>
          <ul>
            <li>DAX</li>
            <li>Pandas</li>
            <li>NumPy</li>
            <li>MySQL</li>
            <li>Data Visualization</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
