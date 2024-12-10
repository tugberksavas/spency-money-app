import React from "react";
import BasketItem from "./BasketItem";
import "../css/basket.css";

function Basket({ basket, products, total, resetBasket }) {
  return (
    <>
      <div className="basket-container container">
        <h3>Alisveris Detaylari</h3>
        <ul>
          {basket.map((item) => (
            <BasketItem
              key={item.id}
              item={item}
              product={products.find((p) => p.id === item.id)}
            />
          ))}
        </ul>
        <div className="total">Toplam : ${total}</div>
        <button className="basket-reset-btn" onClick={resetBasket}>
          Sepeti Sifirla
        </button>
      </div>
    </>
  );
}

export default Basket;
