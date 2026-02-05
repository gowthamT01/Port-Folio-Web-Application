import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import { Envelope, Telephone, GeoAlt, Linkedin } from "react-bootstrap-icons";

function Contact() {

  const contactData = [
    {
      icon: <Envelope size={28} />,
      title: "Email Address",
      value: "gowtham05@gmail.com",
    },
    {
      icon: <Telephone size={28} />,
      title: "Phone Number",
      value: "+91 9035232347",
    },
    {
      icon: <GeoAlt size={28} />,
      title: "Location",
      value:
        "Puduramapura, Hanur Taluk, Chamarajanagar, Karnataka, India - 571444",
    },
    {
      icon: <Linkedin size={28} />,
      title: "LinkedIn",
      value: "linkedin.com/in/gowtham-t",
      link: "https://www.linkedin.com/in/gowtham-t-2aa781327",
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <Container>

        {/* Heading */}
        <div className="text-center mb-5 ">
          <h2 className="contact-title">Contact Me</h2>
          <p className="text-muted">
            Feel free to reach out for opportunities or collaborations.
          </p>
        </div>

        {/* Cards */}
        <Row className="g-4 text-center mt-4">
          {contactData.map((item, index) => (
            <Col md={3} key={index}>
              <Card className="contact-card glass-card p-4 h-100">

                <div className="mb-2">{item.icon}</div>

                <h6 className="fw-bold">{item.title}</h6>

                {item.link ? (
                  <a href={item.link} target="_blank" rel="noreferrer">
                    {item.value}
                  </a>
                ) : (
                  <p className="mb-0">{item.value}</p>
                )}

              </Card>
            </Col>
          ))}
        </Row>

      </Container>
    </section>
  );
}

export default Contact;
