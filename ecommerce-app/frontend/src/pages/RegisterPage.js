import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
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
    // Registration functionality will be implemented later
    console.log('Registration form submitted:', formData);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Create an Account</h1>
          <p className="text-gray-600">Join us to start shopping your favorite items</p>
        </div>

        {/* Social Registration Buttons */}
        <div className="space-y-3 mb-6">
          <button className="w-full flex items-center justify-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50 transition duration-300">
            <i className="fab fa-google text-red-500"></i>
            <span>Sign up with Google</span>
          </button>
          <button className="w-full flex items-center justify-center space-x-2 bg-[#1877F2] text-white rounded-lg px-4 py-2 hover:bg-[#1865D3] transition duration-300">
            <i className="fab fa-facebook-f"></i>
            <span>Sign up with Facebook</span>
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center mb-6">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-4 text-gray-500 text-sm">Or</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="input-field"
                placeholder="John"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="input-field"
                placeholder="Doe"
                required
              />
            </div>
          </div>

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
                placeholder="john.doe@example.com"
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
                placeholder="Create a strong password"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <i className="fas fa-lock absolute left-3 top-3 text-gray-400"></i>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full pl-10 input-field"
                placeholder="Confirm your password"
                required
              />
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              id="agreeToTerms"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              required
            />
            <label htmlFor="agreeToTerms" className="text-gray-600 text-sm">
              I agree to the{' '}
              <Link to="/terms" className="text-blue-600 hover:text-blue-700">Terms of Service</Link>
              {' '}and{' '}
              <Link to="/privacy" className="text-blue-600 hover:text-blue-700">Privacy Policy</Link>
            </label>
          </div>

          <button
            type="submit"
            className="w-full btn-primary py-3 flex items-center justify-center"
          >
            <i className="fas fa-user-plus mr-2"></i>
            Create Account
          </button>
        </form>

        {/* Sign In Link */}
        <p className="text-center mt-6 text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:text-blue-700 font-medium">
            Sign in
          </Link>
        </p>

        {/* Security Notice */}
        <div className="mt-6 text-center text-gray-500 text-sm">
          <div className="flex justify-center items-center space-x-1">
            <i className="fas fa-shield-alt"></i>
            <span>Your data is protected with industry-standard encryption</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;