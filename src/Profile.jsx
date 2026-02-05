import React, { useState, useEffect } from 'react'
import img from '/src/assets/images/profile.jpeg'
import { useNavigate } from "react-router-dom";

function Profile() {

  const navigate = useNavigate(); // FIX
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true); // trigger animation
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };
const scrollToContact=()=>{
    document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})
  }
  return (
    <section id='home'>

    <div className="container mt-3">

      <div className={`d-flex justify-content-center align-items-center gap-5 pt-5 mt-5 hero-section ${show ? "show" : ""}`}>

        <div >
          <img
            src={img}
            className="profile-img rounded-circle"
            alt="profile"
          />
        </div>

        <div className="text-center profile-text">
          <h6 className="text-muted">Hello, I'm</h6>
          <h1 className="fw-bold">
            <span className='text-primary'>Gowtham</span> T
          </h1>
          <h4 className="">Full Stack Developer</h4>

          <div className="d-flex gap-3 justify-content-center mt-3">
            <button className="btn btn-outline-dark px-4 profile-button">
              Download CV
            </button>

            <button className="btn btn-dark px-4 profile-button" onClick={scrollToContact}>
              Contact Info
            </button>
          </div>

          <div className="d-flex gap-4 justify-content-center mt-4">
            <a href="https://www.linkedin.com/in/gowtham-t-2aa781327" target="_blank" rel="noreferrer">
              <i className="bi bi-linkedin fs-2 text-dark"></i>
            </a>

            <a href="https://github.com/gowthamT01" target="_blank" rel="noreferrer">
              <i className="bi bi-github fs-2 text-dark"></i>
            </a>
          </div>
        </div>

      </div>


    </div>
      <div className='pt-5  ps-5'>
        <i
          className="bi bi-chevron-double-down fs-1 cursor-pointer"
          onClick={scrollToAbout}
        ></i>
      </div>
    </section>
  )
}

export default Profile
