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
                        <h3 className="work-title">Mealio Food delivery</h3>
                        <p className="work-description">
                            Mealio — A modern, responsive food delivery website built with HTML, CSS, and JavaScript, featuring an intuitive UI, restaurant browsing, a shopping cart, and a seamless ordering experience.
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