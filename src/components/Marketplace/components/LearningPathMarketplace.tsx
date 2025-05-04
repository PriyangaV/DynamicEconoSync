import React, { useState } from 'react';

import { defaultUserData, UserData } from '../../../shared/mockup/userData';

interface LearningPathMarketplaceProps {
    userData?: UserData;
  }

export const LearningPathMarketplace = ({ userData }: LearningPathMarketplaceProps) => {
    return (
<div className="space-y-4">
                <h3 className="text-lg font-semibold">Learning Paths</h3>
                <div className="space-y-4">
                    {userData?.cityLearningPaths?.map((path: any) => (
                    <div key={path.id} className="border rounded-lg p-4">
                        <h4 className="font-medium text-lg mb-2">{path.name}</h4>
                        <div className="space-y-2">
                        <div className="text-sm text-gray-600 mb-2">
                            {path.description}
                        </div>
                        <div className="mt-4">
                            <h5 className="text-md font-semibold">Modules:</h5>
                            {path.modules?.map((module: any) => (
                            <div key={module.id} className="py-2">
                                <h6 className="font-medium">{module.name}</h6>
                                <ul className="list-disc list-inside text-sm text-gray-700">
                                {module.categories?.map((category: string, index: number) => (
                                    <li key={index}>{category}</li>
                                ))}
                                </ul>
                            </div>
                            ))}
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
    )
};


