import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PopulationForm } from './WizardSteps/PopulationForm';
import { ResourceForm } from './WizardSteps/ResourceForm';
import { InfrastructureForm } from './WizardSteps/InfrastructureForm';
import { CheckIcon, ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';

interface CityWizardProps {
  initialData: any;
  onComplete: (cityData: any) => void;
}

export const CityWizard: React.FC<CityWizardProps> = ({ initialData, onComplete }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [cityData, setCityData] = useState({
    ...initialData,
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

  const updateCityData = (key, value) => {
    setCityData({
      ...cityData,
      [key]: value
    });
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleComplete = () => {
    onComplete(cityData);
  };

  const handleBackToSelection = () => {
    navigate('/city-management');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-8">
        <button
          onClick={handleBackToSelection}
          className="text-blue-600 hover:text-blue-800 flex items-center"
        >
          ← Back to Selection
        </button>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">
          {initialData.isNew ? 'Create New City' : 'Modify Existing City'}
        </h2>
        <p className="text-gray-600">
          {initialData.city}, {initialData.country}
        </p>
      </div>

      {/* Progress Steps */}
      <div className="flex mb-8">
        {[1, 2, 3].map(stepNum => (
          <div key={stepNum} className="flex-1 relative">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto ${step >= stepNum ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
              {step > stepNum ? <CheckIcon className="h-5 w-5" /> : stepNum}
            </div>
            <div className="text-xs text-center mt-2">
              {stepNum === 1 && 'Population'}
              {stepNum === 2 && 'Resources'}
              {stepNum === 3 && 'Infrastructure'}
            </div>
            {stepNum < 3 && <div className={`absolute top-4 left-1/2 w-full h-0.5 ${step > stepNum ? 'bg-blue-600' : 'bg-gray-200'}`}></div>}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="mb-8">
        {step === 1 && <PopulationForm populationData={cityData.population} onChange={data => updateCityData('population', data)} />}
        {step === 2 && <ResourceForm resourceData={cityData.resources} onChange={data => updateCityData('resources', data)} />}
        {step === 3 && <InfrastructureForm infrastructureData={cityData.infrastructure} onChange={data => updateCityData('infrastructure', data)} />}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button onClick={handleBack} className={`flex items-center px-4 py-2 border border-gray-300 rounded-md ${step === 1 ? 'invisible' : ''}`}>
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
          Back
        </button>
        {step < 3 ? (
          <button onClick={handleNext} className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md">
            Next
            <ArrowRightIcon className="h-4 w-4 ml-2" />
          </button>
        ) : (
          <button onClick={handleComplete} className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md">
            Complete
            <CheckIcon className="h-4 w-4 ml-2" />
          </button>
        )}
      </div>
    </div>
  );
};