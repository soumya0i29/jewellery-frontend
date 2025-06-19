import React, { useState } from "react";
import "./Signup.css";

const getPasswordStrength = (password) => {
  let score = 0;
  if (password.length >= 6) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[\W_]/.test(password)) score++;
  if (password.length >= 10) score++;

  if (score <= 1) return { label: "Weak", className: "password-strength-weak", width: "33%" };
  if (score <= 3) return { label: "Medium", className: "password-strength-medium", width: "66%" };
  return { label: "Strong", className: "password-strength-strong", width: "100%" };
};

const socialProviders = [
  {
    name: "Google",
    url: "https://accounts.google.com/signin",
    className: "social-btn google",
    icon: (
      <svg width="20" height="20" viewBox="0 0 48 48">
        <g>
          <path fill="#EA4335" d="M24 9.5c3.54 0 6.7 1.22 9.16 3.22l6.84-6.84C35.51 1.89 30.13 0 24 0 14.84 0 6.85 5.34 2.63 13.09l8.02 6.23C12.29 12.23 17.63 9.5 24 9.5z"/>
          <path fill="#34A853" d="M46.1 24.55c0-1.58-.14-3.12-.4-4.59H24v9.06h12.43c-.54 2.93-2.16 5.42-4.63 7.13l7.06 5.5C43.91 37.23 46.1 31.44 46.1 24.55z"/>
          <path fill="#4A90E2" d="M11.83 27.32a14.67 14.67 0 0 1 0-6.63L3.81 14.47A24.11 24.11 0 0 0 0 24c0 3.81.91 7.4 2.54 10.53l9.29-7.21z"/>
          <path fill="#FBBC05" d="M24 48c6.13 0 11.3-2.04 15.07-5.52l-7.06-5.5c-2.01 1.34-4.59 2.14-8.01 2.14-6.37 0-11.71-4.73-13.62-11.06l-9.29 7.21C6.85 42.66 14.84 48 24 48z"/>
        </g>
      </svg>
    ),
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/login",
    className: "social-btn facebook",
    icon: (
      <svg width="19" height="19" viewBox="0 0 48 48">
        <path fill="#1877F3" d="M24 4C12.95 4 4 12.95 4 24c0 10.24 7.69 18.64 17.62 19.88V32.44h-5.3v-5.07h5.3v-3.86c0-5.21 3.09-8.07 7.85-8.07 2.28 0 4.66.41 4.66.41v5.13h-2.62c-2.58 0-3.39 1.6-3.39 3.24v3.15h5.75l-.92 5.07h-4.83v11.44C40.31 42.64 48 34.24 48 24c0-11.05-8.95-20-20-20z"/>
        <path fill="#FFF" d="M31.07 37.51v-5.07h4.83l.92-5.07h-5.75v-3.15c0-1.64.81-3.24 3.39-3.24h2.62v-5.13s-2.38-.41-4.66-.41c-4.76 0-7.85 2.86-7.85 8.07v3.86h-5.3v5.07h5.3v11.44a20.03 20.03 0 0 0 3.92.39c1.33 0 2.63-.14 3.92-.39z"/>
      </svg>
    ),
  },
  {
    name: "GitHub",
    url: "https://github.com/login",
    className: "social-btn github",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.69-3.87-1.39-3.87-1.39-.53-1.34-1.31-1.7-1.31-1.7-1.07-.73.08-.71.08-.71 1.18.08 1.8 1.21 1.8 1.21 1.05 1.79 2.75 1.27 3.42.97.11-.76.41-1.27.74-1.56-2.55-.29-5.23-1.27-5.23-5.66 0-1.25.44-2.28 1.16-3.08-.12-.28-.5-1.42.11-2.97 0 0 .96-.31 3.13 1.18A10.9 10.9 0 0 1 12 6.85c.97.004 1.94.13 2.85.38 2.17-1.49 3.13-1.18 3.13-1.18.61 1.55.23 2.69.11 2.97.72.8 1.16 1.83 1.16 3.08 0 4.4-2.69 5.37-5.24 5.66.42.36.79 1.08.79 2.18v3.24c0 .31.21.67.79.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/>
      </svg>
    ),
  },
];

const Signup = ({ onSignup }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [error, setError] = useState("");

  const strength = getPasswordStrength(password);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!email || !name || !password || !confPassword) {
      setError("Please fill all fields.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (password !== confPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Simulate signup success (replace with API as needed)
    onSignup({ email, name });
  };

  return (
    <div className="signup-bg">
      <form className="signup-container" onSubmit={handleSubmit}>
        <div className="signup-title">Create Your Account</div>
        <div className="social-auth-container">
          {socialProviders.map((provider) => (
            <a
              key={provider.name}
              href={provider.url}
              className={provider.className}
              target="_blank"
              rel="noopener noreferrer"
              style={{textDecoration: "none"}}
            >
              {provider.icon} Sign up with {provider.name}
            </a>
          ))}
        </div>
        <div className="or-divider">OR</div>
        {error && <div className="signup-error">{error}</div>}

        <label className="signup-label" htmlFor="name">Name</label>
        <input
          className="signup-input"
          id="name"
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <label className="signup-label" htmlFor="email">Email</label>
        <input
          className="signup-input"
          id="email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <label className="signup-label" htmlFor="password">Password</label>
        <input
          className="signup-input"
          id="password"
          type="password"
          placeholder="Create password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {password && (
          <>
            <div className="password-strength-label">Password strength: {strength.label}</div>
            <div className="password-strength">
              <div
                className={`password-strength-bar ${strength.className}`}
                style={{ width: strength.width }}
              />
            </div>
          </>
        )}

        <label className="signup-label" htmlFor="confPassword">Confirm Password</label>
        <input
          className="signup-input"
          id="confPassword"
          type="password"
          placeholder="Repeat password"
          value={confPassword}
          onChange={e => setConfPassword(e.target.value)}
        />

        <button className="signup-btn" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;