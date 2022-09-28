import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import App from './App.js';
import Profile from './Profile';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;