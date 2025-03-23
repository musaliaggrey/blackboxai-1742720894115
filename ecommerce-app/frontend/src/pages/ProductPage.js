import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductPage() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  // Sample product data (will be fetched from API later)
  const product = {
    id: parseInt(id),
    name: "4K Smart TV",
    price: 699.99,
    image: "https://images.pexels.com/photos/6976094/pexels-photo-6976094.jpeg",
    category: "Electronics",
    description: "Experience crystal-clear picture quality with this stunning 4K Smart TV. Features include HDR, built-in streaming apps, and voice control compatibility.",
    specs: [
      "55-inch 4K UHD Display",
      "HDR Technology",
      "Smart TV Features",
      "Voice Control Compatible",
      "4 HDMI Ports",
      "Built-in Wi-Fi"
    ],
    stock: 10
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0 && value <= product.stock) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    // Cart functionality will be implemented later
    console.log(`Added ${quantity} of ${product.name} to cart`);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />
          <span className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full">
            {product.category}
          </span>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-gray-600 text-lg">{product.description}</p>
          
          {/* Price and Stock */}
          <div className="space-y-2">
            <div className="text-3xl font-bold text-blue-600">${product.price}</div>
            <div className="text-green-600">
              <i className="fas fa-check-circle"></i>
              <span className="ml-2">In Stock ({product.stock} available)</span>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center space-x-4">
            <label className="text-gray-700 font-medium">Quantity:</label>
            <input
              type="number"
              min="1"
              max={product.stock}
              value={quantity}
              onChange={handleQuantityChange}
              className="w-20 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full btn-primary py-3 flex items-center justify-center space-x-2"
          >
            <i className="fas fa-shopping-cart"></i>
            <span>Add to Cart</span>
          </button>

          {/* Specifications */}
          <div className="mt-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Specifications</h2>
            <ul className="space-y-2">
              {product.specs.map((spec, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <i className="fas fa-circle text-xs text-blue-600 mr-2"></i>
                  {spec}
                </li>
              ))}
            </ul>
          </div>

          {/* Shipping Info */}
          <div className="border-t pt-6 mt-6">
            <div className="flex items-center space-x-4 text-gray-600">
              <div className="flex items-center">
                <i className="fas fa-truck text-blue-600 mr-2"></i>
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-undo text-blue-600 mr-2"></i>
                <span>30-Day Returns</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-shield-alt text-blue-600 mr-2"></i>
                <span>2-Year Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;