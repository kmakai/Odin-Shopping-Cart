import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <div className="product-card">
      <img src={item.image} alt={item.title} />
      <div className="product-info">
        <h2 className="product-title">{item.title}</h2>
        {/* <p className="product-desc">{item.description}</p> */}
        <span className="product-price">{item.price}</span>

        <button>
          <Link to={`/shop/${item.id}`}>Buy Now</Link>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;