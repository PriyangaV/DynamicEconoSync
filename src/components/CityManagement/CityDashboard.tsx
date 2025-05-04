import React, { useState } from 'react';
import { Tabs } from '../shared/Tabs';
import { RequestPanel } from './Dashboard/RequestPanel';
import { JobPanel } from './Dashboard/JobPanel';
import { PopulationPanel } from './Dashboard/PopulationPanel';
import { ResourcePanel } from './Dashboard/ResourcePanel';
import { InfrastructurePanel } from './Dashboard/InfrastructurePanel';
import { ActivityFeed } from './Dashboard/ActivityFeed';
import { PollHistory } from './Dashboard/PollHistory';
import { ProductMarketplace } from '../Marketplace/ProductMarketplace';
import { JobMarketplace } from '../Marketplace/JobMarketplace';
import { InfrastructureMarketplace } from '../Marketplace/InfrastructureMarketplace';
import { useAuth } from '../../contexts/AuthContext';
import { BookOpenIcon, ShoppingBagIcon, BriefcaseIcon, BuildingIcon, UsersIcon, BarChartIcon, ChartBarIcon } from 'lucide-react';
import { LearningMarketplace } from '../Marketplace/LearningMarketplace';
import { defaultUserData } from '../../shared/mockup/userData';
import { Marketplace } from '../Marketplace/Marketplace';

interface CityData {
  id?: number;
  isNew: boolean;
  country: string;
  city: string;
  population: {
    children: number;
    youngAdults: number;
    adults: number;
    elders: number;
    illOrDisabled: number;
    students: number;
  };
  resources: {
    natural: string[];
    manMade: string[];
  };
  infrastructure: {
    residential: number;
    communal: number;
    industrial: number;
    disasterRelief: number;
  };
}


interface CityDashboardProps {
  cityData: CityData | null;
}

