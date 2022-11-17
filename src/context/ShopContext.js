import { createContext, useState, useEffect } from "react";

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [product, setProduct] = useState({});
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getCartCount();
  }, [cart]);

  const getProducts = async () => {
    const response = await fetch(`https://fakestoreapi.com/products`);

    const data = await response.json();
    setProducts(data);
  };

  const getProductsByCategory = async (category) => {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );

    const data = await response.json();
    setProducts(data);
  };

  const getSingleProduct = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);

    const data = await response.json();

    setProduct(data);
  };

  const addToCart = () => {
    const id = product.id;
    const NotInCart = cart.findIndex((item) => item.id === id) < 0;
    console.log(id, NotInCart);

    if (NotInCart) {
      setCart([...cart, { ...product, count: 1 }]);
    } else {
      const updatedCart = cart.map((item) => {
        if (item.id === id) {
          const newCount = item.count + 1;
          return { ...item, count: newCount };
        }

        return item;
      });

      setCart(updatedCart);
    }
  };

  const getCartCount = function () {
    const count =
      cart?.length > 0 ? cart.reduce((acc, it) => acc + it.count, 0) : 0;
    setCartCount(count);
  };

  return (
    <ShopContext.Provider
      value={{
        products,
        product,
        cart,
        setCart,
        getSingleProduct,
        getProducts,
        getProductsByCategory,
        setProduct,
        addToCart,
        cartCount,
        setCartCount,
        getCartCount,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContext;
