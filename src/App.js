import React from "react";
import { Route, Routes } from "react-router-dom";
import  Home  from "./pages/home/Home";
import  About  from "./pages/about/About";
import Product from "./pages/product/Product";
import Contact from "./pages/contact/Contact";
import Header from "./pages/header/Header";
import Error from "./pages/error/Error";

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};
