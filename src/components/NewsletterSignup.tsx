import React from 'react';
const NewsletterSignup = () => {
  return <section className="py-12 bg-green-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-lg opacity-90 mb-8">
            Sign up for our newsletter to receive weekly updates on seasonal
            products, special offers, and urban farming tips.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input type="email" placeholder="Your email address" className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
            <button type="submit" className="bg-yellow-500 hover:bg-yellow-400 text-green-800 px-6 py-3 rounded-lg font-medium transition">
              Subscribe
            </button>
          </form>
          <p className="text-sm opacity-80 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>;
};
export default NewsletterSignup;