import React, { useState } from 'react';
import { CitySelector } from './CityManagement/CitySelector';
import { CityWizard } from './CityManagement/CityWizard';
import { CityDashboard } from './CityManagement/CityDashboard';
export const CityManagement = () => {
  const [step, setStep] = useState('select'); // 'select', 'create', 'dashboard'
  const [cityData, setCityData] = useState(null);
  const handleCitySelected = data => {
    setCityData(data);
    setStep('create');
  };
  const handleCityCreated = data => {
    setCityData(data);
    setStep('dashboard');
  };
  return <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">City Management System</h1>
      {step === 'select' && <CitySelector onCitySelected={handleCitySelected} />}
      {step === 'create' && <CityWizard initialData={cityData} onComplete={handleCityCreated} />}
      {step === 'dashboard' && <CityDashboard cityData={cityData} />}
    </div>;
};