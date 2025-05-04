import React from 'react';
import { ActivityIcon, AlertCircleIcon, CheckCircleIcon, ClockIcon } from 'lucide-react';
export const ActivityFeed = () => {
  const mockActivities = [{
    id: 1,
    type: 'request_approved',
    title: 'Medical Supplies Request Approved',
    description: 'Emergency medical supplies request approved with 92% community support',
    timestamp: '2023-06-15 14:30',
    category: 'Healthcare',
    priority: 'high'
  }, {
    id: 2,
    type: 'job_completed',
    title: 'Water System Maintenance Complete',
    description: 'Scheduled maintenance of water purification system completed ahead of schedule',
    timestamp: '2023-06-15 12:15',
    category: 'Infrastructure',
    priority: 'normal'
  }, {
    id: 3,
    type: 'resource_alert',
    title: 'Low Food Storage Alert',
    description: 'Community food storage falling below recommended levels',
    timestamp: '2023-06-15 10:45',
    category: 'Resources',
    priority: 'high'
  }, {
    id: 4,
    type: 'new_request',
    title: 'New Community Garden Proposal',
    description: 'Proposal submitted for new community garden in Eastern District',
    timestamp: '2023-06-15 09:20',
    category: 'Recreation',
    priority: 'normal'
  }];
  const getActivityIcon = (type: string, priority: string) => {
    switch (type) {
      case 'request_approved':
        return <CheckCircleIcon className="h-5 w-5 text-green-600" />;
      case 'job_completed':
        return <CheckCircleIcon className="h-5 w-5 text-blue-600" />;
      case 'resource_alert':
        return <AlertCircleIcon className="h-5 w-5 text-red-600" />;
      case 'new_request':
        return <ClockIcon className="h-5 w-5 text-yellow-600" />;
      default:
        return <ActivityIcon className="h-5 w-5 text-gray-600" />;
    }
  };
  const getActivityColor = (type: string, priority: string) => {
    if (priority === 'high') return 'border-red-100 bg-red-50';
    switch (type) {
      case 'request_approved':
        return 'border-green-100 bg-green-50';
      case 'job_completed':
        return 'border-blue-100 bg-blue-50';
      case 'resource_alert':
        return 'border-yellow-100 bg-yellow-50';
      case 'new_request':
        return 'border-gray-100 bg-gray-50';
      default:
        return 'border-gray-100 bg-gray-50';
    }
  };
  return <div className="space-y-4">
      {mockActivities.map(activity => <div key={activity.id} className={`border rounded-lg p-4 ${getActivityColor(activity.type, activity.priority)}`}>
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              {getActivityIcon(activity.type, activity.priority)}
            </div>
            <div className="ml-3 flex-1">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">
                  {activity.title}
                </p>
                <span className="text-xs text-gray-500">
                  {activity.timestamp}
                </span>
              </div>
              <p className="mt-1 text-sm text-gray-600">
                {activity.description}
              </p>
              <div className="mt-2 text-xs">
                <span className="inline-flex items-center px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                  {activity.category}
                </span>
              </div>
            </div>
          </div>
        </div>)}
    </div>;
};