export const CityDashboard: React.FC<CityDashboardProps> = ({ cityData }) => {
  // If no city data is provided, show a message
  if (!cityData) {
    return (
      <div className="text-center py-8">
        <h2 className="text-xl font-semibold text-gray-600">No city selected</h2>
        <p className="text-gray-500 mt-2">Please select a city to view its dashboard</p>
      </div>
    );
  }

  const [activeTab, setActiveTab] = useState('overview');
  const [activeStatsTab, setActiveStatsTab] = useState('population');
  const [activeMarketplaceTab, setActiveMarketplaceTab] = useState('products');
  const [activeCommunityTab, setActiveCommunityTab] = useState('requests');
  const { user } = useAuth();

  const statsTabs = [
    {
      id: 'population',
      label: 'Population',
      icon: <UsersIcon className="h-5 w-5" />
    },
    {
      id: 'resources',
      label: 'Resources',
      icon: <ChartBarIcon className="h-5 w-5" />
    },
    {
      id: 'infrastructure',
      label: 'Infrastructure',
      icon: <BuildingIcon className="h-5 w-5" />
    }
  ];

  const marketplaceTabs = [
    {
      id: 'infrastructure',
      label: 'Infrastructure',
      icon: <BuildingIcon className="h-5 w-5" />
    },
    {
      id: 'products',
      label: 'Products & Services',
      icon: <ShoppingBagIcon className="h-5 w-5" />
    },
    {
      id: 'jobs',
      label: 'Available Jobs',
      icon: <BriefcaseIcon className="h-5 w-5" />
    },
    {
      id: 'learning',
      label: 'Learning Hub',
      icon: <BookOpenIcon className="h-5 w-5" />
    }
  ];



  return (
    <div>
      <div className="max-w-7xl mx-auto py-8">
        <h2 className="text-2xl font-bold">
          {cityData.city}, {cityData.country}
        </h2>
        <p className="text-gray-600">City Management Dashboard</p>
      </div>
      <Tabs tabs={[
        {
          id: 'overview',
          label: 'Overview'
        },
        {
          id: 'statistics',
          label: 'City Statistics',
          icon: <ChartBarIcon className="h-5 w-5" />
        },
        {
          id: 'marketplace',
          label: 'Marketplace',
          icon: <ShoppingBagIcon className="h-5 w-5" />
        },
        {
          id: 'community',
          label: 'Community',
          icon: <UsersIcon className="h-5 w-5" />
        }
      ]} activeTab={activeTab} onChange={setActiveTab} />
      <div className="bg-white p-6 rounded-lg shadow-md">
        {activeTab === 'overview' && (
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-4">Population Summary</h3>
              <PopulationPanel cityData={cityData} minimal={true} />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Infrastructure Summary</h3>
              <InfrastructurePanel cityData={cityData} minimal={true} />
            </div>
            <div className="md:col-span-2">
              <h3 className="text-lg font-medium mb-4">Recent Activity</h3>
              <ActivityFeed />
            </div>
          </div>
        )}

        {activeTab === 'statistics' && (
          <div>
            <div className="mb-6 border-b border-gray-200">
              <nav className="flex space-x-4">
                {statsTabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveStatsTab(tab.id)}
                    className={`py-2 px-4 font-medium text-sm flex items-center space-x-2 ${
                      activeStatsTab === tab.id
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>

            {activeStatsTab === 'population' && <PopulationPanel cityData={cityData} />}
            {activeStatsTab === 'resources' && <ResourcePanel cityData={cityData} />}
            {activeStatsTab === 'infrastructure' && <InfrastructurePanel cityData={cityData} />}
          </div>
        )}
        
        {activeTab === 'marketplace' && (
          // <div>
          //   <div className="mb-6 border-b border-gray-200">
          //     <nav className="flex space-x-4">
          //       {marketplaceTabs.map(tab => (
          //         <button
          //           key={tab.id}
          //           onClick={() => setActiveMarketplaceTab(tab.id)}
          //           className={`py-2 px-4 font-medium text-sm flex items-center space-x-2 ${
          //             activeMarketplaceTab === tab.id
          //               ? 'text-blue-600 border-b-2 border-blue-600'
          //               : 'text-gray-500 hover:text-gray-700'
          //           }`}
          //         >
          //           {tab.icon}
          //           <span>{tab.label}</span>
          //         </button>
          //       ))}
          //     </nav>
          //   </div>

          //   {activeMarketplaceTab === 'infrastructure' && <InfrastructureMarketplace />}
          //   {activeMarketplaceTab === 'products' && <ProductMarketplace />}
          //   {activeMarketplaceTab === 'jobs' && <JobMarketplace userLevel={user?.level || 1} onUpgradeSkills={() => {}} />}
          //   {activeMarketplaceTab === 'learning' && (
          //     <LearningMarketplace userData={defaultUserData} />
          //   )}
          // </div>
          <Marketplace userData={defaultUserData} />
        )}

        {activeTab === 'community' && (
          <div>
            <div className="mb-6 border-b border-gray-200">
              <nav className="flex space-x-4">
                <button
                  onClick={() => setActiveCommunityTab('requests')}
                  className={`py-2 px-4 font-medium text-sm flex items-center space-x-2 ${
                    activeCommunityTab === 'requests'
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <BarChartIcon className="h-5 w-5" />
                  <span>Requests & Polls</span>
                </button>
                <button
                  onClick={() => setActiveCommunityTab('poll-history')}
                  className={`py-2 px-4 font-medium text-sm flex items-center space-x-2 ${
                    activeCommunityTab === 'poll-history'
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <BarChartIcon className="h-5 w-5" />
                  <span>Poll History</span>
                </button>
              </nav>
            </div>

            {activeCommunityTab === 'requests' && <RequestPanel cityData={cityData} />}
            {activeCommunityTab === 'poll-history' && <PollHistory />}
          </div>
        )}
      </div>
    </div>
  );
};