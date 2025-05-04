import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import {
  UserIcon,
  MapPinIcon,
  BriefcaseIcon,
  GraduationCapIcon,
  GlobeIcon
} from 'lucide-react';

export function Profile() {
  const { user } = useAuth();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
            <UserIcon className="w-10 h-10 text-blue-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{user?.name}</h1>
            <p className="text-gray-600">{user?.email}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h2>
            
            <div className="flex items-center space-x-3">
              <MapPinIcon className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-600">Location</p>
                <p className="text-gray-900">New York, USA</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <BriefcaseIcon className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-600">Occupation</p>
                <p className="text-gray-900">Software Engineer</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <GraduationCapIcon className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-600">Skills</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    Programming
                  </span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    Project Management
                  </span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    Team Leadership
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* City Information */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">City Information</h2>
            
            <div className="flex items-center space-x-3">
              <GlobeIcon className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-600">Current City</p>
                <p className="text-gray-900">New York</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">City Level</h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
              </div>
              <p className="text-sm text-gray-600 mt-2">Level 3 - Advanced City</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">Citizen Status</h3>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <p className="text-gray-900">Active Citizen</p>
              </div>
              <p className="text-sm text-gray-600 mt-2">Member since January 2024</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap gap-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Edit Profile
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
            Change Password
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
            View Activity History
          </button>
        </div>
      </div>
    </div>
  );
} 