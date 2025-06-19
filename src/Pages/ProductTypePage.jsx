import React from "react";
import { useParams, Link } from "react-router-dom";
import Products from "./products";

const ProductTypePage = () => {
  const { type } = useParams();
  const decodedType = decodeURIComponent(type);

  // Filter products by their name/type
  const filteredProducts = Products.filter(
    (product) => product.name === decodedType
  );

  return (
    <div>
      <h2>{decodedType}</h2>
      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={product.image}
                alt={product.name}
                width={120}
                height={120}
                style={{ objectFit: "cover" }}
              />
              <h3>{product.name}</h3>
              <p>₹{product.price}</p>
              <Link to={`/products/id/${product.id}`}>
                <button>View Details</button>
              </Link>
            </div>
          ))
        ) : (
          <p>No products found for this type.</p>
        )}
      </div>
    </div>
  );
};

export default ProductTypePage;