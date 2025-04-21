
import Hero from '../components/Hero';
import FeaturedCategories from '../components/FeaturedCategories';
import FeaturedProducts from '../components/FeaturedProducts';
import FarmerHighlight from '../components/FarmerHighlight';
import Testimonials from '../components/Testimonials';
import NewsletterSignup from '../components/NewsletterSignup';
const HomePage = () => {
  return <div className="w-full">
      <Hero />
      <FeaturedCategories />
      <FeaturedProducts />
      <FarmerHighlight />
      <Testimonials />
      <NewsletterSignup />
    </div>;
};
export default HomePage;