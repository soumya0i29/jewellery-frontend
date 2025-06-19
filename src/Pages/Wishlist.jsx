import React, { useEffect, useState } from "react";
import "./Wishlist.css";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    setWishlistItems(JSON.parse(localStorage.getItem("wishlist")) || []);
  }, []);

  const removeItem = (id) => {
    const filtered = wishlistItems.filter((item) => item.id !== id);
    setWishlistItems(filtered);
    localStorage.setItem("wishlist", JSON.stringify(filtered));
  };

  return (
    <div className="wishlist-container">
      <h2>Your Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <div className="wishlist-empty">
          <p>Your wishlist is empty.</p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/4072/4072301.png"
            alt="Empty Wishlist"
            style={{ width: "120px", margin: "28px auto 0", display: "block", opacity: 0.65 }}
          />
        </div>
      ) : (
        <div className="wishlist-list">
          {wishlistItems.map(({ id, name, price, image }) => (
            <div key={id} className="wishlist-item">
              <img src={image} alt={name} />
              <div className="item-details">
                <h3>{name}</h3>
                <p>Price: ₹{price}</p>
                <button className="remove-btn" onClick={() => removeItem(id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;