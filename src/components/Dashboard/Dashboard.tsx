import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import {
  ShoppingBagIcon,
  BuildingIcon,
  BriefcaseIcon,
  BookOpenIcon,
  GlobeIcon,
  BarChartIcon,
  UsersIcon,
  LightbulbIcon,
  StoreIcon,
  ArrowRightIcon,
  GraduationCapIcon
} from 'lucide-react';
import { UserData } from '../../shared/mockup/userData';
interface DashboardProps {
  userData?: UserData;
}

interface DashboardCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  path: string;
  color: string;
}

export function Dashboard({ userData }: DashboardProps) {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    // Set default country and city for logged-in user
    if (userData?.country && userData?.city) {
      setSelectedCountry(userData.country);
      setSelectedCity(userData.city);
    }
  }, [userData]);

  const handleMarketplaceClick = () => {
    if (selectedCountry && selectedCity) {
      navigate(`/marketplace/${selectedCountry}/${selectedCity}`);
    } else {
      navigate('/marketplace');
    }
  };

  const handleInfrastructureClick = () => {
    if (selectedCountry && selectedCity) {
      navigate(`/marketplace/${selectedCountry}/${selectedCity}/infrastructure`);
    } else {
      navigate('/marketplace');
    }
  };

  const handleJobsClick = () => {
    if (selectedCountry && selectedCity) {
      navigate(`/marketplace/${selectedCountry}/${selectedCity}/jobs`);
    } else {
      navigate('/marketplace');
    }
  };

  const handleLearningClick = () => {
    if (selectedCountry && selectedCity) {
      navigate(`/marketplace/${selectedCountry}/${selectedCity}/learning`);
    } else {
      navigate('/marketplace');
    }
  };

  const dashboardCards: DashboardCard[] = [
    // {
    //   title: 'Product Marketplace',
    //   description: 'Browse and purchase essential products and services',
    //   icon: <ShoppingBagIcon className="h-6 w-6" />,
    //   path: '/marketplace/products',
    //   color: 'bg-blue-500'
    // },
    // {
    //   title: 'Infrastructure',
    //   description: 'Explore and request access to city infrastructure',
    //   icon: <BuildingIcon className="h-6 w-6" />,
    //   path: '/marketplace/infrastructure',
    //   color: 'bg-green-500'
    // },
    // {
    //   title: 'Available Jobs',
    //   description: 'Find job opportunities matching your skills',
    //   icon: <BriefcaseIcon className="h-6 w-6" />,
    //   path: '/marketplace/jobs',
    //   color: 'bg-purple-500'
    // },
    // {
    //   title: 'Learning Hub',
    //   description: 'Enhance your skills and earn certifications',
    //   icon: <BookOpenIcon className="h-6 w-6" />,
    //   path: '/marketplace/learning',
    //   color: 'bg-yellow-500'
    // },
    {
      title: 'City Polls',
      description: 'Participate in city decisions and surveys',
      icon: <BarChartIcon className="h-6 w-6" />,
      path: '/community/polls',
      color: 'bg-red-500'
    },
    {
      title: 'Community',
      description: 'Connect with other citizens and share ideas',
      icon: <UsersIcon className="h-6 w-6" />,
      path: '/community',
      color: 'bg-indigo-500'
    },
    {
      title: 'Try Another City',
      description: 'Explore different city systems and opportunities',
      icon: <GlobeIcon className="h-6 w-6" />,
      path: '/city-management',
      color: 'bg-teal-500'
    },
    {
      title: 'City Guide',
      description: 'Learn more about the city system and features',
      icon: <LightbulbIcon className="h-6 w-6" />,
      path: '/community/guide',
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Welcome Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8 mt-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Welcome back, {userData?.name || user?.name}!
          </h1>
          <p className="text-gray-600">
            Here's what's happening in your city today and what you can do to help.
          </p>
        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center text-sm text-gray-600">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <p>Completed "Basic First Aid" course</p>
              <span className="ml-auto">2 hours ago</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              <p>Applied for "Community Health Facilitator" position</p>
              <span className="ml-auto">1 day ago</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
              <p>Purchased "Community Toolkit" from marketplace</p>
              <span className="ml-auto">2 days ago</span>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                <ShoppingBagIcon className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Available Jobs</p>
                <p className="text-lg font-semibold text-gray-900">320</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100 text-green-600">
                <BriefcaseIcon className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">High-Demand Jobs</p>
                <p className="text-lg font-semibold text-gray-900">24</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                <BookOpenIcon className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Learners</p>
                <p className="text-lg font-semibold text-gray-900">75%</p>
              </div>
            </div>
          </div>
        </div>

      <div className="max-w-7xl mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Marketplace Card */}
          <div 
            className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={handleMarketplaceClick}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Marketplace</h3>
              <StoreIcon className="h-6 w-6 text-blue-600" />
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Explore local products, services, and opportunities
            </p>
            <div className="flex items-center text-blue-600 text-sm">
              <span>View Marketplace</span>
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </div>
          </div>

          {/* Infrastructure Card */}
          <div 
            className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={handleInfrastructureClick}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Infrastructure</h3>
              <BuildingIcon className="h-6 w-6 text-green-600" />
            </div>
            <p className="text-gray-600 text-sm mb-4">
              View and manage city infrastructure systems
            </p>
            <div className="flex items-center text-green-600 text-sm">
              <span>View Infrastructure</span>
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </div>
          </div>

          {/* Jobs Card */}
          <div 
            className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={handleJobsClick}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Available Jobs</h3>
              <BriefcaseIcon className="h-6 w-6 text-purple-600" />
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Find local employment opportunities
            </p>
            <div className="flex items-center text-purple-600 text-sm">
              <span>View Jobs</span>
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </div>
          </div>

          {/* Learning Hub Card */}
          <div 
            className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={handleLearningClick}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Learning Hub</h3>
              <GraduationCapIcon className="h-6 w-6 text-orange-600" />
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Access educational resources and training
            </p>
            <div className="flex items-center text-orange-600 text-sm">
              <span>View Learning Hub</span>
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </div>
          </div>
        </div>

        
        
        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dashboardCards.map((card, index) => (
            <button
              key={index}
              onClick={() => navigate(card.path)}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200 text-left"
            >
              <div className={`${card.color} rounded-full p-3 w-12 h-12 flex items-center justify-center text-white mb-4`}>
                {card.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {card.description}
              </p>
            </button>
          ))}
        </div>

        
      </div>
    </div>
  );
} 