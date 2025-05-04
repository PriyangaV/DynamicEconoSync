import React from 'react';
import { CityDashboard } from './CityDashboard';

// Mock city data for Paris
const defaultCityData = {
  isNew: false,
  country: 'France',
  city: 'Paris',
  population: {
    children: 1500000,
    youngAdults: 2000000,
    adults: 3000000,
    elders: 1000000,
    illOrDisabled: 500000,
    students: 800000
  },
  resources: {
    natural: ['Seine River', 'Parks', 'Forests'],
    manMade: ['Public Transport', 'Schools', 'Hospitals', 'Eiffel Tower']
  },
  infrastructure: {
    residential: 75,
    communal: 80,
    industrial: 65,
    disasterRelief: 70
  }
};

export const AdminDashboard: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <CityDashboard cityData={defaultCityData} />
    </div>
  );
}; 