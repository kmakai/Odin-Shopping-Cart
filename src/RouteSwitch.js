import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import App from './App.js';
import Profile from './Profile';
import Nav from "./components/Nav";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;