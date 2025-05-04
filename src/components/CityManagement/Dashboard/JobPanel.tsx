import React, { useState } from 'react';
import { BriefcaseIcon, AlertCircleIcon, CheckCircleIcon, ClockIcon, DollarSignIcon, UserIcon } from 'lucide-react';
export const JobPanel = ({
  cityData
}) => {
  const [activeTab, setActiveTab] = useState('available');
  const mockJobs = {
    available: [{
      id: 1,
      title: 'Medical Supply Distribution',
      category: 'Healthcare',
      tier: 1,
      credits: 120,
      deadline: '2023-06-20',
      requiredLevel: 3,
      status: 'urgent'
    }, {
      id: 2,
      title: 'Public Transport Driver',
      category: 'Transportation',
      tier: 2,
      credits: 75,
      deadline: '2023-06-25',
      requiredLevel: 3,
      status: 'normal'
    }, {
      id: 3,
      title: 'Community Garden Maintenance',
      category: 'Recreation',
      tier: 3,
      credits: 45,
      deadline: '2023-06-30',
      requiredLevel: 2,
      status: 'normal'
    }],
    inProgress: [{
      id: 4,
      title: 'Water Purification System Repair',
      category: 'Infrastructure',
      tier: 1,
      credits: 150,
      deadline: '2023-06-18',
      assignedTo: 'Engineering Team',
      progress: 65
    }, {
      id: 5,
      title: 'School Teaching Assistant',
      category: 'Education',
      tier: 2,
      credits: 60,
      deadline: '2023-06-28',
      assignedTo: 'Education Department',
      progress: 30
    }],
    completed: [{
      id: 6,
      title: 'Food Distribution',
      category: 'Nutrition',
      tier: 1,
      credits: 100,
      completedDate: '2023-06-05',
      completedBy: 'Logistics Team'
    }, {
      id: 7,
      title: 'Art Gallery Setup',
      category: 'Culture',
      tier: 4,
      credits: 40,
      completedDate: '2023-06-02',
      completedBy: 'Arts Council'
    }]
  };
  const getTierLabel = tier => {
    switch (tier) {
      case 1:
        return 'Life-Critical';
      case 2:
        return 'Basic Necessity';
      case 3:
        return 'Well-being';
      case 4:
        return 'Luxury';
      case 5:
        return 'R&D/Research';
      default:
        return 'Unknown';
    }
  };
  const getTierColor = tier => {
    switch (tier) {
      case 1:
        return 'bg-red-100 text-red-800';
      case 2:
        return 'bg-orange-100 text-orange-800';
      case 3:
        return 'bg-blue-100 text-blue-800';
      case 4:
        return 'bg-purple-100 text-purple-800';
      case 5:
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  const getStatusIcon = status => {
    switch (status) {
      case 'urgent':
        return <AlertCircleIcon className="h-5 w-5 text-red-600 mr-1" />;
      case 'normal':
        return <ClockIcon className="h-5 w-5 text-blue-600 mr-1" />;
      default:
        return null;
    }
  };
  return <div>
      <div className="flex items-center mb-6">
        <BriefcaseIcon className="h-6 w-6 text-blue-600 mr-2" />
        <h3 className="text-xl font-medium">Job Management System</h3>
      </div>
      <div className="mb-6">
        <div className="flex border-b border-gray-200">
          <button className={`py-2 px-4 font-medium text-sm ${activeTab === 'available' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`} onClick={() => setActiveTab('available')}>
            Available Jobs
          </button>
          <button className={`py-2 px-4 font-medium text-sm ${activeTab === 'inProgress' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`} onClick={() => setActiveTab('inProgress')}>
            In Progress
          </button>
          <button className={`py-2 px-4 font-medium text-sm ${activeTab === 'completed' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`} onClick={() => setActiveTab('completed')}>
            Completed
          </button>
        </div>
      </div>
      {activeTab === 'available' && <div>
          {mockJobs.available.map(job => <div key={job.id} className="mb-4 border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center mb-2">
                    {getStatusIcon(job.status)}
                    <h4 className="font-medium">{job.title}</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{job.category}</p>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className={`px-2 py-1 rounded-full ${getTierColor(job.tier)}`}>
                      Tier {job.tier}: {getTierLabel(job.tier)}
                    </span>
                    <span className="flex items-center">
                      <UserIcon className="h-4 w-4 text-gray-600 mr-1" />
                      Level {job.requiredLevel}+ Required
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-green-600 font-medium mb-2">
                    <DollarSignIcon className="h-5 w-5 mr-1" />
                    <span>{job.credits} Credits</span>
                  </div>
                  <p className="text-sm text-gray-600">Due: {job.deadline}</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200 flex justify-end">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm">
                  Accept Job
                </button>
              </div>
            </div>)}
          <div className="mt-6">
            <h4 className="font-medium mb-2">How the Job System Works:</h4>
            <div className="bg-gray-50 p-4 rounded-md text-sm">
              <p className="mb-2">
                <strong>1. Job Generation:</strong> Jobs are automatically
                created from approved citizen requests.
              </p>
              <p className="mb-2">
                <strong>2. Credit Allocation:</strong> Credits are dynamically
                assigned based on tier, demand, and worker supply.
              </p>
              <p className="mb-2">
                <strong>3. Surge Pricing:</strong> Unfilled critical jobs will
                increase in credit value over time until accepted.
              </p>
              <p className="mb-2">
                <strong>4. Level Requirements:</strong> Jobs require specific
                user levels based on complexity and responsibility.
              </p>
              <p>
                <strong>5. First Come, First Served:</strong> Available jobs are
                assigned to the first qualified worker who accepts.
              </p>
            </div>
          </div>
        </div>}
      {activeTab === 'inProgress' && <div>
          {mockJobs.inProgress.map(job => <div key={job.id} className="mb-4 border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium mb-2">{job.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{job.category}</p>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className={`px-2 py-1 rounded-full ${getTierColor(job.tier)}`}>
                      Tier {job.tier}: {getTierLabel(job.tier)}
                    </span>
                    <span>Assigned to: {job.assignedTo}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-green-600 font-medium mb-2">
                    <DollarSignIcon className="h-5 w-5 mr-1" />
                    <span>{job.credits} Credits</span>
                  </div>
                  <p className="text-sm text-gray-600">Due: {job.deadline}</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="mb-2 flex justify-between items-center">
                  <span className="text-sm font-medium">Progress:</span>
                  <span className="text-sm font-medium">{job.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="h-2.5 rounded-full bg-blue-600" style={{
              width: `${job.progress}%`
            }}></div>
                </div>
              </div>
            </div>)}
        </div>}
      {activeTab === 'completed' && <div>
          {mockJobs.completed.map(job => <div key={job.id} className="mb-4 border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center mb-2">
                    <CheckCircleIcon className="h-5 w-5 text-green-600 mr-1" />
                    <h4 className="font-medium">{job.title}</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{job.category}</p>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className={`px-2 py-1 rounded-full ${getTierColor(job.tier)}`}>
                      Tier {job.tier}: {getTierLabel(job.tier)}
                    </span>
                    <span>Completed by: {job.completedBy}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-green-600 font-medium mb-2">
                    <DollarSignIcon className="h-5 w-5 mr-1" />
                    <span>{job.credits} Credits</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Completed: {job.completedDate}
                  </p>
                </div>
              </div>
            </div>)}
        </div>}
    </div>;
};