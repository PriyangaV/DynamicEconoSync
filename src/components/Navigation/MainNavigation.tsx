import React from 'react';
import { Header } from './Header';
import { UserDropdown } from './UserDropdown';

interface MainNavigationProps {
  isLoggedIn: boolean;
  userData?: {
    name: string;
    email: string;
    level: number;
  };
  onLogin: () => void;
  onLogout: () => void;
}

export const MainNavigation: React.FC<MainNavigationProps> = ({
  isLoggedIn,
  userData,
  onLogin,
  onLogout
}) => {
  return (
    <div className="bg-gray-50">
      <Header
        isLoggedIn={isLoggedIn}
        userData={userData}
        onLogin={onLogin}
        onLogout={onLogout}
        userDropdown={
          isLoggedIn && userData ? (
            <UserDropdown userData={userData} onLogout={onLogout} />
          ) : null
        }
      />
    </div>
  );
}; 