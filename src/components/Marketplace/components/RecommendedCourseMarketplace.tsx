import React, { useState } from 'react';

import { defaultUserData, UserData } from '../../../shared/mockup/userData';

  interface RecommendedCoursesMarketplaceProps {
    userData?: UserData;
  }

export const RecommendedCoursesMarketplace = ({ userData }: RecommendedCoursesMarketplaceProps) => {
    return (
<div className="space-y-4">
                <h3 className="text-lg font-semibold">Recommended Courses</h3>
                <div className="space-y-4">
                  {userData?.recommendedCourses?.map((course: any) => (
                    <div key={course.id} className="border rounded-lg p-4">
                      <h4 className="font-medium text-lg mb-2">{course.name}</h4>
                      <p className="text-gray-600 mb-4">{course.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">
                          {course.duration} • {course.level}
                        </span>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                          Start Course
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
    )
};   