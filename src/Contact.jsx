import React from 'react'

// React-Bootstrap imports
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

// Bootstrap Icons (react-bootstrap-icons)
import { Envelope, Telephone, GeoAlt, Clock ,Linkedin} from 'react-bootstrap-icons'

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <Container>
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="contact-title">Contact Me</h2>
          <p className="text-muted">
            Feel free to reach out for opportunities or collaborations.
          </p>
        </div>

        {/* Cards */}
        <Row className="g-4 text-center">
          <Col md={3}>
            <Card className="contact-card p-3 shadow-sm">
              <Envelope size={30} />
              <h6>Email Address</h6>
              <p>gowtham05@gmail.com</p>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="contact-card p-3 shadow-sm">
              <Telephone size={30} />
              <h6>Phone Number</h6>
              <p>+91 9035232347</p>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="contact-card p-3 shadow-sm">
              <GeoAlt size={30} />
              <h6>Location</h6>
              <p>Puduramapura,Hanur Thaluk,Chamarajanagar Dist,Karnataka,India.571444</p>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="contact-card p-3 shadow-sm">
              <Linkedin size={30} />
              <h6>Linkedin</h6>
              <p>Mon – Fri : 9AM – 6PM</p>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact
