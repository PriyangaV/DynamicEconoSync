import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HomeIcon, GlobeIcon, BuildingIcon } from 'lucide-react';
import { UserDropdown } from './UserDropdown';
import { NotificationPanel } from './NotificationPanel';

// Mock data for different regions
const REGION_DATA = {
  somalia: {
    name: 'Somalia',
    cities: ['Mogadishu', 'Hargeisa', 'Kismayo'],
    transport: ['Donkey', 'Walking'],
    energy: ['Solar', 'Manual'],
    housing: ['Hut', 'Thatch', 'Sand'],
    jobs: ['Local Trade', 'Agriculture', 'Fishing'],
    learning: ['Traditional Skills', 'Basic Education']
  },
  japan: {
    name: 'Japan',
    cities: ['Tokyo', 'Osaka', 'Kyoto'],
    transport: ['High-Speed Rail', 'Electric Vehicles', 'Public Transit'],
    energy: ['Nuclear', 'Solar', 'Hydroelectric'],
    housing: ['Modern Apartments', 'Traditional Houses'],
    jobs: ['Technology', 'Manufacturing', 'Services'],
    learning: ['STEM Education', 'Technical Training']
  },
  india: {
    name: 'India',
    cities: ['Mumbai', 'Delhi', 'Bangalore'],
    transport: ['Metro', 'Buses', 'Auto-rickshaws'],
    energy: ['Solar', 'Wind', 'Thermal'],
    housing: ['Apartments', 'Traditional Homes'],
    jobs: ['IT', 'Manufacturing', 'Agriculture'],
    learning: ['Technical Education', 'Traditional Arts']
  }
};

interface HeaderProps {
  isLoggedIn: boolean;
  userData?: {
    name: string;
    email: string;
    level: number;
  };
  onLogin: () => void;
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  isLoggedIn,
  userData,
  onLogin,
  onLogout
}) => {
  const navigate = useNavigate();
  const [isNotificationPanelOpen, setIsNotificationPanelOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-blue-600">EconoSync</h1>
            </div>

            {/* Navigation */}
            <nav className="flex items-center space-x-8">
              <Link
                to="/"
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <HomeIcon className="h-5 w-5" />
                <span>Home</span>
              </Link>
              <Link
                to="/city-management"
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <GlobeIcon className="h-5 w-5" />
                <span>Try By Country</span>
              </Link>
              <Link
                to="/marketplace"
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <BuildingIcon className="h-5 w-5" />
                <span>Marketplace</span>
              </Link>
            </nav>

            {/* Auth */}
            <div className="flex items-center space-x-4">
              {isLoggedIn ? (
                <UserDropdown
                  userData={userData}
                  onLogout={onLogout}
                  onNotificationClick={() => setIsNotificationPanelOpen(true)}
                />
              ) : (
                <button
                  onClick={onLogin}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Notification Panel */}
      <NotificationPanel
        isOpen={isNotificationPanelOpen}
        onClose={() => setIsNotificationPanelOpen(false)}
      />
    </>
  );
}; 