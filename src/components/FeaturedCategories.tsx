import React from 'react';
import { Link } from 'react-router-dom';
const categories = [{
  id: 'vegetables',
  name: 'Vegetables',
  image: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
  count: 48
}, {
  id: 'fruits',
  name: 'Fruits',
  image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
  count: 36
}, {
  id: 'dairy',
  name: 'Dairy',
  image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
  count: 24
}, {
  id: 'bakery',
  name: 'Bakery',
  image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
  count: 18
}, {
  id: 'herbs',
  name: 'Herbs',
  image: 'https://images.unsplash.com/photo-1515586000433-45406d8e6662?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
  count: 15
}, {
  id: 'crafts',
  name: 'Handmade Crafts',
  image: 'https://images.unsplash.com/photo-1621600411688-4be93c2c1208?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
  count: 22
}];
const FeaturedCategories = () => {
  return <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Shop by Category</h2>
          <p className="text-gray-600 mt-2">
            Browse our selection of fresh local products
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map(category => <Link key={category.id} to={`/products?category=${category.id}`} className="group">
              <div className="relative rounded-lg overflow-hidden">
                <div className="aspect-w-1 aspect-h-1">
                  <img src={category.image} alt={category.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 text-white">
                  <h3 className="font-semibold">{category.name}</h3>
                  <p className="text-sm opacity-80">
                    {category.count} products
                  </p>
                </div>
              </div>
            </Link>)}
        </div>
      </div>
    </section>;
};
export default FeaturedCategories;