import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;