
import React, { useState, useEffect } from 'react';
import './Navbar.scss';

const Navbar = () => {
  useEffect(() => {
    // Check localStorage for theme or system preference
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      document.body.classList.add('dark');
    } else if (!storedTheme) {
      // If no stored theme, check system preference
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark');
      }
    }
  }, []);

  return (
    <header className="navbar">
      <div className="navbar__left" onClick={() => (window.location.href = '#Hero')}>
        <div className="avatar">S</div>
        <span className="name">Sarthak Singh</span>
      </div>

      <nav className="navbar__center">
        <a href="#Hero">Home</a>
        <a href="#about">Skills</a>
        <a href="#projects">Projects</a>
      </nav>

      <div className="navbar__right">
        <a href="#contact" className="contact-btn">Contact Me</a>
      </div>
    </header>
  );
};

export default Navbar;
