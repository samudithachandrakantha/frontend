import React, { useState } from 'react';
import { XIcon, CheckIcon, TruckIcon, PackageIcon, AlertCircleIcon } from 'lucide-react';
const UpdateOrderModal = ({
  order,
  onClose
}) => {
  const [status, setStatus] = useState(order?.status || 'Processing');
  const [trackingNumber, setTrackingNumber] = useState('');
  const [notes, setNotes] = useState('');
  const statusOptions = [{
    value: 'Pending',
    label: 'Pending',
    icon: <AlertCircleIcon size={16} className="text-gray-600" />
  }, {
    value: 'Processing',
    label: 'Processing',
    icon: <PackageIcon size={16} className="text-yellow-600" />
  }, {
    value: 'Shipped',
    label: 'Shipped',
    icon: <TruckIcon size={16} className="text-blue-600" />
  }, {
    value: 'Delivered',
    label: 'Delivered',
    icon: <CheckIcon size={16} className="text-green-600" />
  }, {
    value: 'Cancelled',
    label: 'Cancelled',
    icon: <XIcon size={16} className="text-red-600" />
  }];
  const handleSubmit = e => {
    e.preventDefault();
    // Here you would update the order status in your backend
    console.log('Update order:', {
      orderId: order.id,
      newStatus: status,
      trackingNumber,
      notes
    });
    onClose();
  };
  return <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
        <div className="flex items-center justify-between border-b px-6 py-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Update Order Status
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <XIcon size={20} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <div className="mb-2 flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">
                Order ID:
              </span>
              <span className="font-medium">{order?.id}</span>
            </div>
            <div className="mb-2 flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">
                Customer:
              </span>
              <span>{order?.customer}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">
                Order Date:
              </span>
              <span>
                {order ? new Date(order.date).toLocaleDateString() : ''}
              </span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Update Status
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
              {statusOptions.map(option => <button key={option.value} type="button" onClick={() => setStatus(option.value)} className={`
                    flex flex-col items-center justify-center p-3 rounded-lg border
                    ${status === option.value ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:bg-gray-50'}
                  `}>
                  <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center mb-1 shadow-sm">
                    {option.icon}
                  </div>
                  <span className="text-xs">{option.label}</span>
                </button>)}
            </div>
          </div>
          {status === 'Shipped' && <div>
              <label htmlFor="tracking" className="block text-sm font-medium text-gray-700 mb-1">
                Tracking Number
              </label>
              <input type="text" id="tracking" value={trackingNumber} onChange={e => setTrackingNumber(e.target.value)} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter tracking number" />
            </div>}
          <div>
            <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
              Notes (Optional)
            </label>
            <textarea id="notes" value={notes} onChange={e => setNotes(e.target.value)} rows={3} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Add notes about this order status update"></textarea>
          </div>
          <div className="flex justify-end space-x-4">
            <button type="button" onClick={onClose} className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-50">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Update Status
            </button>
          </div>
        </form>
      </div>
    </div>;
};
export default UpdateOrderModal;