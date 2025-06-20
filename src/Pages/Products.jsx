import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import products from "./products"; // your product array

const Products = () => {
  const { addToCart } = useCart();
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("wishlist");
    if (stored) setWishlist(JSON.parse(stored));
  }, []);

  const addToWishlist = (product) => {
    const exists = wishlist.find((item) => item.id === product.id);
    if (exists) {
      alert("Already in Wishlist!");
      return;
    }
    const updated = [...wishlist, product];
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
    alert("Added to Wishlist!");
  };

  return (
    <div className="min-h-screen bg-[#fefaf6] p-4">
      <h2 className="text-xl font-semibold text-center mb-6">
        Total Products: {products.length}
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow hover:shadow-lg p-4 flex flex-col items-center text-center transition duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-[160px] h-[160px] object-contain rounded-lg mb-3"
            />

            <h3 className="font-semibold text-base text-gray-800">
              {product.name}
            </h3>
            <p className="text-red-600 font-bold my-1">₹{product.price}</p>

            {/* Buttons */}
            <div className="flex flex-col gap-2 mt-2 w-full">
              <button
                onClick={() => addToCart(product)}
                className="bg-blue-900 hover:bg-blue-800 text-white py-2 rounded flex items-center justify-center gap-2"
              >
                🛒 Add to Cart
              </button>

              <button
                onClick={() => addToWishlist(product)}
                className="border border-orange-400 text-orange-500 py-2 rounded flex items-center justify-center gap-2"
              >
                ❤️ Wishlist
              </button>

              <Link to={`/products/${product.id}`}>
                <button className="bg-black text-white py-2 rounded w-full hover:bg-gray-800">
                  View
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
