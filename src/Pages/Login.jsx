import React, { useState } from "react";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }

    // Simulate login success (replace with actual API call)
    if (email === "user@example.com" && password === "password123") {
      setError(""); // clear error state
      // Store login state in localStorage (optional, but common)
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", email);
      // Call parent handler
      if (onLogin) {
        onLogin({ email });
      }
      // Optionally: redirect to home/dashboard
      // window.location.href = "/";
    } else {
      setError("Invalid email or password.");
      // Optionally clear password field
      setPassword("");
    }
  };

  return (
    <div className="login-bg">
      <form className="login-container" onSubmit={handleSubmit} autoComplete="off">
        <div className="login-title">Login to Your Account</div>
        {error && <div className="login-error">{error}</div>}
        <label className="login-label" htmlFor="email">Email</label>
        <input
          className="login-input"
          id="email"
          type="email"
          placeholder="you@example.com"
          value={email}
          autoComplete="username"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="login-label" htmlFor="password">Password</label>
        <input
          className="login-input"
          id="password"
          type="password"
          placeholder="Enter password"
          value={password}
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;