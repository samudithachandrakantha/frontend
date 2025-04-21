import React, { useState } from 'react';
import { ChevronDownIcon, FilterIcon, GridIcon, ListIcon } from 'lucide-react';
import ProductCard from '../components/ProductCard';

// Mock data
const products = [
  {
    id: '1',
    name: 'Organic Heirloom Tomatoes',
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: 4.99,
    unit: 'lb',
    rating: 4.8,
    farmer: 'Green Valley Farm',
    category: 'Vegetables'
  },
  {
    id: '2',
    name: 'Fresh Strawberries',
    image: 'https://images.unsplash.com/photo-1518635017498-87f514b751ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: 5.99,
    unit: 'basket',
    rating: 4.9,
    farmer: 'Berry Hills',
    category: 'Fruits'
  },
  {
    id: '3',
    name: 'Artisanal Sourdough Bread',
    image: 'https://images.unsplash.com/photo-1586444248888-f140237e7d10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: 6.5,
    unit: 'loaf',
    rating: 4.7,
    farmer: 'Urban Bakery',
    category: 'Bakery'
  },
  {
    id: '4',
    name: 'Organic Raw Honey',
    image: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: 9.99,
    unit: 'jar',
    rating: 4.9,
    farmer: 'Sunny Apiaries',
    category: 'Other'
  },
  {
    id: '5',
    name: 'Fresh Farm Eggs',
    image: 'https://images.unsplash.com/photo-1598965402089-897ce52e8355?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: 4.5,
    unit: 'dozen',
    rating: 4.6,
    farmer: 'Happy Hen Farm',
    category: 'Dairy'
  },
  {
    id: '6',
    name: 'Organic Kale Bunch',
    image: 'https://images.unsplash.com/photo-1515686811547-3e7a3f6a4b4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: 3.49,
    unit: 'bunch',
    rating: 4.5,
    farmer: 'Green Leaf Gardens',
    category: 'Vegetables'
  },
  {
    id: '7',
    name: 'Handcrafted Goat Cheese',
    image: 'https://images.unsplash.com/photo-1588250674913-fdad0493ccc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: 7.99,
    unit: '8 oz',
    rating: 4.8,
    farmer: 'Mountain Goat Dairy',
    category: 'Dairy'
  },
  {
    id: '8',
    name: 'Fresh Basil Plant',
    image: 'https://images.unsplash.com/photo-1618375569909-3c8616e9e3eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: 4.99,
    unit: 'pot',
    rating: 4.7,
    farmer: 'Urban Herbs',
    category: 'Herbs'
  },
  {
    id: '9',
    name: 'Organic Avocados',
    image: 'https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: 2.49,
    unit: 'each',
    rating: 4.6,
    farmer: 'Green Valley Farm',
    category: 'Fruits'
  },
  {
    id: '10',
    name: 'Handmade Goat Milk Soap',
    image: 'https://images.unsplash.com/photo-1600857544200-b2f468e9b2b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: 5.99,
    unit: 'bar',
    rating: 4.9,
    farmer: 'Mountain Goat Dairy',
    category: 'Crafts'
  },
  {
    id: '11',
    name: 'Organic Bell Peppers',
    image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: 3.99,
    unit: 'lb',
    rating: 4.4,
    farmer: 'Green Leaf Gardens',
    category: 'Vegetables'
  },
  {
    id: '12',
    name: 'Artisanal Baguette',
    image: 'https://images.unsplash.com/photo-1603379054860-e9b54578ae9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: 4.5,
    unit: 'each',
    rating: 4.8,
    farmer: 'Urban Bakery',
    category: 'Bakery'
  }
];

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'Vegetables', name: 'Vegetables' },
  { id: 'Fruits', name: 'Fruits' },
  { id: 'Dairy', name: 'Dairy' },
  { id: 'Bakery', name: 'Bakery' },
  { id: 'Herbs', name: 'Herbs' },
  { id: 'Crafts', name: 'Handmade Crafts' },
  { id: 'Other', name: 'Other' }
];

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 100]); // [min, max]

  // Calculate max price from products for dynamic range
  const maxProductPrice = Math.max(...products.map(p => p.price), 100);
  const minProductPrice = Math.min(...products.map(p => p.price), 0);

  // Filter products based on selected category and price range
  const filteredProducts = products.filter(product => {
    // Category filter
    const categoryMatch = activeCategory === 'all' || product.category === activeCategory;
    
    // Price filter - convert range (0-100) to actual price values
    const minPrice = (priceRange[0] / 100) * maxProductPrice;
    const maxPrice = (priceRange[1] / 100) * maxProductPrice;
    const priceMatch = product.price >= minPrice && product.price <= maxPrice;
    
    return categoryMatch && priceMatch;
  });

  // Sort products based on selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0; // Default: featured/newest
  });

  const handlePriceChange = (e, index) => {
    const newPriceRange = [...priceRange];
    newPriceRange[index] = parseInt(e.target.value);
    setPriceRange(newPriceRange);
  };

  return (
    <div className="w-full bg-gray-50">
      {/* Page Header (same as before) */}
      <div className="bg-green-600 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Shop Local Products</h1>
          <p className="mt-2 text-green-100">
            Fresh, sustainable products from urban farmers near you
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Mobile Filter Toggle (same as before) */}
        <div className="md:hidden mb-4">
          <button 
            className="w-full flex items-center justify-center gap-2 bg-white p-3 rounded-lg border shadow-sm" 
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
          >
            <FilterIcon size={18} />
            <span>Filter & Sort</span>
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar Filters - Updated Price Range */}
          <div className={`w-full md:w-64 ${mobileFiltersOpen ? 'block' : 'hidden'} md:block`}>
            <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
              <h3 className="font-semibold text-lg mb-3">Categories</h3>
              <ul className="space-y-2">
                {categories.map(category => (
                  <li key={category.id}>
                    <button 
                      className={`w-full text-left px-2 py-1 rounded-md ${
                        activeCategory === category.id 
                          ? 'bg-green-50 text-green-600 font-medium' 
                          : 'hover:bg-gray-100'
                      }`}
                      onClick={() => {
                        setActiveCategory(category.id);
                        setMobileFiltersOpen(false);
                      }}
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="font-semibold text-lg mb-3">Price Range</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Min: ${((priceRange[0] / 100) * maxProductPrice).toFixed(2)}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={priceRange[0]}
                    onChange={(e) => handlePriceChange(e, 0)}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Max: ${((priceRange[1] / 100) * maxProductPrice).toFixed(2)}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={priceRange[1]}
                    onChange={(e) => handlePriceChange(e, 1)}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                  />
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>${minProductPrice.toFixed(2)}</span>
                  <span>${(maxProductPrice / 2).toFixed(2)}</span>
                  <span>${maxProductPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid (same as before) */}
          <div className="flex-1">
            {/* Sort and View Controls (same as before) */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
              <p className="text-gray-600">
                Showing{' '}
                <span className="font-medium">{sortedProducts.length}</span>{' '}
                products
              </p>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <select 
                    className="appearance-none bg-white border rounded-md py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-green-500" 
                    value={sortBy} 
                    onChange={e => setSortBy(e.target.value)}
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                  <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                </div>
                <div className="flex border rounded-md">
                  <button 
                    className={`p-2 ${
                      viewMode === 'grid' 
                        ? 'bg-green-50 text-green-600' 
                        : 'bg-white text-gray-600'
                    }`} 
                    onClick={() => setViewMode('grid')}
                  >
                    <GridIcon size={18} />
                  </button>
                  <button 
                    className={`p-2 ${
                      viewMode === 'list' 
                        ? 'bg-green-50 text-green-600' 
                        : 'bg-white text-gray-600'
                    }`} 
                    onClick={() => setViewMode('list')}
                  >
                    <ListIcon size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Products (same as before) */}
            {sortedProducts.length > 0 ? (
              <div className={`
                ${viewMode === 'grid' 
                  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' 
                  : 'flex flex-col gap-4'}
              `}>
                {sortedProducts.map(product => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600">
                  No products found. Please try another category or price range.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;