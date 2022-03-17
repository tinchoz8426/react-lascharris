import "./Header.css";
import Carousel from 'react-bootstrap/Carousel'
import carouselImage1 from "../../assets/images/carousel1.webp";
import carouselImage2 from "../../assets/images/carousel2.webp";
import carouselImage3 from "../../assets/images/carousel3.webp";


function Header() {
  return (
    <Carousel className="carousel-container">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={carouselImage1}
      alt="Las charris"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={carouselImage2}
      alt="Las charris"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={carouselImage3}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
  );
}

export default Header;
