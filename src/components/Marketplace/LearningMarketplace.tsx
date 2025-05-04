import React, { useState } from 'react';
import { LearningPathMarketplace } from './components/LearningPathMarketplace';
import { RecommendedCoursesMarketplace } from './components/RecommendedCourseMarketplace';
import { UserData } from '../../shared/mockup/userData';

  interface LearningMarketplaceProps {
    userData?: UserData;
  }

export const LearningMarketplace = ({ userData }: LearningMarketplaceProps) => {
    return (
<div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6">Learning Hub</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Learning Paths */}
              <LearningPathMarketplace userData={userData} />

              {/* Recommended Courses */}
              <RecommendedCoursesMarketplace userData={userData} />
            </div>
          </div>
    )
};