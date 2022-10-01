import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Header from "./components/Header";
import Shop from "./components/Shop"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<About />} />
        <Route path="/Shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;