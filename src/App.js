import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./Components/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import Products from "./Pages/Products.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Cart from "./Pages/Cart.jsx";
import Wishlist from "./Pages/Wishlist.jsx";
import Payment from "./Pages/Payment.jsx";
import Checkout from "./Pages/Checkout.jsx";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import ProductDetail from "./Pages/ProductDetail.jsx";
import ProductTypePage from "./Pages/ProductTypePage.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import Orders from "./Pages/Orders.jsx";
import Profile from "./Pages/Profile.jsx";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/type/:type" element={<ProductTypePage />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
