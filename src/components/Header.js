import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Shop">Shop</Link>
        <Link to="/Profile">About</Link>
      </nav>
    </header>
  );
};

export default Header;
