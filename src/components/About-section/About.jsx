import React from 'react'

function AboutSection() {
  return (
    <section className="about section section" id="about">
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
          I am a passionate Web Developer dedicated to creating modern, responsive, and user-centered digital experiences.
          </p>

          <p className="about-description">
            I specialize in building intuitive and visually engaging websites using modern web technologies. With a strong interest in problem-solving, clean code, and continuous learning, I strive to transform ideas into accessible, functional, and high-quality digital solutions.
          </p>

          

        </div>
      </div>
    </section>
  )
}

export default AboutSection