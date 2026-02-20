import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="footer-transparent pt-5 pb-3 mt-5">
      <Container>
        <Row>

          {/* About */}
          <Col md={4} className="mb-4">
            <h5 className="fw-bold">About Me</h5>
            <p className="footer-text">
              Passionate Frontend Developer skilled in React, UI Development,
              and building responsive modern web applications.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={4} className="mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href="#project" className="footer-link">Projects</a></li>
              <li><a href="#skill" className="footer-link">Skills</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </Col>

          {/* Social */}
          <Col md={4} className="mb-4">
            <h5 className="fw-bold">Follow Me</h5>

            <div className="d-flex gap-3 fs-4">
              <a href="https://github.com/gowthamT01" className="social-icon" target="_blank" rel="noreferrer">
                <i className="bi bi-github"></i>
              </a>

              <a href="https://www.linkedin.com/in/gowtham-t-2aa781327" className="social-icon" target="_blank" rel="noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>

              {/* Mail */}
              <a href="mailto:gtgowthu05@gmail.com" className="social-icon">
                <i className="bi bi-envelope-fill"></i>
              </a>

              {/* Phone */}
              <a href="tel:+919035232347" className="social-icon">
                <i className="bi bi-telephone-fill"></i>
              </a>

              {/* WhatsApp */}
              <a href="https://wa.me/919035232347" className="social-icon" target="_blank" rel="noreferrer">
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </Col>

        </Row>

        <hr />

        <div className="text-center footer-text">
          © {new Date().getFullYear()} Gowtham T | All Rights Reserved
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
