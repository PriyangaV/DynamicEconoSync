import React from 'react';
import { VoteIcon, CheckCircleIcon, XCircleIcon, ClockIcon, InfoIcon } from 'lucide-react';
export const PollHistory = () => {
  const mockPolls = [{
    id: 1,
    title: 'Community Music Classes',
    type: 'Service',
    category: 'Education/Entertainment',
    initiator: {
      name: 'John Doe',
      level: 3,
      skills: ['Music', 'Teaching']
    },
    status: 'Approved',
    votingPeriod: 'Completed on Jun 15, 2023',
    votes: {
      total: 150,
      for: 130,
      against: 20,
      participation: '85%'
    },
    resourceCheck: {
      venue: 'Available',
      equipment: 'Needed',
      instructors: 'Available'
    },
    implementation: 'Starting from July 2023',
    notes: 'Community showed strong support for music education'
  }, {
    id: 2,
    title: 'Advanced Manufacturing Equipment',
    type: 'Product',
    category: 'Industrial',
    initiator: {
      name: 'Tech Industries',
      level: 5,
      skills: ['Manufacturing', 'Engineering']
    },
    status: 'Rejected',
    votingPeriod: 'Completed on Jun 10, 2023',
    votes: {
      total: 200,
      for: 60,
      against: 140,
      participation: '92%'
    },
    resourceCheck: {
      budget: 'Insufficient',
      space: 'Available',
      operators: 'Limited'
    },
    rejectionReason: 'Budget constraints and limited skilled operators',
    futureConsideration: 'To be reconsidered in Q4 2023'
  }];
  const getStatusColor = status => {
    switch (status.toLowerCase()) {
      case 'approved':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'rejected':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };
  return <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-medium">Poll History & Analytics</h3>
        <div className="flex space-x-2">
          <select className="px-3 py-2 border rounded-md text-sm">
            <option>All Categories</option>
            <option>Products</option>
            <option>Services</option>
            <option>Infrastructure</option>
          </select>
          <select className="px-3 py-2 border rounded-md text-sm">
            <option>All Status</option>
            <option>Approved</option>
            <option>Rejected</option>
            <option>Pending</option>
          </select>
        </div>
      </div>
      {mockPolls.map(poll => <div key={poll.id} className="border rounded-lg overflow-hidden">
          <div className="p-4 bg-gray-50 border-b">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium text-lg">{poll.title}</h4>
                <div className="flex items-center space-x-3 mt-1">
                  <span className="text-sm text-gray-600">{poll.type}</span>
                  <span className="text-sm text-gray-600">{poll.category}</span>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(poll.status)}`}>
                {poll.status}
              </span>
            </div>
          </div>
          <div className="p-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium mb-3 flex items-center">
                  <VoteIcon className="h-4 w-4 mr-2" />
                  Voting Results
                </h5>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">Total Votes</span>
                    <span className="font-medium">{poll.votes.total}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{
                  width: poll.votes.participation
                }}></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <div>
                      <span className="text-green-600 font-medium">
                        {poll.votes.for}
                      </span>{' '}
                      For
                    </div>
                    <div>
                      <span className="text-red-600 font-medium">
                        {poll.votes.against}
                      </span>{' '}
                      Against
                    </div>
                    <div>
                      <span className="text-gray-600 font-medium">
                        {poll.votes.participation}
                      </span>{' '}
                      Participation
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h5 className="font-medium mb-3 flex items-center">
                  <InfoIcon className="h-4 w-4 mr-2" />
                  Resource Assessment
                </h5>
                <div className="space-y-2">
                  {Object.entries(poll.resourceCheck).map(([resource, status]) => <div key={resource} className="flex justify-between items-center bg-gray-50 p-2 rounded">
                        <span className="text-sm capitalize">{resource}</span>
                        <span className={`text-sm font-medium ${status.toLowerCase() === 'available' ? 'text-green-600' : status.toLowerCase() === 'needed' ? 'text-yellow-600' : 'text-red-600'}`}>
                          {status}
                        </span>
                      </div>)}
                </div>
              </div>
            </div>
            {poll.status === 'Rejected' && <div className="mt-4 border-t pt-4">
                <div className="bg-red-50 p-3 rounded-lg">
                  <h5 className="font-medium mb-2 text-red-800">
                    Rejection Details
                  </h5>
                  <p className="text-sm text-red-600 mb-2">
                    {poll.rejectionReason}
                  </p>
                  <p className="text-sm text-gray-600">
                    Future Consideration: {poll.futureConsideration}
                  </p>
                </div>
              </div>}
            <div className="mt-4 pt-4 border-t">
              <div className="flex justify-between text-sm text-gray-600">
                <div className="flex items-center">
                  <ClockIcon className="h-4 w-4 mr-1" />
                  {poll.votingPeriod}
                </div>
                <div>
                  Initiated by: {poll.initiator.name} (Level{' '}
                  {poll.initiator.level})
                </div>
              </div>
            </div>
          </div>
        </div>)}
    </div>;
};