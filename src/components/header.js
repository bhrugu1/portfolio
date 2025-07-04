import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  // const [darkMode, setDarkMode] = useState(true);

  // useEffect(() => {
  //   document.body.className = darkMode ? 'dark' : '';
  // }, [darkMode]);
  const [darkMode, setDarkMode] = useState(() => {
  const saved = localStorage.getItem('darkMode');
  return saved === null ? true : JSON.parse(saved); // default to dark
});

useEffect(() => {
  document.body.className = darkMode ? 'dark' : '';
  localStorage.setItem('darkMode', JSON.stringify(darkMode));
}, [darkMode]);


  const handleToggle = (e) => {
    e.preventDefault(); // Prevents page jump
    setDarkMode(!darkMode);
  };

  return (
    <header className="header">
      <Link to="/" className="logo">Bhrugu Raval</Link>
      <nav className="nav-links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
        <a href="#" className="dark-toggle" onClick={handleToggle}>
          {darkMode ? '☀️' : '🌙'}
        </a>
      </nav>
    </header>
  );
}

export default Header;
