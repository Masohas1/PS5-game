import Home from "./components/Home";
import Shop from "./components/Shop";
import About from "./components/About";

import "./App.css";

import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link className="logo" to="/">
          Good Game
        </Link>
        <nav>
          <Link to="/about">About Us</Link>
          <Link to="/shop">Shop</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
