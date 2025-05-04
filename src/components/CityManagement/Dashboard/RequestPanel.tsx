import React, { useState } from 'react';
import { ClipboardIcon, VoteIcon, PlusIcon, ThumbsUpIcon, ThumbsDownIcon, UsersIcon } from 'lucide-react';
export const RequestPanel = ({
  cityData
}) => {
  const [activeTab, setActiveTab] = useState('requests');
  const [newRequest, setNewRequest] = useState({
    title: '',
    category: '',
    quantity: '',
    description: '',
    tier: '3'
  });
  const mockRequests = [{
    id: 1,
    title: 'Medical Supplies',
    category: 'Healthcare',
    tier: 1,
    requester: 'Hospital Director',
    votes: {
      up: 45,
      down: 3
    },
    status: 'approved',
    date: '2023-06-10'
  }, {
    id: 2,
    title: 'Public Transport Expansion',
    category: 'Transportation',
    tier: 2,
    requester: 'City Planner',
    votes: {
      up: 32,
      down: 12
    },
    status: 'voting',
    date: '2023-06-12'
  }, {
    id: 3,
    title: 'Community Garden',
    category: 'Recreation',
    tier: 3,
    requester: 'Neighborhood Association',
    votes: {
      up: 18,
      down: 7
    },
    status: 'voting',
    date: '2023-06-15'
  }, {
    id: 4,
    title: 'Luxury Art Gallery',
    category: 'Culture',
    tier: 4,
    requester: 'Arts Council',
    votes: {
      up: 10,
      down: 25
    },
    status: 'rejected',
    date: '2023-06-08'
  }];
  const handleSubmit = e => {
    e.preventDefault();
    // In a real app, this would submit the request
    console.log('Submitting request:', newRequest);
    // Reset form
    setNewRequest({
      title: '',
      category: '',
      quantity: '',
      description: '',
      tier: '3'
    });
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
  const getStatusColor = status => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      case 'voting':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  return <div>
      <div className="flex items-center mb-6">
        <ClipboardIcon className="h-6 w-6 text-blue-600 mr-2" />
        <h3 className="text-xl font-medium">Request & Poll System</h3>
      </div>
      <div className="mb-6">
        <div className="flex border-b border-gray-200">
          <button className={`py-2 px-4 font-medium text-sm ${activeTab === 'requests' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`} onClick={() => setActiveTab('requests')}>
            View Requests
          </button>
          <button className={`py-2 px-4 font-medium text-sm ${activeTab === 'create' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`} onClick={() => setActiveTab('create')}>
            Create Request
          </button>
        </div>
      </div>
      {activeTab === 'requests' && <div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Request
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tier
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Votes
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {mockRequests.map(request => <tr key={request.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900">
                        {request.title}
                      </div>
                      <div className="text-sm text-gray-500">
                        By: {request.requester}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {request.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getTierColor(request.tier)}`}>
                        T{request.tier}: {getTierLabel(request.tier)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex items-center text-green-600 mr-2">
                          <ThumbsUpIcon className="h-4 w-4 mr-1" />
                          <span>{request.votes.up}</span>
                        </div>
                        <div className="flex items-center text-red-600">
                          <ThumbsDownIcon className="h-4 w-4 mr-1" />
                          <span>{request.votes.down}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(request.status)}`}>
                        {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {request.status === 'voting' && <div className="flex space-x-2">
                          <button className="p-1 bg-green-100 text-green-600 rounded">
                            <ThumbsUpIcon className="h-4 w-4" />
                          </button>
                          <button className="p-1 bg-red-100 text-red-600 rounded">
                            <ThumbsDownIcon className="h-4 w-4" />
                          </button>
                        </div>}
                      {request.status !== 'voting' && <button className="text-blue-600 hover:text-blue-800">
                          View Details
                        </button>}
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
          <div className="mt-6">
            <h4 className="font-medium mb-2">How the Poll System Works:</h4>
            <div className="bg-gray-50 p-4 rounded-md text-sm">
              <p className="mb-2">
                <strong>1. Request Submission:</strong> Any citizen can submit a
                request for products or services.
              </p>
              <p className="mb-2">
                <strong>2. Tier Classification:</strong> Requests are classified
                by tier (1-5) based on urgency and necessity.
              </p>
              <p className="mb-2">
                <strong>3. Community Voting:</strong> All citizens can vote on
                requests to indicate support or opposition.
              </p>
              <p className="mb-2">
                <strong>4. Transparent Decision:</strong> Requests with
                sufficient support are approved and enter the job generation
                system.
              </p>
              <p>
                <strong>5. Credit Allocation:</strong> Approved requests receive
                credit allocation based on tier, demand, and available
                resources.
              </p>
            </div>
          </div>
        </div>}
      {activeTab === 'create' && <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                Request Title
              </label>
              <input type="text" id="title" className="w-full px-4 py-2 border border-gray-300 rounded-md" placeholder="What do you need?" value={newRequest.title} onChange={e => setNewRequest({
            ...newRequest,
            title: e.target.value
          })} required />
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select id="category" className="w-full px-4 py-2 border border-gray-300 rounded-md" value={newRequest.category} onChange={e => setNewRequest({
            ...newRequest,
            category: e.target.value
          })} required>
                <option value="">Select a category</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Education">Education</option>
                <option value="Transportation">Transportation</option>
                <option value="Food">Food</option>
                <option value="Housing">Housing</option>
                <option value="Recreation">Recreation</option>
                <option value="Culture">Culture</option>
                <option value="Technology">Technology</option>
                <option value="Safety">Safety</option>
              </select>
            </div>
            <div>
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                Quantity Needed
              </label>
              <input type="text" id="quantity" className="w-full px-4 py-2 border border-gray-300 rounded-md" placeholder="How many?" value={newRequest.quantity} onChange={e => setNewRequest({
            ...newRequest,
            quantity: e.target.value
          })} required />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea id="description" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md" placeholder="Provide details about your request..." value={newRequest.description} onChange={e => setNewRequest({
            ...newRequest,
            description: e.target.value
          })} required />
            </div>
            <div>
              <label htmlFor="tier" className="block text-sm font-medium text-gray-700 mb-1">
                Request Tier
              </label>
              <select id="tier" className="w-full px-4 py-2 border border-gray-300 rounded-md" value={newRequest.tier} onChange={e => setNewRequest({
            ...newRequest,
            tier: e.target.value
          })} required>
                <option value="1">Tier 1 - Life Critical</option>
                <option value="2">Tier 2 - Basic Necessity</option>
                <option value="3">Tier 3 - Well-being</option>
                <option value="4">Tier 4 - Luxury</option>
                <option value="5">Tier 5 - R&D/Research</option>
              </select>
              <p className="mt-1 text-sm text-gray-500">
                Please select the appropriate tier for your request. Higher
                tiers receive priority.
              </p>
            </div>
            <div className="pt-4">
              <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 flex items-center justify-center">
                <PlusIcon className="h-5 w-5 mr-2" />
                Submit Request for Community Vote
              </button>
            </div>
          </form>
          <div className="mt-8">
            <div className="flex items-center mb-2">
              <VoteIcon className="h-5 w-5 text-blue-600 mr-2" />
              <h4 className="font-medium">Transparency Notice</h4>
            </div>
            <div className="bg-blue-50 p-4 rounded-md text-sm">
              <p className="mb-2">
                Your request will be visible to all citizens and subject to a
                community vote. The voting process is completely transparent.
              </p>
              <p>
                If approved, your request will generate jobs based on the demand
                and available resources. The credit allocation will be
                determined by the tier level and community need.
              </p>
            </div>
          </div>
        </div>}
    </div>;
};