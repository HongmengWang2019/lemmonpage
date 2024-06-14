import React from "react";
import "./styles/globals.css";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./components/homepage/Home";
import Tusimple from "./components/tusimple/Tusimple";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Momenta from "./components/momenta/Momenta";
import About from "./components/About";

function App() {
  return (
    <div className="w-full h-full bg-black flex-col justify-start items-center gap-8 inline-flex">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/devviztool" element={<Tusimple />} />
        <Route path="/mobile-hmi" element={<Momenta />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
