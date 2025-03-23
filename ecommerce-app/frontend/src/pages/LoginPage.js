import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Login functionality will be implemented later
    console.log('Login form submitted:', formData);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome Back!</h1>
          <p className="text-gray-600">Sign in to your account to continue</p>
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-3 mb-6">
          <button className="w-full flex items-center justify-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50 transition duration-300">
            <i className="fab fa-google text-red-500"></i>
            <span>Continue with Google</span>
          </button>
          <button className="w-full flex items-center justify-center space-x-2 bg-[#1877F2] text-white rounded-lg px-4 py-2 hover:bg-[#1865D3] transition duration-300">
            <i className="fab fa-facebook-f"></i>
            <span>Continue with Facebook</span>
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center mb-6">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-4 text-gray-500 text-sm">Or</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <div className="relative">
              <i className="fas fa-envelope absolute left-3 top-3 text-gray-400"></i>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 input-field"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <div className="relative">
              <i className="fas fa-lock absolute left-3 top-3 text-gray-400"></i>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-10 input-field"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2 text-gray-600">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span>Remember me</span>
            </label>
            <Link to="/forgot-password" className="text-blue-600 hover:text-blue-700 text-sm">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full btn-primary py-3 flex items-center justify-center"
          >
            <i className="fas fa-sign-in-alt mr-2"></i>
            Sign In
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="text-center mt-6 text-gray-600">
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-600 hover:text-blue-700 font-medium">
            Sign up
          </Link>
        </p>

        {/* Security Notice */}
        <div className="mt-6 text-center text-gray-500 text-sm">
          <div className="flex justify-center items-center space-x-1">
            <i className="fas fa-shield-alt"></i>
            <span>Secure login with 256-bit encryption</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;