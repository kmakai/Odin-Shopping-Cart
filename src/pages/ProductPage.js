import React from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useContext } from "react";
import ShopContext from "../context/ShopContext";

function ProductPage() {
  const param = useParams();
  const { products, addToCart } = useContext(ShopContext);
  const ind = products.findIndex((e, i) => e.id === +param.id);
  const item = products[ind];
  return (
    <div className="product-page">
      <div className="product-page-card">
        <img src={item.image} alt={item.title} className="product-page-image" />
        <div className="product-page-info">
          <h2 className="product-page-title">{item.title}</h2>
          <p className="product-page-desc">{item.description}</p>
          <span className="product-page-price">$ {item.price}</span>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
