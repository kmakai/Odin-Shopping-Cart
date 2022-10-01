import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav>
        <Link to="/">
          <a href="#">Home</a>
        </Link>
        <Link to="/Profile">
          <a href="#">About</a>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
