import React from 'react';
import { CityData } from '../../../shared/mockup/cityData';

interface CityInfoProps {
  cityData: CityData;
}

export const CityInfo: React.FC<CityInfoProps> = ({ cityData }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        {cityData.name} Infrastructure
      </h1>
      <p className="text-gray-600">
        Population: {cityData.population.toLocaleString()}
      </p>
    </div>
  );
}; 