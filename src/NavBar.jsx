import React from 'react'

function NavBar() {
  const scrollToAbout=()=>{
    document.getElementById("about")?.scrollIntoView({behavior:"smooth"})
  }
  const scrollToContact=()=>{
    document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})
  }

  return (
    <div className="d-flex justify-content-around align-items-center px-2 pt-4 mt-4 my-name">

      <h1>Gowtham T</h1>
      <div className='d-flex gap-5   navbar-text'>
         <p
          
          onClick={scrollToAbout}
        >
          About
        </p>
        <p >Experience</p>
        <p >Project</p>   
        <p onClick={scrollToContact}>Contact</p>
      </div>
    </div>
  )
}

export default NavBar
