import React from 'react';
import { TrendingUpIcon, PackageIcon, ShoppingCartIcon, DollarSignIcon, BarChart2Icon } from 'lucide-react';
// Mock analytics data
const analyticsData = {
  totalSales: 24659.75,
  totalOrders: 364,
  averageOrder: 67.75,
  conversionRate: 3.2,
  revenueGrowth: 12.5,
  bestSellingProducts: [{
    name: 'Wireless Headphones',
    sales: 89,
    revenue: 7121.11
  }, {
    name: 'Smart Watch',
    sales: 42,
    revenue: 8399.58
  }, {
    name: 'Cotton T-Shirt',
    sales: 67,
    revenue: 1674.33
  }, {
    name: 'Ceramic Coffee Mug',
    sales: 54,
    revenue: 701.46
  }, {
    name: 'Leather Wallet',
    sales: 36,
    revenue: 1799.64
  }],
  monthlySales: [{
    month: 'Jan',
    sales: 1450
  }, {
    month: 'Feb',
    sales: 1800
  }, {
    month: 'Mar',
    sales: 1600
  }, {
    month: 'Apr',
    sales: 2100
  }, {
    month: 'May',
    sales: 1900
  }, {
    month: 'Jun',
    sales: 2400
  }, {
    month: 'Jul',
    sales: 2200
  }, {
    month: 'Aug',
    sales: 2600
  }, {
    month: 'Sep',
    sales: 2350
  }, {
    month: 'Oct',
    sales: 2800
  }, {
    month: 'Nov',
    sales: 3100
  }, {
    month: 'Dec',
    sales: 2900
  }]
};
const AnalyticsSection = () => {
  return <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600 mt-1">
          Welcome back! Here's an overview of your store performance.
        </p>
      </div>
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <SummaryCard title="Total Sales" value={`$${analyticsData.totalSales.toLocaleString()}`} icon={<DollarSignIcon size={24} className="text-green-600" />} trend={`+${analyticsData.revenueGrowth}%`} trendUp={true} />
        <SummaryCard title="Orders" value={analyticsData.totalOrders} icon={<ShoppingCartIcon size={24} className="text-blue-600" />} trend="+8.4%" trendUp={true} />
        <SummaryCard title="Avg. Order Value" value={`$${analyticsData.averageOrder}`} icon={<TrendingUpIcon size={24} className="text-purple-600" />} trend="+2.1%" trendUp={true} />
        <SummaryCard title="Conversion Rate" value={`${analyticsData.conversionRate}%`} icon={<BarChart2Icon size={24} className="text-orange-600" />} trend="-0.5%" trendUp={false} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales Chart */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Monthly Sales
          </h2>
          <div className="h-64">
            <div className="flex items-end h-48 space-x-2">
              {analyticsData.monthlySales.map(data => {
              const height = `${data.sales / 3100 * 100}%`;
              return <div key={data.month} className="flex-1 flex flex-col items-center">
                    <div className="w-full flex justify-center">
                      <div className="w-full bg-blue-500 rounded-t" style={{
                    height
                  }}></div>
                    </div>
                    <span className="text-xs text-gray-600 mt-2">
                      {data.month}
                    </span>
                  </div>;
            })}
            </div>
          </div>
        </div>
        {/* Best Selling Products */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Best Selling Products
            </h2>
            <PackageIcon size={20} className="text-gray-400" />
          </div>
          <div className="space-y-4">
            {analyticsData.bestSellingProducts.map((product, index) => <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-sm font-medium w-5 text-gray-500">
                    {index + 1}.
                  </span>
                  <span className="ml-2 font-medium">{product.name}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600">
                    {product.sales} sold
                  </span>
                  <span className="text-sm font-medium">
                    ${product.revenue.toLocaleString()}
                  </span>
                </div>
              </div>)}
          </div>
          <button className="mt-6 text-sm text-blue-600 hover:text-blue-800">
            View All Products
          </button>
        </div>
      </div>
    </div>;
};
const SummaryCard = ({
  title,
  value,
  icon,
  trend,
  trendUp
}) => {
  return <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-2xl font-bold mt-1">{value}</p>
        </div>
        <div className="h-12 w-12 rounded-full bg-gray-50 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="mt-4">
        <span className={`text-sm font-medium ${trendUp ? 'text-green-600' : 'text-red-600'}`}>
          {trend}
        </span>
        <span className="text-sm text-gray-500 ml-1">vs last month</span>
      </div>
    </div>;
};
export default AnalyticsSection;