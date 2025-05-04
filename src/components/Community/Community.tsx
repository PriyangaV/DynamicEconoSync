import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { GlobeIcon, BookOpenIcon, BarChartIcon, UsersIcon, MapIcon, MegaphoneIcon } from 'lucide-react';

export function Community() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('guide');

  useEffect(() => {
    // Extract tab from URL path
    const path = location.pathname;
    if (path.includes('/community/')) {
      const tab = path.split('/community/')[1];
      setActiveTab(tab);
    }
  }, [location]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    navigate(`/community/${tab}`);
  };

  const tabs = [
    {
      id: 'guide',
      label: 'City Guide',
      icon: <BookOpenIcon className="h-5 w-5" />
    },
    {
      id: 'polls',
      label: 'City Polls',
      icon: <BarChartIcon className="h-5 w-5" />
    },
    {
      id: 'events',
      label: 'City Events',
      icon: <MegaphoneIcon className="h-5 w-5" />
    },
    {
      id: 'map',
      label: 'City Map',
      icon: <MapIcon className="h-5 w-5" />
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-6 border-b border-gray-200">
        <nav className="flex space-x-4">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`py-2 px-4 font-medium text-sm flex items-center space-x-2 ${
                activeTab === tab.id
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

      {activeTab === 'guide' && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6">City Guide</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* City Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">About Our City</h3>
              <div className="prose max-w-none">
                <p>
                  Welcome to our sustainable city! We're committed to creating a thriving
                  community that balances modern living with environmental responsibility.
                </p>
                <h4>Key Features</h4>
                <ul>
                  <li>Sustainable energy infrastructure</li>
                  <li>Green spaces and parks</li>
                  <li>Efficient public transportation</li>
                  <li>Community gardens</li>
                  <li>Recycling and waste management</li>
                </ul>
              </div>
            </div>

            {/* City Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">City Services</h3>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium mb-2">Public Transportation</h4>
                  <p className="text-gray-600">Electric buses and bike-sharing programs</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium mb-2">Waste Management</h4>
                  <p className="text-gray-600">Comprehensive recycling and composting services</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium mb-2">Community Centers</h4>
                  <p className="text-gray-600">Spaces for education, recreation, and community events</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'polls' && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6">City Polls</h2>
          <div className="space-y-6">
            {/* Active Polls */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Active Polls</h3>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium mb-2">New Community Garden Location</h4>
                  <p className="text-gray-600 mb-4">
                    Help us decide where to build our next community garden.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>North District</span>
                      <span>45%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                  <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Vote Now
                  </button>
                </div>
              </div>
            </div>

            {/* Past Polls */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Past Polls</h3>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium mb-2">Public Transport Schedule</h4>
                  <p className="text-gray-600">Results from the recent transport schedule poll</p>
                  <div className="mt-4">
                    <button className="text-blue-600 hover:text-blue-800">
                      View Results
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'events' && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6">City Events</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Upcoming Events */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Upcoming Events</h3>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium mb-2">Community Clean-up Day</h4>
                  <p className="text-gray-600 mb-2">Join us for a day of cleaning and beautifying our city</p>
                  <div className="text-sm text-gray-500">
                    <p>Date: March 15, 2024</p>
                    <p>Location: Central Park</p>
                  </div>
                  <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Register
                  </button>
                </div>
              </div>
            </div>

            {/* Past Events */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Past Events</h3>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium mb-2">Sustainability Workshop</h4>
                  <p className="text-gray-600">Learn about sustainable living practices</p>
                  <div className="mt-4">
                    <button className="text-blue-600 hover:text-blue-800">
                      View Photos
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'map' && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6">City Map</h2>
          <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg">
            {/* Map component will be integrated here */}
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500">Interactive city map coming soon</p>
            </div>
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">Key Locations</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Community Centers</li>
                <li>Public Transportation Hubs</li>
                <li>Recycling Centers</li>
                <li>Parks and Green Spaces</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">Services</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Healthcare Facilities</li>
                <li>Educational Institutions</li>
                <li>Public Libraries</li>
                <li>Recreation Centers</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">Infrastructure</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Solar Power Plants</li>
                <li>Water Treatment Facilities</li>
                <li>Waste Management Centers</li>
                <li>Public Transport Routes</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 