import { createContext, useState, useEffect } from "react";

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await fetch(`https://fakestoreapi.com/products`);

    const data = await response.json();
    setProducts(data);
  };

  return (
    <ShopContext.Provider value={{ products }}>{children}</ShopContext.Provider>
  );
};

export default ShopContext;
