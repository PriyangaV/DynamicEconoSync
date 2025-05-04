import React from 'react';
import { CheckCircleIcon, ShoppingCartIcon, BriefcaseIcon, ArrowRightIcon, UserIcon } from 'lucide-react';

interface OnboardingCompleteProps {
  userData: {
    name: string;
    level: 1 | 2 | 3;
    email: string;
  };
  onComplete: () => void;
}

interface LevelInfo {
  title: string;
  description: string;
}

export function OnboardingComplete({ userData, onComplete }: OnboardingCompleteProps) {
  const levelInfo: Record<1 | 2 | 3, LevelInfo> = {
    1: {
      title: 'Essential Living',
      description: "You've selected the basic level focusing on essential needs with minimal work requirements."
    },
    2: {
      title: 'Standard Living',
      description: "You've selected the standard level with access to technology and entertainment products."
    },
    3: {
      title: 'Advanced Living',
      description: "You've selected the advanced level with access to all available products and services."
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-8 text-center">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center text-gray-600">
          <UserIcon size={20} className="mr-2" />
          <span>{userData.email}</span>
        </div>
        <div className="flex-1 flex justify-center">
          <CheckCircleIcon size={64} className="text-green-500" />
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-4">
        Welcome to EconoSync, {userData.name}!
      </h2>
      <p className="text-gray-600 mb-8">
        Your profile is complete and you're ready to start using the platform.
      </p>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <h3 className="font-bold text-lg text-blue-800 mb-2">
          {levelInfo[userData.level].title}
        </h3>
        <p className="text-blue-700">
          {levelInfo[userData.level].description}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="border border-gray-200 rounded-lg p-6 flex flex-col items-center">
          <ShoppingCartIcon size={32} className="text-blue-600 mb-4" />
          <h3 className="font-bold text-lg mb-2">Input Your Product Needs</h3>
          <p className="text-gray-600 text-center">
            Tell us what products you need and we'll match them with community
            production.
          </p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 inline-flex items-center">
            Go to Products
            <ArrowRightIcon size={16} className="ml-2" />
          </button>
        </div>
        <div className="border border-gray-200 rounded-lg p-6 flex flex-col items-center">
          <BriefcaseIcon size={32} className="text-blue-600 mb-4" />
          <h3 className="font-bold text-lg mb-2">Explore Available Jobs</h3>
          <p className="text-gray-600 text-center">
            Find jobs that match your skills and start earning credits.
          </p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 inline-flex items-center">
            Go to Jobs
            <ArrowRightIcon size={16} className="ml-2" />
          </button>
        </div>
      </div>
      <button
        onClick={onComplete}
        className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors"
      >
        Go to Dashboard
      </button>
    </div>
  );
}