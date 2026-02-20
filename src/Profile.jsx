import React, { useState, useEffect } from 'react';
import img from '/src/assets/images/profile.jpeg';
import { ReactTyped } from "react-typed";

function Profile() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id='home' className="profile-container pt-1 mt-0">
      <div className={`hero-wrapper ${show ? "fade-in" : ""}`}>
        
        {/* Image Section */}
        <div className="profile-img-box">
          <img
            src={img}
            className="profile-avatar shadow-lg"
            alt="Gowtham T"
          />
        </div>

        {/* Text Section */}
        <div className="profile-info">
          <p className="greeting-text">Hello, I'm</p>
        <h1 className="main-name gradient-text">
  <span className="highlight typing-wrapper ">
    <ReactTyped
      strings={["Gowtham T"]}
      typeSpeed={200}
      backSpeed={10}
      loop
    />
  </span>{" "}
  
</h1>
          <h3 className="role-text">Full Stack Developer</h3>

          {/* Action Buttons */}
          <div className="btn-group-custom">
          <a 
  href="https://drive.google.com/file/d/1RAKqMCqreBFMcyYrbXkca6PtD7Tr2Jmc/view?usp=sharing"
  target="_blank"
  rel="noreferrer"
   style={{ textDecoration: "none" }}
  className="btn-outline-custom"
>
  Download CV
</a>
  
  
            <button className="btn-dark-custom" onClick={scrollToContact}>
              Contact Info
            </button>
          </div>

          {/* Socials */}
          <div className="social-icons">
            <a href="https://linkedin.com/in/gowtham-t-2aa781327" target="_blank" rel="noreferrer">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://github.com/gowthamT01" target="_blank" rel="noreferrer">
              <i className="bi bi-github"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bounce Arrow */}
      <div className="scroll-down justify-content-left" onClick={scrollToAbout}>
        <i className="bi bi-chevron-double-down"></i>
      </div>
    </section>
  );
}

export default Profile;