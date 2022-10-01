import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import App from './App.js';
import About from './components/About';
import Header from "./components/Header";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Profile" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;