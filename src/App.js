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
        <Route path="fashe/" element={<Home />} />
        <Route path="fashe/product" element={<Product />} />
        <Route path="fashe/about" element={<About />} />
        <Route path="fashe/contact" element={<Contact />} />
      </Routes>
    </>
  );
};
