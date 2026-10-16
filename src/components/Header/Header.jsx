import React from 'react'

function Header() {
  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="nav-logo">
          Mahllet 
        </a>
        <div className="nav-menu">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#home" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link">Skills</a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" className="nav-link">Portfolio</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">Contact</a>
            </li>
          </ul>
          <button
  type="button"
  className="nav-close"
  aria-label="Close menu"
>
  <i className="fa-solid fa-xmark"></i>
</button>
      
          <div className="nav-btns">
            <i class="fa-solid fa-sun"></i>

            <div className="nav-toggle">
              <i class="fa-solid fa-bars"></i>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header