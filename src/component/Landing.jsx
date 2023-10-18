import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { ProductList } from "./ProductList";
import { NavList } from "./NavList";
import { TableList } from "./TableList";

export const Landing = () => {
  return (
    <BrowserRouter>
      <NavList />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prodlist" element={<ProductList />} />
        <Route path="/table" element={<TableList />} />
      </Routes>
    </BrowserRouter>
  );
};
