import React from 'react';
import { StarIcon } from 'lucide-react';
const testimonials = [{
  id: 1,
  name: 'Emily Johnson',
  image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
  rating: 5,
  text: "UrbanFood has completely changed how I shop for groceries. The produce is so fresh and flavorful, and I love knowing that I'm supporting local farmers."
}, {
  id: 2,
  name: 'Michael Thompson',
  image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
  rating: 4,
  text: 'The quality of the products is outstanding. My family loves the fresh eggs and artisanal bread we get every week. Delivery is always on time too!'
}, {
  id: 3,
  name: 'Sophia Garcia',
  image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
  rating: 5,
  text: "I've been able to discover so many local producers I never knew existed. The platform is easy to use and the customer service is excellent!"
}];
const Testimonials = () => {
  return <section className="py-12 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 mt-2">
            Hear from people who love UrbanFood
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-4" />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => <StarIcon key={i} size={16} className={`${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Testimonials;