import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import { ShopProvider } from "./context/ShopContext";

const App = () => {
  return (
    <ShopProvider>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Profile" element={<About />} />
            <Route path="/Shop" element={<Shop />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ShopProvider>
  );
};

export default App;
