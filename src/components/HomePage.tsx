import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, GlobeIcon } from 'lucide-react';
export const HomePage = () => {
  return <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <div className="mb-8">
        <GlobeIcon className="h-24 w-24 text-blue-600 mx-auto" />
        <h1 className="text-4xl font-bold mt-4 mb-2">Welcome to CityOS</h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          A transparent city management system for building sustainable
          communities
        </p>
      </div>
      <Link to="/city-management" className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
        <span>Try By Country</span>
        <ArrowRightIcon className="ml-2 h-5 w-5" />
      </Link>
    </div>;
};