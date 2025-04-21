import React, { useState } from 'react';
import { UserIcon, ClipboardIcon, MapPinIcon, CreditCardIcon, HeartIcon, BellIcon, LogOutIcon } from 'lucide-react';
const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('account');
  // Mock order data - in a real app, this would come from an API
  const orders = [{
    id: 'ORD-12345',
    date: '2023-05-15',
    total: 26.97,
    status: 'Delivered',
    items: 3
  }, {
    id: 'ORD-12344',
    date: '2023-05-02',
    total: 42.5,
    status: 'Processing',
    items: 5
  }, {
    id: 'ORD-12343',
    date: '2023-04-18',
    total: 19.99,
    status: 'Delivered',
    items: 2
  }];
  return <div className="w-full bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">My Account</h1>
        <div className="grid md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex flex-col items-center mb-6 pb-6 border-b border-gray-200">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-3">
                  <UserIcon size={40} className="text-green-600" />
                </div>
                <h2 className="font-semibold text-lg">John Doe</h2>
                <p className="text-gray-600">john.doe@example.com</p>
              </div>
              <nav className="space-y-1">
                <button className={`flex items-center w-full px-3 py-2 rounded-md ${activeTab === 'account' ? 'bg-green-50 text-green-600' : 'text-gray-600 hover:bg-gray-100'}`} onClick={() => setActiveTab('account')}>
                  <UserIcon size={18} className="mr-3" />
                  <span>Account Details</span>
                </button>
                <button className={`flex items-center w-full px-3 py-2 rounded-md ${activeTab === 'orders' ? 'bg-green-50 text-green-600' : 'text-gray-600 hover:bg-gray-100'}`} onClick={() => setActiveTab('orders')}>
                  <ClipboardIcon size={18} className="mr-3" />
                  <span>Orders</span>
                </button>
                <button className={`flex items-center w-full px-3 py-2 rounded-md ${activeTab === 'addresses' ? 'bg-green-50 text-green-600' : 'text-gray-600 hover:bg-gray-100'}`} onClick={() => setActiveTab('addresses')}>
                  <MapPinIcon size={18} className="mr-3" />
                  <span>Addresses</span>
                </button>
                <button className={`flex items-center w-full px-3 py-2 rounded-md ${activeTab === 'payment' ? 'bg-green-50 text-green-600' : 'text-gray-600 hover:bg-gray-100'}`} onClick={() => setActiveTab('payment')}>
                  <CreditCardIcon size={18} className="mr-3" />
                  <span>Payment Methods</span>
                </button>
                <button className={`flex items-center w-full px-3 py-2 rounded-md ${activeTab === 'wishlist' ? 'bg-green-50 text-green-600' : 'text-gray-600 hover:bg-gray-100'}`} onClick={() => setActiveTab('wishlist')}>
                  <HeartIcon size={18} className="mr-3" />
                  <span>Wishlist</span>
                </button>
                <button className={`flex items-center w-full px-3 py-2 rounded-md ${activeTab === 'notifications' ? 'bg-green-50 text-green-600' : 'text-gray-600 hover:bg-gray-100'}`} onClick={() => setActiveTab('notifications')}>
                  <BellIcon size={18} className="mr-3" />
                  <span>Notifications</span>
                </button>
                <button className="flex items-center w-full px-3 py-2 rounded-md text-red-600 hover:bg-red-50 mt-6">
                  <LogOutIcon size={18} className="mr-3" />
                  <span>Log Out</span>
                </button>
              </nav>
            </div>
          </div>
          {/* Content */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {/* Account Details */}
              {activeTab === 'account' && <div>
                  <h2 className="text-xl font-semibold mb-6">
                    Account Details
                  </h2>
                  <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                          First Name
                        </label>
                        <input type="text" id="firstName" defaultValue="John" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500" />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name
                        </label>
                        <input type="text" id="lastName" defaultValue="Doe" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <input type="email" id="email" defaultValue="john.doe@example.com" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500" />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input type="tel" id="phone" defaultValue="(555) 123-4567" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500" />
                      </div>
                    </div>
                    <div className="border-t border-gray-200 pt-6 mt-6">
                      <h3 className="font-semibold mb-4">Change Password</h3>
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                            Current Password
                          </label>
                          <input type="password" id="currentPassword" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500" />
                        </div>
                        <div>
                          <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                            New Password
                          </label>
                          <input type="password" id="newPassword" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500" />
                        </div>
                        <div>
                          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                            Confirm New Password
                          </label>
                          <input type="password" id="confirmPassword" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500" />
                        </div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-medium transition">
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>}
              {/* Orders */}
              {activeTab === 'orders' && <div>
                  <h2 className="text-xl font-semibold mb-6">Order History</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50 text-left">
                        <tr>
                          <th className="px-4 py-3 text-sm font-medium text-gray-500 uppercase tracking-wider">
                            Order ID
                          </th>
                          <th className="px-4 py-3 text-sm font-medium text-gray-500 uppercase tracking-wider">
                            Date
                          </th>
                          <th className="px-4 py-3 text-sm font-medium text-gray-500 uppercase tracking-wider">
                            Total
                          </th>
                          <th className="px-4 py-3 text-sm font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-4 py-3 text-sm font-medium text-gray-500 uppercase tracking-wider">
                            Items
                          </th>
                          <th className="px-4 py-3 text-sm font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {orders.map(order => <tr key={order.id}>
                            <td className="px-4 py-4 whitespace-nowrap font-medium">
                              {order.id}
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap text-gray-600">
                              {order.date}
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap">
                              ${order.total.toFixed(2)}
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                {order.status}
                              </span>
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap text-gray-600">
                              {order.items}
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap">
                              <button className="text-green-600 hover:text-green-700 font-medium">
                                View
                              </button>
                            </td>
                          </tr>)}
                      </tbody>
                    </table>
                  </div>
                  {orders.length === 0 && <div className="text-center py-8">
                      <p className="text-gray-600">
                        You haven't placed any orders yet.
                      </p>
                      <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-medium transition">
                        Start Shopping
                      </button>
                    </div>}
                </div>}
              {/* Addresses */}
              {activeTab === 'addresses' && <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold">Saved Addresses</h2>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition">
                      Add New Address
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 rounded-lg p-4 relative">
                      <div className="absolute top-4 right-4 space-x-2">
                        <button className="text-gray-600 hover:text-gray-800">
                          Edit
                        </button>
                        <button className="text-red-600 hover:text-red-700">
                          Delete
                        </button>
                      </div>
                      <h3 className="font-semibold mb-1">Home</h3>
                      <p className="text-gray-600">John Doe</p>
                      <p className="text-gray-600">123 Main Street, Apt 4B</p>
                      <p className="text-gray-600">New York, NY 10001</p>
                      <p className="text-gray-600">United States</p>
                      <p className="text-gray-600">(555) 123-4567</p>
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Default Address
                        </span>
                      </div>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4 relative">
                      <div className="absolute top-4 right-4 space-x-2">
                        <button className="text-gray-600 hover:text-gray-800">
                          Edit
                        </button>
                        <button className="text-red-600 hover:text-red-700">
                          Delete
                        </button>
                      </div>
                      <h3 className="font-semibold mb-1">Work</h3>
                      <p className="text-gray-600">John Doe</p>
                      <p className="text-gray-600">
                        456 Business Ave, Suite 200
                      </p>
                      <p className="text-gray-600">New York, NY 10002</p>
                      <p className="text-gray-600">United States</p>
                      <p className="text-gray-600">(555) 987-6543</p>
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                          Set as Default
                        </button>
                      </div>
                    </div>
                  </div>
                </div>}
              {/* Payment Methods */}
              {activeTab === 'payment' && <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold">Payment Methods</h2>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition">
                      Add New Card
                    </button>
                  </div>
                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-lg p-4 flex items-center">
                      <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Visa ending in 4242</p>
                        <p className="text-sm text-gray-600">Expires 12/2025</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Default
                        </span>
                        <button className="text-gray-600 hover:text-gray-800">
                          Edit
                        </button>
                        <button className="text-red-600 hover:text-red-700">
                          Delete
                        </button>
                      </div>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4 flex items-center">
                      <div className="bg-red-100 p-3 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Mastercard ending in 5678</p>
                        <p className="text-sm text-gray-600">Expires 08/2024</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                          Set as Default
                        </button>
                        <button className="text-gray-600 hover:text-gray-800">
                          Edit
                        </button>
                        <button className="text-red-600 hover:text-red-700">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>}
              {/* Other tabs can be implemented similarly */}
              {(activeTab === 'wishlist' || activeTab === 'notifications') && <div className="text-center py-12">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {activeTab === 'wishlist' ? <HeartIcon size={32} className="text-gray-400" /> : <BellIcon size={32} className="text-gray-400" />}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {activeTab === 'wishlist' ? 'Your wishlist is empty' : 'No notifications yet'}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {activeTab === 'wishlist' ? 'Save items you like to your wishlist and they will appear here.' : 'When you receive notifications, they will appear here.'}
                  </p>
                  {activeTab === 'wishlist' && <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-medium transition">
                      Browse Products
                    </button>}
                </div>}
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default ProfilePage;