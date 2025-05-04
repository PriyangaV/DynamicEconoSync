import React, { useState } from 'react';
import { BellIcon, AlertCircleIcon, CheckCircleIcon, ClockIcon, CreditCardIcon, BriefcaseIcon, XIcon } from 'lucide-react';
export const NotificationCenter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState([{
    id: 1,
    type: 'job_alert',
    title: 'New High-Priority Job',
    message: 'Medical Supply Distribution (120 credits) needs workers',
    timestamp: '2 minutes ago',
    priority: 'high',
    unread: true
  }, {
    id: 2,
    type: 'credit_expiry',
    title: 'Credits Expiring Soon',
    message: '50 credits will expire in 7 days',
    timestamp: '1 hour ago',
    priority: 'medium',
    unread: true
  }, {
    id: 3,
    type: 'job_update',
    title: 'Credit Increase Alert',
    message: 'Water System Maintenance job credits increased to 180',
    timestamp: '2 hours ago',
    priority: 'medium',
    unread: false
  }, {
    id: 4,
    type: 'credit_earned',
    title: 'Credits Earned',
    message: 'You earned 75 credits for completing Food Distribution',
    timestamp: '1 day ago',
    priority: 'low',
    unread: false
  }]);
  const getIcon = (type: string, priority: string) => {
    switch (type) {
      case 'job_alert':
        return <BriefcaseIcon className="h-5 w-5 text-blue-600" />;
      case 'credit_expiry':
        return <AlertCircleIcon className="h-5 w-5 text-red-600" />;
      case 'job_update':
        return <ClockIcon className="h-5 w-5 text-yellow-600" />;
      case 'credit_earned':
        return <CreditCardIcon className="h-5 w-5 text-green-600" />;
      default:
        return <BellIcon className="h-5 w-5 text-gray-600" />;
    }
  };
  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({
      ...n,
      unread: false
    })));
  };
  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };
  const unreadCount = notifications.filter(n => n.unread).length;
  return <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="relative p-2 text-gray-600 hover:text-blue-600 focus:outline-none">
        <BellIcon className="h-6 w-6" />
        {unreadCount > 0 && <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
            {unreadCount}
          </span>}
      </button>
      {isOpen && <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl z-50">
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Notifications</h3>
              <button onClick={markAllAsRead} className="text-sm text-blue-600 hover:text-blue-800">
                Mark all as read
              </button>
            </div>
          </div>
          <div className="max-h-96 overflow-y-auto">
            {notifications.map(notification => <div key={notification.id} className={`p-4 border-b border-gray-100 ${notification.unread ? 'bg-blue-50' : ''}`}>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    {getIcon(notification.type, notification.priority)}
                  </div>
                  <div className="ml-3 flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900">
                        {notification.title}
                      </p>
                      <button onClick={() => deleteNotification(notification.id)} className="text-gray-400 hover:text-gray-600">
                        <XIcon className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      {notification.message}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {notification.timestamp}
                    </p>
                  </div>
                </div>
              </div>)}
          </div>
          <div className="p-4 border-t border-gray-100">
            <button onClick={() => setIsOpen(false)} className="w-full px-4 py-2 bg-gray-100 text-gray-800 rounded-md text-sm hover:bg-gray-200">
              Close
            </button>
          </div>
        </div>}
    </div>;
};