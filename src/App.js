import React, { useEffect, useState } from 'react';

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/home/HomePage';
import NavBarLogIn from './components/nav/NavBarLogIn';
import Foter from './components/foter/Foter';
import CartPage from './pages/cart/CartPage';
import { ProductProvider } from './hooks/CreateContext';
import ProductDetailsPage from './pages/product/ProductDetailsPage';
import Register from './components/register/Register';
import ContactPage from './pages/contact/ContactPage';
import AboutPage from './pages/about/AboutPage';


function App() {

  const [loding, setLoding] = useState(true);
  useEffect (() => {
    setTimeout (() => {
      setLoding (false)
    }, 2000);
  },[])
  return ( 
    <>
    {
      loding ? 
      <div className='contLoader'>
        <div class="loader">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div> 
      </div>
    :
    <BrowserRouter>
      <ProductProvider>
        <NavBarLogIn />
        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/product-details/:id" element={<ProductDetailsPage />} />
        </Routes>
        <Foter />
      </ProductProvider>
    </BrowserRouter>
    }
    </>
  );
}

export default App;

  
