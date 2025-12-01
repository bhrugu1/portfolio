import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Bhrugu Raval. All rights reserved.</p>
      <p>
        Contact: <a href="mailto:bhrugu.ravall@gmail.com">bhrugu.ravall@gmail.com</a>
      </p>
    </footer>
  );
}

export default Footer;
