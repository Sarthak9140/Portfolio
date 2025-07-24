// components/Footer/Footer.jsx
import React from 'react';
import './Footer.scss';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section about">
        <h3>Sarthak's Portfolio</h3>
        <p>
          Thanks for visiting my portfolio, Here I have shared with you my project experience and skills!
        </p>
      </div>

      <div className="footer-section links">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#Hero">Home</a></li>
          <li><a href="#about">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#projects">Project Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <div className="footer-section contact">
        <h3>Contact info</h3>
        <p><FaEnvelope /> sarthaksinghsps.23@gmail.com</p>
        <p><FaPhone /> +91 9140713919</p>
        <p><FaMapMarkerAlt /> Lucknow</p>
        <div className="social-icons">
          <a href="https://github.com/Sarthak9140" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/sarthak-singh-9523a7287" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
