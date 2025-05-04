import React, { useState } from 'react';
import { Building2Icon, StoreIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface MarketplaceSelectorProps {
  onMarketplaceSelected: (data: {
    country: string;
    city: string;
  }) => void;
  isLoggedIn?: boolean;
}

// Mock data for diverse countries and their cities
const countryData = [
  // Desert Countries
  { name: 'United Arab Emirates', code: 'AE', flag: 'https://flagcdn.com/w40/ae.png' },
  { name: 'Saudi Arabia', code: 'SA', flag: 'https://flagcdn.com/w40/sa.png' },
  { name: 'Egypt', code: 'EG', flag: 'https://flagcdn.com/w40/eg.png' },
  { name: 'Morocco', code: 'MA', flag: 'https://flagcdn.com/w40/ma.png' },
  
  // Mountain Countries
  { name: 'Switzerland', code: 'CH', flag: 'https://flagcdn.com/w40/ch.png' },
  { name: 'Nepal', code: 'NP', flag: 'https://flagcdn.com/w40/np.png' },
  { name: 'Peru', code: 'PE', flag: 'https://flagcdn.com/w40/pe.png' },
  { name: 'Bhutan', code: 'BT', flag: 'https://flagcdn.com/w40/bt.png' },
  
  // Island Nations
  { name: 'Maldives', code: 'MV', flag: 'https://flagcdn.com/w40/mv.png' },
  { name: 'Indonesia', code: 'ID', flag: 'https://flagcdn.com/w40/id.png' },
  { name: 'Philippines', code: 'PH', flag: 'https://flagcdn.com/w40/ph.png' },
  { name: 'Fiji', code: 'FJ', flag: 'https://flagcdn.com/w40/fj.png' },
  
  // Low Resource Countries
  { name: 'Somalia', code: 'SO', flag: 'https://flagcdn.com/w40/so.png' },
  { name: 'Yemen', code: 'YE', flag: 'https://flagcdn.com/w40/ye.png' },
  { name: 'Haiti', code: 'HT', flag: 'https://flagcdn.com/w40/ht.png' },
  { name: 'South Sudan', code: 'SS', flag: 'https://flagcdn.com/w40/ss.png' },
  
  // Rich Countries
  { name: 'United States', code: 'US', flag: 'https://flagcdn.com/w40/us.png' },
  { name: 'United Kingdom', code: 'GB', flag: 'https://flagcdn.com/w40/gb.png' },
  { name: 'Japan', code: 'JP', flag: 'https://flagcdn.com/w40/jp.png' },
  { name: 'Germany', code: 'DE', flag: 'https://flagcdn.com/w40/de.png' },
  
  // Major Continents Representatives
  { name: 'Brazil', code: 'BR', flag: 'https://flagcdn.com/w40/br.png' },
  { name: 'South Africa', code: 'ZA', flag: 'https://flagcdn.com/w40/za.png' },
  { name: 'Australia', code: 'AU', flag: 'https://flagcdn.com/w40/au.png' },
  { name: 'China', code: 'CN', flag: 'https://flagcdn.com/w40/cn.png' },
  { name: 'France', code: 'FR', flag: 'https://flagcdn.com/w40/fr.png' },
  { name: 'Canada', code: 'CA', flag: 'https://flagcdn.com/w40/ca.png' }
];

const cityData: Record<string, string[]> = {
  'France': ['Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice', 'Nantes', 'Strasbourg', 'Montpellier'],
  'Somalia': ['Mogadishu', 'Hargeisa', 'Bosaso', 'Kismayo', 'Berbera', 'Galkayo', 'Merca', 'Baidoa'],
  'Canada': ['Toronto', 'Montreal', 'Vancouver', 'Calgary', 'Edmonton', 'Ottawa', 'Winnipeg', 'Quebec City'],
  // Add more countries and their cities as needed
};

export const MarketplaceSelector: React.FC<MarketplaceSelectorProps> = ({ 
  onMarketplaceSelected,
  isLoggedIn = false 
}) => {
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [countryQuery, setCountryQuery] = useState('');
  const [cityQuery, setCityQuery] = useState('');

  // If user is logged in, set default to France, Paris
  React.useEffect(() => {
    if (isLoggedIn) {
      setSelectedCountry('France');
      setSelectedCity('Paris');
    }
  }, [isLoggedIn]);

  const filteredCountries = countryQuery === ''
    ? countryData
    : countryData.filter((country) =>
        country.name.toLowerCase().includes(countryQuery.toLowerCase())
      );

  const filteredCities = selectedCountry
    ? (cityQuery === ''
        ? cityData[selectedCountry] || []
        : (cityData[selectedCountry] || []).filter((city) =>
            city.toLowerCase().includes(cityQuery.toLowerCase())
          ))
    : [];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCountry || !selectedCity) return;
    onMarketplaceSelected({
      country: selectedCountry,
      city: selectedCity
    });
  };

  if (isLoggedIn) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Welcome to Marketplace</h2>
          <p className="text-gray-600">You're viewing the marketplace for {selectedCity}, {selectedCountry}</p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <img
                src={countryData.find(c => c.name === selectedCountry)?.flag}
                alt={`${selectedCountry} flag`}
                className="w-8 h-6 object-cover rounded-sm mr-3"
              />
              <span className="text-lg font-medium">{selectedCity}, {selectedCountry}</span>
            </div>
            <button
              onClick={() => {
                setSelectedCountry('');
                setSelectedCity('');
              }}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Change Location
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Welcome to Marketplace</h2>
        <p className="text-gray-600">Select a location to view its marketplace</p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
              Country
            </label>
            <select
              id="country"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={selectedCountry}
              onChange={(e) => {
                setSelectedCountry(e.target.value);
                setSelectedCity('');
              }}
              required
            >
              <option value="">Select a country</option>
              {filteredCountries.map((country) => (
                <option key={country.code} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
              City
            </label>
            <select
              id="city"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              disabled={!selectedCountry}
              required
            >
              <option value="">Select a city</option>
              {filteredCities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            disabled={!selectedCountry || !selectedCity}
          >
            View Marketplace
          </button>
        </form>
      </div>
    </div>
  );
}; 