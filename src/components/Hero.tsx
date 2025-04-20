import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
const Hero = () => {
  return <div className="relative bg-green-50">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Fresh Food From{' '}
              <span className="text-green-600">Local Farmers</span> To Your
              Table
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              UrbanFood connects you directly with local urban farmers and
              artisans. Enjoy fresh, sustainable produce while supporting your
              local community.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/products" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition">
                Shop Now <ArrowRightIcon size={18} />
              </Link>
              <Link to="/" className="bg-white border border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-lg font-medium transition">
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3">
              <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt="Fresh vegetables and fruits" className="rounded-lg shadow-xl object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">100% Organic</p>
                  <p className="text-sm text-gray-600">Certified Products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 mb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center text-center">
            <div className="bg-green-100 p-3 rounded-full mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div>
            <h3 className="font-semibold">Fresh Products</h3>
            <p className="text-sm text-gray-600 mt-1">
              Harvested within 24 hours
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center text-center">
            <div className="bg-green-100 p-3 rounded-full mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="font-semibold">Local Economy</h3>
            <p className="text-sm text-gray-600 mt-1">
              Supporting local farmers
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center text-center">
            <div className="bg-green-100 p-3 rounded-full mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <h3 className="font-semibold">Eco-Friendly</h3>
            <p className="text-sm text-gray-600 mt-1">Sustainable packaging</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center text-center">
            <div className="bg-green-100 p-3 rounded-full mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold">Fast Delivery</h3>
            <p className="text-sm text-gray-600 mt-1">
              Same day in metro areas
            </p>
          </div>
        </div>
      </div>
    </div>;
};
export default Hero;