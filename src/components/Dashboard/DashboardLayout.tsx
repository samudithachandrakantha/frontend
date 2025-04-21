import React, { useState } from 'react';
import { LayoutDashboardIcon, PackageIcon, ShoppingCartIcon, BellIcon, SearchIcon, UserIcon, ChevronDownIcon, MenuIcon, UserCircleIcon } from 'lucide-react';
const DashboardLayout = ({
  children,
  currentSection,
  onNavigate,
  className
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = [{
    id: 'dashboard',
    label: 'Dashboard',
    icon: <LayoutDashboardIcon size={20} />
  }, {
    id: 'products',
    label: 'Products',
    icon: <PackageIcon size={20} />
  }, {
    id: 'orders',
    label: 'Orders',
    icon: <ShoppingCartIcon size={20} />
  }, {
    id: 'profile',
    label: 'Profile',
    icon: <UserCircleIcon size={20} />
  }];
  return <div className={`flex h-screen bg-gray-50 ${className}`}>
      <div className={`
          ${isMobileMenuOpen ? 'block' : 'hidden'} 
          md:block fixed md:relative z-20 bg-[#1a8e3c] text-white shadow-lg md:shadow-none w-64 h-full
        `}>
        <div className="h-full flex flex-col">
          <div className="px-6 py-5 border-b border-[#2fa352]">
            <h1 className="text-xl font-bold text-white">Seller Dashboard</h1>
          </div>
          <nav className="flex-1 px-4 py-6">
            <ul className="space-y-2">
              {navItems.map(item => <li key={item.id}>
                  <button onClick={() => {
                onNavigate(item.id);
                setIsMobileMenuOpen(false);
              }} className={`
                      flex items-center w-full px-4 py-3 rounded-lg 
                      ${currentSection === item.id ? 'bg-[#2fa352] text-white' : 'text-white hover:bg-[#23B24B]'}
                    `}>
                    <span className="mr-3">{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                </li>)}
            </ul>
          </nav>
          <div className="px-6 py-4 border-t border-[#2fa352]">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-[#23B24B] flex items-center justify-center">
                <UserIcon size={20} className="text-white" />
              </div>
              <div className="ml-3">
                <p className="font-medium text-sm text-white">John Smith</p>
                <p className="text-xs text-[#a7e9b8]">Store Owner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden mr-4">
                <MenuIcon size={24} />
              </button>
              <h2 className="text-lg font-semibold capitalize">
                {currentSection}
              </h2>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2">
                <SearchIcon size={18} className="text-gray-500" />
                <input type="text" placeholder="Search..." className="bg-transparent border-none focus:outline-none ml-2 w-40" />
              </div>
              <button className="relative p-2 rounded-full hover:bg-gray-100">
                <BellIcon size={20} />
                <span className="absolute top-1 right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                  3
                </span>
              </button>
              <button className="md:hidden flex items-center">
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <UserIcon size={16} className="text-blue-600" />
                </div>
                <ChevronDownIcon size={16} className="ml-1" />
              </button>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          {children}
        </main>
      </div>
    </div>;
};
export default DashboardLayout;