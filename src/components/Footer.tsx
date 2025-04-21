import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-green-800 text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              Urban<span className="text-yellow-300">Food</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Connecting urban farmers with local consumers for fresh,
              sustainable produce.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-yellow-300">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-white hover:text-yellow-300">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="text-white hover:text-yellow-300">
                <TwitterIcon size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-gray-300 hover:text-yellow-300">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-yellow-300">
                  Vegetables
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-yellow-300">
                  Fruits
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-yellow-300">
                  Dairy
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-yellow-300">
                  Baked Goods
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-yellow-300">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-yellow-300">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-yellow-300">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-yellow-300">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-yellow-300">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Join Our Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Stay updated with the latest products and deals!
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input type="email" placeholder="Your email address" className="px-4 py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500" />
              <button type="submit" className="bg-yellow-500 text-green-800 px-4 py-2 rounded-md hover:bg-yellow-400 transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-green-700 mt-8 pt-6 text-center text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} UrbanFood. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;