import React from "react";
import { useParams, Link } from "react-router-dom";

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

const ProductDetail = () => {
  const { id } = useParams();
  const product = sampleProducts.find(p => p.id === Number(id));

  if (!product) return (
    <div style={{ padding: 40, textAlign: "center" }}>
      <h2>Product not found</h2>
      <Link to="/">Back to Home</Link>
    </div>
  );

  return (
    <div className="product-detail-container">
      <div className="product-detail-card">
        <img src={product.image} alt={product.name} className="product-detail-image" />
        <div className="product-detail-info">
          <h2>{product.name}</h2>
          <div className="product-detail-price">₹{product.price.toLocaleString()}</div>
          <p className="product-detail-desc">{product.description}</p>
          <Link to="/" className="back-btn">Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;