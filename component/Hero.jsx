import { Container, Row, Col, Button } from 'react-bootstrap';
import img1 from '../assets/img/hero-carousel/hero-carousel-1.jpg'

const Hero = () => {

  return (
    <section id="hero" className="hero" style={{ backgroundImage: `url(${img1})` }}>
      <div className="info d-flex align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6} className="text-center" data-aos="fade-up">
              <h2>Welcome to <span>UpConstruction</span></h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <Button href="#get-started" className="btn-get-started">Get Started</Button>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
