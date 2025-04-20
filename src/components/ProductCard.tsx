import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon, StarIcon } from 'lucide-react';
interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  unit: string;
  rating: number;
  farmer: string;
  category: string;
}
const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  image,
  price,
  unit,
  rating,
  farmer,
  category
}) => {
  return <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <Link to={`/products/${id}`}>
        <div className="h-48 overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover hover:scale-105 transition duration-300" />
        </div>
      </Link>
      <div className="p-4">
        <span className="text-xs font-semibold text-green-600 uppercase tracking-wider">
          {category}
        </span>
        <Link to={`/products/${id}`}>
          <h3 className="font-semibold text-lg mt-1 hover:text-green-600 transition">
            {name}
          </h3>
        </Link>
        <p className="text-sm text-gray-600 mb-2">by {farmer}</p>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => <StarIcon key={i} size={16} className={`${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />)}
          <span className="text-sm text-gray-600 ml-1">
            ({rating.toFixed(1)})
          </span>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <span className="font-bold text-lg">${price.toFixed(2)}</span>
            <span className="text-gray-600 text-sm ml-1">/ {unit}</span>
          </div>
          <button className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full transition">
            <ShoppingCartIcon size={18} />
          </button>
        </div>
      </div>
    </div>;
};
export default ProductCard;