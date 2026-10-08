import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved === null ? true : JSON.parse(saved); // default to dark
  });

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const location = useLocation();

  const handleHomeClick = () => {
    if (location.pathname === '/') {
      const homeSection = document.getElementById('home');
      if (homeSection) {
        homeSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="header">
      <div className="logo">Bhrugu Raval</div>
      <nav className="nav-links">
        <Link to="/" onClick={handleHomeClick}>Home</Link>
        <Link to="/" onClick={() => setTimeout(() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }), 100)}>About</Link>
        <Link to="/" onClick={() => setTimeout(() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }), 100)}>Projects</Link>
        <Link to="/" onClick={() => setTimeout(() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }), 100)}>Skills</Link>
        <Link to="/" onClick={() => setTimeout(() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }), 100)}>Experience</Link>
        <Link to="/" onClick={() => setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100)}>Contact</Link>

        <button
          type="button"
          className="dark-toggle"
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </nav>
    </header>
  );
}

export default Header;
