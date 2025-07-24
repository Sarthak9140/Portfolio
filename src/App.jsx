
import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import About from './features/About/About.jsx';
import ProjectSlider from './components/ProjectSlider/ProjectSlider.jsx';
import Hero from './components/hero/Hero.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';

import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Navbar />

      <section id="Hero" className="section slide-up">
        <Hero />
      </section>

      <main className="main-content">
        <section id="about" className="section fade-in">
          <About />
        </section>

        <section id="projects" className="section fade-in">
          <ProjectSlider />
        </section>

        <section id="contact" className="section slide-up">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
