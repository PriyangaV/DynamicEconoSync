import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, BuildingIcon, GlobeIcon, MenuIcon, ShoppingBagIcon } from 'lucide-react';
import { LoginButton } from './Auth/LoginButton';
import { NotificationCenter } from './shared/NotificationCenter';
export const Navigation = () => {
  // Mock user data - replace with actual auth logic
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const handleLogin = () => {
    // Mock login - replace with actual auth
    setIsLoggedIn(true);
    setUserData({
      name: 'Sarah Johnson',
      level: 3
    });
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData(null);
  };
  return <header className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <BuildingIcon className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold">CityOS</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
              <HomeIcon className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link to="/city-management" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
              <GlobeIcon className="h-5 w-5" />
              <span>Try By Country</span>
            </Link>
            {isLoggedIn && <>
                <Link to="/learning" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
                  <span>Learning Hub</span>
                </Link>
                <Link to="/marketplace" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
                  <ShoppingBagIcon className="h-5 w-5" />
                  <span>Marketplace</span>
                </Link>
                <NotificationCenter />
              </>}
            <LoginButton isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} userData={userData} />
          </nav>
          <div className="md:hidden">
            <button className="p-2">
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>;
};