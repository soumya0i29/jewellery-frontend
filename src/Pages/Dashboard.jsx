import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [ordersCount, setOrdersCount] = useState(0);
  const [profileViews, setProfileViews] = useState(0);
  const [recent, setRecent] = useState([]);

  const loadCounts = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const wishlist = JSON.parse(localStorage.getItem("wishlistItems")) || []; // ✅ fixed key
    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    // 🛒 Sum cart items by qty (default to 1)
    setCartCount(cart.reduce((acc, item) => acc + (item.qty || 1), 0));
    setWishlistCount(wishlist.length);
    setOrdersCount(orders.length);

    const views = parseInt(localStorage.getItem("profileViews") || "0", 10);
    setProfileViews(views);

    const recentActivity = JSON.parse(localStorage.getItem("recentActivity")) || [];
    setRecent(recentActivity.slice(0, 7));
  };

  useEffect(() => {
    loadCounts();

    const syncCounts = () => loadCounts();

    window.addEventListener("focus", syncCounts);
    window.addEventListener("storage", syncCounts); // optional

    return () => {
      window.removeEventListener("focus", syncCounts);
      window.removeEventListener("storage", syncCounts);
    };
  }, []);

  const timeAgo = (ts) => {
    const diff = Math.floor((Date.now() - ts) / 1000);
    if (diff < 60) return `${diff} sec ago`;
    if (diff < 3600) return `${Math.floor(diff / 60)} min ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} hr ago`;
    return new Date(ts).toLocaleDateString();
  };

  const stats = [
    {
      title: "Orders",
      value: ordersCount,
      icon: "💍",
      color: "#e5b38b",
      link: "/orders",
    },
    {
      title: "Wishlist",
      value: wishlistCount,
      icon: "💖",
      color: "#ff7eb3",
      link: "/wishlist",
    },
    {
      title: "Cart Items",
      value: cartCount,
      icon: "🛒",
      color: "#87c0cd",
      link: "/cart",
    },
    {
      title: "Profile Views",
      value: profileViews,
      icon: "👁️",
      color: "#f9d89c",
      link: "/profile",
    },
  ];

  return (
    <div className="dashboard-bg-jewel">
      <div className="dashboard-container-jewel">
        <h2 className="dashboard-title-jewel">Welcome Back, Soumya! ✨</h2>

        <div className="dashboard-stats-jewel">
          {stats.map((stat) => (
            <Link
              to={stat.link}
              className="dashboard-stat-link"
              key={stat.title}
              style={{ textDecoration: "none" }}
            >
              <div
                className="dashboard-stat-card-jewel"
                style={{ "--card-shadow": stat.color }}
              >
                <span
                  className="dashboard-stat-icon-jewel"
                  style={{ background: stat.color + "22" }}
                >
                  {stat.icon}
                </span>
                <div className="dashboard-stat-info-jewel">
                  <div className="dashboard-stat-value-jewel">{stat.value}</div>
                  <div className="dashboard-stat-label-jewel">{stat.title}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="dashboard-view-profile-btn" style={{ margin: "2rem 0", textAlign: "center" }}>
          <Link to="/profile">
            <button className="dashboard-profile-btn-jewel">View Profile</button>
          </Link>
        </div>

        <div className="dashboard-activity-jewel">
          <h3>Recent Activity</h3>
          <ul>
            {recent.length === 0 ? (
              <li>
                <span className="activity-dot-jewel" />
                <span className="activity-action-jewel">No recent activity yet.</span>
              </li>
            ) : (
              recent.map((item, idx) => (
                <li key={idx}>
                  <span className="activity-dot-jewel" />
                  <span className="activity-action-jewel">{item.action}</span>
                  <span className="activity-time-jewel">{timeAgo(item.time)}</span>
                </li>
              ))
            )}
          </ul>
        </div>

        <div className="dashboard-jewel-art">
          <img
            src="https://pngimg.com/d/diamond_PNG6686.png"
            alt="Diamond"
            className="dashboard-diamond"
          />
          <img
            src="https://pngimg.com/d/necklace_PNG43.png"
            alt="Necklace"
            className="dashboard-necklace"
          />
          <img
            src="https://pngimg.com/d/ring_PNG77.png"
            alt="Ring"
            className="dashboard-ring"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
