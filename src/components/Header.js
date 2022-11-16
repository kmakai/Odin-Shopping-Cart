import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/">ShopingCartApp</Link>
      </h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Shop">Shop</Link>
        <Link to="/Cart">Cart</Link>
      </nav>
    </header>
  );
};

export default Header;
