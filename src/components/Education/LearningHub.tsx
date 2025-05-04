import React, { useState } from 'react';
import { BookOpenIcon, GraduationCapIcon, UserIcon, MusicIcon, HeartIcon, UsersIcon, StarIcon, BellIcon } from 'lucide-react';
export const LearningHub = ({
  userData
}) => {
  const [activeTab, setActiveTab] = useState('courses');
  const mockCourses = [{
    id: 1,
    title: 'Basic Medical Training',
    category: 'Healthcare',
    level: 2,
    duration: '4 weeks',
    enrolled: 45,
    rating: 4.8,
    instructor: 'Dr. Sarah Miller',
    progress: 60,
    creditReward: 100
  }, {
    id: 2,
    title: 'Community Leadership',
    category: 'Management',
    level: 3,
    duration: '6 weeks',
    enrolled: 32,
    rating: 4.6,
    instructor: 'Prof. James Wilson',
    progress: 30,
    creditReward: 150
  }];
  const mockTeachingOpportunities = [{
    id: 1,
    title: 'Guitar Basics Instructor',
    category: 'Music',
    requiredLevel: 3,
    students: 12,
    schedule: 'Weekends',
    creditReward: 200,
    status: 'Open'
  }, {
    id: 2,
    title: 'First Aid Workshop Leader',
    category: 'Healthcare',
    requiredLevel: 4,
    students: 20,
    schedule: 'Weekday evenings',
    creditReward: 250,
    status: 'Open'
  }];
  const mockEntertainmentActivities = [{
    id: 1,
    title: 'Community Band Practice',
    type: 'Music',
    participants: 15,
    schedule: 'Every Tuesday',
    location: 'Community Center',
    status: 'Ongoing'
  }, {
    id: 2,
    title: 'Dance Workshop',
    type: 'Dance',
    participants: 20,
    schedule: 'Weekends',
    location: 'Recreation Hall',
    status: 'Starting Soon'
  }];
  return <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold flex items-center">
            <GraduationCapIcon className="h-6 w-6 text-blue-600 mr-2" />
            Learning & Entertainment Hub
          </h2>
          <div className="flex items-center space-x-4">
            <button className="flex items-center text-gray-600 hover:text-blue-600">
              <BellIcon className="h-5 w-5 mr-1" />
              Notifications
            </button>
            <select className="border rounded-md px-3 py-2">
              <option>All Categories</option>
              <option>Healthcare</option>
              <option>Technology</option>
              <option>Arts</option>
              <option>Sports</option>
            </select>
          </div>
        </div>
        <div className="border-b mb-6">
          <nav className="flex space-x-8">
            {['courses', 'teaching', 'entertainment'].map(tab => <button key={tab} onClick={() => setActiveTab(tab)} className={`py-4 px-2 font-medium text-sm border-b-2 ${activeTab === tab ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>)}
          </nav>
        </div>
        {activeTab === 'courses' && <div className="space-y-6">
            {mockCourses.map(course => <div key={course.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-lg">{course.title}</h3>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                      <span>{course.category}</span>
                      <span>Level {course.level}</span>
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center mt-2">
                      <StarIcon className="h-4 w-4 text-yellow-400" />
                      <span className="ml-1 text-sm">{course.rating}</span>
                      <span className="mx-2 text-gray-300">|</span>
                      <UsersIcon className="h-4 w-4 text-gray-400" />
                      <span className="ml-1 text-sm">
                        {course.enrolled} enrolled
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-green-600 font-medium">
                      {course.creditReward} Credits
                    </div>
                    <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md text-sm">
                      Continue Learning
                    </button>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{
                width: `${course.progress}%`
              }}></div>
                  </div>
                </div>
              </div>)}
          </div>}
        {activeTab === 'teaching' && <div className="space-y-6">
            {mockTeachingOpportunities.map(opportunity => <div key={opportunity.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-lg">{opportunity.title}</h3>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                      <span>{opportunity.category}</span>
                      <span>Level {opportunity.requiredLevel}+ Required</span>
                      <span>{opportunity.schedule}</span>
                    </div>
                    <div className="flex items-center mt-2">
                      <UsersIcon className="h-4 w-4 text-gray-400" />
                      <span className="ml-1 text-sm">
                        {opportunity.students} students
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-green-600 font-medium">
                      {opportunity.creditReward} Credits
                    </div>
                    <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md text-sm">
                      Apply to Teach
                    </button>
                  </div>
                </div>
              </div>)}
          </div>}
        {activeTab === 'entertainment' && <div className="space-y-6">
            {mockEntertainmentActivities.map(activity => <div key={activity.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-lg">{activity.title}</h3>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                      <span>{activity.type}</span>
                      <span>{activity.schedule}</span>
                      <span>{activity.location}</span>
                    </div>
                    <div className="flex items-center mt-2">
                      <UsersIcon className="h-4 w-4 text-gray-400" />
                      <span className="ml-1 text-sm">
                        {activity.participants} participants
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      {activity.status}
                    </span>
                    <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md text-sm block ml-auto">
                      Join Activity
                    </button>
                  </div>
                </div>
              </div>)}
          </div>}
      </div>
    </div>;
};