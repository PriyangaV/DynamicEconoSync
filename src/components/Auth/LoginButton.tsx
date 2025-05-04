import React from 'react';
import { UserIcon, LogOutIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface LoginButtonProps {
  isLoggedIn: boolean;
  onLogin: () => void;
  onLogout: () => void;
  userData?: {
    name: string;
    email: string;
    level: number;
  };
}

export const LoginButton: React.FC<LoginButtonProps> = ({
  isLoggedIn,
  onLogin,
  onLogout,
  userData
}) => {
  const navigate = useNavigate();

  if (!isLoggedIn) {
    return (
      <button 
        onClick={onLogin}
        className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
      >
        <UserIcon className="h-5 w-5" />
        <span>Login</span>
      </button>
    );
  }

  const handleProfileClick = () => {
    navigate('/profile');
  };

  return (
    <div className="flex items-center space-x-4">
      <button 
        onClick={handleProfileClick}
        className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors"
      >
        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
          <UserIcon className="h-5 w-5 text-blue-600" />
        </div>
        <div className="text-left">
          <div className="text-sm font-medium">{userData?.name}</div>
          <div className="text-xs text-gray-500">{userData?.email}</div>
        </div>
      </button>
      <button 
        onClick={onLogout}
        className="p-2 text-gray-600 hover:text-red-600 hover:bg-gray-100 rounded-full transition-colors"
        title="Logout"
      >
        <LogOutIcon className="h-5 w-5" />
      </button>
    </div>
  );
};