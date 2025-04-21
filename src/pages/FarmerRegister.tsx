import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { LeafIcon, AlertCircleIcon, CheckCircleIcon } from 'lucide-react'
interface FormData {
  first_name: string
  last_name: string
  email: string
  password: string
  confirm_password: string
  phone: string
  address: string
  farm_name: string
  farm_address: string
}
interface FormErrors {
  [key: string]: string
}
export function FarmerRegister() {
  const [formData, setFormData] = useState<FormData>({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: '',
    phone: '',
    address: '',
    farm_name: '',
    farm_address: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const validateForm = () => {
    const newErrors: FormErrors = {}
    if (!formData.first_name) newErrors.first_name = 'First name is required'
    if (!formData.last_name) newErrors.last_name = 'Last name is required'
    if (!formData.email) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Email is invalid'
    if (!formData.password) newErrors.password = 'Password is required'
    else if (formData.password.length < 8)
      newErrors.password = 'Password must be at least 8 characters'
    if (formData.password !== formData.confirm_password)
      newErrors.confirm_password = "Passwords don't match"
    if (!formData.phone) newErrors.phone = 'Phone number is required'
    if (!formData.address) newErrors.address = 'Address is required'
    if (!formData.farm_name) newErrors.farm_name = 'Farm name is required'
    if (!formData.farm_address)
      newErrors.farm_address = 'Farm address is required'
    return newErrors
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrors({})
    const newErrors = validateForm()
    if (Object.keys(newErrors).length === 0) {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500))
        setSubmitSuccess(true)
      } catch (error) {
        setErrors({
          submit: 'Failed to submit. Please try again.',
        })
      }
    } else {
      setErrors(newErrors)
    }
    setIsSubmitting(false)
  }
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-green-600 py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 p-3 rounded-full">
              <LeafIcon size={32} />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">Become a Farmer Partner</h1>
          <p className="text-xl opacity-90">
            Join our community of sustainable farmers and reach customers who
            value quality, locally-grown produce
          </p>
        </div>
      </section>
      {/* Registration Form */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-10">
            {submitSuccess ? (
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="bg-green-100 p-3 rounded-full">
                    <CheckCircleIcon size={48} className="text-green-600" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Registration Successful!
                </h2>
                <p className="text-gray-600 mb-8">
                  Thank you for registering as a farmer partner. We'll review
                  your application and get back to you soon.
                </p>
                <Link
                  to="/"
                  className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300"
                >
                  Return to Home
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Personal Information */}
                  <div className="md:col-span-2">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">
                      Personal Information
                    </h2>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg border ${errors.first_name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
                      placeholder="Enter your first name"
                    />
                    {errors.first_name && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.first_name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg border ${errors.last_name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
                      placeholder="Enter your last name"
                    />
                    {errors.last_name && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.last_name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 font-medium mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg border ${errors.address ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
                      placeholder="Enter your address"
                    />
                    {errors.address && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.address}
                      </p>
                    )}
                  </div>
                  {/* Farm Information */}
                  <div className="md:col-span-2 mt-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">
                      Farm Information
                    </h2>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 font-medium mb-2">
                      Farm Name
                    </label>
                    <input
                      type="text"
                      name="farm_name"
                      value={formData.farm_name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg border ${errors.farm_name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
                      placeholder="Enter your farm name"
                    />
                    {errors.farm_name && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.farm_name}
                      </p>
                    )}
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 font-medium mb-2">
                      Farm Address
                    </label>
                    <input
                      type="text"
                      name="farm_address"
                      value={formData.farm_address}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg border ${errors.farm_address ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
                      placeholder="Enter your farm address"
                    />
                    {errors.farm_address && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.farm_address}
                      </p>
                    )}
                  </div>
                  {/* Password Section */}
                  <div className="md:col-span-2 mt-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">
                      Security
                    </h2>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg border ${errors.password ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
                      placeholder="Create a password"
                    />
                    {errors.password && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.password}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="confirm_password"
                      value={formData.confirm_password}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg border ${errors.confirm_password ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
                      placeholder="Confirm your password"
                    />
                    {errors.confirm_password && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.confirm_password}
                      </p>
                    )}
                  </div>
                </div>
                {errors.submit && (
                  <div className="mt-6 p-4 bg-red-50 rounded-lg flex items-center text-red-700">
                    <AlertCircleIcon size={20} className="mr-2" />
                    {errors.submit}
                  </div>
                )}
                <div className="mt-8">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-green-600 text-white py-3 rounded-lg font-medium
                      ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-green-700'}
                      transition-colors duration-300`}
                  >
                    {isSubmitting ? 'Registering...' : 'Register as Farmer'}
                  </button>
                </div>
                <p className="text-center mt-6 text-gray-600">
                  Already have an account?{' '}
                  <Link
                    to="/login"
                    className="text-green-600 hover:text-green-700 font-medium"
                  >
                    Sign in
                  </Link>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
