import React from 'react'

function Contact() {
  return (
    <section className='contact section'>
        <div className='contact-container container grid'>
            <div className="contact-group">
              <h2 className="section-title contact-section-title">
                Let's Talk About <br />
                Your project</h2>
                <div className="contact-data grid">
                  
                  <div className="contact-item">
                    <span className="contact-icon"></span>
                    <div>
                      <h3 className="contact-title"></h3>
                      <p className="contact-description"></p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">
                      <i class="fa-solid fa-envelope"></i>
                    </span>
                    <div>
                      <h3 className="contact-title">E-mail</h3>
                      <p className="contact-description">tesfayemahlet75@gmail.com</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">
                      <i class="fa-solid fa-phone"></i>
                    </span>
                    <div>
                      <h3 className="contact-title">Phone</h3>
                      <p className="contact-description">+251 964520010</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">
                      <i class="fa-brands fa-linkedin"></i>
                    </span>
                    <div>
                      <h3 className="contact-title">LinkedIn</h3>
                      <p className="contact-description"> <a href="https://www.linkedin.com/in/mahlet-tesfaye-a4a826288" target="_blank" rel="noopener noreferrer">linkedin.com</a> </p>
                    </div>
                  </div>
                </div>

            </div>
        </div>

    </section>
  )
}

export default Contact