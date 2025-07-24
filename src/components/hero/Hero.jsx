import React from 'react';
import './Hero.scss';


const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__left">
        <h1>
          Hi I'm <br />
          <span className="highlight">a Full-Stack Developer</span>
        </h1>
        <p>
          Third-year BCA student at <strong>Lucknow Public College of Professional Studies</strong>, graduating in{' '}
          <strong>2026</strong>. Skilled Full MERN Stack Developer with hands-on experience building projects like a Freelancer Website, DOC_SIGN, a Virtual JS Assistant and more.
        </p>

        <div className="hero__buttons">
          <a href='./assets/resume.pdf' download className="btn dark">
            Download Resume
          </a>
          <button className="btn light" onClick={()=>window.location.href="#contact"}>Contact Me</button>
        </div>

        <div className="hero__icons">
          <a href="https://github.com/Sarthak9140" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/sarthak-singh-9523a7287" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>

      <div className="hero__right">
        <img src='./assets/profile.jpg' alt="Profile" />
      </div>
    </section>
  );
};

export default Hero;
