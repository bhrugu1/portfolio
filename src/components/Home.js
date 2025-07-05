import React from 'react';
import './Home.css';

function Home() {
  return (
    <section id="home" className="section">
      <h1>Welcome to My Portfolio</h1>
      <p>I'm Bhrugu Raval — Data-Focused Developer.</p>

      <a 
        href="/Bhrugu_Raval_Resume.pdf" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="resume-button"
      >
        📄 Download Resume
      </a>
    </section>
  );
}

export default Home;
