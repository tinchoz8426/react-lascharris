import "./ItemDetail.css";
import { Row, Container, Col, Image } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";

import { useCart } from "../../Context/CartContext";

const ItemDetail = ({ item }) => {
  const { addItem, setCart } = useCart();

  const onAdd = (count) => {
    setCart(count);
    addItem(item, count);
  };

  return (
    <>
      <Container>
        <Row className="py-5">
          <Col className="d-flex align-items-center justify-content-center">
            <Image
              style={{ maxHeight: "350px", objectFit: "cover" }}
              src={item.img}
              rounded
            />
          </Col>
          <Col className="info-container">
            <div className="mb-3 d-flex flex-column justify-content-start">
              <h2>{item.title}</h2>
              <h2>$ {item.price}</h2>
              <p className="pb-4">{item.description}</p>

              <ItemCount stock={item.stock} initial={0} onAdd={onAdd} />
            </div>
            <Col className="text-muted d-flex align-items-center">
              Stock: {item.stock} unidades disponibles.
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ItemDetail;
