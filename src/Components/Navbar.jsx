import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setCartCount(cart.reduce((acc, item) => acc + (item.qty || 1), 0));
    setWishlistCount(wishlist.length);
  }, []);

  return (
    <nav className="bg-blue-900 text-white px-4 py-3 flex items-center justify-between shadow relative">
      {/* Logo */}
      <Link to="/" className="text-xl font-bold text-yellow-400 flex items-center gap-2">
        💎 Jewellery Store
      </Link>

      {/* Cart and Wishlist Icons - Always visible (moved above menu) */}
      <div className="flex items-center gap-4">
        <Link to="/cart" className="relative">
          🛒
          <span className="absolute -top-2 -right-3 bg-red-600 text-xs rounded-full px-1">
            {cartCount}
          </span>
        </Link>
        <Link to="/wishlist" className="relative">
          ❤️
          <span className="absolute -top-2 -right-3 bg-red-600 text-xs rounded-full px-1">
            {wishlistCount}
          </span>
        </Link>

        {/* Hamburger Icon for Mobile */}
        <button className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
          </svg>
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden sm:flex gap-6 items-center text-sm">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[60px] left-0 w-full bg-blue-900 text-white flex flex-col gap-3 p-4 sm:hidden z-50">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/products" onClick={() => setIsOpen(false)}>Products</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link>
          <Link to="/orders" onClick={() => setIsOpen(false)}>Orders</Link>
          <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
          <Link to="/signup" onClick={() => setIsOpen(false)}>Signup</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
