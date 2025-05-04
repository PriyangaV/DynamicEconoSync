import React, { useState } from 'react';
import { PlusCircleIcon, Building2Icon } from 'lucide-react';
import { mockCities, CityData1 } from '../../shared/mockup/cityData';

interface CitySelectorProps {
  onCitySelected: (cityData: CityData1) => void;
}

export const CitySelector: React.FC<CitySelectorProps> = ({ onCitySelected }) => {
  const [selectedOption, setSelectedOption] = useState<'new' | 'existing' | null>(null);
  const [countryName, setCountryName] = useState('');
  const [cityName, setCityName] = useState('');
  const [existingCities] = useState([
    { id: 1, country: 'United States', city: 'New York' },
    { id: 2, country: 'Japan', city: 'Tokyo' },
    { id: 3, country: 'Germany', city: 'Berlin' }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCitySelected({
      isNew: true,
      country: countryName,
      city: cityName,
      population: {
        children: 0,
        youngAdults: 0,
        adults: 0,
        elders: 0,
        illOrDisabled: 0,
        students: 0
      },
      resources: {
        natural: [],
        manMade: []
      },
      infrastructure: {
        residential: 0,
        communal: 0,
        industrial: 0,
        disasterRelief: 0
      }
    });
  };

  const handleExistingCitySelect = (city: { id: number; country: string; city: string }) => {
    onCitySelected({
      isNew: false,
      country: city.country,
      city: city.city,
      id: city.id,
      population: {
        children: 0,
        youngAdults: 0,
        adults: 0,
        elders: 0,
        illOrDisabled: 0,
        students: 0
      },
      resources: {
        natural: [],
        manMade: []
      },  
      infrastructure: {
        residential: 0,
        communal: 0,
        industrial: 0,
        disasterRelief: 0
      }
    });
  };

  if (!selectedOption) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Welcome to City Management</h2>
          <p className="text-gray-600">Choose how you'd like to proceed</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <button
            onClick={() => setSelectedOption('new')}
            className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-500"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <PlusCircleIcon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Try for New City</h3>
              <p className="text-gray-600">Start fresh and create your own city from scratch</p>
            </div>
          </button>

          <button
            onClick={() => setSelectedOption('existing')}
            className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-500"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <Building2Icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose from Existing</h3>
              <p className="text-gray-600">Select from our collection of pre-built cities</p>
            </div>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">
          {selectedOption === 'new' ? 'Create New City' : 'Select Existing City'}
        </h2>
        <p className="text-gray-600">
          {selectedOption === 'new' 
            ? 'Enter the details for your new city'
            : 'Choose from our collection of cities'}
        </p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg">
        <button
          onClick={() => setSelectedOption(null)}
          className="text-gray-600 hover:text-gray-800 mb-6 flex items-center"
        >
          <span className="mr-2">←</span> Back to Selection
        </button>

        {selectedOption === 'new' ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                Country
              </label>
              <input
                type="text"
                id="country"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter country name"
                value={countryName}
                onChange={(e) => setCountryName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                City
              </label>
              <input
                type="text"
                id="city"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter city name"
                value={cityName}
                onChange={(e) => setCityName(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Continue
            </button>
          </form>
        ) : (
          <div className="space-y-4">
            {existingCities.map((city) => (
              <button
                key={city.id}
                className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-gray-50 flex justify-between items-center transition-colors"
                onClick={() => handleExistingCitySelect(city)}
              >
                <div>
                  <span className="font-medium text-lg">{city.city}</span>
                  <span className="text-gray-600 ml-2">{city.country}</span>
                </div>
                <span className="text-blue-600 font-medium">Select</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
