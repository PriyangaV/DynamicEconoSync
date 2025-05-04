import React, { useState } from 'react';
import { XIcon, CheckIcon, BellIcon } from 'lucide-react';

interface Notification {
  id: number;
  message: string;
  read: boolean;
  timestamp: string;
}

interface NotificationPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NotificationPanel: React.FC<NotificationPanelProps> = ({ isOpen, onClose }) => {
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: 1, message: 'New learning path available', read: false, timestamp: '2 hours ago' },
    { id: 2, message: 'Your profile was updated', read: true, timestamp: '1 day ago' },
    { id: 3, message: 'New city management features available', read: false, timestamp: '3 hours ago' },
  ]);

  const handleMarkAsRead = (id: number) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const handleMarkAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-16 right-0 bottom-0 w-96 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="p-4 border-b flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <BellIcon className="h-6 w-6 text-gray-600" />
            <h2 className="text-lg font-semibold">Notifications</h2>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handleMarkAllAsRead}
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              Mark all as read
            </button>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <XIcon className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Notifications List */}
        <div className="flex-1 overflow-y-auto">
          {notifications.length === 0 ? (
            <div className="p-4 text-center text-gray-500">
              No notifications
            </div>
          ) : (
            <div className="divide-y">
              {notifications.map(notification => (
                <div
                  key={notification.id}
                  className={`p-4 hover:bg-gray-50 ${
                    notification.read ? 'bg-white' : 'bg-blue-50'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">{notification.message}</p>
                      <p className="text-xs text-gray-500 mt-1">{notification.timestamp}</p>
                    </div>
                    {!notification.read && (
                      <button
                        onClick={() => handleMarkAsRead(notification.id)}
                        className="ml-2 text-blue-600 hover:text-blue-800"
                      >
                        <CheckIcon className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}; 