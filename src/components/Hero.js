import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hello, I'm <span className="highlight">Ellie Dong</span>
          </h1>
          <p className="hero-subtitle">Product Designer / Developer</p>
          <p className="hero-description">
            Drawing on my background in user experience design, social science, and 
            front-end development, I create intuitive, and visually engaging solutions 
            that bring ideas to life — both in design and in code.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-shape"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;