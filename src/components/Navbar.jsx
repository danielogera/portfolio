import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <button className="toggle-button" onClick={toggleNavbar}>
        ☰
      </button>
      <ul className="nav-links">
        <li><Link to="/" className="link-style">About</Link></li>
        <li><Link to="/portfolio" className="link-style">Portfolio</Link></li>
        <li><Link to="/skills" className="link-style">Skills</Link></li>
        <li><Link to="/experience" className="link-style">Experience</Link></li>
        <li><Link to="/education" className="link-style">Education</Link></li>
        <li><Link to="/contact" className="link-style">Contact</Link></li>
        <li><a href="#blog" className="link-style">Blog</a></li> {/* Example of external link */}
      </ul>
    </nav>
  );
}

export default Navbar;
