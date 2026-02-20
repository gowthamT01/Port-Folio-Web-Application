import React from 'react';
import about from '/src/assets/images/About.jpg';


function About() {
  const scrollToTechnical = () => {
    document.getElementById("skill")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProfile = () => {
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="py-5">
      <div className="container mt-5 about-container">
        <div className="text-center mb-5">
          <p className="fs-6 mb-0">Get To Know More</p>
          <h1 className="fw-bold">About Me</h1>
        </div>

        {/* Responsive Flex Wrapper: Column on mobile, Row on Medium screens+ */}
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-5">
          
          <div className="about-img-wrapper">
            <img src={about} className="about-img rounded-4" alt="Gowtham T" />
          </div>

          <div className="about-details text-start">
            <div className="detail-item mb-3">
              <h4 className="fs-5"><i className="bi bi-person-fill me-2 text-primary"></i><strong>Name:</strong> Gowtham T</h4>
            </div>
            <div className="detail-item mb-3">
              <h4 className="fs-5"><i className="bi bi-balloon-heart me-2 text-primary"></i><strong>DOB:</strong> 29/12/2004</h4>
            </div>
            <div className="detail-item mb-3">
              <h4 className="fs-5"><i className="bi bi-geo-alt me-2 text-primary"></i><strong>Address:</strong> Puduramapura, Hanur, Chamarajanagar, Karnataka, 571444</h4>
            </div>
            <div className="detail-item mb-3">
              <h4 className="fs-5"><i className="bi bi-envelope-open me-2 text-primary"></i><strong>Gmail:</strong> gtgowthu05@gmail.com</h4>
            </div>
            <div className="detail-item mb-3">
              <h4 className="fs-5"><i className="bi bi-mortarboard-fill me-2 text-primary"></i><strong>Education:</strong> Bachelor Of Computer Application</h4>
            </div>
          </div>

        </div>

        {/* Navigation Arrows */}
        <div className="pt-5 mt-5 d-flex justify-content-between align-items-center">
          <i
            className="bi bi-chevron-double-down fs-1 icon-btn"
            role="button"
            onClick={scrollToTechnical}
          ></i>
          <i
            className="bi bi-chevron-double-up fs-1 icon-btn"
            role="button"
            onClick={scrollToProfile}
          ></i>
        </div>
      </div>
    </section>
  );
}

export default About;