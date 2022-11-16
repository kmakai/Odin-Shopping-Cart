import React from "react";
import ProductCard from "../components/ProductCard";
import { useContext } from "react";
import ShopContext from "../context/ShopContext";

const Shop = () => {
  const { products, getProductsByCategory, getProducts } =
    useContext(ShopContext);

  return (
    <div className="shopcontainer">
      <div className="catagories">
        <div className="catagory">
          <button onClick={() => getProducts()}>All Products</button>
        </div>
        <div className="catagory">
          <button onClick={() => getProductsByCategory("men's clothing")}>
            Men's Clothing
          </button>
        </div>
        <div className="catagory">
          <button onClick={() => getProductsByCategory("women's clothing")}>
            Women's Clothing
          </button>
        </div>
        <div className="catagory">
          <button onClick={() => getProductsByCategory("jewelery")}>
            Jewelery
          </button>
        </div>
        <div className="catagory">
          <button onClick={() => getProductsByCategory("electronics")}>
            Electronics
          </button>
        </div>
      </div>
      <div className="products-display">
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
