import React, { Fragment, useState } from "react";
import { AddToCart, Finalizar, Home } from "../Alertas/Alertas";
import { Button } from "react-bootstrap";
import './ItemCount.css';

const ItemCount = ({ stock, onAdd }) => {
  const initial = 0;
  const [count, setCount] = useState(initial);
  const [display, setDisplay] = useState("hidden");

  const handleSumCount = () => {
    if (count === stock) return;
    setCount(count + 1);
  };

  const handleSubtractCount = () => {
    if (count === initial) return;
    setCount(count - 1);
  };

  const handleOnAdd = () => {
    onAdd(count);
    setCount(initial);
    setDisplay("block");
  };

  return (
    <Fragment>
      <div
        className="contador"
        
      >
        <Button variant="light" onClick={handleSubtractCount}>
          -
        </Button>{" "}
        <p style={{ margin: "0" }}>{count}</p>
        <Button variant="light" onClick={handleSumCount}>
          +
        </Button>{" "}
      </div>
      {display === "block" ? (
        <div className="text-center">
          <Finalizar />
          <Home />
        </div>
      ) : (
        <>
          <AddToCart count={count} setDisplay={setDisplay} handleOnAdd={handleOnAdd} />
        </>
      )}
    </Fragment>
  );
};

export default ItemCount;
