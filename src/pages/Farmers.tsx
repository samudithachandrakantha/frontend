import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPinIcon,
  LeafIcon,
  StarIcon,
  MessageCircleIcon,
  Users2Icon,
  LeafyGreenIcon,
  PackageIcon,
} from 'lucide-react'
interface Farmer {
  id: number
  name: string
  image: string
  location: string
  specialty: string
  description: string
  rating: number
  products: string[]
  certifications: string[]
}
const farmers: Farmer[] = [
  {
    id: 1,
    name: "Green Valley Farm",
    image:
      '/image/greenValley.jpg',
    location: '789 farm rd',
    specialty: 'Organic Vegetables & Herbs',
    description:
      'Third-generation farmers specializing in sustainable organic vegetables and aromatic herbs. Our farm has been chemical-free for over 10 years.',
    rating: 4.9,
    products: [
      'Heirloom Tomatoes',
      'Fresh Herbs',
      'Seasonal Greens',
      'Root Vegetables',
    ],
    certifications: ['Certified Organic', 'Sustainable Farming'],
  },
  {
    id: 2,
    name: 'House Of Crafts',
    image:
      '/image/craft.jpg',
    location: '125 dencil rd',
    specialty: 'Microgreens & Edible Flowers',
    description:
      'Empowering Sri Lankan Handmade Creations.',
    rating: 4.8,
    products: [
      'Candles',
      'Traditional Masks',
      'Statues',
      'Wall Hanging',
    ],
    certifications: ['Artisan Craftsmanship Certificate', 'Local Produce Certification'],
  },
  {
    id: 3,
    name: "Agro Park",
    image:
      'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    location: '511/A Gampola',
    specialty: 'Asian Vegetables & Fruits',
    description:
      'Bringing traditional Asian vegetables to local tables. We grow unique varieties not commonly found in regular markets.',
    rating: 4.7,
    products: [
      'Asian Greens',
      'Specialty Mushrooms',
      'Exotic Herbs',
      'Seasonal Fruits',
    ],
    certifications: ['Naturally Grown', 'Heritage Farming'],
  },
  {
    id: 4,
    name: 'Milkey Fresh Dairies',
    image:
      '/image/diary.jpg',
    location: 'Sunset District, SF',
    specialty: 'Microgreens & Edible Flowers',
    description:
      'Urban innovation meets traditional farming. Specializing in microgreens and edible flowers for both home cooks and restaurants.',
    rating: 4.5,
    products: [
      'Organic Raw Honey',
      'Handmade Goat Milk',
      'Specialty Herbs',
      'Rare Varieties',
    ],
    certifications: ['Urban Agriculture Certified', 'Hydroponic Expert'],
  },
]
export function Farmers() {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative bg-green-600 text-white py-24">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Meet Our Local Farmers
              </h1>
              <p className="text-xl opacity-90">
                Discover the passionate individuals who grow your food with care
                and dedication
              </p>
            </div>
            <div className="md:w-1/3">
              <img
                src="/image/farmer.jpg "
                alt="Local farmer"
                className="rounded-lg shadow-2xl w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-12 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Farmers Stat */}
            <div className="bg-gradient-to-br from-emerald-50 to-green-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-emerald-200/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users2Icon size={32} className="text-emerald-600" />
              </div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">
                25+
              </div>
              <p className="text-emerald-800">Local Farmers</p>
            </div>
            {/* Sustainable Practices Stat */}
            <div className="bg-gradient-to-br from-amber-50 to-yellow-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-amber-200/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <LeafyGreenIcon size={32} className="text-amber-600" />
              </div>
              <div className="text-4xl font-bold text-amber-600 mb-2">100%</div>
              <p className="text-amber-800">Sustainable Practices</p>
            </div>
            {/* Products Stat */}
            <div className="bg-gradient-to-br from-sky-50 to-blue-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-sky-200/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <PackageIcon size={32} className="text-sky-600" />
              </div>
              <div className="text-4xl font-bold text-sky-600 mb-2">500+</div>
              <p className="text-sky-800">Unique Products</p>
            </div>
          </div>
        </div>
      </section>
      {/* Farmers List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12">
            {farmers.map((farmer) => (
              <div
                key={farmer.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <img
                      src={farmer.image}
                      alt={farmer.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6 md:p-8">
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-2xl font-bold mb-2">
                          {farmer.name}
                        </h2>
                        <div className="flex items-center text-gray-600 mb-4">
                          <MapPinIcon size={18} className="mr-2" />
                          <span>{farmer.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center bg-green-50 px-3 py-1 rounded-full">
                        <StarIcon size={18} className="text-yellow-500 mr-1" />
                        <span className="font-semibold">{farmer.rating}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6">{farmer.description}</p>
                    <div className="mb-6">
                      <h3 className="font-semibold mb-2">Specialties:</h3>
                      <div className="flex flex-wrap gap-2">
                        {farmer.products.map((product, index) => (
                          <span
                            key={index}
                            className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
                          >
                            {product}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mb-6">
                      <h3 className="font-semibold mb-2">Certifications:</h3>
                      <div className="flex flex-wrap gap-2">
                        {farmer.certifications.map((cert, index) => (
                          <div
                            key={index}
                            className="flex items-center text-gray-600 text-sm"
                          >
                            <LeafIcon
                              size={16}
                              className="mr-1 text-green-600"
                            />
                            {cert}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300">
                        View Products
                      </button>
                      <button className="flex items-center border border-green-600 text-green-600 px-6 py-2 rounded-lg hover:bg-green-50 transition-colors duration-300">
                        <MessageCircleIcon size={18} className="mr-2" />
                        Contact Farmer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Join as Farmer CTA */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Are You a Local Farmer?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our community of sustainable farmers and connect directly with
            customers who value quality, locally-grown produce.
          </p>
          <Link to="/register">
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300">
            Partner With Us
          </button>
          </Link>
          
        </div>
      </section>
    </div>
  )
}
