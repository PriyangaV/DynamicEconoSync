import React from 'react';
import { UsersIcon, UserIcon, UserPlusIcon, UserMinusIcon } from 'lucide-react';

interface Population {
  children: number;
  youngAdults: number;
  adults: number;
  elders: number;
  illOrDisabled: number;
  students: number;
}

interface CityData {
  population: Population;
}

interface PopulationPanelProps {
  cityData: CityData;
  minimal?: boolean;
}

export const PopulationPanel: React.FC<PopulationPanelProps> = ({
  cityData,
  minimal = false
}) => {
  const calculateTotal = () => {
    if (!cityData?.population) return 0;
    return Object.values(cityData.population).reduce((sum: number, val: number) => sum + (val || 0), 0);
  };

  const populationCategories = [{
    key: 'children' as keyof Population,
    label: 'Children (0-14)',
    level: 1,
    icon: <UserIcon className="h-5 w-5" />
  }, {
    key: 'youngAdults' as keyof Population,
    label: 'Young Adults (15-25)',
    level: 2,
    icon: <UserIcon className="h-5 w-5" />
  }, {
    key: 'adults' as keyof Population,
    label: 'Adults (25-50)',
    level: 3,
    icon: <UserIcon className="h-5 w-5" />
  }, {
    key: 'elders' as keyof Population,
    label: 'Elders (50+)',
    level: 4,
    icon: <UserIcon className="h-5 w-5" />
  }, {
    key: 'illOrDisabled' as keyof Population,
    label: 'Ill or Disabled',
    level: 5,
    icon: <UserMinusIcon className="h-5 w-5" />
  }, {
    key: 'students' as keyof Population,
    label: 'Students/Learners',
    level: 6,
    icon: <UserPlusIcon className="h-5 w-5" />
  }];

  if (!cityData?.population) {
    return (
      <div className="border border-gray-200 rounded-md p-4">
        <div className="text-center text-gray-500">
          No population data available
        </div>
      </div>
    );
  }

  if (minimal) {
    return (
      <div className="border border-gray-200 rounded-md p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <UsersIcon className="h-5 w-5 text-blue-600 mr-2" />
            <span className="font-medium">Total Population</span>
          </div>
          <span className="text-xl font-bold">{calculateTotal()}</span>
        </div>
        <div className="space-y-2">
          {populationCategories.map(category => (
            <div key={category.key} className="flex justify-between text-sm">
              <span className="text-gray-600">{category.label}</span>
              <span className="font-medium">
                {cityData.population[category.key] || 0}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center mb-6">
        <UsersIcon className="h-6 w-6 text-blue-600 mr-2" />
        <h3 className="text-xl font-medium">Population Management</h3>
      </div>
      <div className="mb-6 p-4 bg-blue-50 rounded-md">
        <div className="flex justify-between items-center">
          <span className="font-medium">Total Population:</span>
          <span className="text-xl font-bold">{calculateTotal()}</span>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {populationCategories.map(category => (
          <div key={category.key} className="border border-gray-200 rounded-md p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2">
                  {category.icon}
                </div>
                <span className="font-medium">{category.label}</span>
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Level {category.level}
              </span>
            </div>
            <div className="text-2xl font-bold mb-2">
              {cityData.population[category.key] || 0}
            </div>
            <div className="text-sm text-gray-600">
              {calculateTotal() > 0
                ? ((cityData.population[category.key] || 0) / calculateTotal() * 100).toFixed(1)
                : 0}% of total population
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};