import React, { useContext } from "react";
import ShopContext from "../context/ShopContext";

function CartCard({ item }) {
  const { cart, setCart } = useContext(ShopContext);

  const increaseAmt = function () {
    const newCount = item.count + 1;
    const index = cart.findIndex((i) => i.id === item.id);
    cart[index].count = newCount;

    setCart([...cart]);
  };

  const decreaseAmt = function () {
    const newCount = item.count === 1 ? 1 : item.count - 1;
    const index = cart.findIndex((i) => i.id === item.id);
    cart[index].count = newCount;

    setCart([...cart]);
  };

  const removeItem = function () {
    const newCart = cart.filter((i) => i.id !== item.id);
    setCart([...newCart]);
  };

  return (
    <div className="cart-card">
      <img src={item.image} alt={item.title} />
      <div className="cart-card-info">
        <h2 className="cart-card-title">{item.title}</h2>
        <span className="cart-card-price">${item.price}</span>
        <div className="cart-card-btns">
          <button onClick={() => decreaseAmt()}> - </button>
          {item.count}
          <button onClick={() => increaseAmt()}> + </button>
          <button onClick={() => removeItem()}>remove</button>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
