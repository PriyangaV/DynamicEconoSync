import React from 'react';
import { XIcon, CheckIcon } from 'lucide-react';
import { StatusBadge } from '../../shared/StatusBadge';
import { ProgressBar } from '../../shared/ProgressBar';

interface InfrastructureDetailsProps {
  name: string;
  description: string;
  image: string;
  status: 'active' | 'in-development' | 'planned';
  category: string;
  details: {
    features: string[];
    benefits: string[];
    requirements: string[];
    timeline?: string;
    progress?: number;
  };
  onClose: () => void;
}

export const InfrastructureDetails: React.FC<InfrastructureDetailsProps> = ({
  name,
  description,
  image,
  status,
  category,
  details,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
          >
            <XIcon className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">{name}</h2>
            <StatusBadge status={status} />
          </div>

          <p className="text-gray-600 mb-6">{description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Features</h3>
              <ul className="space-y-2">
                {details.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Benefits</h3>
              <ul className="space-y-2">
                {details.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">Requirements</h3>
            <ul className="space-y-2">
              {details.requirements.map((requirement, index) => (
                <li key={index} className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>{requirement}</span>
                </li>
              ))}
            </ul>
          </div>

          {status === 'in-development' && details.timeline && details.progress && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3">Development Progress</h3>
              <p className="text-gray-600 mb-2">{details.timeline}</p>
              <ProgressBar progress={details.progress} color="blue" showLabel />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}; 