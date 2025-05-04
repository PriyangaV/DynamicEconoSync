import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ExistingCitiesProps {
  onCitySelected: (cityData: any) => void;
}

// Mock data for existing cities
const existingCities = [
  {
    id: 1,
    country: 'Japan',
    city: 'Tokyo',
    population: {
      children: 1200000,
      youngAdults: 1800000,
      adults: 2500000,
      elders: 800000,
      illOrDisabled: 400000,
      students: 600000
    },
    resources: {
      natural: ['Mountains', 'Rivers', 'Parks'],
      manMade: ['Public Transport', 'Schools', 'Hospitals']
    },
    infrastructure: {
      residential: 85,
      communal: 90,
      industrial: 75,
      disasterRelief: 80
    }
  },
  {
    id: 2,
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
  },
  {
    id: 3,
    country: 'USA',
    city: 'New York',
    population: {
      children: 1800000,
      youngAdults: 2200000,
      adults: 3500000,
      elders: 1200000,
      illOrDisabled: 600000,
      students: 900000
    },
    resources: {
      natural: ['Central Park', 'Rivers', 'Harbor'],
      manMade: ['Subway', 'Schools', 'Hospitals', 'Statue of Liberty']
    },
    infrastructure: {
      residential: 80,
      communal: 85,
      industrial: 70,
      disasterRelief: 75
    }
  }
];

export const ExistingCities: React.FC<ExistingCitiesProps> = ({ onCitySelected }) => {
  const navigate = useNavigate();

  const handleSelectCity = (city: any) => {
    onCitySelected({ ...city, isNew: false });
  };

  const handleBack = () => {
    navigate('/city-management');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">Existing Cities</h2>
        <button
          onClick={handleBack}
          className="px-4 py-2 text-gray-600 hover:text-gray-800"
        >
          ← Back to Selection
        </button>
      </div>

      <div className="space-y-4">
        {existingCities.map((city) => (
          <div
            key={city.id}
            className="bg-white border rounded-lg p-6 hover:border-blue-500 cursor-pointer transition-colors"
            onClick={() => handleSelectCity(city)}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold">{city.city}</h3>
                <p className="text-gray-600">{city.country}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">
                  Population: {Object.values(city.population).reduce((a, b) => a + b, 0).toLocaleString()}
                </p>
                <p className="text-sm text-gray-500">
                  Infrastructure Score: {Math.round(Object.values(city.infrastructure).reduce((a, b) => a + b, 0) / 4)}%
                </p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Natural Resources</h4>
                <ul className="text-sm text-gray-600">
                  {city.resources.natural.map((resource, index) => (
                    <li key={index}>{resource}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Man-Made Resources</h4>
                <ul className="text-sm text-gray-600">
                  {city.resources.manMade.map((resource, index) => (
                    <li key={index}>{resource}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 