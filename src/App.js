import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Footer, MobileMenu } from './components';
import {
  Home,
  About,
  Products,
  SingleProduct,
  Cart,
  Checkout,
  ErrorPage,
} from './pages';

const App = () => (
  <div>
    <BrowserRouter>
      <Navbar />
      <MobileMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </div>
);

export default App;
