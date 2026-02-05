import React from 'react'
import about from '/src/assets/images/About.jpg'
function About() {
  return (
    <section id="about">

    <div className='mt-5 about'>
         <div className='text-center justify-content-center'>
            <p className=' fs-6'>Get To Know More</p>
            <h1 className='fw-bold'>About Me</h1>
         </div>
         <div>
            
          <div className="d-flex  justify-content-evenly align-items-center">

                    <div>
                        <img src={about} className='about-img rounded-4 mt-3' alt="" />
                    </div>
                    <div>
                        <h4><i className="bi bi-person-fill me-2"></i>Name: Gowtham T </h4><br />
                        <h4><i className="bi bi-balloon-heart me-2"></i>DOB:29/12/2004</h4><br />
                        <h4><i className="bi bi-geo-alt  me-2"></i>Adress:Puduramapura,Hanur Thaluk,Chamarajanagar Dist,Karnataka,India.571444</h4><br />
                        <h4><i className="bi bi-envelope-open me-2"></i>Gmail:gtgowthu05@gmail.com</h4><br />
                        <h4><i className="bi bi-mortarboard-fill me-2"></i>Education:Bachelor Of Computer Application</h4>
                    </div>
                
            </div>
            
         </div>
     
    </div>
    </section>
  )
}

export default About
