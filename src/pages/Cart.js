import React, { useContext, useEffect, useState } from "react";
import CartCard from "../components/CartCard";
import ShopContext from "../context/ShopContext";
function Cart() {
  const { cart } = useContext(ShopContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((acc, i) => acc + +i.price * +i.count, 0));
  }, [cart]);
  return (
    <>
      {cart.length === 0 ? (
        <h1>Your cart is empty.....!</h1>
      ) : (
        <div className="checkout-total">Total: ${total.toFixed(2)}</div>
      )}
      <div className="cart-container">
        {cart?.map((i) => (
          <CartCard key={i.id} item={i} />
        ))}
      </div>
      {cart.length > 0 && <button className="checkout-btn">CHECK OUT</button>}
    </>
  );
}

export default Cart;
