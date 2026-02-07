import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";

function Tech() {
   const scrollTocontact=()=>{
    document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})
  }
  const techData = [
    {
      title: "Programming Languages",
      items: ["Python","Java","PHP"],
    },
    {
      title: "Frontend Technologies",
      items: ["HTML","CSS","Java Script","React Js","Bootstrap","Meterial UI"],
    },
    {
      title: "Backend Technologies",
      items: ["Node JS","Express Js","REST API"],
    },
    {
      title: "Data Base",
      items: ["MySQL","MongoDB","Mongoose"],
    },
    {
      title: "Technical Tools & Technologies",
      items: ["Visual Studio Code","GIT","GIT HUB","MS Word","MS Excel"],
    },
    {
      title: "Networking",
      items: ["LAN","WAN","MAN",],
    },
  ];

  return (
    <section id="skill">

    <div className="mt-4 pt-4">
      <Container>
        <h1 className="text-center fw-bold mb-3 mt-4 pt-4">
          Technologies I <span style={{ color: "#0d23e6" }}>Work With</span>
        </h1>

        <p className="text-center text-muted mb-5">
          A comprehensive toolkit for building intelligent and scalable
          applications.
        </p>

        <Row className="g-4">
          {techData.map((tech, index) => (
            <Col md={6} lg={4} key={index}>
              <Card className="shadow-sm border-1 h-100 tech-card">
                <Card.Body>
                  <Card.Title className="fw-bold  mb-3">
                    {tech.title}
                  </Card.Title>

                  <div className="d-flex flex-wrap gap-2">
                    {tech.items.map((item, i) => (
                      <Badge bg="light" text="dark" key={i} className="px-3 border-1 py-2 tech-badge">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
     <div className="pt-3 ps-5 pe-5 d-flex justify-content-between w-100">
  
  {/* Left icon */}
  <i
    className="bi bi-chevron-double-down fs-1 cursor-pointer"
    onClick={scrollTocontact}
  ></i>

  {/* Right icon */}
  <i
    className="bi bi-chevron-double-up fs-1 cursor-pointer"
  ></i>

</div>

    </div>
    </section>
  );
}

export default Tech;
