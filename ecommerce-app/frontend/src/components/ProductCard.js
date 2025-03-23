import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  const { id, name, price, image, category } = product;

  return (
    <div className="card overflow-hidden">
      <Link to={`/product/${id}`}>
        <div className="relative group">
          <img 
            src={image} 
            alt={name}
            className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
          />
          <span className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-full text-xs">
            {category}
          </span>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-blue-600">${price}</span>
            <button 
              className="btn-primary flex items-center space-x-1"
              onClick={(e) => {
                e.preventDefault();
                // Add to cart functionality will be implemented later
              }}
            >
              <i className="fas fa-shopping-cart"></i>
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;