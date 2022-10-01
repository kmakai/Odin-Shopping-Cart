import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">
          <a href="#">Home</a>
        </Link>{"  "}
        <Link to="/Profile">
          <a href="#">Shop</a>
        </Link>{"  "}
        <Link to="/Profile">
          <a href="#">About</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
