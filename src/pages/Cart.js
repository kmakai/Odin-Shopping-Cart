import React, { useContext } from "react";
import CartCard from "../components/CartCard";
import ShopContext from "../context/ShopContext";

function Cart() {
  const { cart } = useContext(ShopContext);

  return (
    <div>
      {/* {cart.map((item) => (
        <CartCard item={item} />
      ))} */}
      {console.log(cart)}
    </div>
  );
}

export default Cart;
