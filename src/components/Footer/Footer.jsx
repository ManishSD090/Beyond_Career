import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_brand">
          <h2>Beyond Career</h2>
          <p>Empowering students to dream bigger, aim higher, and build brighter futures.</p>
        </div>

        <div className="footer_links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer_socials">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a href="mailto:hello@beyondcareer.in">Email</a>
        </div>
      </div>

      <div className="footer_bottom">
        <p>© {new Date().getFullYear()} Beyond Career. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
