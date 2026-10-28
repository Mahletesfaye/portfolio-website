import React from 'react'

function Services() {
    return (
    <section className="services section">
        <h2 className="section-title">My Services</h2>
        <div className="services-container container grid">
            <article className="service-card">
                <span className="service-no">01</span>
                <h3 className="service-title">Full-Stack Development</h3>
                <p className="service-description">I build complete web applications with responsive interfaces, back-end systems, and database integration.</p>
            </article>

            <article className="service-card">
                <span className="service-no">02</span>
                <h3 className="service-title">Website Maintenance & Optimization</h3>
                <p className="service-description">I provide ongoing maintenance and optimization services to ensure your website performs at its best.</p>
            </article>
            <article className="service-card">
                <span className="service-no">03</span>
                <h3 className="service-title">API Integration</h3>
                <p className="service-description">I integrate third-party APIs to enhance the functionality of web applications.</p>
            </article>
        </div>
    </section>
)
}

export default Services