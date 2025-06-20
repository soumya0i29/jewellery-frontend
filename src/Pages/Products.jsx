import React from "react";
import { Link } from "react-router-dom";
import products from "../Pages/products"; // your shared products array

const Products = () => {

  const addToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingIndex = existingCart.findIndex(item => item.id === product.id);

    if (existingIndex !== -1) {
      // Item already in cart → increase quantity
      existingCart[existingIndex].qty += 1;
    } else {
      // New item → push to cart
      existingCart.push({
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        qty: 1
      });
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));

    // ✅ This will update the Dashboard count immediately
    window.dispatchEvent(new Event("storage"));

    alert("✅ Added to cart successfully!");
  };

  return (
    <div className="max-w-6xl mx-auto py-6 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">✨ Our Jewellery Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow hover:shadow-lg">
            <img
              src={product.image}
              alt={product.name}
              className="h-48 w-full object-contain mb-2"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-red-600 font-bold mt-1">₹{product.price.toLocaleString()}</p>

            {/* View Button */}
            <Link to={`/products/${product.id}`}>
              <button className="mt-3 w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800">
                👁️ View
              </button>
            </Link>

            {/* Add to Cart Button */}
            <button
              onClick={() => addToCart(product)}
              className="mt-2 w-full bg-green-600 text-white py-2 rounded hover:bg-green-500"
            >
              🛒 Add to Cart
            </button>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
