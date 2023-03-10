import Carousel from "react-bootstrap/Carousel";
import img1 from "../assets/img/hero-carousel/hero-carousel-1.jpg";
import img2 from "../assets/img/hero-carousel/hero-carousel-2.jpg";
import img3 from "../assets/img/hero-carousel/hero-carousel-3.jpg";
import img4 from "../assets/img/hero-carousel/hero-carousel-4.jpg";
import img5 from "../assets/img/hero-carousel/hero-carousel-5.jpg";

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={img1} width="500" height="600" alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img2} width="500" height="600" alt="Second slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} width="500" height="600" alt="Second slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img4} width="500" height="600" alt="Second slide" />

        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img5} width="500" height="600" alt="Second slide" />

        <Carousel.Caption>
          <h3>Fifth slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
