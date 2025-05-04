import React from 'react';

interface InfrastructureSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const InfrastructureSearch: React.FC<InfrastructureSearchProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
}) => {
  const categories = [
    { id: 'housing', label: 'Housing' },
    { id: 'transportation', label: 'Transportation' },
    { id: 'food', label: 'Food Systems' },
    { id: 'technology', label: 'Technology' },
    { id: 'education', label: 'Education' },
    { id: 'media', label: 'Media' },
    { id: 'infrastructure', label: 'Infrastructure Tools' },
  ];

  return (
    <div className="space-y-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search infrastructure..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
}; 