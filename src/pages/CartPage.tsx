import React from 'react';
import { Link } from 'react-router-dom';
import { TrashIcon, PlusIcon, MinusIcon, ArrowRightIcon } from 'lucide-react';
// Mock cart data - in a real app, this would come from a state management system
const cartItems = [{
  id: '1',
  name: 'Organic Heirloom Tomatoes',
  image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
  price: 4.99,
  unit: 'lb',
  quantity: 2,
  farmer: 'Green Valley Farm'
}, {
  id: '3',
  name: 'Artisanal Sourdough Bread',
  image: 'https://images.unsplash.com/photo-1586444248888-f140237e7d10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
  price: 6.5,
  unit: 'loaf',
  quantity: 1,
  farmer: 'Urban Bakery'
}, {
  id: '5',
  name: 'Fresh Farm Eggs',
  image: 'https://images.unsplash.com/photo-1598965402089-897ce52e8355?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
  price: 4.5,
  unit: 'dozen',
  quantity: 1,
  farmer: 'Happy Hen Farm'
}];
const CartPage = () => {
  // Calculate cart totals
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 5.99;
  const tax = subtotal * 0.08; // 8% tax rate
  const total = subtotal + shipping + tax;
  return <div className="w-full bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Cart</h1>
        {cartItems.length > 0 ? <div className="grid md:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-sm">
                <div className="p-6">
                  <div className="mb-4 pb-4 border-b border-gray-200">
                    <h2 className="font-semibold text-lg">
                      {cartItems.length} Items
                    </h2>
                  </div>
                  <div className="space-y-6">
                    {cartItems.map(item => <div key={item.id} className="flex items-center space-x-4">
                        <div className="h-20 w-20 flex-shrink-0 rounded-md overflow-hidden">
                          <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                        </div>
                        <div className="flex-1">
                          <Link to={`/products/${item.id}`} className="font-medium text-gray-800 hover:text-green-600">
                            {item.name}
                          </Link>
                          <p className="text-sm text-gray-600">
                            by {item.farmer}
                          </p>
                          <p className="text-sm text-gray-600">
                            ${item.price.toFixed(2)} / {item.unit}
                          </p>
                        </div>
                        <div className="flex items-center border border-gray-300 rounded-md">
                          <button className="px-3 py-1 text-gray-600 hover:bg-gray-100">
                            <MinusIcon size={14} />
                          </button>
                          <span className="px-3 py-1 w-8 text-center">
                            {item.quantity}
                          </span>
                          <button className="px-3 py-1 text-gray-600 hover:bg-gray-100">
                            <PlusIcon size={14} />
                          </button>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                        <button className="text-gray-400 hover:text-red-600">
                          <TrashIcon size={18} />
                        </button>
                      </div>)}
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-between items-center">
                <Link to="/products" className="text-green-600 hover:text-green-700 font-medium flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Continue Shopping
                </Link>
                <button className="text-gray-600 hover:text-red-600 font-medium flex items-center">
                  <TrashIcon size={16} className="mr-1" />
                  Clear Cart
                </button>
              </div>
            </div>
            {/* Order Summary */}
            <div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="font-semibold text-lg mb-4">Order Summary</h2>
                <div className="space-y-3 text-gray-600 mb-6">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-medium text-gray-800">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="font-medium text-gray-800">
                      ${shipping.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax (8%)</span>
                    <span className="font-medium text-gray-800">
                      ${tax.toFixed(2)}
                    </span>
                  </div>
                  <div className="border-t border-gray-200 pt-3 mt-3">
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <Link to="/checkout" className="bg-green-600 hover:bg-green-700 text-white w-full py-3 rounded-md font-medium flex items-center justify-center gap-2 transition">
                  Proceed to Checkout <ArrowRightIcon size={18} />
                </Link>
                <div className="mt-6 text-sm text-gray-600">
                  <p className="mb-2">We accept:</p>
                  <div className="flex space-x-2">
                    <div className="bg-gray-100 rounded p-1 w-12">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-full h-auto">
                        <path fill="#FF5F00" d="M492.4 220.8c0 54.6-36.4 100.1-91.9 125.1-16.3 7.2-33.8 11.1-51.5 11.1-66.5 0-120.3-37.7-120.3-84.1 0-46.4 53.8-84.1 120.3-84.1 17.7 0 35.2 3.9 51.5 11.1 55.5 25 91.9 70.5 91.9 125.1" />
                        <path fill="#EB001B" d="M492.4 220.8c0 54.6-36.4 100.1-91.9 125.1V96.7c55.5 24.9 91.9 70.4 91.9 124.1" />
                        <path fill="#F79E1B" d="M352.3 96.7v249.1c-16.3 7.2-33.8 11.1-51.5 11.1-66.5 0-120.3-37.7-120.3-84.1 0-46.4 53.8-84.1 120.3-84.1 17.7 0 35.2 3.9 51.5 11.1" />
                      </svg>
                    </div>
                    <div className="bg-gray-100 rounded p-1 w-12">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-full h-auto">
                        <path fill="#1434CB" d="M470.1 96.7c-4.2 0-8.4.3-12.5.9-17.3 2.6-31.3 10.5-42.8 24.9V98.4h-48.6v217.6h48.7v-113c0-23.5 12.2-35.3 32.5-35.3 18.7 0 26.5 12.1 26.5 35.3v113h48.7v-122c0-37.4-20.6-59.3-52.5-59.3zM265.5 139c-19.5 0-32.7 12.9-32.7 31 0 17.9 13.2 31 32.7 31s32.7-13.1 32.7-31c0-18.1-13.2-31-32.7-31zm24.4 26.2v150.8h-48.7V165.2h48.7z" />
                      </svg>
                    </div>
                    <div className="bg-gray-100 rounded p-1 w-12">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-full h-auto">
                        <path fill="#006FCF" d="M576 123.8v13.6c0 4.8-4.1 8.7-9.1 8.7h-17.2c-5 0-9.1-3.9-9.1-8.7v-13.6c0-4.8 4.1-8.7 9.1-8.7h17.2c5 0 9.1 3.9 9.1 8.7zm-31.6 33.3h30.3v129.4h-30.3v-12.6c-11 9.8-25.9 14.6-41 14.6-35.8 0-64.8-24.1-64.8-64.8 0-40.8 29-64.8 64.8-64.8 15.1 0 30 4.9 41 14.6v-12.6zm-30.1 65.2c0-21.1-16.8-34.7-37.9-34.7s-37.9 13.6-37.9 34.7 16.8 34.7 37.9 34.7 37.9-13.6 37.9-34.7zm-142.6-33.3c-30.5 0-50.3 21.7-50.3 50.5 0 28.9 19.8 50.5 50.3 50.5 30.5 0 50.3-21.6 50.3-50.5 0-28.8-19.8-50.5-50.3-50.5zm0 73.6c-13.6 0-22.6-9.8-22.6-23.1s9.1-23.1 22.6-23.1 22.6 9.8 22.6 23.1-9 23.1-22.6 23.1zm-91.9-73.6c-30.5 0-50.3 21.7-50.3 50.5 0 28.9 19.8 50.5 50.3 50.5 30.5 0 50.3-21.6 50.3-50.5 0-28.8-19.8-50.5-50.3-50.5zm0 73.6c-13.6 0-22.6-9.8-22.6-23.1s9.1-23.1 22.6-23.1 22.6 9.8 22.6 23.1-9 23.1-22.6 23.1zm-91.9-73.6c-30.5 0-50.3 21.7-50.3 50.5 0 28.9 19.8 50.5 50.3 50.5 30.5 0 50.3-21.6 50.3-50.5 0-28.8-19.8-50.5-50.3-50.5zm0 73.6c-13.6 0-22.6-9.8-22.6-23.1s9.1-23.1 22.6-23.1 22.6 9.8 22.6 23.1-9 23.1-22.6 23.1z" />
                      </svg>
                    </div>
                    <div className="bg-gray-100 rounded p-1 w-12">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-full h-auto">
                        <path fill="#3C8AF0" d="M488.1 136.7v94.7h-43.7V160c0-12.7-5.1-19.1-15.2-19.1-11.2 0-17.3 7.6-17.3 22.8v68.7h-43.8V96.7h43.8v19.1c6.1-12.2 17.3-21.8 35.7-21.8 25.5 0 40.5 15.7 40.5 42.7zm-167.2-23v169.7h-43.8V113.7h43.8zm-21.9-31c14.3 0 25.9 11.5 25.9 25.7 0 14.1-11.6 25.7-25.9 25.7-14.3 0-26-11.6-26-25.7 0-14.2 11.7-25.7 26-25.7zM151.9 113.7v169.7h-43.8V113.7h43.8zm-21.9-31c14.3 0 26 11.5 26 25.7 0 14.1-11.7 25.7-26 25.7-14.3 0-25.9-11.6-25.9-25.7 0-14.2 11.6-25.7 25.9-25.7zM48.7 283.4h43.8V113.7H48.7v169.7z" />
                        <path fill="#FFDD00" d="M48.7 82.7h43.8v31H48.7v-31z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        Free shipping on orders over $50
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Add $34.52 more to qualify
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> : <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Your cart is empty
            </h2>
            <p className="text-gray-600 mb-6">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Link to="/products" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium inline-block transition">
              Start Shopping
            </Link>
          </div>}
      </div>
    </div>;
};
export default CartPage;