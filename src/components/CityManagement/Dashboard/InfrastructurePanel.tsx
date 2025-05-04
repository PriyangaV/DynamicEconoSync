import React from 'react';
import { HomeIcon, UsersIcon, BuildingIcon, ShieldIcon } from 'lucide-react';

interface Infrastructure {
  residential: number;
  communal: number;
  industrial: number;
  disasterRelief: number;
}

interface CityData {
  infrastructure: Infrastructure;
}

interface InfrastructurePanelProps {
  cityData: CityData;
  minimal?: boolean;
}

export const InfrastructurePanel: React.FC<InfrastructurePanelProps> = ({
  cityData,
  minimal = false
}) => {
  const infrastructureTypes = [{
    key: 'residential' as keyof Infrastructure,
    label: 'Residential',
    icon: <HomeIcon className="h-5 w-5" />,
    color: 'bg-blue-100 text-blue-600'
  }, {
    key: 'communal' as keyof Infrastructure,
    label: 'Communal',
    icon: <UsersIcon className="h-5 w-5" />,
    color: 'bg-green-100 text-green-600'
  }, {
    key: 'industrial' as keyof Infrastructure,
    label: 'Industrial',
    icon: <BuildingIcon className="h-5 w-5" />,
    color: 'bg-yellow-100 text-yellow-600'
  }, {
    key: 'disasterRelief' as keyof Infrastructure,
    label: 'Disaster Relief',
    icon: <ShieldIcon className="h-5 w-5" />,
    color: 'bg-red-100 text-red-600'
  }];

  if (!cityData?.infrastructure) {
    return (
      <div className="border border-gray-200 rounded-md p-4">
        <div className="text-center text-gray-500">
          No infrastructure data available
        </div>
      </div>
    );
  }

  if (minimal) {
    return (
      <div className="border border-gray-200 rounded-md p-4">
        <div className="space-y-3">
          {infrastructureTypes.map(type => (
            <div key={type.key} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${type.color}`}>
                {type.icon}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium">{type.label}</span>
                  <span className="text-sm font-medium">
                    {cityData.infrastructure[type.key] || 0}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div
                    className="h-1.5 rounded-full"
                    style={{
                      width: `${cityData.infrastructure[type.key] || 0}%`,
                      backgroundColor: type.color.split(' ')[0].replace('bg', 'bg-opacity-100')
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center mb-6">
        <BuildingIcon className="h-6 w-6 text-blue-600 mr-2" />
        <h3 className="text-xl font-medium">Infrastructure Management</h3>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {infrastructureTypes.map(type => (
          <div key={type.key} className="border border-gray-200 rounded-md p-4">
            <div className="flex items-center mb-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${type.color}`}>
                {type.icon}
              </div>
              <div>
                <h4 className="font-medium">{type.label}</h4>
                <p className="text-sm text-gray-500">
                  {type.key === 'residential' && 'Housing and living spaces'}
                  {type.key === 'communal' && 'Public and shared spaces'}
                  {type.key === 'industrial' && 'Production and manufacturing'}
                  {type.key === 'disasterRelief' && 'Emergency and safety'}
                </p>
              </div>
            </div>
            <div className="mb-2">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium">Allocation</span>
                <span className="text-sm font-medium">
                  {cityData.infrastructure[type.key] || 0}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="h-2.5 rounded-full"
                  style={{
                    width: `${cityData.infrastructure[type.key] || 0}%`,
                    backgroundColor: type.color.split(' ')[0].replace('bg', 'bg-opacity-100')
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};