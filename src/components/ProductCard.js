import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <div className="product-card">
      <img src={item.image} alt={item.title} />
      <div className="product-info">
        <h2 className="product-title">{item.title}</h2>
        <span className="product-price">${item.price}</span>

        <Link to={`/shop/${item.id}`}>
          <button>Buy Now</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
