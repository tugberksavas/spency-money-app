import React from "react";
import "../css/product.css";
import { moneyFormat } from "../helpers";

function Product({ product, total, money, basket, setBasket }) {
  const basketItem = basket.find((item) => item.id === product.id);

  const addBasket = () => {
    const chechBasket = basket.find((item) => item.id === product.id);
    // Ürün daha önce eklenmiş mi?
    if (chechBasket) {
      chechBasket.amount += 1;
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        chechBasket,
      ]);
    } else {
      setBasket([
        ...basket,
        {
          id: product.id,
          amount: 1,
        },
      ]);
    }
  };

  const removeBasket = () => {
    const currentBasket = basket.find((item) => item.id === product.id);
    const basketWithoutCurrent = basket.filter(
      (item) => item.id !== product.id
    );
    currentBasket.amount -= 1;
    if (currentBasket.amount === 0) {
      setBasket([...basketWithoutCurrent]);
    } else {
      setBasket([...basketWithoutCurrent, currentBasket]);
    }
  };

  return (
    <div className="product">
      <div className="top-section">
        <img src={product.image} alt="" />
        <h6>{product.title} </h6>
      </div>

      <div className="price">$ {moneyFormat(product.price)} </div>
      <div className="actions">
        <button
          className="sell-btn"
          disabled={!basketItem}
          onClick={removeBasket}
        >
          Sat
        </button>
        <span className="amount">
          {(basketItem && basketItem.amount) || 0}{" "}
        </span>
        <button
          className="buy-btn"
          disabled={total + product.price > money}
          onClick={addBasket}
        >
          Satın Al
        </button>
      </div>
    </div>
  );
}

export default Product;
