import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

import trendynet1 from '/src/assets/project-img/Trendynet-1.png'
import trendynet2 from '/src/assets/project-img/Trendynet-2.png'
import ReadyToGo1 from '/src/assets/project-img/ReadyToGo1.png'
import ReadyToGo2 from '/src/assets/project-img/ReadyToGo2.png'
import Udemy1 from '/src/assets/project-img/Udemy-2.png'
import Udemy2 from '/src/assets/project-img/Udemy-2.png'
import Fraud1 from '/src/assets/project-img/Fraud1.jpeg'
import Fraud2 from '/src/assets/project-img/Fraud2.jpeg'

const projectData = [
  {
    sectionTitle: "Projects",
    subTitle: "Browse My Recent",
    projectName: "TrendyNet E-Commerce Website",
    images: [
      { src: trendynet1, label: "Index Page" },
      { src:trendynet2, label: "Collection Page" }
    ],
    links: {
      github: "https://github.com/gowthamT01/trendynet-repo/tree/main/TrendyNet",
      liveDemo: "https://trendynet.netlify.app/collection"
    }
  },
   {
    sectionTitle: "Projects",
    subTitle: "Browse My Recent",
    projectName: "Udemy Clone Website",
    images: [
      { src: Udemy1, label: "Index Page" },
      { src: Udemy2, label: "Courses" }
    ],
    links: {
      github: "https://github.com/gowthamT01/UDEMY-DEMO",
      liveDemo: "https://udemy-clone-gt.netlify.app/"
    }
  },
   {
    sectionTitle: "Projects",
    subTitle: "Browse My Recent",
    projectName: "ReadyToGo Travel Consultancy Website",
    images: [
      { src:ReadyToGo1, label: "Index Page" },
      { src: ReadyToGo2, label: "Collection Page" }
    ],
    links: {
      github: "https://github.com/gowthamT01/READY-TO-GO",
      liveDemo: "https://ready-to-go-travel.netlify.app/"
    }
  },
  {
    sectionTitle: "Projects",
    subTitle: "Browse My Recent",
    projectName: "Fraudalent Job Post Identification",
    images: [
      { src:Fraud1, label: "Index Page" },
      { src: Fraud2, label: "Collection Page" }
    ],
    links: {
      github: "https://github.com/gowthamT01/FraudalentJobPostIdentificarion",
      liveDemo: "https://github.com/gowthamT01/FraudalentJobPostIdentificarion"
    }
  }
  

];

const ProjectComponent = () => {
  return (
    <section id="project">

    <Container className="py-5">
    
      <div className="text-center mb-5">
        <p className="text-muted mb-1">{projectData[0].subTitle}</p>
        <h1 className="fw-bold">{projectData[0].sectionTitle}</h1>
      </div>

    
      {projectData.map((project, index) => (
        <div key={index} className="glass-container p-4 p-md-5 mx-auto w-100 mb-5" style={{ maxWidth: '1100px', border: '1px solid #eee', borderRadius: '15px' }}>
          <h3 className="mb-4 fw-bold text-center">{project.projectName}</h3>

          <Row className="justify-content-center g-4 mb-4">
            {project.images.map((img, imgIndex) => (
              <Col md={6} key={imgIndex}>
                <div className="text-center">
                  <Image 
                    src={img.src} 
                    alt={img.label} 
                    fluid 
                    className="rounded-3 mb-2 shadow-sm border"
                    style={{ maxHeight: '35vh', width: '100%', objectFit: 'cover' }} 
                  />
                  <h5 className="fw-bold">{img.label}</h5>
                </div>
              </Col>
            ))}
          </Row>

          <div className="d-flex justify-content-center gap-3">
            <Button 
              variant="outline-dark" 
              className="rounded-pill px-4 py-2 fw-semibold"
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </Button>
            
            <Button 
              variant="outline-dark" 
              className="rounded-pill px-4 py-2 fw-semibold"
              href={project.links.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live 
            </Button>
          </div>
          
        </div>
   
      ))}
    </Container>
    </section>
  );
};

export default ProjectComponent;