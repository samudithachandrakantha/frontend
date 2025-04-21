import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CreditCardIcon, TruckIcon, UserIcon, MapPinIcon } from 'lucide-react';
const CheckoutPage = () => {
  const [activeStep, setActiveStep] = useState(1);
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
  // Calculate cart totals
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 5.99;
  const tax = subtotal * 0.08; // 8% tax rate
  const total = subtotal + shipping + tax;
  return <div className="w-full bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Checkout</h1>
        {/* Checkout Steps */}
        <div className="mb-8">
          <div className="flex items-center">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${activeStep >= 1 ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
              <UserIcon size={20} />
            </div>
            <div className={`flex-1 h-1 mx-2 ${activeStep >= 2 ? 'bg-green-600' : 'bg-gray-200'}`}></div>
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${activeStep >= 2 ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
              <TruckIcon size={20} />
            </div>
            <div className={`flex-1 h-1 mx-2 ${activeStep >= 3 ? 'bg-green-600' : 'bg-gray-200'}`}></div>
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${activeStep >= 3 ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
              <CreditCardIcon size={20} />
            </div>
          </div>
          <div className="flex justify-between mt-2 px-2">
            <span className={`text-sm font-medium ${activeStep >= 1 ? 'text-green-600' : 'text-gray-500'}`}>
              Contact
            </span>
            <span className={`text-sm font-medium ${activeStep >= 2 ? 'text-green-600' : 'text-gray-500'}`}>
              Shipping
            </span>
            <span className={`text-sm font-medium ${activeStep >= 3 ? 'text-green-600' : 'text-gray-500'}`}>
              Payment
            </span>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {/* Step 1: Contact Information */}
              {activeStep === 1 && <div>
                  <h2 className="text-xl font-semibold mb-4">
                    Contact Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input type="text" id="firstName" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input type="text" id="lastName" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input type="email" id="email" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone
                      </label>
                      <input type="tel" id="phone" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500" />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-medium transition" onClick={() => setActiveStep(2)}>
                      Continue to Shipping
                    </button>
                  </div>
                </div>}
              {/* Step 2: Shipping Information */}
              {activeStep === 2 && <div>
                  <h2 className="text-xl font-semibold mb-4">
                    Shipping Information
                  </h2>
                  <div className="space-y-4 mb-6">
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                        Address
                      </label>
                      <input type="text" id="address" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                          City
                        </label>
                        <input type="text" id="city" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500" />
                      </div>
                      <div>
                        <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                          State
                        </label>
                        <select id="state" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500">
                          <option value="">Select State</option>
                          <option value="CA">California</option>
                          <option value="NY">New York</option>
                          <option value="TX">Texas</option>
                          {/* More states */}
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                          ZIP Code
                        </label>
                        <input type="text" id="zipCode" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500" />
                      </div>
                      <div>
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                          Country
                        </label>
                        <select id="country" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500">
                          <option value="US">United States</option>
                          <option value="CA">Canada</option>
                          <option value="UK">United Kingdom</option>
                          {/* More countries */}
                        </select>
                      </div>
                    </div>
                  </div>
                  <h3 className="font-semibold mb-3">Delivery Options</h3>
                  <div className="space-y-3 mb-6">
                    <div className="border border-gray-300 rounded-md p-3 flex items-start">
                      <input type="radio" id="standardShipping" name="shippingMethod" className="mt-1" defaultChecked />
                      <label htmlFor="standardShipping" className="ml-3 flex-1">
                        <div className="font-medium">Standard Shipping</div>
                        <div className="text-sm text-gray-600">
                          Delivery in 3-5 business days
                        </div>
                      </label>
                      <div className="font-medium">$5.99</div>
                    </div>
                    <div className="border border-gray-300 rounded-md p-3 flex items-start">
                      <input type="radio" id="expressShipping" name="shippingMethod" className="mt-1" />
                      <label htmlFor="expressShipping" className="ml-3 flex-1">
                        <div className="font-medium">Express Shipping</div>
                        <div className="text-sm text-gray-600">
                          Delivery in 1-2 business days
                        </div>
                      </label>
                      <div className="font-medium">$12.99</div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <button className="border border-gray-300 hover:bg-gray-100 text-gray-700 px-6 py-2 rounded-md font-medium transition" onClick={() => setActiveStep(1)}>
                      Back
                    </button>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-medium transition" onClick={() => setActiveStep(3)}>
                      Continue to Payment
                    </button>
                  </div>
                </div>}
              {/* Step 3: Payment Information */}
              {activeStep === 3 && <div>
                  <h2 className="text-xl font-semibold mb-4">
                    Payment Information
                  </h2>
                  <h3 className="font-semibold mb-3">Payment Method</h3>
                  <div className="space-y-3 mb-6">
                    <div className="border border-gray-300 rounded-md p-3 flex items-start">
                      <input type="radio" id="creditCard" name="paymentMethod" className="mt-1" defaultChecked />
                      <label htmlFor="creditCard" className="ml-3">
                        <div className="font-medium">Credit Card</div>
                        <div className="text-sm text-gray-600">
                          Visa, Mastercard, American Express
                        </div>
                      </label>
                    </div>
                    <div className="border border-gray-300 rounded-md p-3 flex items-start">
                      <input type="radio" id="paypal" name="paymentMethod" className="mt-1" />
                      <label htmlFor="paypal" className="ml-3">
                        <div className="font-medium">PayPal</div>
                        <div className="text-sm text-gray-600">
                          Pay with your PayPal account
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="space-y-4 mb-6">
                    <div>
                      <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
                        Name on Card
                      </label>
                      <input type="text" id="cardName" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500" />
                    </div>
                    <div>
                      <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                        Card Number
                      </label>
                      <input type="text" id="cardNumber" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500" placeholder="**** **** **** ****" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">
                          Expiry Date
                        </label>
                        <input type="text" id="expiryDate" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500" placeholder="MM/YY" />
                      </div>
                      <div>
                        <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                          CVV
                        </label>
                        <input type="text" id="cvv" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500" placeholder="***" />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <button className="border border-gray-300 hover:bg-gray-100 text-gray-700 px-6 py-2 rounded-md font-medium transition" onClick={() => setActiveStep(2)}>
                      Back
                    </button>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-medium transition">
                      Place Order
                    </button>
                  </div>
                </div>}
            </div>
          </div>
          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="font-semibold text-lg mb-4">Order Summary</h2>
              <div className="mb-4">
                {cartItems.map(item => <div key={item.id} className="flex py-3 border-b border-gray-100">
                    <div className="h-16 w-16 flex-shrink-0 rounded-md overflow-hidden">
                      <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                    </div>
                    <div className="ml-4 flex-1">
                      <p className="font-medium text-sm">{item.name}</p>
                      <p className="text-sm text-gray-600">
                        Qty: {item.quantity}
                      </p>
                      <p className="font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>)}
              </div>
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
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <MapPinIcon size={18} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Delivery Address</h3>
                    <p className="text-sm text-gray-600">123 Main St, Apt 4B</p>
                    <p className="text-sm text-gray-600">New York, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <TruckIcon size={18} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Shipping Method</h3>
                    <p className="text-sm text-gray-600">
                      Standard Shipping (3-5 business days)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 bg-yellow-50 p-4 rounded-lg border border-yellow-100">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-800">Order Note</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    All products are harvested or prepared fresh. We'll contact
                    you if any items become unavailable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default CheckoutPage;