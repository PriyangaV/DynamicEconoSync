import React from 'react';
import { VoteIcon, CheckCircleIcon, XCircleIcon, ClockIcon } from 'lucide-react';
export const UserPollHistory = () => {
  const mockPolls = [{
    id: 1,
    title: 'Community Garden Project',
    type: 'Infrastructure',
    status: 'Active',
    submitted: '2023-12-01',
    votes: {
      up: 45,
      down: 12,
      total: 57
    },
    daysLeft: 5
  }, {
    id: 2,
    title: 'Public Transport Extension',
    type: 'Service',
    status: 'Approved',
    submitted: '2023-11-15',
    votes: {
      up: 89,
      down: 23,
      total: 112
    },
    implementationDate: '2024-01-01'
  }, {
    id: 3,
    title: 'Tech Training Program',
    type: 'Education',
    status: 'Rejected',
    submitted: '2023-11-01',
    votes: {
      up: 34,
      down: 67,
      total: 101
    },
    reason: 'Insufficient resources and overlap with existing programs'
  }];
  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
            Active
          </span>;
      case 'approved':
        return <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
            Approved
          </span>;
      case 'rejected':
        return <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">
            Rejected
          </span>;
      default:
        return null;
    }
  };
  return <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-6">
        <VoteIcon className="h-6 w-6 text-blue-600 mr-2" />
        <h2 className="text-xl font-bold">Your Poll History</h2>
      </div>
      <div className="space-y-6">
        {mockPolls.map(poll => <div key={poll.id} className="border rounded-lg p-4">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-medium text-lg">{poll.title}</h3>
                <div className="flex items-center space-x-4 mt-1">
                  <span className="text-sm text-gray-600">{poll.type}</span>
                  <span className="text-sm text-gray-600">
                    Submitted: {poll.submitted}
                  </span>
                </div>
              </div>
              {getStatusBadge(poll.status)}
            </div>
            <div className="flex items-center space-x-8 mb-4">
              <div className="flex items-center">
                <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-sm">{poll.votes.up} Support</span>
              </div>
              <div className="flex items-center">
                <XCircleIcon className="h-5 w-5 text-red-600 mr-2" />
                <span className="text-sm">{poll.votes.down} Against</span>
              </div>
              <div className="flex items-center">
                <ClockIcon className="h-5 w-5 text-gray-600 mr-2" />
                <span className="text-sm">
                  {poll.status === 'Active' ? `${poll.daysLeft} days left` : `Total Votes: ${poll.votes.total}`}
                </span>
              </div>
            </div>
            {poll.status === 'Approved' && <div className="bg-green-50 p-3 rounded-md">
                <p className="text-sm text-green-800">
                  Implementation scheduled for: {poll.implementationDate}
                </p>
              </div>}
            {poll.status === 'Rejected' && <div className="bg-red-50 p-3 rounded-md">
                <p className="text-sm text-red-800">Reason: {poll.reason}</p>
              </div>}
          </div>)}
      </div>
    </div>;
};