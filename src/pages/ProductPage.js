import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useContext } from "react";
import ShopContext from "../context/ShopContext";

function ProductPage() {
  const param = useParams();
  const { addToCart, getSingleProduct, product } = useContext(ShopContext);

  useEffect(() => {
    getSingleProduct(param.id);
  }, [param.id]);

  return (
    <div className="product-page">
      <div className="product-page-card">
        <img
          src={product.image}
          alt={product.title}
          className="product-page-image"
        />
        <div className="product-page-info">
          <h2 className="product-page-title">{product.title}</h2>
          <p className="product-page-desc">{product.description}</p>
          <span className="product-page-price">$ {product.price}</span>
          <button onClick={() => addToCart()}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
