import React, { Fragment } from "react";
import { useCart } from "../../Context/CartContext";
import { RemoveIcon } from "../Alertas/Alertas";
import "./ItemCart.css";

const ItemCart = ({ title, price, img, id, quantity }) => {
  const { removeItem } = useCart();
  const handleRemove = () => removeItem(id);

  return (
    <Fragment>
      <div
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          "& > :not(style)": {
            m: 1,
            width: "30em",
            height: "10%",
          },
        }}
      >
        <div elevation={24} className="flexContainer">
          
            <div className="flexItems">
              <img src={img} alt="" className="imgCart" />
              <div className="txtContainer">
                <p className="txtName">{title}</p>
                <p className="txtPrice">${price}</p>
              </div>
            </div>
          
          <div className="flexQuantity">
            <p className="txtQuantity">Cantidad: {quantity}</p>
            <button onClick={handleRemove} className="buttonRemove">
              <RemoveIcon />
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ItemCart;
