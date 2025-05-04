import React from 'react';
import { SearchIcon } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = 'Search...',
  className = ''
}) => {
  return (
    <div className={`relative ${className}`}>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <SearchIcon className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
    </div>
  );
}; 