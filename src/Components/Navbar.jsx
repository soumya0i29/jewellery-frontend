import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";

const Navbar = ({ user, onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart } = useCart(); // Cart context

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Cart count
  const cartCount = cart.reduce((sum, item) => sum + (item.qty || 1), 0);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="logo-text">💎 Jewellery Store</Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className={menuOpen ? "bar open" : "bar"}></div>
        <div className={menuOpen ? "bar open" : "bar"}></div>
        <div className={menuOpen ? "bar open" : "bar"}></div>
      </div>

      <motion.ul
        className={`navbar-links ${menuOpen ? "show" : ""}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/products" onClick={toggleMenu}>Products</Link></li>
        <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
        <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
        <li>
          <Link to="/cart" onClick={toggleMenu}>
            Cart 🛒
            {cartCount > 0 && (
              <span className="cart-count-badge">{cartCount}</span>
            )}
          </Link>
        </li>
        <li><Link to="/wishlist" onClick={toggleMenu}>Wishlist ❤️</Link></li>
        <li><Link to="/dashboard" onClick={toggleMenu}>Dashboard</Link></li>
        <li><Link to="/Orders" onClick={toggleMenu}>Orders</Link></li>
        {user ? (
          <>
            {/* Dashboard already above, can remove duplicate if needed */}
            <li>
              <button onClick={() => { toggleMenu(); onLogout(); }} className="logout-btn">Logout</button>
            </li>
          </>
        ) : (
          <>
            <li><Link to="/login" onClick={toggleMenu}>Login</Link></li>
            <li><Link to="/signup" onClick={toggleMenu}>Signup</Link></li>
          </>
        )}
      </motion.ul>
    </nav>
  );
};

export default Navbar;