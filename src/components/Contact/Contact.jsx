import React from 'react'

function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="contact-container container grid">

        {/* Left Side - Contact Information */}
        <div className="contact-group">

          <span className="contact-subtitle">
            <i className="fa-solid fa-paper-plane"></i>
            Get In Touch
          </span>

          <h2 className="section-title contact-section-title">
            Let's Talk About <br />
            <span>Your Project</span>
          </h2>

          <p className="contact-description">
            Have a project in mind, a question, or just want to say hello?
            I'd love to hear from you!
          </p>

          <div className="contact-data grid">

            {/* Email */}
            <div className="contact-item">
              <span className="contact-icon">
                <i className="fa-solid fa-envelope"></i>
              </span>
              <div>
                <h3 className="contact-title">Email</h3>
                <p className="contact-info">
                  tesfayemahlet75@gmail.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="contact-item">
              <span className="contact-icon">
                <i className="fa-solid fa-phone"></i>
              </span>
              <div>
                <h3 className="contact-title">Phone</h3>
                <p className="contact-info">
                  +251 964520010
                </p>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="contact-item">
              <span className="contact-icon">
                <i className="fa-brands fa-linkedin-in"></i>
              </span>
              <div>
                <h3 className="contact-title">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/mahlet-tesfaye-a4a826288"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-info contact-link"
                >
                  Visit My LinkedIn
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="contact-form-container">
          <h3 className="contact-form-title">Send Me a Message</h3>
          <p className="contact-form-text">
            Let's discuss your ideas and create something amazing.
          </p>

          <form className="contact-form">

            <div className="contact-form-group">
              <input
                type="text"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="contact-form-group">
              <input
                type="email"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="contact-form-group">
              <input
                type="text"
                placeholder="Subject"
                required
              />
            </div>

            <div className="contact-form-group">
              <textarea
                placeholder="Your Message..."
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="contact-button">
              Send Message
              <i className="fa-solid fa-paper-plane"></i>
            </button>

          </form>
        </div>

      </div>
    </section>
  )
}

export default Contact