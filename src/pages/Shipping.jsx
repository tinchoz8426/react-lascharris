import { Row, Container, Col } from "react-bootstrap";
import shippingImage from "../assets/images/shipping-image.png";
import './Shipping.css';

const Shipping = () => {
  return (
    <>
      <Container>
        <Row>
          <h1 className="text-center pt-5">¡Envíos a todo el país!</h1>
          <p className="text-center fs-4">
            Compra desde la comodidad de tu casa, nosotros nos encargamos de hacertelo llegar.
          </p>
        </Row>
        <Row className="shipping-container">
          <Col className="d-flex align-items-center shipping-image-container">
            <img src={shippingImage} alt="Medios de envios" />
          </Col>
          <Col className="d-flex align-items-center">
            <ul className="shipping-list">
              <li>🛵 Correo Argentino</li>
              <li>🛵 Andreani</li>
              <li>🛵 Mercado Envios - Proximamente</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Shipping;
