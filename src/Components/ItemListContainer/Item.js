import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const Item = ({ id, img, stock, title, price, description, category }) => {
  return (
    <Fragment>
      <div className="mb-4 card-container" >
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={img}
            style={{ height: "250px", objectFit: "cover" }}
          />
          <Card.Body style={{ textAlign: "center" }}>
            <Card.Title
              style={{ textTransform: "uppercase", textAlign: "center" }}
            >
              {title}
            </Card.Title>
            <Card.Text>{description}</Card.Text>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                paddingBottom: "1rem",
              }}
            >
              <p className="fs-5 mb-0">$ {price}</p>
            </div>
            <Link to={`/item/${id}`}>
            
            <Button
              style={{
                backgroundColor: "rgb(79, 192, 172)",
                border: "none",
                color: "#fff",
              }}
            >
              Agregar al carrito
            </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </Fragment>
  );
};

export default Item;
