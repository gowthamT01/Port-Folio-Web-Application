import React, { useState } from 'react';


function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false); // Close menu after clicking on mobile
  };

  return (
    <nav className="navbar-container pt-3 mt-5">
      <div className="navbar-content">
        <h1 className="my-name ">Gowtham T</h1>

        {/* Hamburger Icon - Only visible on small screens */}
        <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? '✕' : '☰'}
        </div>

        {/* Links Menu */}
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <p className='fs-5' onClick={() => scrollToSection("about")}>About</p>
        
          <p className='fs-5' onClick={() => scrollToSection("skill")}>Skills</p>
          <p className='fs-5' onClick={() => scrollToSection("project")}>Projects</p>
          <p className='fs-5' onClick={() => scrollToSection("contact")}>Contact</p>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;