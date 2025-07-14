import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaSignOutAlt, FaCrown } from 'react-icons/fa';

export default function Navbar() {

    

  return (
    <nav className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Left: Brand / Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-orange-600">MyApp</Link>
          </div>

          {/* Center: Navigation Links */}
          <div className="hidden md:flex gap-6">
            <Link to="/" className="text-gray-700 hover:text-orange-600 font-medium">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-orange-600 font-medium">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-orange-600 font-medium">Contact</Link>
            <Link to="/prime" className="text-gray-700 hover:text-orange-600 font-medium flex items-center gap-1">
              <FaCrown className="text-yellow-500" /> Prime
            </Link>
          </div>

          {/* Right: Login/Logout */}
          <div className="flex items-center gap-4">
            <Link to="/login" className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-orange-600">
              <FaUser /> Login
            </Link>
            <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-red-600">
              <FaSignOutAlt /> Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
