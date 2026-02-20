import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";

function Tech() {

  const scrollToProject = () => {
    document.getElementById("project")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const techData = [
    {
      title: "Programming Languages",
      items: ["Python", "Java", "PHP"],
    },
    {
      title: "Frontend Technologies",
      items: ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap", "Material UI"],
    },
    {
      title: "Backend Technologies",
      items: ["Node.js", "Express.js", "REST API"],
    },
    {
      title: "Database",
      items: ["MySQL", "MongoDB", "Mongoose"],
    },
    {
      title: "Technical Tools & Technologies",
      items: ["Visual Studio Code", "Git", "GitHub", "MS Word", "MS Excel"],
    },
    {
      title: "Networking",
      items: ["LAN", "WAN", "MAN"],
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
            A comprehensive toolkit for building intelligent and scalable applications.
          </p>

          <Row className="g-4">
            {techData.map((tech, index) => (
              <Col md={6} lg={4} key={index}>
                <Card className="shadow-sm border-1 h-100 tech-card">
                  <Card.Body>
                    <Card.Title className="fw-bold mb-3">
                      {tech.title}
                    </Card.Title>

                    <div className="d-flex flex-wrap gap-2">
                      {tech.items.map((item, i) => (
                        <Badge
                          bg="light"
                          text="dark"
                          key={i}
                          className="px-3 border-1 py-2 tech-badge"
                        >
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

        {/* Scroll Icons */}
        <div className="pt-3 ps-5 pe-5 d-flex justify-content-between w-100">

          {/* Down Icon */}
          <i
            className="bi bi-chevron-double-down fs-1 cursor-pointer"
            role="button"
            aria-label="Scroll to Project"
            onClick={scrollToProject}
          ></i>

          {/* Up Icon */}
          <i
            className="bi bi-chevron-double-up fs-1 cursor-pointer"
            role="button"
            aria-label="Scroll to About"
            onClick={scrollToAbout}
          ></i>

        </div>
      </div>
    </section>
  );
}

export default Tech;
