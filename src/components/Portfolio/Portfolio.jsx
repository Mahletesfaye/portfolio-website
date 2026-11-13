import React from 'react';

function Portfolio() {
    return (
    <section className="work section" id="portfolio">

        <h2 className="section-title">My Work</h2>

        <div className="container">

        <ul className="work-list">
            <li className="work-item active-work">Recent Projects</li>
        </ul>

        <div className="work-container grid">

            <article className="work-card">

            <img
                src="/assets/mealio.png"
                alt="Mealio Food Delivery Project"
                className="work-img"
            />

            <h4 className="work-category">
                Web Development
            </h4>

            <h3 className="work-title">
                Mealio Food Delivery
            </h3>

            <p className="work-description">
                Mealio is a modern, responsive food delivery website
                built with HTML, CSS, and JavaScript. It features
                an intuitive interface, restaurant browsing,
                a shopping cart, and a seamless ordering experience.
            </p>

            <a href="YOUR_GITHUB_PROJECT_LINK" className="work-link">
                View Project
                <i className="fa-solid fa-arrow-right work-icon"></i>
            </a>

            </article>

        </div>
        </div>
        </section>
    );
}

export default Portfolio;
