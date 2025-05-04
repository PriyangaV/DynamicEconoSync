import React from 'react';

interface ProgressBarProps {
  progress: number;
  color?: string;
  showLabel?: boolean;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  color = 'bg-blue-600',
  showLabel = true,
  className = ''
}) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {showLabel && (
        <div className="flex justify-between text-sm text-gray-600">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>
      )}
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`${color} h-2 rounded-full transition-all duration-300`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}; 