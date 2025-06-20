import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const loadWishlist = () => {
    const stored = localStorage.getItem("wishlistItems");
    if (stored) {
      try {
        setWishlistItems(JSON.parse(stored));
      } catch {
        setWishlistItems([]);
      }
    }
  };

  useEffect(() => {
    loadWishlist();

    // Live sync if wishlist changes from other tabs/pages
    const handleStorageChange = () => loadWishlist();

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const removeFromWishlist = (id) => {
    const updated = wishlistItems.filter((item) => item.id !== id);
    setWishlistItems(updated);
    localStorage.setItem("wishlistItems", JSON.stringify(updated));
    window.dispatchEvent(new Event('storage')); // Update dashboard count
    alert("Item removed from wishlist!");
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">❤️ Your Wishlist</h2>

      {wishlistItems.length === 0 ? (
        <div className="text-center">
          <p>Your wishlist is empty.</p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/4072/4072301.png"
            alt="Empty Wishlist"
            className="w-24 mx-auto opacity-60 mt-4"
          />
          <Link to="/products">
            <button className="mt-4 px-5 py-2 bg-blue-700 text-white rounded">
              Browse Products
            </button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow p-4 rounded flex flex-col items-center text-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-28 h-28 object-contain"
              />
              <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
              <p className="text-red-600 font-bold">
                ₹{item.price.toLocaleString()}
              </p>
              <button
                className="mt-2 bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded"
                onClick={() => removeFromWishlist(item.id)}
              >
                ❌ Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
