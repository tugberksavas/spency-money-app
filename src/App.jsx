import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import products from "./products.json";
import Product from "./components/Product";
import Basket from "./components/Basket";

function App() {
  const [money, setMoney] = useState(1000000000);

  const [basket, setBasket] = useState([]);

  const [total, setTotal] = useState(0);
  const resetBasket = () => {
    setBasket([]);
  };

  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return (
          acc +
          item.amount * products.find((product) => product.id === item.id).price
        );
      }, 0)
    );

    // console.log(basket);
  }, [basket]);

  return (
    <div>
      <Header total={total} money={money} />
      <div className="container products">
        {products.map((product) => (
          <Product
            key={product.id}
            basket={basket}
            setBasket={setBasket}
            product={product}
            total={total}
            money={money}
          />
        ))}
      </div>
      {total > 0 && (
        <Basket
          resetBasket={resetBasket}
          products={products}
          total={total}
          basket={basket}
        />
      )}
    </div>
  );
}

export default App;
