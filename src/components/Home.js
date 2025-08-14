import React from 'react';
import './Home.css';
import { motion } from 'framer-motion';

function Home() {
  return (
    <section id="home" className="section">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        Hi, I'm Bhrugu Raval
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        Data Analyst | Driving Insights with Power BI, SQL & Python
      </motion.p>

      {/* <motion.a
        href="/Bhrugu_Raval_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="resume-button"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        📄 Download Resume
      </motion.a> */} {/* ✅ Disabled */}
    </section>
  );
}

export default Home;
