import React, { createContext, useContext, useState, useEffect } from 'react';
import { defaultUserData, UserData as User } from '../shared/mockup/userData';

export interface Users {
  id: string;
  name: string;
  email: string;
  level: number;
  role?: 'user' | 'admin' | 'city_manager';
  learningPaths?: Array<{
    id: string;
    name: string;
    progress: number;
  }>;
  recommendedCourses?: Array<{
    id: string;
    name: string;
    description: string;
    duration: string;
    level: string;
  }>;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (userData: User) => void;
  logout: () => void;
  isNewUser: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isNewUser, setIsNewUser] = useState(false);

  useEffect(() => {
    // Check for stored user data on mount
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setIsAuthenticated(true);
      setIsNewUser(parsedUser.isNewUser || false);
    }
  }, []);

  const login = (userData: User) => {
    const newUserData = {
      ...userData,
      isNewUser: !userData.level, // If user doesn't have a level, they're new
      role: 'admin' as const // Set role as admin for testing
    };
    setUser(newUserData);
    setIsAuthenticated(true);
    setIsNewUser(newUserData.isNewUser);
    localStorage.setItem('user', JSON.stringify(newUserData));
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    setIsNewUser(false);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout, isNewUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 