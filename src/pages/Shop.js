import React from "react";
import ProductCard from "../components/ProductCard";
import { useContext } from "react";
import ShopContext from "../context/ShopContext";

const Shop = () => {
  const { products } = useContext(ShopContext);

  return (
    <div className="shopcontainer">
      <div className="catagories">
        <div className="catagory">
          <button>All Prodcuts</button>
        </div>
        <div className="catagory">
          <button>Men's Clothing</button>
        </div>
        <div className="catagory">
          <button>Women's Clothing</button>
        </div>
        <div className="catagory">
          <button>Jewelery</button>
        </div>
        <div className="catagory">
          <button>Electronics</button>
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
