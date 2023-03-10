import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const TeamMember = ({ name, role, description, imageSrc, socialLinks }) => {
  return (
    <Col lg={4} md={6} data-aos="fade-up" data-aos-delay="100">
      <div className="member">
        <div className="member-img">
          <Image src={imageSrc} fluid alt={name} />
          <div className="social">
            {socialLinks.map((link, index) => (
              <a href={link.url} key={index}>
                <i className={`bi bi-${link.icon}`}></i>
              </a>
            ))}
          </div>
        </div>
        <div className="member-info text-center">
          <h4>{name}</h4>
          <span>{role}</span>
          <p>{description}</p>
        </div>
      </div>
    </Col>
  );
};

const Team = ({ title, subtitle, teamMembers }) => {
  return (
    <section id="team" className="team">
      <Container data-aos="fade-up">
        <div className="section-header">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        <Row className="gy-5">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Team;
