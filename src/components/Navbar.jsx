import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'open' : 'close'}`}>
      <button className="toggle-button" onClick={toggleNavbar}>☰</button>
      <ul className="nav-links">
        <li><Link to='/' id="title"><img src='./src/assets/Images/new_logo.ico' alt='logo' id='logo'/>DANIEL</Link></li>
        <li><NavLink to="/about" className="link-style">About</NavLink></li>
        <li><NavLink to="/skills" className="link-style">Skills</NavLink></li>
        <li><NavLink to="/experience" className="link-style">Experience</NavLink></li>
        <li><NavLink to="/education" className="link-style">Education</NavLink></li>
        <li><NavLink to="/projects" className="link-style">Projects</NavLink></li>
        <li><NavLink to="/contact" className="link-style">Contact</NavLink></li>
        <li><NavLink to="/certificates" className="link-style">Certificates</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
