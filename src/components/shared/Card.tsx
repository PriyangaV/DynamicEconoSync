import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  iconColor?: string;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  icon,
  iconColor = 'text-blue-600',
  onClick,
  className = '',
  children
}) => {
  return (
    <div 
      className={`bg-white rounded-lg shadow-md p-6 ${onClick ? 'cursor-pointer hover:shadow-lg transition-shadow' : ''} ${className}`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        {icon && <div className={iconColor}>{icon}</div>}
      </div>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      {children}
    </div>
  );
}; 