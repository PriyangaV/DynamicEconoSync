import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { ProductMarketplace } from './ProductMarketplace';
import { JobMarketplace } from './JobMarketplace';
import { InfrastructureMarketplace } from './InfrastructureMarketplace';
import { useAuth } from '../../contexts/AuthContext';
import { Building2Icon, BookOpenIcon, ShoppingBagIcon, BriefcaseIcon, BuildingIcon, MapPinIcon, GlobeIcon } from 'lucide-react';
import { mockCities, somaliaCities } from '../../shared/mockup/cityData';
import { UserData } from '../../shared/mockup/userData';
import { LearningPathMarketplace } from './components/LearningPathMarketplace';
import { RecommendedCoursesMarketplace } from './components/RecommendedCourseMarketplace';
import { LearningMarketplace } from './LearningMarketplace';
interface MarketplaceProps {
  userData?: UserData;
}

export function Marketplace({ userData }: MarketplaceProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const { countryId, cityId, tab } = useParams();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState(tab || 'products');
  const [selectedCountry, setSelectedCountry] = useState(userData?.country || '');
  const [selectedCity, setSelectedCity] = useState(userData?.city || '');

  // Reset selectedCountry when URL is /marketplace
  useEffect(() => {
    if (location.pathname === '/marketplace') {
      setSelectedCountry('');
      setSelectedCity('');
    }
  }, [location.pathname]);
  console.log(userData);
  useEffect(() => {
    if (tab) {
      setActiveTab(tab);
    }
  }, [tab]);

  useEffect(() => {
    setSelectedCountry(userData?.country || '');
    setSelectedCity(userData?.city || '');
  }, [userData?.country, userData?.city]);

  const handleTabChange = (newTab: string) => {
    navigate(`/marketplace/${selectedCountry}/${selectedCity}/${newTab}`);
  };

  const handleCitySelect = (country: string, city: string) => {
    setSelectedCountry(country);
    setSelectedCity(city);
    navigate(`/marketplace/${country}/${city}/products`);
  };

  const tabs = [
    {
      id: 'infrastructure',
      label: 'City Infrastructure',
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

  // Mock data for countries and cities
  const countryData = [
    // Desert Countries
    { 
      name: 'United Arab Emirates', 
      code: 'AE', 
      flag: 'https://flagcdn.com/w40/ae.png',
      description: 'Experience the innovative marketplaces of desert cities'
    },
    { 
      name: 'Somalia', 
      code: 'SO', 
      flag: 'https://flagcdn.com/w40/so.png',
      description: 'Explore resilient marketplaces in developing urban centers'
    },
    // Island Nations
    { 
      name: 'New Zealand', 
      code: 'NZ', 
      flag: 'https://flagcdn.com/w40/nz.png',
      description: 'Discover sustainable marketplaces in island cities'
    },
    { 
      name: 'Maldives', 
      code: 'MV', 
      flag: 'https://flagcdn.com/w40/mv.png',
      description: 'Experience unique marketplaces in tropical island settings'
    },
    // Asian Powerhouses
    { 
      name: 'China', 
      code: 'CN', 
      flag: 'https://flagcdn.com/w40/cn.png',
      description: 'Explore the dynamic marketplaces of Chinese megacities'
    },
    { 
      name: 'South Korea', 
      code: 'KR', 
      flag: 'https://flagcdn.com/w40/kr.png',
      description: 'Discover high-tech marketplaces in Korean urban centers'
    },
    { 
      name: 'India', 
      code: 'IN', 
      flag: 'https://flagcdn.com/w40/in.png',
      description: 'Experience diverse marketplaces in rapidly growing cities'
    },
    // European Mix
    { 
      name: 'France', 
      code: 'FR', 
      flag: 'https://flagcdn.com/w40/fr.png',
      description: 'Explore the vibrant markets and cultural hubs of French cities'
    },
    { 
      name: 'Germany', 
      code: 'DE', 
      flag: 'https://flagcdn.com/w40/de.png',
      description: 'Discover efficient and innovative German marketplaces'
    },
    // African Development
    { 
      name: 'Rwanda', 
      code: 'RW', 
      flag: 'https://flagcdn.com/w40/rw.png',
      description: 'Experience emerging marketplaces in rapidly developing cities'
    },
    { 
      name: 'South Africa', 
      code: 'ZA', 
      flag: 'https://flagcdn.com/w40/za.png',
      description: 'Explore diverse marketplaces in African urban centers'
    },
    // Americas
    { 
      name: 'Brazil', 
      code: 'BR', 
      flag: 'https://flagcdn.com/w40/br.png',
      description: 'Discover vibrant marketplaces in Brazilian cities'
    },
    { 
      name: 'Canada', 
      code: 'CA', 
      flag: 'https://flagcdn.com/w40/ca.png',
      description: 'Experience sustainable marketplaces in Canadian cities'
    }
  ];

  const cityData: Record<string, string[]> = {
    'United Arab Emirates': ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah'],
    'Somalia': ['Mogadishu', 'Hargeisa', 'Kismayo', 'Bosaso', 'Berbera'],
    'New Zealand': ['Auckland', 'Wellington', 'Christchurch', 'Hamilton', 'Dunedin'],
    'Maldives': ['Malé', 'Addu City', 'Fuvahmulah', 'Kulhudhuffushi', 'Thinadhoo'],
    'China': ['Shanghai', 'Beijing', 'Shenzhen', 'Guangzhou', 'Chengdu'],
    'South Korea': ['Seoul', 'Busan', 'Incheon', 'Daegu', 'Daejeon'],
    'India': ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai'],
    'France': ['Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice'],
    'Germany': ['Berlin', 'Munich', 'Hamburg', 'Frankfurt', 'Cologne'],
    'Rwanda': ['Kigali', 'Butare', 'Gitarama', 'Ruhengeri', 'Gisenyi'],
    'South Africa': ['Johannesburg', 'Cape Town', 'Durban', 'Pretoria', 'Port Elizabeth'],
    'Brazil': ['São Paulo', 'Rio de Janeiro', 'Brasília', 'Salvador', 'Fortaleza'],
    'Canada': ['Toronto', 'Montreal', 'Vancouver', 'Calgary', 'Edmonton']
  };

  // Show country selection if URL is /marketplace
  if (location.pathname === '/marketplace') {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Explore City Marketplaces</h2>
          <p className="text-gray-600 text-lg">
            Select a country to explore its cities and marketplace offerings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {countryData.map((country) => (
            <button
              key={country.code}
              onClick={() => setSelectedCountry(country.name)}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-left"
            >
              <div className="flex items-center mb-4">
                <img
                  src={country.flag}
                  alt={`${country.name} flag`}
                  className="w-8 h-6 object-cover rounded-sm mr-3"
                />
                <h3 className="text-xl font-semibold">{country.name}</h3>
              </div>
              <p className="text-gray-600 mb-4">{country.description}</p>
              <div className="flex items-center text-blue-600">
                <GlobeIcon className="w-5 h-5 mr-2" />
                <span>Explore Cities</span>
              </div>
            </button>
          ))}
        </div>

        {selectedCountry && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl p-8 max-w-md w-full">
              <h3 className="text-2xl font-bold mb-6">Select a City in {selectedCountry}</h3>
              <div className="space-y-4">
                {cityData[selectedCountry]?.map((city) => (
                  <button
                    key={city}
                    onClick={() => handleCitySelect(selectedCountry, city)}
                    className="w-full p-4 text-left border rounded-lg hover:bg-gray-50 flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <Building2Icon className="w-5 h-5 text-gray-600 mr-3" />
                      <span className="font-medium">{city}</span>
                    </div>
                    <span className="text-blue-600">View Marketplace</span>
                  </button>
                ))}
              </div>
              <button
                onClick={() => setSelectedCountry('')}
                className="mt-6 w-full px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Back to Countries
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Show marketplace content with tabs only when URL has country and city
  if (countryId && cityId) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Location Display */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-gray-600">
            <MapPinIcon className="h-5 w-5" />
            <span>You're viewing the marketplace for {selectedCity}, {selectedCountry}</span>
          </div>
          <button 
            onClick={() => navigate('/marketplace')} 
            className="text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            Change Location
          </button>
        </div>

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

        {activeTab === 'infrastructure' ? (
          <InfrastructureMarketplace 
            userData={userData} 
            cityData={somaliaCities[selectedCity || 'Mogadishu']}
            
          />
        ) : activeTab === 'products' ? (
          <ProductMarketplace userData={userData} />
        ) : activeTab === 'jobs' ? (
          <JobMarketplace userLevel={user?.level || 1} onUpgradeSkills={() => {}} userData={userData} />
        ) : (
          <LearningMarketplace userData={userData} />
        )}
      </div>
    );
  }

  // Fallback to country selection if URL is invalid
  return null;
} 