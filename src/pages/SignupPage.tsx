import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

type SignupFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string,
  address: string
};

const SignupPage = () => {
  const navigate= useNavigate();
  const [data, setData] = useState<SignupFormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone:'',
    address:''
  });

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const body = {
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      password: data.password,
      phone: data.phone,
      address: data.address,
    };
  
    try {
      const response = await fetch('http://localhost:5000/api/customers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
  
      const result = await response.json();
      console.log('Signup successful:', result);
      if(result.message){
            navigate('/login');
      }
    } catch (err) {
      console.error('Signup failed:', err);
    }
  };
  

  return (
    <div className="w-full bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Create Account</h1>
            <p className="text-gray-600 mt-2">
              Join UrbanFood to shop fresh, local products
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  onChange={handleOnchange}
                  name="firstName"
                  id="firstName"
                  value={data.firstName}
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="First name"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  onChange={handleOnchange}
                  name="lastName"
                  value={data.lastName}
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Last name"
                />
              </div>
              <div>
  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
    Address
  </label>
  <input
    type="text"
    id="address"
    onChange={handleOnchange}
    name="address"
    value={data.address}
    className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
    placeholder="Address"
  />
</div>
<div>
  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
    Phone
  </label>
  <input
    type="text"
    id="phone"
    onChange={handleOnchange}
    name="phone"
    value={data.phone}
    className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
    placeholder="Phone"
  />
</div>
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleOnchange}
                value={data.email}
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleOnchange}
                value={data.password}
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Create a password"
              />
              <p className="text-xs text-gray-500 mt-1">
                Must be at least 8 characters long
              </p>
            </div>
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                onChange={handleOnchange}
                value={data.confirmPassword}
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Confirm your password"
              />
            </div>
            <div className="mb-6">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="terms"
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded mt-1"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                  I agree to the
                  <Link to="/" className="text-green-600 hover:text-green-700 ml-1">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/" className="text-green-600 hover:text-green-700">
                    Privacy Policy
                  </Link>
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md font-medium transition"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">Or sign up with</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <button
                type="button"
                className="w-full flex justify-center items-center gap-2 bg-white border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-50 transition"
              >
                {/* Google Icon */}
                Google
              </button>
              <button
                type="button"
                className="w-full flex justify-center items-center gap-2 bg-[#1877F2] text-white rounded-md px-4 py-2 hover:bg-[#166FE5] transition"
              >
                {/* Facebook Icon */}
                Facebook
              </button>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Already have an account?
              <Link to="/login" className="text-green-600 hover:text-green-700 font-medium ml-1">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
