import React from 'react';
import { XIcon, TrendingUpIcon, TrendingDownIcon, CheckIcon } from 'lucide-react';
interface LevelUpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLevel: number;
  onUpgrade: () => void;
  onDowngrade: () => void;
}
export const LevelUpgradeModal = ({
  isOpen,
  onClose,
  currentLevel,
  onUpgrade,
  onDowngrade
}: LevelUpgradeModalProps) => {
  if (!isOpen) return null;
  const upgradeBenefits = ['Access to higher-tier jobs and products', 'Increased credit earning potential', 'Priority in job assignments', 'Advanced learning opportunities'];
  const downgradeBenefits = ['Reduced work requirements', 'More leisure time', 'Lower resource consumption', 'Flexible scheduling options'];
  return <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Adjust Your Level</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <XIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="text-center mb-6">
          <div className="text-4xl font-bold text-blue-600">
            Level {currentLevel}
          </div>
          <p className="text-gray-600">Current Level</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Upgrade Section */}
          <div className="border rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">
                Upgrade to Level {currentLevel + 1}
              </h3>
              <TrendingUpIcon className="h-6 w-6 text-green-600" />
            </div>
            <ul className="space-y-2 mb-4">
              {upgradeBenefits.map((benefit, index) => <li key={index} className="flex items-center text-sm text-gray-600">
                  <CheckIcon className="h-4 w-4 text-green-600 mr-2" />
                  {benefit}
                </li>)}
            </ul>
            <button onClick={onUpgrade} className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
              Upgrade Level
            </button>
          </div>
          {/* Downgrade Section */}
          <div className="border rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">
                Downgrade to Level {currentLevel - 1}
              </h3>
              <TrendingDownIcon className="h-6 w-6 text-blue-600" />
            </div>
            <ul className="space-y-2 mb-4">
              {downgradeBenefits.map((benefit, index) => <li key={index} className="flex items-center text-sm text-gray-600">
                  <CheckIcon className="h-4 w-4 text-blue-600 mr-2" />
                  {benefit}
                </li>)}
            </ul>
            <button onClick={onDowngrade} className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Downgrade Level
            </button>
          </div>
        </div>
        <div className="mt-6 p-4 bg-gray-50 rounded-md">
          <h4 className="font-medium mb-2">Important Notes:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Level changes take effect immediately</li>
            <li>• Your current jobs and commitments will be reviewed</li>
            <li>• You can change your level again after 30 days</li>
          </ul>
        </div>
      </div>
    </div>;
};