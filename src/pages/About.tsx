import React from 'react'
import {
  ShieldIcon,
  LeafIcon,
  UsersIcon,
  HeartIcon,
  TruckIcon,
  StarIcon,
  AwardIcon,
  Users2Icon,
  HeartHandshakeIcon,
  Clock3Icon,
} from 'lucide-react'
import './About.css' // Import the CSS file
export function About() {
  return (
    <div className="w-full bg-white">
      {/* Hero Section with Background Image */}
      <section className="hero-overlay relative py-32 text-white">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1550989460-0adf9ea622e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')",
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Who We Are
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto">
          UrbanFood is dedicated to connecting local communities with fresh, organic produce, supporting over 50 local farmers since our launch in 2015.
          Our mission is to provide quick and reliable service, ensuring that our 10,000+ happy customers receive their orders within 24 hours.
          </p>
        </div>
      </section>  
      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Farmers Stat */}
            <div className="transform hover:scale-105 transition-all duration-300">
              <div className="relative bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl p-8 shadow-xl">
                <div className="absolute top-0 right-0 -mr-3 -mt-3 bg-white rounded-full p-3 shadow-lg">
                  <Users2Icon size={28} className="text-emerald-500" />
                </div>
                <div className="text-white">
                  <div className="text-5xl font-bold mb-2 stat-number">50+</div>
                  <p className="text-emerald-50 font-medium text-lg">
                    Local Farmers
                  </p>
                </div>
                <div className="absolute bottom-0 right-0 opacity-10">
                  <Users2Icon size={80} className="text-white" />
                </div>
              </div>
            </div>
            {/* Customers Stat */}
            <div className="transform hover:scale-105 transition-all duration-300">
              <div className="relative bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-8 shadow-xl">
                <div className="absolute top-0 right-0 -mr-3 -mt-3 bg-white rounded-full p-3 shadow-lg">
                  <HeartHandshakeIcon size={28} className="text-orange-500" />
                </div>
                <div className="text-white">
                  <div className="text-5xl font-bold mb-2 stat-number">
                    10K+
                  </div>
                  <p className="text-yellow-50 font-medium text-lg">
                    Happy Customers
                  </p>
                </div>
                <div className="absolute bottom-0 right-0 opacity-10">
                  <HeartHandshakeIcon size={80} className="text-white" />
                </div>
              </div>
            </div>
            {/* Delivery Stat */}
            <div className="transform hover:scale-105 transition-all duration-300">
              <div className="relative bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-8 shadow-xl">
                <div className="absolute top-0 right-0 -mr-3 -mt-3 bg-white rounded-full p-3 shadow-lg">
                  <Clock3Icon size={28} className="text-blue-500" />
                </div>
                <div className="text-white">
                  <div className="text-5xl font-bold mb-2 stat-number">24h</div>
                  <p className="text-blue-50 font-medium text-lg">
                    Delivery Time
                  </p>
                </div>
                <div className="absolute bottom-0 right-0 opacity-10">
                  <Clock3Icon size={80} className="text-white" />
                </div>
              </div>
            </div>
            {/* Organic Stat */}
            <div className="transform hover:scale-105 transition-all duration-300">
              <div className="relative bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl p-8 shadow-xl">
                <div className="absolute top-0 right-0 -mr-3 -mt-3 bg-white rounded-full p-3 shadow-lg">
                  <LeafIcon size={28} className="text-purple-500" />
                </div>
                <div className="text-white">
                  <div className="text-5xl font-bold mb-2 stat-number">
                    100%
                  </div>
                  <p className="text-purple-50 font-medium text-lg">
                    Organic Produce
                  </p>
                </div>
                <div className="absolute bottom-0 right-0 opacity-10">
                  <LeafIcon size={80} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Story Section with Enhanced Design */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Urban farm"
                  className="rounded-lg shadow-xl w-full h-auto story-image"
                />
                <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-lg shadow-lg hidden md:block">
                  <p className="text-lg font-semibold">Founded in 2015</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4">
                <p className="text-gray-700 text-lg">
                  UrbanFood began with a simple idea: to connect urban dwellers
                  with the freshest produce from local farmers. Founded by Maria
                  Chen and David Rodriguez, two food enthusiasts with a passion
                  for sustainability, our journey started at a small farmers
                  market in the heart of the city.
                </p>
                <p className="text-gray-700 text-lg">
                  What began as a weekend project quickly blossomed into a
                  mission to transform how city residents access fresh food. We
                  noticed the disconnect between urban consumers and the sources
                  of their food, and set out to bridge that gap.
                </p>
                <p className="text-gray-700 text-lg">
                  Today, UrbanFood partners with over 50 local farmers and
                  producers, bringing the freshest seasonal produce directly to
                  thousands of households while supporting sustainable
                  agricultural practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Values Section with Enhanced Icons */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300 value-card">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <LeafIcon size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">
                Sustainability First
              </h3>
              <p className="text-gray-600 text-center">
                We're committed to environmentally friendly farming practices
                and reducing food miles through local sourcing.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300 value-card">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <UsersIcon size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">
                Community Focus
              </h3>
              <p className="text-gray-600 text-center">
                Building lasting relationships between urban communities and
                local farmers through transparency and trust.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300 value-card">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <StarIcon size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">
                Quality Guarantee
              </h3>
              <p className="text-gray-600 text-center">
                Every product meets our strict quality standards, ensuring you
                receive only the best from our farmers.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Process Section with Timeline Design */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <UsersIcon size={32} />,
                title: 'Partner Selection',
                description:
                  'We carefully select local farmers who share our values of sustainability and quality.',
              },
              {
                icon: <TruckIcon size={32} />,
                title: 'Fresh Harvest',
                description:
                  'Produce is harvested only after you order, ensuring maximum freshness and minimal waste.',
              },
              {
                icon: <AwardIcon size={32} />,
                title: 'Quality Delivery',
                description:
                  'Our eco-friendly delivery brings fresh produce to your door within 24 hours.',
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-xl shadow-lg h-full section-fade-in">
                  <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section with Enhanced Design */}
      <section className="py-20 bg-green-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl mb-8">
              Be part of our journey to transform urban food systems and support
              local agriculture.
            </p>
            <button className="cta-button bg-white text-green-600 hover:bg-green-50 px-8 py-4 rounded-lg font-bold text-lg transition-colors duration-300">
              Start Shopping Fresh
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
