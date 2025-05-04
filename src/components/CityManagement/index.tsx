import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CitySelector } from './CitySelector';
import { CityDashboard } from './CityDashboard';
import { CityWizard } from './CityWizard';
import { ExistingCities } from './ExistingCities';

interface UserLocation {
  country: string;
  city: string;
}

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

export const CityManagement: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState<any>(null);
  const userLocation = (location.state as { userLocation: UserLocation })?.userLocation;
  const isAdminConsole = location.pathname === '/admin';

  // Initialize with default city data for admin console
  React.useEffect(() => {
    if (isAdminConsole) {
      setSelectedCity(defaultCityData);
    }
  }, [isAdminConsole]);

  const handleCitySelected = (cityData: any) => {
    if (cityData.isNew) {
      navigate('/city-management/new', { state: { initialData: cityData } });
    } else {
      setSelectedCity(cityData);
      navigate(`/city-management/dashboard/${cityData.id || 1}`);
    }
  };

  const handleWizardComplete = (cityData: any) => {
    if (cityData === null) {
      // User clicked back to selection
      setSelectedCity(null);
      navigate('/city-management');
      return;
    }
    setSelectedCity(cityData);
    navigate(`/city-management/dashboard/${cityData.id || 1}`);
  };

  // If it's admin console, directly show the dashboard
  if (isAdminConsole) {
    return (
      <div className="container mx-auto px-4 py-8">
        <CityDashboard cityData={selectedCity} />
      </div>
    );
  }

  // For try by country flow
  return (
    <div className="container mx-auto px-4 py-8">
      {location.pathname === '/city-management' && (
        <CitySelector onCitySelected={handleCitySelected} />
      )}
      {location.pathname === '/city-management/existing' && (
        <ExistingCities onCitySelected={handleCitySelected} />
      )}
      {location.pathname === '/city-management/new' && (
        <CityWizard
          initialData={(location.state as { initialData: any })?.initialData}
          onComplete={handleWizardComplete}
        />
      )}
      {location.pathname.includes('/dashboard/') && (
        <CityDashboard cityData={selectedCity} />
      )}
    </div>
  );
}; 