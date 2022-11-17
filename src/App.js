import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import { ShopProvider } from "./context/ShopContext";
import ProductPage from "./pages/ProductPage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ShopProvider>
      <BrowserRouter>
        <Header />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/Shop/:id" element={<ProductPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </ShopProvider>
  );
};

export default App;
