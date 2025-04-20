import React, { useState } from 'react';
import DashboardLayout from '../components/Dashboard/DashboardLayout';
import ProductsSection from '../components/Dashboard/ProductsSection';
import OrdersSection from '../components/Dashboard/OrdersSection';
import AnalyticsSection from '../components/Dashboard/AnalyticsSection';
import ProfileSection from '../components/Dashboard/ProfileSection';
import AddProductModal from '../components/Dashboard/AddProductModal';
import UpdateOrderModal from '../components/Dashboard/UpdateOrderModal';

export default function SellerDashboard() {
  const [currentSection, setCurrentSection] = useState('dashboard');
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
  const [isUpdateOrderModalOpen, setIsUpdateOrderModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleUpdateOrder = order => {
    setSelectedOrder(order);
    setIsUpdateOrderModalOpen(true);
  };

  const renderCurrentSection = () => {
    switch (currentSection) {
        case 'dashboard':
          return <AnalyticsSection />;
        case 'products':
          return <ProductsSection onAddProduct={() => setIsAddProductModalOpen(true)} />;
        case 'orders':
          return <OrdersSection onUpdateOrder={handleUpdateOrder} />;
        case 'profile':
          return <ProfileSection />;
        default:
          return <AnalyticsSection />;
    }
  };

  return (
    <DashboardLayout currentSection={currentSection} onNavigate={setCurrentSection} className="bg-[#23B24B]">
      {renderCurrentSection()}
      {isAddProductModalOpen && <AddProductModal onClose={() => setIsAddProductModalOpen(false)} />}
      {isUpdateOrderModalOpen && <UpdateOrderModal order={selectedOrder} onClose={() => setIsUpdateOrderModalOpen(false)} />}
    </DashboardLayout>
  );
}
