import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import SignUp from './pages/SignupPage';
import SellerDashboard from './pages/SellerDashboard';
import {About} from './pages/About' ;
import {Farmers} from './pages/Farmers' ;
import { FarmerRegister } from './pages/FarmerRegister';

export function App() {
  return <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        {/* <Navbar /> */}
        {location.pathname !== "/sellerdashboard" && <Navbar />}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/sellerdashboard" element={<SellerDashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/farmers" element= {<Farmers />}  />
            <Route path="/register" element= {<FarmerRegister/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>;
}

