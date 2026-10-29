import React from 'react'

function Skills() {
  return (
    
    <section className="skills-section" id="skills">
    <div className="container">

        <h2 className="skills-heading">
        SKILLS AND TECHNOLOGIES I WORKED WITH 
        </h2>

        <div className="skills-grid">

          {/* Languages */}
        <div className="skill-card">
            <h3>Languages</h3>

            <div className="skill-icons">

        
            <i className="fa-brands fa-html5"
                title="HTML5"></i>

            <i className="fa-brands fa-css3-alt"
                title="CSS3"></i>

            <i className="fa-brands fa-js"
                title="JavaScript"></i>
    
            </div>

            <h3>Databases</h3>

            <div className="skill-icons">

            <i className="fa-solid fa-database"
                title="MySQL"></i>

            </div>
        </div>

          {/* Frameworks and Libraries */}
        <div className="skill-card">
            <h3>Frameworks & Libraries</h3>

            <div className="skill-icons">
            <i className="fa-brands fa-react"
                title="React"></i>

            <i className="fa-brands fa-bootstrap"
                title="Bootstrap"></i>

            <i className="fa-brands fa-node-js"
                title="Node.js"></i>
            </div>
        </div>

          {/* Tools and Technologies */}
        <div className="skill-card">
            <h3>Tools & Technologies</h3>

            <div className="skill-icons">

            <i className="fa-brands fa-git-alt"
                title="Git"></i>

            <i className="fa-brands fa-github"
                title="GitHub"></i>  

            </div>
        </div>

        </div>
    </div>
    </section>
);
}



export default Skills