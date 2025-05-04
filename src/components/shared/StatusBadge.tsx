import React from 'react';

type StatusType = 'active' | 'in-development' | 'planned' | 'completed' | 'pending';

interface StatusBadgeProps {
  status: StatusType;
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className = '' }) => {
  const getStatusStyles = (status: StatusType) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'in-development':
        return 'bg-yellow-100 text-yellow-800';
      case 'planned':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-purple-100 text-purple-800';
      case 'pending':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusLabel = (status: StatusType) => {
    switch (status) {
      case 'active':
        return 'Active';
      case 'in-development':
        return 'In Development';
      case 'planned':
        return 'Planned';
      case 'completed':
        return 'Completed';
      case 'pending':
        return 'Pending';
      default:
        return status;
    }
  };

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusStyles(status)} ${className}`}>
      {getStatusLabel(status)}
    </span>
  );
}; 