import React from "react";
import "../css/BasketItem.css";

function BasketItem({ item, product }) {
  return (
    <div>
      <li className="basket-item">
        {product.title} x <span>{item.amount}</span>
      </li>
    </div>
  );
}

export default BasketItem;