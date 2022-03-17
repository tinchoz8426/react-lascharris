import React, { Fragment, useState } from "react";
import { useCart } from "../../Context/CartContext";
import { BotonUno, ButtonClearCart } from "../Alertas/Alertas";
import {
  addDoc,
  collection,
  getFirestore,
  doc,
  writeBatch,
} from "@firebase/firestore";
import Swal from "sweetalert2";
import "./Cart.css";

import ItemCart from "./ItemCart";

const Cart = () => {
  const { cart, clearCart, cartWidgetItems, totalPrice } = useCart();
  const total = totalPrice();
  const [buttonState, setButtonState] = useState(true);
  const [formInfo, setFormInfo] = useState({
    name: "",
    phone: "",
    email: "",
    emailConfirm: "",
  });
  const handleChange = (event) => {
    setFormInfo({ ...formInfo, [event.target.name]: event.target.value });
  };

  function checkOut() {
    setButtonState(false);
    const order = {
      buyer: formInfo,
      items: cart,
      total: total,
    };
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then((data) => {
      clearCart(data);
      Swal.fire({
        title: "Compra realizada con éxito",
        html:
          `El ID de su compra es: <b> ${data.id}</b>.` +
          "</br> " +
          "</br>" +
          `El monto total de su compra es de $ ${total}.` +
          "</br> " +
          "</br>" +
          `Fecha de la compra: ${new Date().toLocaleString()}`,
      });
    });

    const batch = writeBatch(db);
    cart.forEach((item) => {
      // console.log("Iteracion del forEach", item);
      const itemRef = doc(db, "items", item.item.id);
      batch.update(itemRef, { stock: item.item.stock - item.quantity });
    });

    batch.commit();
  }

  return (
    <div
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        "& > :not(style)": {
          m: 1,
          width: "50em",
          height: "100%",
        },
      }}
    >
      <div elevation={24}>
        <div className="no-items">
          {cartWidgetItems() > 0 ? (
            cart.map((i) => (
              <ItemCart
                key={i.item.img}
                title={i.item.title}
                price={i.item.price}
                description={i.item.description}
                img={i.item.img}
                id={i.item.id}
                quantity={i.quantity}
              />
            ))
          ) : (
            <>
              <p className="noItemsCart">No hay productos en el carrito.</p>
              <BotonUno to="/products" text="Ir a la tienda" />
            </>
          )}
          {cartWidgetItems() > 0 && (
            <>
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
                  <div elevation={24} className="totalContainer">
                    <div className="flexTotal">
                      <p className="txtTotal">Total</p>
                      <hr className="hrCart" />
                      <p className="txtTotalNum">${total.toFixed(2)}</p>
                    </div>
                  </div>
                </div>
                <div className="flexButtons">
                  <BotonUno to="/category" text="Seguir comprando" />
                  <ButtonClearCart clearCart={clearCart} />
                </div>
                <form className="form-container">
                  Ingrese sus datos para efectuar la Compra
                  <input
                    className="input-name"
                    placeholder="Nombre y apellido"
                    type="text"
                    name="name"
                    value={formInfo.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    className="input-tel"
                    placeholder="Telefono"
                    type="number"
                    name="phone"
                    value={formInfo.phone}
                    onChange={handleChange}
                    required
                  />
                  <input
                    className="input-email"
                    placeholder="Correo electronico"
                    type="email"
                    name="email"
                    value={formInfo.email}
                    onChange={handleChange}
                    required
                  />
                  <input
                    className="input-email"
                    placeholder="Confirma tu Correo electronico"
                    type="email"
                    name="emailConfirm"
                    value={formInfo.emailConfirm}
                    onChange={handleChange}
                    required
                  />
                  {buttonState ? (
                    <button
                      className="botonFinalizar"
                      disabled={
                        !(
                          formInfo.name &&
                          formInfo.phone.length > 10 &&
                          formInfo.phone.length < 13 &&
                          formInfo.email.includes("@" && ".") &&
                          formInfo.email === formInfo.emailConfirm &&
                          !formInfo.name.required
                        )
                      }
                      type="submit"
                      onClick={checkOut}
                    >
                      FINALIZAR COMPRA
                    </button>
                  ) : (
                    <div className="loading"></div>
                  )}
                </form>
              </Fragment>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
