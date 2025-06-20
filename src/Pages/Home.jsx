import React, { useState } from "react";
import { Link } from "react-router-dom";
import MotionWrapper from "../Components/MotionWrapper";

const sampleProducts = [
  { id: 1, name: "Gold Earrings", price: 5000, image: "/images/ear1.jpg", description: "Beautiful handcrafted gold earrings perfect for special occasions." },
  { id: 2, name: "Elegant Necklace", price: 15499, image: "/images/eleneck.jpg", description: "A stunning necklace that adds elegance to your style." },
  { id: 3, name: "Diamond rings", price: 2299, image: "/images/ring.jpg", description: "Sparkling diamond ring to celebrate love and elegance." },
  { id: 4, name: "Gold Earrings", price: 5950, image: "/images/ear2.jpg", description: "Beautiful handcrafted gold earrings perfect for special occasions" },
  { id: 5, name: "Elegant Necklace", price: 15400, image: "/images/eleneck1.jpg", description: "A stunning necklace that adds elegance to your style." },
  { id: 6, name: "Diamond rings", price: 2240, image: "/images/ring2.jpg", description: "Sparkling diamond ring to celebrate love and elegance." },
  { id: 7, name: "Gold Earrings", price: 5900, image: "/images/ear3.jpg", description: "Beautiful handcrafted gold earrings perfect for special occasions" },
  { id: 8, name: "Elegant Necklace", price: 1680, image: "/images/eleneck2.jpg", description: "A stunning necklace that adds elegance to your style." },
  { id: 9, name: "Diamond rings", price: 2990, image: "/images/ring3.jpg", description: "Sparkling diamond ring to celebrate love and elegance." },
  { id: 10, name: "Gold Earrings", price: 5988, image: "/images/ear4.jpg", description: "Beautiful handcrafted gold earrings perfect for special occasions" },
  { id: 11, name: "Elegant Necklace", price: 15499, image: "/images/eleneck3.jpg", description: "A stunning necklace that adds elegance to your style." },
  { id: 12, name: "Diamond rings", price: 3000, image: "/images/ring4.jpg", description: "Sparkling diamond ring to celebrate love and elegance." },
];

const productTypes = Array.from(new Set(sampleProducts.map((p) => p.name)));

const Home = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [sortBy, setSortBy] = useState("");

  // ✅ LocalStorage Add to Cart Function
  const addToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingIndex = existingCart.findIndex(item => item.id === product.id);

    if (existingIndex !== -1) {
      existingCart[existingIndex].qty += 1;
    } else {
      existingCart.push({
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        qty: 1
      });
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));
    window.dispatchEvent(new Event('storage')); // To update dashboard count

    alert("Item added to cart successfully!");
  };

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

        {/* ✅ Full Width Hero Section */}
        <div
          className="relative w-full h-[60vh] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url('/images/hero2.jpg')` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative text-center text-white drop-shadow-lg px-4">
            <h1 className="text-2xl md:text-4xl font-bold">
              Welcome to <span className="text-pink-500">Online Jewellery Store</span>
            </h1>
            <p className="mt-2">Find your sparkle in every piece</p>
            <Link to="/products">
              <button className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600">
                Shop Now
              </button>
            </Link>
          </div>
        </div>

        {/* Categories */}
        <div className="py-10">
          <h2 className="text-xl font-bold text-center mb-4">Jewellery Types</h2>
          <div className="flex flex-wrap justify-center gap-4 px-4">
            {productTypes.map((type) => (
              <Link key={type} to={`/products/type/${encodeURIComponent(type)}`}>
                <div className="bg-pink-100 hover:bg-pink-200 text-pink-800 font-semibold px-4 py-2 rounded-xl cursor-pointer shadow">
                  {type}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Sorting */}
        <div className="flex justify-end items-center gap-2 px-4 mb-4">
          <label htmlFor="sort-select" className="font-medium">Sort by:</label>
          <select
            id="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border px-3 py-1 rounded"
          >
            <option value="">Default</option>
            <option value="price-asc">Price - Low to High</option>
            <option value="price-desc">Price - High to Low</option>
            <option value="name-asc">Name - A to Z</option>
            <option value="name-desc">Name - Z to A</option>
          </select>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {visibleProducts.length > 0 ? (
            visibleProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow hover:shadow-lg p-4 flex flex-col items-center text-center transition duration-300">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-[160px] h-[160px] object-contain rounded-lg mb-3"
                />
                <h3 className="text-base font-semibold text-gray-800">{product.name}</h3>
                <p className="text-red-600 font-bold my-1">₹{product.price.toLocaleString()}</p>
                <div className="flex flex-col gap-2 mt-2 w-full">
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-blue-900 hover:bg-blue-800 text-white py-2 rounded"
                  >
                    🛒 Add to Cart
                  </button>
                  <Link to={`/products/${product.id}`}>
                    <button className="bg-black text-white py-2 rounded w-full hover:bg-gray-800">View</button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center w-full text-gray-500">No items found!</p>
          )}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredProducts.length && (
          <div className="text-center mt-6">
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded shadow"
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
