import React from 'react';
import { HomeIcon, UsersIcon, BuildingIcon, ShieldIcon } from 'lucide-react';
export const InfrastructureForm = ({
  infrastructureData,
  onChange
}) => {
  const handleChange = (key, value) => {
    onChange({
      ...infrastructureData,
      [key]: parseInt(value) || 0
    });
  };
  const calculateTotal = () => {
    return Object.values(infrastructureData).reduce((sum, val) => sum + val, 0);
  };
  return <div>
      <div className="flex items-center mb-6">
        <BuildingIcon className="h-6 w-6 text-blue-600 mr-2" />
        <h3 className="text-xl font-medium">Infrastructure Allocation</h3>
      </div>
      <p className="mb-4 text-gray-600">
        Allocate percentages to different types of infrastructure in your city.
        The total should add up to 100%.
      </p>
      <div className="space-y-6">
        <div>
          <div className="flex items-center mb-2">
            <HomeIcon className="h-5 w-5 text-gray-600 mr-2" />
            <label className="text-sm font-medium">Residential (%)</label>
          </div>
          <input type="range" min="0" max="100" className="w-full" value={infrastructureData.residential} onChange={e => handleChange('residential', e.target.value)} />
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">0%</span>
            <span className="text-sm font-medium">
              {infrastructureData.residential}%
            </span>
            <span className="text-sm text-gray-600">100%</span>
          </div>
        </div>
        <div>
          <div className="flex items-center mb-2">
            <UsersIcon className="h-5 w-5 text-gray-600 mr-2" />
            <label className="text-sm font-medium">Communal (%)</label>
          </div>
          <input type="range" min="0" max="100" className="w-full" value={infrastructureData.communal} onChange={e => handleChange('communal', e.target.value)} />
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">0%</span>
            <span className="text-sm font-medium">
              {infrastructureData.communal}%
            </span>
            <span className="text-sm text-gray-600">100%</span>
          </div>
        </div>
        <div>
          <div className="flex items-center mb-2">
            <BuildingIcon className="h-5 w-5 text-gray-600 mr-2" />
            <label className="text-sm font-medium">Industrial (%)</label>
          </div>
          <input type="range" min="0" max="100" className="w-full" value={infrastructureData.industrial} onChange={e => handleChange('industrial', e.target.value)} />
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">0%</span>
            <span className="text-sm font-medium">
              {infrastructureData.industrial}%
            </span>
            <span className="text-sm text-gray-600">100%</span>
          </div>
        </div>
        <div>
          <div className="flex items-center mb-2">
            <ShieldIcon className="h-5 w-5 text-gray-600 mr-2" />
            <label className="text-sm font-medium">Disaster Relief (%)</label>
          </div>
          <input type="range" min="0" max="100" className="w-full" value={infrastructureData.disasterRelief} onChange={e => handleChange('disasterRelief', e.target.value)} />
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">0%</span>
            <span className="text-sm font-medium">
              {infrastructureData.disasterRelief}%
            </span>
            <span className="text-sm text-gray-600">100%</span>
          </div>
        </div>
      </div>
      <div className="mt-6 p-4 bg-blue-50 rounded-md">
        <div className="flex justify-between items-center">
          <span className="font-medium">Total Allocation:</span>
          <span className={`text-xl font-bold ${calculateTotal() === 100 ? 'text-green-600' : 'text-red-600'}`}>
            {calculateTotal()}%
          </span>
        </div>
        {calculateTotal() !== 100 && <p className="text-sm text-red-600 mt-2">
            Total allocation should be exactly 100%.
          </p>}
      </div>
    </div>;
};