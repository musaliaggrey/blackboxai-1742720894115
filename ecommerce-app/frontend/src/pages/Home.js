import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

function Home() {
  // Sample product data (will be fetched from API later)
  const [products] = useState([
    {
      id: 1,
      name: "4K Smart TV",
      price: 699.99,
      image: "https://images.pexels.com/photos/6976094/pexels-photo-6976094.jpeg",
      category: "Electronics",
      rating: 4.5,
      reviews: 128
    },
    {
      id: 2,
      name: "Smart Coffee Maker",
      price: 129.99,
      image: "https://images.pexels.com/photos/3445161/pexels-photo-3445161.jpeg",
      category: "Kitchen",
      rating: 4.3,
      reviews: 95
    },
    {
      id: 3,
      name: "Noise-Canceling Headphones",
      price: 199.99,
      image: "https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg",
      category: "Electronics",
      rating: 4.7,
      reviews: 256
    },
    {
      id: 4,
      name: "Smart Air Purifier",
      price: 249.99,
      image: "https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg",
      category: "Smart Devices",
      rating: 4.4,
      reviews: 89
    },
    {
      id: 5,
      name: "Fitness Smart Watch",
      price: 299.99,
      image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg",
      category: "Smart Devices",
      rating: 4.6,
      reviews: 312
    },
    {
      id: 6,
      name: "Professional Blender",
      price: 159.99,
      image: "https://images.pexels.com/photos/3735208/pexels-photo-3735208.jpeg",
      category: "Kitchen",
      rating: 4.2,
      reviews: 167
    },
    {
      id: 7,
      name: "Robot Vacuum Cleaner",
      price: 399.99,
      image: "https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg",
      category: "Smart Devices",
      rating: 4.5,
      reviews: 203
    },
    {
      id: 8,
      name: "Smart Refrigerator",
      price: 1299.99,
      image: "https://images.pexels.com/photos/5825366/pexels-photo-5825366.jpeg",
      category: "Home Appliances",
      rating: 4.8,
      reviews: 156
    },
    {
      id: 9,
      name: "Wireless Security Camera",
      price: 79.99,
      image: "https://images.pexels.com/photos/3205735/pexels-photo-3205735.jpeg",
      category: "Smart Devices",
      rating: 4.3,
      reviews: 178
    }
  ]);

  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Electronics', 'Smart Devices', 'Kitchen', 'Home Appliances'];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16 px-4 mb-8 rounded-lg">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to TechHome</h1>
          <p className="text-xl mb-8">Discover amazing electronics and home products at great prices!</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300">
              Shop Now
            </button>
            <button className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex justify-center mb-8 space-x-4">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg font-semibold transition duration-300 ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Newsletter Section */}
      <div className="mt-16 bg-gray-100 rounded-lg p-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-6">Stay updated with our latest products and deals!</p>
          <div className="flex space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="btn-primary">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;