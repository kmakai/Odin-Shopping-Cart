import React from "react";

function CartCard({ item }) {
  return (
    <div className="cart-card">
      <img src={item.image} alt={item.title} />
      <div className="cart-card-info">
        <h2 className="cart-card-title">{item.title}</h2>
        <span className="cart-card-price">${item.price}</span>
        <div>
          <button>increase</button>
          <button>decrease</button>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
