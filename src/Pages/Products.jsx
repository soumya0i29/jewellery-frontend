import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import products from "./products"; // Your products array from a file
import "./Products.css";

const Products = () => {
  const { addToCart } = useCart();
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    setWishlist(JSON.parse(localStorage.getItem("wishlist")) || []);
  }, []);

  const addToWishlist = (product) => {
    const exists = wishlist.find((item) => item.id === product.id);
    if (exists) {
      alert("Already in Wishlist!");
      return;
    }
    const updatedWishlist = [...wishlist, product];
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    alert("Added to Wishlist!");
  };

  return (
    <div className="products-container">
      <h2>Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button 
              className="add-to-cart-btn"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
            <button className="wishlist-btn" onClick={() => addToWishlist(product)}>
              + Wishlist
            </button>
            <Link to={`/products/${product.id}`}>
              <button>View</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;