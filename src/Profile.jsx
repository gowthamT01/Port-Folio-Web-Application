import React from 'react'
import img from '/src/assets/images/profile.jpeg'
import { useNavigate } from "react-router-dom";
function Profile() {
  const navigate=useNavigate
    const scrollToAbout=()=>{
    document.getElementById("about")?.scrollIntoView({behavior:"smooth"})
  }
  return (
   <div className="container mt-3">
  <div className="d-flex justify-content-center align-items-center gap-5 pt-5 mt-5 hero-section">
    
    <div>
      <img
        src={img}
        className="profile-img rounded-circle"
        alt="profile"
      />
    </div>

    <div className="text-center profile-text">
      <h6 className="text-muted">Hello, I'm</h6>
      <h1 className="fw-bold"><span className='text-info'>Gowtham</span> T</h1>
      <h4 className="text-secondary">Full Stack Developer</h4>

      <div className="d-flex gap-3 justify-content-center mt-3">
        <button className="btn btn-outline-dark px-4 profile-button">Download CV</button>
        <button className="btn btn-dark px-4 profile-button">Contact Info</button>
      </div>

      <div className="d-flex gap-4 justify-content-center mt-4">
        <a href="https://www.linkedin.com/in/gowtham-t-2aa781327" target="_blank">
          <i className="bi bi-linkedin fs-2 text-dark"></i>
        </a>
        <a href="https://github.com/gowthamT01" target="_blank">
          <i className="bi bi-github fs-2 text-dark"></i>
        </a>
      </div>

    </div>
  </div>
  <div className='pt-5 ps-5 mt-5 ms-auto'>

<i className="bi bi-chevron-double-down fs-1  cursor-pointer" onClick={scrollToAbout}></i>
  </div>
  
</div>

  )
}

export default Profile
