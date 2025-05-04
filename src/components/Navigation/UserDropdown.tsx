import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDownIcon, UserIcon, SettingsIcon, LogOutIcon, BellIcon } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface UserDropdownProps {
  userData: any;
  onLogout: () => void;
  onNotificationClick: () => void;
}

export const UserDropdown: React.FC<UserDropdownProps> = ({ 
  userData, 
  onLogout,
  onNotificationClick 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { user } = useAuth();

  // For testing - remove in production
  const isAdmin = true;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleProfileClick = () => {
    navigate('/profile');
    setIsOpen(false);
  };

  const handleNotificationSettingsClick = () => {
    navigate('/profile/notifications');
    setIsOpen(false);
  };

  const handleAdminConsoleClick = () => {
    // Navigate to admin console
    navigate('/admin');
    setIsOpen(false);
  };

  return (
    <div className="flex items-center space-x-4">
      {/* Notification Bell */}
      <button
        onClick={onNotificationClick}
        className="relative text-gray-700 hover:text-gray-900"
      >
        <BellIcon className="h-6 w-6" />
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
          2
        </span>
      </button>

      {/* User Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
        >
          <span className="font-medium">{userData?.name || 'User'}</span>
          <ChevronDownIcon className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
            <button
              onClick={handleProfileClick}
              className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center"
            >
              <UserIcon className="h-4 w-4 mr-2" />
              Profile Management
            </button>

            <button
              onClick={handleNotificationSettingsClick}
              className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center"
            >
              <BellIcon className="h-4 w-4 mr-2" />
              Notification Settings
            </button>

            {/* Admin Console - Always show for testing */}
            <button
              onClick={handleAdminConsoleClick}
              className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center"
            >
              <SettingsIcon className="h-4 w-4 mr-2" />
              Admin Console
            </button>

            <button
              onClick={onLogout}
              className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-100 flex items-center"
            >
              <LogOutIcon className="h-4 w-4 mr-2" />
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}; 