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

  const addToCart = (item) => {
    const index = cart.findIndex((product) => {
      +product.id === +item.id;
    });
    const exist = index < 0 ? false : true;

    console.log(exist);
    if (!exist) {
      setCart([item, ...cart]);
    } else {
      console.log("item already exists");
    }
  };

  return (
    <ShopContext.Provider value={{ products, product, setProduct, addToCart }}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContext;
