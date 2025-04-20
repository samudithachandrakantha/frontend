import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { StarIcon, MinusIcon, PlusIcon, ShoppingCartIcon, TruckIcon, HeartIcon, ShareIcon } from 'lucide-react';
const productDetails = {
  id: '1',
  name: 'Organic Heirloom Tomatoes',
  description: 'These vibrant, flavorful heirloom tomatoes are grown without synthetic pesticides or fertilizers. Perfect for salads, sandwiches, or simply enjoying on their own. Our tomatoes are picked at peak ripeness to ensure the best flavor and nutritional value.',
  longDescription: 'Heirloom tomatoes are traditional varieties that have been passed down through generations of farmers. Unlike commercially grown tomatoes that are bred for uniformity and shipping durability, heirloom varieties are prized for their superior flavor, unique appearances, and diverse colors.\n\nAt Green Valley Farm, we grow our heirloom tomatoes using sustainable farming practices that protect the soil, conserve water, and promote biodiversity. Each tomato is hand-picked at the perfect stage of ripeness to ensure you get the most flavorful and nutritious product possible.',
  image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
  gallery: ['https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1582284540020-8acbe03f4924?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1598512752271-33f913a5af13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'],
  price: 4.99,
  unit: 'lb',
  discount: 0,
  rating: 4.8,
  reviewCount: 124,
  farmer: {
    name: 'Green Valley Farm',
    location: 'Urban District, 3 miles away',
    image: 'https://images.unsplash.com/photo-1622030411594-c360fc399ba7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80'
  },
  category: 'Vegetables',
  inStock: true,
  deliveryEstimate: '1-2 days',
  organic: true,
  nutritionFacts: {
    servingSize: '100g',
    calories: 18,
    fat: '0.2g',
    carbs: '3.9g',
    protein: '0.9g',
    vitamins: ['Vitamin C', 'Vitamin K', 'Potassium', 'Folate']
  },
  reviews: [{
    id: 1,
    user: 'Sarah M.',
    date: '2023-05-15',
    rating: 5,
    comment: 'These tomatoes are incredible! So much flavor compared to grocery store tomatoes. Will definitely buy again.'
  }, {
    id: 2,
    user: 'David L.',
    date: '2023-05-10',
    rating: 4,
    comment: 'Very good quality and taste. Delivery was prompt and the tomatoes were well packed.'
  }, {
    id: 3,
    user: 'Michelle K.',
    date: '2023-05-02',
    rating: 5,
    comment: "These heirloom tomatoes made the best caprese salad! The flavor is amazing and they're so fresh."
  }]
};
const relatedProducts = [{
  id: '6',
  name: 'Organic Kale Bunch',
  image: 'https://images.unsplash.com/photo-1515686811547-3e7a3f6a4b4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
  price: 3.49,
  unit: 'bunch',
  rating: 4.5,
  farmer: 'Green Leaf Gardens',
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
  id: '11',
  name: 'Organic Bell Peppers',
  image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
  price: 3.99,
  unit: 'lb',
  rating: 4.4,
  farmer: 'Green Leaf Gardens',
  category: 'Vegetables'
}, {
  id: '3',
  name: 'Artisanal Sourdough Bread',
  image: 'https://images.unsplash.com/photo-1586444248888-f140237e7d10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
  price: 6.5,
  unit: 'loaf',
  rating: 4.7,
  farmer: 'Urban Bakery',
  category: 'Bakery'
}];
const ProductDetailPage = () => {
  const {
    id
  } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  const product = productDetails;
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  return <div className="w-full bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <nav className="mb-6 text-sm">
          <ol className="flex items-center space-x-2">
            <li>
              <Link to="/" className="text-gray-500 hover:text-green-600">
                Home
              </Link>
            </li>
            <li className="text-gray-500">/</li>
            <li>
              <Link to="/products" className="text-gray-500 hover:text-green-600">
                Products
              </Link>
            </li>
            <li className="text-gray-500">/</li>
            <li>
              <Link to={`/products?category=${product.category.toLowerCase()}`} className="text-gray-500 hover:text-green-600">
                {product.category}
              </Link>
            </li>
            <li className="text-gray-500">/</li>
            <li className="text-gray-800 font-medium">{product.name}</li>
          </ol>
        </nav>
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-6">
            <div>
              <div className="mb-4 aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
                <img src={product.gallery[activeImage]} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.gallery.map((image, index) => <div key={index} className={`aspect-w-1 aspect-h-1 rounded-md overflow-hidden cursor-pointer ${activeImage === index ? 'ring-2 ring-green-600' : ''}`} onClick={() => setActiveImage(index)}>
                    <img src={image} alt={`${product.name} - image ${index + 1}`} className="w-full h-full object-cover" />
                  </div>)}
              </div>
            </div>
            <div>
              <div className="mb-2">
                <span className="text-sm font-medium text-green-600 uppercase">
                  {product.category}
                </span>
                {product.organic && <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Organic
                  </span>}
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {product.name}
              </h1>
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => <StarIcon key={i} size={16} className={`${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />)}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    {product.rating.toFixed(1)} ({product.reviewCount} reviews)
                  </span>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-gray-600">{product.description}</p>
              </div>
              <div className="flex items-end mb-6">
                <span className="text-3xl font-bold text-gray-800">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-gray-600 ml-2">/ {product.unit}</span>
                {product.discount > 0 && <span className="ml-2 px-2 py-1 bg-red-100 text-red-700 text-sm font-medium rounded-md">
                    Save {product.discount}%
                  </span>}
              </div>
              <div className="mb-6">
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <div className={`w-3 h-3 rounded-full mr-2 ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
                  <span>{product.inStock ? 'In Stock' : 'Out of Stock'}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <TruckIcon size={16} className="mr-2" />
                  <span>Delivery estimate: {product.deliveryEstimate}</span>
                </div>
              </div>
              <div className="flex items-center mb-6">
                <div className="flex items-center border border-gray-300 rounded-md mr-4">
                  <button className="px-3 py-2 text-gray-600 hover:bg-gray-100" onClick={decreaseQuantity}>
                    <MinusIcon size={16} />
                  </button>
                  <span className="px-3 py-2 w-12 text-center">{quantity}</span>
                  <button className="px-3 py-2 text-gray-600 hover:bg-gray-100" onClick={increaseQuantity}>
                    <PlusIcon size={16} />
                  </button>
                </div>
                <button className="flex-grow bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-md font-medium flex items-center justify-center gap-2 transition">
                  <ShoppingCartIcon size={18} />
                  Add to Cart
                </button>
              </div>
              <div className="flex items-center space-x-4 text-gray-600">
                <button className="flex items-center hover:text-green-600">
                  <HeartIcon size={18} className="mr-1" />
                  <span>Save</span>
                </button>
                <button className="flex items-center hover:text-green-600">
                  <ShareIcon size={18} className="mr-1" />
                  <span>Share</span>
                </button>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center">
                  <img src={product.farmer.image} alt={product.farmer.name} className="w-12 h-12 rounded-full object-cover mr-4" />
                  <div>
                    <h3 className="font-semibold">
                      Sold by {product.farmer.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {product.farmer.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200">
            <div className="flex overflow-x-auto">
              <button className={`px-6 py-3 text-sm font-medium whitespace-nowrap ${activeTab === 'description' ? 'border-b-2 border-green-600 text-green-600' : 'text-gray-600 hover:text-green-600'}`} onClick={() => setActiveTab('description')}>
                Description
              </button>
              <button className={`px-6 py-3 text-sm font-medium whitespace-nowrap ${activeTab === 'nutrition' ? 'border-b-2 border-green-600 text-green-600' : 'text-gray-600 hover:text-green-600'}`} onClick={() => setActiveTab('nutrition')}>
                Nutrition Facts
              </button>
              <button className={`px-6 py-3 text-sm font-medium whitespace-nowrap ${activeTab === 'reviews' ? 'border-b-2 border-green-600 text-green-600' : 'text-gray-600 hover:text-green-600'}`} onClick={() => setActiveTab('reviews')}>
                Reviews ({product.reviews.length})
              </button>
            </div>
            <div className="p-6">
              {activeTab === 'description' && <div className="prose max-w-none">
                  <p className="mb-4">{product.longDescription}</p>
                </div>}
              {activeTab === 'nutrition' && <div>
                  <h3 className="font-semibold text-lg mb-4">
                    Nutrition Facts
                  </h3>
                  <div className="bg-gray-50 p-4 rounded-md max-w-md">
                    <div className="border-b border-gray-300 pb-2 mb-2">
                      <p className="font-semibold">
                        Serving Size: {product.nutritionFacts.servingSize}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Calories</span>
                        <span className="font-medium">
                          {product.nutritionFacts.calories}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Total Fat</span>
                        <span className="font-medium">
                          {product.nutritionFacts.fat}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Total Carbohydrates</span>
                        <span className="font-medium">
                          {product.nutritionFacts.carbs}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Protein</span>
                        <span className="font-medium">
                          {product.nutritionFacts.protein}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="font-medium mb-1">Vitamins & Minerals:</p>
                      <p>{product.nutritionFacts.vitamins.join(', ')}</p>
                    </div>
                  </div>
                </div>}
              {activeTab === 'reviews' && <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-semibold text-lg">Customer Reviews</h3>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition">
                      Write a Review
                    </button>
                  </div>
                  <div className="space-y-6">
                    {product.reviews.map(review => <div key={review.id} className="border-b border-gray-200 pb-6">
                        <div className="flex items-center mb-2">
                          <div className="flex">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => <StarIcon key={i} size={16} className={`${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />)}
                            </div>
                            <span className="ml-2 font-semibold">
                              {review.user}
                            </span>
                            <span className="ml-2 text-sm text-gray-500">
                              {review.date}
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-600">{review.comment}</p>
                      </div>)}
                  </div>
                </div>}
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map(product => <Link key={product.id} to={`/products/${product.id}`} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition">
                <div className="h-48 overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    by {product.farmer}
                  </p>
                  <div className="flex items-center mb-2">
                    <div className="flex">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => <StarIcon key={i} size={14} className={`${i < product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />)}
                      </div>
                      <span className="text-xs text-gray-600 ml-1">
                        ({product.rating.toFixed(1)})
                      </span>
                    </div>
                  </div>
                  <div className="font-bold">
                    ${product.price.toFixed(2)}{' '}
                    <span className="text-gray-600 text-sm font-normal">
                      / {product.unit}
                    </span>
                  </div>
                </div>
              </Link>)}
          </div>
        </div>
      </div>
    </div>;
};
export default ProductDetailPage;