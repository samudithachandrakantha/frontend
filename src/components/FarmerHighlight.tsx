import React from 'react';
import { Link } from 'react-router-dom';
const FarmerHighlight = () => {
  return <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Meet Our Farmers</h2>
          <p className="text-gray-600 mt-2">
            The passionate people behind your food
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-green-50 rounded-lg overflow-hidden shadow-md">
            <div className="h-64 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1622030411594-c360fc399ba7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="Urban farmer" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                Maria Rodriguez
              </h3>
              <p className="text-green-600 font-medium">Green Valley Farm</p>
              <p className="text-gray-600 mt-3">
                Growing organic vegetables in the heart of the city for over 10
                years. Specializes in heirloom tomatoes and leafy greens.
              </p>
              <Link to="/products" className="inline-block mt-4 text-green-600 hover:text-green-700 font-medium">
                View Products →
              </Link>
            </div>
          </div>
          <div className="bg-green-50 rounded-lg overflow-hidden shadow-md">
            <div className="h-64 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1620662736427-b8a198f52a4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="Urban farmer" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                James Wilson
              </h3>
              <p className="text-green-600 font-medium">Urban Bakery</p>
              <p className="text-gray-600 mt-3">
                Artisanal baker creating sourdough breads and pastries using
                traditional methods and locally sourced ingredients.
              </p>
              <Link to="/products" className="inline-block mt-4 text-green-600 hover:text-green-700 font-medium">
                View Products →
              </Link>
            </div>
          </div>
          <div className="bg-green-50 rounded-lg overflow-hidden shadow-md">
            <div className="h-64 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1536657464919-892534f79d6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="Urban farmer" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                Sarah Chen
              </h3>
              <p className="text-green-600 font-medium">Happy Hen Farm</p>
              <p className="text-gray-600 mt-3">
                Raising free-range chickens and producing organic eggs and dairy
                products with a focus on animal welfare and sustainability.
              </p>
              <Link to="/products" className="inline-block mt-4 text-green-600 hover:text-green-700 font-medium">
                View Products →
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center mt-10">
          <Link to="/products" className="bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-lg font-medium transition">
            Meet All Our Farmers
          </Link>
        </div>
      </div>
    </section>;
};
export default FarmerHighlight;