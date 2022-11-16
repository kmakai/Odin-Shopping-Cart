import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ShopContext from "../context/ShopContext";

const Header = () => {
  const { cartCount } = useContext(ShopContext);

  return (
    <header>
      <h1>
        <Link to="/">AYN-Shop</Link>
      </h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Shop">Shop</Link>
        <Link to="/Cart">Cart ({cartCount})</Link>
      </nav>
    </header>
  );
};

export default Header;
