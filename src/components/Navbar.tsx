import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon, UserIcon, MenuIcon, SearchIcon, XIcon } from 'lucide-react';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <nav className="bg-green-600 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold">
              Urban<span className="text-yellow-300">Food</span>
            </span>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-yellow-300 transition">
              Home
            </Link>
            <Link to="/products" className="hover:text-yellow-300 transition">
              Products
            </Link>
            <Link to="/farmers" className="hover:text-yellow-300 transition">
              Farmers
            </Link>
            <Link to="/about" className="hover:text-yellow-300 transition">
              About
            </Link>
          </div>
          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <input type="text" placeholder="Search for products..." className="w-full py-1 px-3 pr-10 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500" />
              <SearchIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            </div>
          </div>
          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="hover:text-yellow-300 relative">
              <ShoppingCartIcon size={24} />
              <span className="absolute -top-2 -right-2 bg-yellow-300 text-green-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                3
              </span>
            </Link>
            <Link to="/profile" className="hover:text-yellow-300">
              <UserIcon size={24} />
            </Link>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && <div className="md:hidden mt-3 pb-3">
            <div className="flex items-center mb-3">
              <div className="relative w-full">
                <input type="text" placeholder="Search for products..." className="w-full py-1 px-3 pr-10 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500" />
                <SearchIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="hover:text-yellow-300 transition py-1">
                Home
              </Link>
              <Link to="/products" className="hover:text-yellow-300 transition py-1">
                Products
              </Link>
              <Link to="/farmers" className="hover:text-yellow-300 transition py-1">
                Farmers
              </Link>
              <Link to="/about" className="hover:text-yellow-300 transition py-1">
                About
              </Link>
              <div className="border-t border-green-500 my-2"></div>
              <Link to="/login" className="hover:text-yellow-300 transition py-1">
                Login
              </Link>
              <Link to="/signup" className="hover:text-yellow-300 transition py-1">
                Sign Up
              </Link>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navbar;