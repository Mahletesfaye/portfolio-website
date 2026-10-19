
function HomeSection() {
  return (
    <section className="home section" id="home">
      <div className="home-container container grid">
        <div className="home-data">
          <h1 className="home-title">
            Mahlet
            <br />
            Tesfaye
          </h1>

          <h3 className="home-job">I am a Web Developer.</h3>

          <p className="home-description">
            I create beautiful and functional websites with a focus on
            clean design, responsive layouts, and user-friendly experiences.
          </p>

          <a href="#portfolio" className="button">
            View Portfolio
          </a>
        </div>

        <div className="home-image-column">
          <img
            src="/src/assets/profile (2).png"
            alt="Portrait for Mahlet's portfolio"
            className="home-img"
          />

          <div className="home-social">
            <a
              href="https://www.linkedin.com/in/mahlet-tesfaye-a4a826288"
              target="_blank"
              rel="noreferrer"
              className="home-social-link"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>

            <a
              href="https://github.com/Mahletesfaye"
              target="_blank"
              rel="noreferrer"
              className="home-social-link"
              aria-label="GitHub"
            >
              <i className="fa-brands fa-github"></i>
            </a>

            <a
              href="https://www.instagram.com/mahllet_t"
              target="_blank"
              rel="noreferrer"
              className="home-social-link"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
