// components/AboutMe/AboutMe.jsx
import React from 'react';
import './About.scss';

const About = () => {
  return (
    <div className="about-container" id="about">
      <h2>About Me</h2>
      <h1>Skills</h1>

      <div className="about-box">
        <div className="skills-section">
          <h3>Languages</h3>
          <div className="skill-chips">
            {['React JS', 'JavaScript', 'Node JS','Express JS', 'Mongo DB', 'MS Excel' , 'MS PowerPoint','Html', 'Next JS', 'CSS', 'Tailwind', 'Python', 'Java', 'Git' , 'SQL' , ].map(skill => (
              <span className="chip" key={skill}>{skill}</span>
            ))}
          </div>
        </div>

        <div className="education-section">
          <h3>Education & Experience</h3>

          <p>
            I’m a third-year BCA student at <strong>Lucknow Public College of Professional Studies</strong>, 
            graduating in <strong>2026</strong>. I specialize as a <strong>Full MERN Stack Developer</strong>, 
            passionate about creating scalable, performant, and user-friendly web applications.
          </p>

          <p>
            I’ve built several full-stack projects using <strong>MongoDB, Express.js, React.js, and Node.js</strong>, 
            each focusing on solving real-world problems. These include:
          </p>

          <ul>
            <li><strong>Fiverr Clone</strong> – A freelance services marketplace web app.</li>
            <li><strong>DOC_SIGN</strong> – A secure document signing and sharing platform.</li>
            <li><strong>Bug Tracker</strong> – A complete ticketing system for software projects.</li>
            <li><strong>Restaurant App</strong> – For online ordering and table reservations.</li>
            <li><strong>Virtual JS Assistant</strong> – A voice-powered assistant using JavaScript and Web APIs.</li>
          </ul>

          <p>
            I’m committed to continuous learning and passionate about clean code, UI/UX, and solving complex problems with simple solutions.
          </p>

          <p>
            📂 You can view all of my work on my <strong><a href="https://github.com/Sarthak9140" target="_blank" rel="noreferrer">GitHub</a></strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
