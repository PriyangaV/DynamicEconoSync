import React, { Children } from 'react';
import { UsersIcon } from 'lucide-react';
export const PopulationForm = ({
  populationData,
  onChange
}) => {
  const handleChange = (key, value) => {
    onChange({
      ...populationData,
      [key]: parseInt(value) || 0
    });
  };
  const calculateTotal = () => {
    return Object.values(populationData).reduce((sum, val) => sum + val, 0);
  };
  return <div>
      <div className="flex items-center mb-6">
        <UsersIcon className="h-6 w-6 text-blue-600 mr-2" />
        <h3 className="text-xl font-medium">Population Demographics</h3>
      </div>
      <p className="mb-4 text-gray-600">
        Define the population breakdown by demographic categories. This will
        determine user levels and resource needs.
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Children (0-14) - Level 1
          </label>
          <input type="number" min="0" className="w-full px-4 py-2 border border-gray-300 rounded-md" value={populationData.children} onChange={e => handleChange('children', e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Young Adults (15-25) - Level 2
          </label>
          <input type="number" min="0" className="w-full px-4 py-2 border border-gray-300 rounded-md" value={populationData.youngAdults} onChange={e => handleChange('youngAdults', e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Adults (25-50) - Level 3
          </label>
          <input type="number" min="0" className="w-full px-4 py-2 border border-gray-300 rounded-md" value={populationData.adults} onChange={e => handleChange('adults', e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Elders (50+) - Level 4
          </label>
          <input type="number" min="0" className="w-full px-4 py-2 border border-gray-300 rounded-md" value={populationData.elders} onChange={e => handleChange('elders', e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Ill or Disabled - Level 5
          </label>
          <input type="number" min="0" className="w-full px-4 py-2 border border-gray-300 rounded-md" value={populationData.illOrDisabled} onChange={e => handleChange('illOrDisabled', e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Students/Learners (any age) - Level 6
          </label>
          <input type="number" min="0" className="w-full px-4 py-2 border border-gray-300 rounded-md" value={populationData.students} onChange={e => handleChange('students', e.target.value)} />
        </div>
      </div>
      <div className="mt-6 p-4 bg-blue-50 rounded-md">
        <div className="flex justify-between items-center">
          <span className="font-medium">Total Population:</span>
          <span className="text-xl font-bold">{calculateTotal()}</span>
        </div>
      </div>
    </div>;
};