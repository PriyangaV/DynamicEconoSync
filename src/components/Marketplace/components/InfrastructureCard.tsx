import React from 'react';
import { Card } from '../../shared/Card';
import { StatusBadge } from '../../shared/StatusBadge';

interface InfrastructureCardProps {
  name: string;
  description: string;
  image: string;
  status: 'active' | 'in-development' | 'planned';
  category: string;
  onClick: () => void;
}

export const InfrastructureCard: React.FC<InfrastructureCardProps> = ({
  name,
  description,
  image,
  status,
  category,
  onClick
}) => {
  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2">
          <StatusBadge status={status} />
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </span>
          <button
            onClick={onClick}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}; 