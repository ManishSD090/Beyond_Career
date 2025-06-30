import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="nav_main">
        <div className="main_logo">
          <a href="/">
            <img src="Beyond Career.svg" alt="Beyond_Career_logo" />
          </a>
        </div>

        {/* HAMBURGER ICON */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? 'rotate1' : ''}`}></div>
          <div className={`bar ${isOpen ? 'fade' : ''}`}></div>
          <div className={`bar ${isOpen ? 'rotate2' : ''}`}></div>
        </div>

        {/* NAV LINKS */}
        <div className={`links ${isOpen ? 'open' : ''}`}>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact Us</a>
          <a href="#">
            <button>Log In</button>
          </a>
          <a href="#">
            <button>Register</button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
