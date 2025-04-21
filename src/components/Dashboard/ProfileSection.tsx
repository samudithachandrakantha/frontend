import React, { useState } from 'react';
import { UserIcon, MailIcon, PhoneIcon, MapPinIcon, StoreIcon, CameraIcon, EditIcon } from 'lucide-react';
import EditProfileModal from './EditProfileModal';
// Mock profile data
const initialProfile = {
  name: 'John Smith',
  email: 'john.smith@example.com',
  phone: '+1 (555) 123-4567',
  address: '123 Market Street, San Francisco, CA 94105',
  storeName: "Smith's Fresh Market",
  storeDescription: 'Providing fresh, local produce and quality goods since 2020',
  joinDate: '2020-06-15',
  avatar: null // URL for profile picture if exists
};
const ProfileSection = () => {
  const [profile, setProfile] = useState(initialProfile);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const handleProfileUpdate = updatedProfile => {
    setProfile(updatedProfile);
    setIsEditModalOpen(false);
  };
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Seller Profile</h1>
        <button onClick={() => setIsEditModalOpen(true)} className="flex items-center px-4 py-2 bg-[#23B24B] text-white rounded-lg hover:bg-[#1a8e3c] transition-colors">
          <EditIcon size={18} className="mr-2" />
          Edit Profile
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="h-32 w-32 rounded-full bg-[#e8f5ea] flex items-center justify-center">
                  {profile.avatar ? <img src={profile.avatar} alt="Profile" className="h-32 w-32 rounded-full object-cover" /> : <UserIcon size={64} className="text-[#23B24B]" />}
                </div>
                <button className="absolute bottom-0 right-0 p-2 bg-[#23B24B] rounded-full text-white hover:bg-[#1a8e3c]">
                  <CameraIcon size={16} />
                </button>
              </div>
              <h2 className="mt-4 text-xl font-semibold text-gray-800">
                {profile.name}
              </h2>
              <p className="text-[#23B24B] font-medium">{profile.storeName}</p>
              <p className="text-sm text-gray-500 mt-1">
                Member since {new Date(profile.joinDate).toLocaleDateString()}
              </p>
            </div>
            <div className="mt-6 space-y-4">
              <div className="flex items-center text-gray-600">
                <MailIcon size={18} className="mr-3 text-[#23B24B]" />
                <span>{profile.email}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <PhoneIcon size={18} className="mr-3 text-[#23B24B]" />
                <span>{profile.phone}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPinIcon size={18} className="mr-3 text-[#23B24B]" />
                <span>{profile.address}</span>
              </div>
            </div>
          </div>
        </div>
        {/* Store Information */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Store Information
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center text-gray-800 mb-2">
                    <StoreIcon size={18} className="mr-2 text-[#23B24B]" />
                    <h4 className="font-medium">Store Details</h4>
                  </div>
                  <p className="text-gray-600 ml-8">
                    {profile.storeDescription}
                  </p>
                </div>
                {/* Store Statistics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t">
                  <div className="bg-[#f8fdf9] p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Total Products</p>
                    <p className="text-2xl font-bold text-gray-800">124</p>
                  </div>
                  <div className="bg-[#f8fdf9] p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Total Orders</p>
                    <p className="text-2xl font-bold text-gray-800">1,456</p>
                  </div>
                  <div className="bg-[#f8fdf9] p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Customer Rating</p>
                    <p className="text-2xl font-bold text-gray-800">4.8/5.0</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Additional Settings Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Security Settings
              </h3>
              <div className="space-y-4">
                <button className="w-full px-4 py-2 text-left border rounded-lg hover:bg-gray-50">
                  Change Password
                </button>
                <button className="w-full px-4 py-2 text-left border rounded-lg hover:bg-gray-50">
                  Two-Factor Authentication
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Notifications
              </h3>
              <div className="space-y-4">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox text-[#23B24B]" defaultChecked />
                  <span className="ml-2">Email Notifications</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox text-[#23B24B]" defaultChecked />
                  <span className="ml-2">Order Updates</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox text-[#23B24B]" defaultChecked />
                  <span className="ml-2">Newsletter</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isEditModalOpen && <EditProfileModal profile={profile} onClose={() => setIsEditModalOpen(false)} onSave={handleProfileUpdate} />}
    </div>;
};
export default ProfileSection;