import React from 'react';
import { PackageIcon, TruckIcon, CheckIcon, ClockIcon, MapPinIcon, CalendarIcon, BoxIcon, InfoIcon } from 'lucide-react';
// Mock order data - in real app, this would come from your backend
const orderData = {
  orderId: '#ORD-2023-1001',
  status: 'In Transit',
  estimatedDelivery: '2024-03-25',
  trackingNumber: '1Z999AA1234567890',
  shippingAddress: '123 Delivery Street, New York, NY 10001',
  orderDate: '2024-03-20',
  items: [{
    name: 'Organic Tomatoes',
    quantity: 2,
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=200&q=80'
  }, {
    name: 'Fresh Strawberries',
    quantity: 1,
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=200&q=80'
  }],
  timeline: [{
    status: 'Order Placed',
    date: '2024-03-20 09:30 AM',
    completed: true
  }, {
    status: 'Order Confirmed',
    date: '2024-03-20 10:15 AM',
    completed: true
  }, {
    status: 'Processing',
    date: '2024-03-21 02:45 PM',
    completed: true
  }, {
    status: 'In Transit',
    date: '2024-03-22 08:20 AM',
    completed: true,
    current: true
  }, {
    status: 'Out for Delivery',
    date: '',
    completed: false
  }, {
    status: 'Delivered',
    date: '',
    completed: false
  }]
};
const OrderTrackingPage = () => {
  return <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-[#23B24B] text-white rounded-lg p-6 mb-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-2xl font-bold">Track Your Order</h1>
              <p className="mt-1 text-[#e8f5ea]">
                Order ID: {orderData.orderId}
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-[#e8f5ea]">Tracking Number</div>
              <div className="font-mono font-medium">
                {orderData.trackingNumber}
              </div>
            </div>
          </div>
        </div>
        {/* Order Status Timeline */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg font-semibold text-gray-800">
              Order Status
            </h2>
            <div className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              {orderData.status}
            </div>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[15px] top-0 h-full w-0.5 bg-gray-200"></div>
            {/* Timeline events */}
            <div className="space-y-6">
              {orderData.timeline.map((event, index) => <div key={index} className="flex gap-4">
                  <div className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center 
                    ${event.completed ? event.current ? 'bg-[#23B24B] text-white' : 'bg-[#e8f5ea] text-[#23B24B]' : 'bg-gray-100 text-gray-400'}`}>
                    {event.current ? <TruckIcon size={16} /> : event.completed ? <CheckIcon size={16} /> : <ClockIcon size={16} />}
                  </div>
                  <div className="flex-1">
                    <div className={`font-medium ${event.current ? 'text-[#23B24B]' : 'text-gray-900'}`}>
                      {event.status}
                    </div>
                    {event.date && <div className="text-sm text-gray-500">{event.date}</div>}
                  </div>
                </div>)}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Delivery Information */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Delivery Information
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPinIcon size={20} className="text-[#23B24B] mt-1" />
                <div>
                  <div className="font-medium text-gray-700">
                    Shipping Address
                  </div>
                  <div className="text-gray-600">
                    {orderData.shippingAddress}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CalendarIcon size={20} className="text-[#23B24B] mt-1" />
                <div>
                  <div className="font-medium text-gray-700">
                    Estimated Delivery
                  </div>
                  <div className="text-gray-600">
                    {new Date(orderData.estimatedDelivery).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Order Details */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Order Details
            </h2>
            <div className="space-y-4">
              {orderData.items.map((item, index) => <div key={index} className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  <div className="flex-1">
                    <div className="font-medium text-gray-800">{item.name}</div>
                    <div className="text-sm text-gray-500">
                      Quantity: {item.quantity}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-gray-800">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                    <div className="text-sm text-gray-500">
                      ${item.price} each
                    </div>
                  </div>
                </div>)}
              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Total</span>
                  <span className="font-medium text-gray-900">
                    $
                    {orderData.items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Help Section */}
        <div className="mt-6 bg-blue-50 rounded-lg p-4 flex items-start gap-3">
          <InfoIcon size={20} className="text-blue-500 mt-0.5" />
          <div>
            <div className="font-medium text-blue-800">Need Help?</div>
            <p className="text-sm text-blue-600">
              If you have any questions about your delivery, please contact our
              support team.
            </p>
          </div>
        </div>
      </div>
    </div>;
};
export default OrderTrackingPage;