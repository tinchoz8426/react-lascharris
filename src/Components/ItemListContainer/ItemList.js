import Item from "./Item";
import "./Item.css";
import React, { Fragment } from "react";

const ItemList = ({ items }) => {
  return (
    <Fragment>
      <div className="CardContainer">
        {items.map((item) => {
          return (
            <Item
              key={item.id}
              item={item}
              title={item.title}
              price={item.price}
              img={item.img}
              stock={item.stock}
              category={item.category}
              description={item.description}
              id={item.id}
            />
          );
        })}
      </div>
    </Fragment>
  );
};

export default ItemList;
