import { useState } from "react";
import "./ShoppingItem.css";

function ShoppingItem({ name, price }) {
  let [amount, setAmount] = useState(1);

  const prevAmount = () => amount;
  return (
    <section className="item">
      <h2>{name}</h2>
      <p>price: {price.toFixed(2)}€</p>
      <p>amount: {amount}</p>
      <p>total: {(price * amount).toFixed(2)}€</p>
      <button
        className="item__button"
        type="button"
        onClick={() => {
          amount != 1
            ? setAmount((prevAmount) => prevAmount - 1)
            : alert("that's the min!");
        }}
      >
        -
      </button>
      <button
        className="item__button"
        type="button"
        onClick={() => setAmount((prevAmount) => prevAmount + 1)}
      >
        +
      </button>
    </section>
  );
}

export default ShoppingItem;
