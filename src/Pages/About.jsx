import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <img src="/images/about-hero.jpg" alt="Jewellery Display" />
        <div className="overlay-text">
          <h1>About Us</h1>
          <p>Where Elegance Meets Craftsmanship</p>
        </div>
      </div>

      <div className="about-content">
        <h2>Our Story</h2>
        <p>
          Bellagio is not just a jewellery brand; it’s a celebration of timeless beauty.
          Every piece we craft tells a story of tradition, elegance, and trust. 
          Our journey started with a passion to create meaningful ornaments that resonate with love and memories.
        </p>

        <div className="mission-section">
          <img src="/images/mission.jpg" alt="Our Mission" />
          <div className="mission-text">
            <h3>Our Mission</h3>
            <p>
              To blend heritage with modern trends, delivering excellence in jewellery that
              adds sparkle to every occasion. Quality, trust, and customer delight are at the heart of everything we do.
            </p>
          </div>
        </div>

        <div className="why-choose-us">
          <h3>Why Choose Bellagio?</h3>
          <ul>
            <li>✔️ 100% Certified Jewellery</li>
            <li>✔️ Affordable Luxury Designs</li>
            <li>✔️ Handcrafted with Love</li>
            <li>✔️ Free & Fast Shipping</li>
            <li>✔️ Hassle-Free Returns</li>
            <li>✔️ Trusted by Thousands</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
