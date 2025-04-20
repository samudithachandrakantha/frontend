import React from 'react';
import ProductCard from './ProductCard';
// Mock data - in a real app, this would come from an API
const featuredProducts = [{
  id: '1',
  name: 'Organic Heirloom Tomatoes',
  image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
  price: 4.99,
  unit: 'lb',
  rating: 4.8,
  farmer: 'Green Valley Farm',
  category: 'Vegetables'
}, {
  id: '2',
  name: 'Fresh Strawberries',
  image: 'https://images.unsplash.com/photo-1518635017498-87f514b751ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
  price: 5.99,
  unit: 'basket',
  rating: 4.9,
  farmer: 'Berry Hills',
  category: 'Fruits'
}, {
  id: '3',
  name: 'Artisanal Sourdough Bread',
  image: 'https://images.unsplash.com/photo-1586444248888-f140237e7d10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
  price: 6.5,
  unit: 'loaf',
  rating: 4.7,
  farmer: 'Urban Bakery',
  category: 'Bakery'
}, {
  id: '4',
  name: 'Organic Raw Honey',
  image: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
  price: 9.99,
  unit: 'jar',
  rating: 4.9,
  farmer: 'Sunny Apiaries',
  category: 'Other'
}, {
  id: '5',
  name: 'Fresh Farm Eggs',
  image: 'https://images.unsplash.com/photo-1598965402089-897ce52e8355?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
  price: 4.5,
  unit: 'dozen',
  rating: 4.6,
  farmer: 'Happy Hen Farm',
  category: 'Dairy'
}, {
  id: '6',
  name: 'Organic Kale Bunch',
  image: 'https://images.unsplash.com/photo-1515686811547-3e7a3f6a4b4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
  price: 3.49,
  unit: 'bunch',
  rating: 4.5,
  farmer: 'Green Leaf Gardens',
  category: 'Vegetables'
}, {
  id: '7',
  name: 'Handcrafted Goat Cheese',
  image: 'https://images.unsplash.com/photo-1588250674913-fdad0493ccc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
  price: 7.99,
  unit: '8 oz',
  rating: 4.8,
  farmer: 'Mountain Goat Dairy',
  category: 'Dairy'
}, {
  id: '8',
  name: 'Fresh Basil Plant',
  image: 'https://images.unsplash.com/photo-1618375569909-3c8616e9e3eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
  price: 4.99,
  unit: 'pot',
  rating: 4.7,
  farmer: 'Urban Herbs',
  category: 'Herbs'
}];
const FeaturedProducts = () => {
  return <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Featured Products
            </h2>
            <p className="text-gray-600 mt-2">
              Handpicked seasonal favorites from local farms
            </p>
          </div>
          <div className="hidden md:block">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition">
              View All Products
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map(product => <ProductCard key={product.id} {...product} />)}
        </div>
        <div className="mt-8 text-center md:hidden">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition">
            View All Products
          </button>
        </div>
      </div>
    </section>;
};
export default FeaturedProducts;