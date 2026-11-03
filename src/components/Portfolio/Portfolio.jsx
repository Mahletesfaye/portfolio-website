import React from 'react'

function Portfolio() {
  return (
    <section className="work section">
        <h2 className="section-title">My Work</h2>
        <div className="container">
            <div className="work-container grid">
                <div>
                    <article className="work-card">
                        <img src="#" alt="Project 1" className="work-img" />
                        <h4 className="work-catagory">Web Development</h4>
                        <h3 className="work-title">Project 1</h3>
                        <p className="work-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet.
                        </p>
                        <a href="#" className="work-link">
                            view project <i class="fa-light fa-arrow-right work-icon"></i>
                        </a>
                    </article>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Portfolio