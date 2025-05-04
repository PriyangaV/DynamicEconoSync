import React, { useState } from 'react';
import { UserIcon, BookOpenIcon, ShoppingBagIcon, BriefcaseIcon, StarIcon, CreditCardIcon, GraduationCapIcon, MusicIcon, EditIcon, TrendingUpIcon } from 'lucide-react';
import { ProfileEditor } from './ProfileEditor';
import { LevelUpgradeModal } from './LevelUpgradeModal';
import { TransactionHistory } from '../Marketplace/TransactionHistory';
import { ProductMarketplace } from '../Marketplace/ProductMarketplace';
import { JobMarketplace } from '../Marketplace/JobMarketplace';
import { InfrastructureMarketplace } from '../Marketplace/InfrastructureMarketplace';
import { PollSubmissionForm } from './PollSubmissionForm';
import { UserPollHistory } from './UserPollHistory';
export const UserDashboard = ({
  userData: initialUserData
}) => {
  const [activeTab, setActiveTab] = useState('profile');
  const [activeMarketplaceTab, setActiveMarketplaceTab] = useState('products');
  const [isProfileEditorOpen, setIsProfileEditorOpen] = useState(false);
  const [isLevelModalOpen, setIsLevelModalOpen] = useState(false);
  const [userData, setUserData] = useState({
    ...initialUserData,
    bio: 'Passionate about community development and sustainable living. Experienced in teaching and first aid.',
    education: [{
      degree: 'Bachelor of Education',
      institution: 'Community University',
      year: '2020'
    }]
  });
  const handleProfileSave = updatedData => {
    setUserData({
      ...userData,
      ...updatedData
    });
  };
  const handleLevelUpgrade = () => {
    setUserData({
      ...userData,
      level: userData.level + 1
    });
    setIsLevelModalOpen(false);
  };
  const handleLevelDowngrade = () => {
    setUserData({
      ...userData,
      level: userData.level - 1
    });
    setIsLevelModalOpen(false);
  };
  const navigateToTab = (tab: string, subTab?: string) => {
    setActiveTab(tab);
    if (subTab) {
      switch (tab) {
        case 'marketplace':
          setActiveMarketplaceTab(subTab);
          break;
        // Add other sub-tab handlers as needed
      }
    }
  };
  return <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Main Tabs */}
      <div className="mb-6 border-b border-gray-200">
        <nav className="flex space-x-8">
          {[{
          id: 'profile',
          label: 'Profile'
        }, {
          id: 'marketplace',
          label: 'Marketplace'
        }, {
          id: 'learning',
          label: 'Learning'
        }, {
          id: 'transactions',
          label: 'Transactions'
        }, {
          id: 'polls',
          label: 'Polls & Requests'
        }].map(tab => <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`py-4 px-2 font-medium text-sm border-b-2 ${activeTab === tab.id ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>
              {tab.label}
            </button>)}
        </nav>
      </div>
      {/* Content */}
      {activeTab === 'profile' && <div className="grid md:grid-cols-3 gap-6">
          {/* Profile Summary */}
          <div className="md:col-span-3">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <UserIcon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h1 className="text-2xl font-bold">{userData.name}</h1>
                    <div className="flex items-center mt-1">
                      <button onClick={() => setIsLevelModalOpen(true)} className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded flex items-center hover:bg-blue-200">
                        Level {userData.level}
                        <TrendingUpIcon className="h-4 w-4 ml-1" />
                      </button>
                      <span className="ml-2 text-gray-600">
                        {userData.category}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="flex items-center justify-end mb-2">
                      <CreditCardIcon className="h-5 w-5 text-green-600 mr-2" />
                      <span className="text-2xl font-bold">
                        {userData.credits.available}
                      </span>
                      <span className="text-gray-600 ml-1">Credits</span>
                    </div>
                    {userData.credits.expiring.amount > 0 && <p className="text-sm text-yellow-600">
                        {userData.credits.expiring.amount} credits expiring in{' '}
                        {userData.credits.expiring.days} days
                      </p>}
                  </div>
                  <button onClick={() => setIsProfileEditorOpen(true)} className="p-2 text-gray-600 hover:text-blue-600">
                    <EditIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
              {/* Bio Section */}
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-600 mb-2">
                  About
                </h3>
                <p className="text-gray-700">{userData.bio}</p>
              </div>
              {/* Skills Section */}
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-600 mb-2">
                  Skills & Qualifications
                </h3>
                <div className="flex flex-wrap gap-2">
                  {userData.skills.map((skill, index) => <span key={index} className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
                      {skill}
                    </span>)}
                </div>
              </div>
              {/* Education Section */}
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-600 mb-2">
                  Education
                </h3>
                <div className="space-y-2">
                  {userData.education.map((edu, index) => <div key={index} className="text-gray-700">
                      <div className="font-medium">{edu.degree}</div>
                      <div className="text-sm text-gray-600">
                        {edu.institution} • {edu.year}
                      </div>
                    </div>)}
                </div>
              </div>
            </div>
          </div>
          {/* Available Products & Services */}
          <div className="md:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-medium mb-4 flex items-center">
                <ShoppingBagIcon className="h-5 w-5 text-blue-600 mr-2" />
                Available Products & Services
              </h2>
              <div className="space-y-4">
                {userData.accessibleProducts.map(product => <div key={product.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h3 className="font-medium">{product.name}</h3>
                      <span className="text-sm text-gray-600">
                        Tier {product.tier}
                      </span>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm">
                      Access
                    </button>
                  </div>)}
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h2 className="text-xl font-medium mb-4 flex items-center">
                <BriefcaseIcon className="h-5 w-5 text-blue-600 mr-2" />
                Recommended Jobs
              </h2>
              <div className="space-y-4">
                {userData.recommendedJobs.map(job => <div key={job.id} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">{job.title}</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {job.matches.map((skill, index) => <span key={index} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                              Matches: {skill}
                            </span>)}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-green-600 font-medium">
                          {job.credits} Credits
                        </div>
                        <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md text-sm">
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Learning Progress */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-medium">Learning Progress</h2>
                <button onClick={() => navigateToTab('learning')} className="text-sm text-blue-600 hover:text-blue-800">
                  View All
                </button>
              </div>
              {/* ... learning progress content ... */}
            </div>
            {/* Quick Actions */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-medium mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button onClick={() => navigateToTab('polls')} className="w-full px-4 py-3 bg-blue-600 text-white rounded-md text-sm font-medium">
                  Submit New Request
                </button>
                <button onClick={() => navigateToTab('learning')} className="w-full px-4 py-3 bg-green-600 text-white rounded-md text-sm font-medium">
                  Upgrade Skills
                </button>
                <button onClick={() => navigateToTab('transactions')} className="w-full px-4 py-3 border border-blue-600 text-blue-600 rounded-md text-sm font-medium">
                  View Purchase History
                </button>
              </div>
            </div>
          </div>
        </div>}
      {activeTab === 'marketplace' && <div>
          <div className="mb-6 border-b border-gray-200">
            <nav className="flex space-x-4">
              <button onClick={() => setActiveMarketplaceTab('products')} className={`py-2 px-4 font-medium text-sm ${activeMarketplaceTab === 'products' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>
                Products & Services
              </button>
              <button onClick={() => setActiveMarketplaceTab('jobs')} className={`py-2 px-4 font-medium text-sm ${activeMarketplaceTab === 'jobs' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>
                Available Jobs
              </button>
              <button onClick={() => setActiveMarketplaceTab('infrastructure')} className={`py-2 px-4 font-medium text-sm ${activeMarketplaceTab === 'infrastructure' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>
                Infrastructure
              </button>
            </nav>
          </div>
          {activeMarketplaceTab === 'products' ? <ProductMarketplace /> : 
           activeMarketplaceTab === 'jobs' ? <JobMarketplace userLevel={userData.level} onUpgradeSkills={() => navigateToTab('learning')} /> :
           <InfrastructureMarketplace />}
        </div>}
      {activeTab === 'transactions' && <TransactionHistory />}
      {activeTab === 'learning' && <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold flex items-center">
                <GraduationCapIcon className="h-6 w-6 text-blue-600 mr-2" />
                Learning Progress
              </h2>
              <div className="flex space-x-4">
                <select className="px-4 py-2 border border-gray-300 rounded-md">
                  <option>All Categories</option>
                  <option>Required Skills</option>
                  <option>Optional Courses</option>
                  <option>Certifications</option>
                </select>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {userData.learningPaths.map(path => <div key={path.id} className="border rounded-lg p-4">
                  <h3 className="font-medium text-lg mb-2">{path.name}</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span className="font-medium">{path.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{
                  width: `${path.progress}%`
                }}></div>
                    </div>
                  </div>
                  <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Continue Learning
                  </button>
                </div>)}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Recommended Courses</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Add recommended courses here */}
            </div>
          </div>
        </div>}
      {activeTab === 'polls' && <div className="space-y-6">
          <PollSubmissionForm onSubmit={data => console.log('Poll submitted:', data)} />
          <UserPollHistory />
        </div>}
      {/* Modals */}
      <ProfileEditor isOpen={isProfileEditorOpen} onClose={() => setIsProfileEditorOpen(false)} userData={userData} onSave={handleProfileSave} />
      <LevelUpgradeModal isOpen={isLevelModalOpen} onClose={() => setIsLevelModalOpen(false)} currentLevel={userData.level} onUpgrade={handleLevelUpgrade} onDowngrade={handleLevelDowngrade} />
    </div>;
};