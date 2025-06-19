import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import MotionWrapper from "../Components/MotionWrapper";
import "./Home.css";

const sampleProducts = [
  { id: 1, name: "Gold Earrings", price: 5999, image: "/images/ear1.jpg", description: "Beautiful handcrafted gold earrings perfect for special occasions." },
  { id: 2, name: "Elegant Necklace", price: 15499, image: "/images/eleneck.jpg", description: "A stunning necklace that adds elegance to your style." },
  { id: 3, name: "Diamond rings", price: 2299, image: "/images/ring.jpg",  description: "Sparkling diamond ring to celebrate love and elegance." },
  { id: 4, name: "Gold Earrings", price: 5999, image: "/images/ear2.jpg", description: "Beautiful handcrafted gold earrings perfect for special occasions" },
  { id: 5, name: "Elegant Necklace", price: 15499, image: "/images/eleneck1.jpg", description: "A stunning necklace that adds elegance to your style." },
  { id: 6, name: "Diamond rings", price: 2299, image: "/images/ring2.jpg",  description: "Sparkling diamond ring to celebrate love and elegance." },
  { id: 7, name: "Gold Earrings", price: 5999, image: "/images/ear3.jpg", description: "Beautiful handcrafted gold earrings perfect for special occasions" },
  { id: 8, name: "Elegant Necklace", price: 15499, image: "/images/eleneck2.jpg", description: "A stunning necklace that adds elegance to your style." },
  { id: 9, name: "Diamond rings", price: 2299, image: "/images/ring3.jpg",  description: "Sparkling diamond ring to celebrate love and elegance." },
  { id: 10, name: "Gold Earrings", price: 5999, image: "/images/ear4.jpg", description: "Beautiful handcrafted gold earrings perfect for special occasions" },
  { id: 11, name: "Elegant Necklace", price: 15499, image: "/images/eleneck3.jpg", description: "A stunning necklace that adds elegance to your style." },
  { id: 12, name: "Diamond rings", price: 2299, image: "/images/ring4.jpg",  description: "Sparkling diamond ring to celebrate love and elegance." },
];

// Get unique product types (names)
const productTypes = Array.from(new Set(sampleProducts.map((p) => p.name)));

const Home = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [sortBy, setSortBy] = useState("");
  const { addToCart } = useCart();

  // Just sort (no search)
  let filteredProducts = [...sampleProducts];

  if (sortBy === "price-asc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-desc") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === "name-asc") {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "name-desc") {
    filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
  }

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  return (
    <MotionWrapper>
      <div className="home-container">
        <div className="hero-section">
          <div className="overlay">
            <h1>Welcome to <span className="brand">Online Jewellery Store</span></h1>
            <p>Find your sparkle in every piece</p>
            <button
              className="shop-now-btn"
              onClick={() => {
                document
                  .querySelector(".categories-section")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Shop Now
            </button>
          </div>
        </div>

        <div className="categories-section">
          <h2 className="section-title">Jewellery Types</h2>
          <div className="category-list">
            {productTypes.map((type) => (
              <Link key={type} to={`/products/type/${encodeURIComponent(type)}`}>
                <div className="category-card">{type}</div>
              </Link>
            ))}
          </div>
        </div>

        <div className="product-controls">
          <label htmlFor="sort-select">Sort by: </label>
          <select
            id="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-select"
          >
            <option value="">Default</option>
            <option value="price-asc">Price - Low to High</option>
            <option value="price-desc">Price - High to Low</option>
            <option value="name-asc">Name - A to Z</option>
            <option value="name-desc">Name - Z to A</option>
          </select>
        </div>

        <div className="product-section">
          {visibleProducts.length > 0 ? (
            visibleProducts.map((product) => (
              <div key={product.id} className="product-card">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
                <h3>{product.name}</h3>
                <p className="price">₹{product.price.toLocaleString()}</p>
            
                <div className="card-buttons">
                  <button
                    className="add-to-cart-btn"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                  <Link to={`/products/${product.id}`}>
                    <button className="view-btn">View</button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="no-results">No items found!</p>
          )}
        </div>

        {visibleCount < filteredProducts.length && (
          <div className="load-more-container">
            <button
              className="load-more-btn"
              onClick={() => setVisibleCount((prev) => prev + 6)}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </MotionWrapper>
  );
};

export default Home;