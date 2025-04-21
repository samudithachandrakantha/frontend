import React, { useState } from 'react';
import { SearchIcon, FilterIcon } from 'lucide-react';
// Mock order data
const initialOrders = [{
  id: '#ORD-2023-1001',
  customer: 'Emma Johnson',
  date: '2023-11-20',
  total: 124.95,
  status: 'Delivered',
  items: [{
    name: 'Wireless Headphones',
    quantity: 1,
    price: 79.99
  }, {
    name: 'Leather Wallet',
    quantity: 1,
    price: 44.96
  }]
}, {
  id: '#ORD-2023-1002',
  customer: 'Michael Smith',
  date: '2023-11-19',
  total: 49.99,
  status: 'Shipped',
  items: [{
    name: 'Smart Watch',
    quantity: 1,
    price: 199.99
  }]
}, {
  id: '#ORD-2023-1003',
  customer: 'Sophia Brown',
  date: '2023-11-18',
  total: 37.98,
  status: 'Processing',
  items: [{
    name: 'Cotton T-Shirt',
    quantity: 2,
    price: 24.99
  }]
}, {
  id: '#ORD-2023-1004',
  customer: 'James Wilson',
  date: '2023-11-18',
  total: 25.98,
  status: 'Pending',
  items: [{
    name: 'Ceramic Coffee Mug',
    quantity: 2,
    price: 12.99
  }]
}, {
  id: '#ORD-2023-1005',
  customer: 'Olivia Martinez',
  date: '2023-11-17',
  total: 254.97,
  status: 'Delivered',
  items: [{
    name: 'Smart Watch',
    quantity: 1,
    price: 199.99
  }, {
    name: 'Ceramic Coffee Mug',
    quantity: 1,
    price: 12.99
  }, {
    name: 'Cotton T-Shirt',
    quantity: 1,
    price: 24.99
  }]
}];
const statusColors = {
  Delivered: 'bg-green-100 text-green-800',
  Shipped: 'bg-blue-100 text-blue-800',
  Processing: 'bg-yellow-100 text-yellow-800',
  Pending: 'bg-gray-100 text-gray-800',
  Cancelled: 'bg-red-100 text-red-800'
};
const OrdersSection = ({
  onUpdateOrder
}) => {
  const [orders, setOrders] = useState(initialOrders);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) || order.customer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });
  return <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Order Management</h1>
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative w-full sm:w-auto">
            <SearchIcon size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="Search orders..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" />
          </div>
          <div className="relative w-full sm:w-auto">
            <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)} className="appearance-none pl-4 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full">
              <option value="All">All Statuses</option>
              <option value="Pending">Pending</option>
              <option value="Processing">Processing</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
              <option value="Cancelled">Cancelled</option>
            </select>
            <FilterIcon size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>
      {/* Orders Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 text-gray-700 text-sm">
              <tr>
                <th className="py-3 px-4 text-left">Order ID</th>
                <th className="py-3 px-4 text-left">Customer</th>
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-right">Total</th>
                <th className="py-3 px-4 text-center">Status</th>
                <th className="py-3 px-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredOrders.map(order => <tr key={order.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">{order.id}</td>
                  <td className="py-3 px-4">{order.customer}</td>
                  <td className="py-3 px-4 text-gray-600">
                    {new Date(order.date).toLocaleDateString()}
                  </td>
                  <td className="py-3 px-4 text-right">
                    ${order.total.toFixed(2)}
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex justify-center">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[order.status]}`}>
                        {order.status}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex justify-center">
                      <button onClick={() => onUpdateOrder(order)} className="px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded-md">
                        Update Status
                      </button>
                    </div>
                  </td>
                </tr>)}
              {filteredOrders.length === 0 && <tr>
                  <td colSpan={6} className="py-8 text-center text-gray-500">
                    No orders found
                  </td>
                </tr>}
            </tbody>
          </table>
        </div>
      </div>
    </div>;
};
export default OrdersSection;