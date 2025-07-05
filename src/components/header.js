import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
//import { Link } from 'react-router-dom';

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

  const location = useLocation();

const handleHomeClick = () => {
  if (location.pathname === '/') {
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
};


  const handleToggle = (e) => {
    e.preventDefault(); // Prevents page jump
    setDarkMode(!darkMode);
  };

  return (
    <header className="header">
      <div className="logo">Bhrugu Raval</div>
      {/* <nav className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link
          to="/"
          onClick={() => {
            setTimeout(() => {
              const section = document.getElementById('about');
              if (section) section.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
        >
          About
        </Link>
<Link
          to="/"
          onClick={() => {
            setTimeout(() => {
              const section = document.getElementById('projects');
              if (section) section.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
        >
          Projects
        </Link>
        <Link
          to="/"
          onClick={() => {
            setTimeout(() => {
              const section = document.getElementById('experience');
              if (section) section.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
        >
          Experience
        </Link>
        <Link
          to="/"
          onClick={() => {
            setTimeout(() => {
              const section = document.getElementById('contact');
              if (section) section.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
        >
          Contact
        </Link>
        <a href="#" className="dark-toggle" onClick={handleToggle}>
          {darkMode ? '☀️' : '🌙'}
        </a>
      </nav> */}
      <nav className="nav-links">
  <Link to="/" onClick={handleHomeClick}>Home</Link>
  <Link to="/" onClick={() => setTimeout(() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }), 100)}>About</Link>
  <Link to="/" onClick={() => setTimeout(() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }), 100)}>Projects</Link>
  <Link to="/" onClick={() => setTimeout(() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }), 100)}>Skills</Link>
  <Link to="/" onClick={() => setTimeout(() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }), 100)}>Experience</Link>
  <Link to="/" onClick={() => setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100)}>Contact</Link>
  
  <a
    href="#"
    className="dark-toggle"
    onClick={(e) => {
      e.preventDefault();
      setDarkMode(!darkMode);
    }}
  >
    {darkMode ? '☀️' : '🌙'}
  </a>
</nav>

    </header>
  );
}

export default Header;
