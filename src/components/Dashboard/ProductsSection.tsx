import React, { useState } from 'react';
import { PlusIcon, EditIcon, TrashIcon, SearchIcon } from 'lucide-react';
const initialProducts = [{
  id: 1,
  name: 'Organic Kale Bunch',
  image: 'https://images.unsplash.com/photo-1515686811547-3e7a3f6a4b4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
  category: 'Vegetables',
  price: 3.49,
  stock: 45
}, {
  id: 2,
  name: 'Fresh Strawberries',
  image: 'https://images.unsplash.com/photo-1518635017498-87f514b751ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
  category: 'Fruits',
  price: 24.99,
  stock: 120
}];



const ProductsSection = ({
  onAddProduct
}) => {
  const [products, setProducts] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
  const handleDeleteProduct = id => {
    setProducts(products.filter(product => product.id !== id));
  };
  return <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Product Inventory</h1>
        <div className="flex items-center gap-3">
          <div className="relative">
            <SearchIcon size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="Search products..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#23B24B] w-full md:w-64" />
          </div>
          <button onClick={onAddProduct} className="flex items-center px-4 py-2 bg-[#23B24B] text-white rounded-lg hover:bg-[#1a8e3c] transition-colors">
            <PlusIcon size={18} className="mr-2" />
            Add Product
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map(product => <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            </div>
            <div className="p-4">
              <div className="text-xs text-[#23B24B] font-medium mb-1">
                {product.category}
              </div>
              <h3 className="font-medium text-gray-900 mb-2">{product.name}</h3>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </span>
                <div className="flex space-x-2">
                  <button className="p-1 rounded-md hover:bg-gray-100">
                    <EditIcon size={18} className="text-[#23B24B]" />
                  </button>
                  <button className="p-1 rounded-md hover:bg-gray-100" onClick={() => handleDeleteProduct(product.id)}>
                    <TrashIcon size={18} className="text-red-600" />
                  </button>
                </div>
              </div>
              <div className="mt-2 text-sm text-gray-600">
                Stock:{' '}
                <span className={`font-medium ${product.stock < 20 ? 'text-red-600' : product.stock < 50 ? 'text-yellow-600' : 'text-[#23B24B]'}`}>
                  {product.stock}
                </span>
              </div>
            </div>
          </div>)}
      </div>
    </div>;
};
export default ProductsSection;


/*  id: 1,
  name: 'Organic Kale Bunch',
  image: 'https://images.unsplash.com/photo-1515686811547-3e7a3f6a4b4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
  category: 'Vegetables',
  price: 3.49,
  stock: 45
}, {
  id: 2,
  name: 'Fresh Strawberries',
  image: 'https://images.unsplash.com/photo-1518635017498-87f514b751ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
  category: 'Fruits',
  price: 24.99,
  stock: 120
}, */