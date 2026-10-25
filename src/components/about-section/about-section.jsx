
import React from 'react';
import './about-section.css';

function Aboutsection() {
  return (
    <section className="About-section section" id="about">
      <div className="about-container container">
        <div className="about-content">

          <div className="developer-badge">
            <i className="fa-solid fa-code"></i>
            <span>Web Developer</span>
          </div>

          <span className="section-subtitle">
            GET TO KNOW ME
          </span>

          <h1 className="section-title">
            About <span>Me</span>
          </h1>

          <p className="about-intro">
            A passionate Web Developer who enjoys turning
            ideas into clean, interactive digital experiences.
          </p>

          <p className="about-description">
            I build responsive and user-friendly websites
            using modern web technologies. I enjoy solving
            problems, learning new skills, and transforming
            creative ideas into functional digital solutions.
          </p>

          <a href="#portfolio" className="about-button">
            View My Projects
            <i className="fa-solid fa-arrow-right"></i>
          </a>

        </div>
      </div>
    </section>
  );
}

export default Aboutsection;
