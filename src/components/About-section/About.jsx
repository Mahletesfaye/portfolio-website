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

          <h1 className="page-title">
            About <span>Me</span>
          </h1>

          <p className="about-intro">
          I am a passionate Web Developer dedicated to creating modern, responsive, and user-centered digital experiences.
          </p>

          <p className="about-description">
            I'm a passionate web developer who loves transforming ideas into functional and engaging digital experiences. I enjoy exploring new technologies, solving problems, and building innovative solutions through code.
          </p>

          

        </div>
      </div>
    </section>
  )
}

export default AboutSection