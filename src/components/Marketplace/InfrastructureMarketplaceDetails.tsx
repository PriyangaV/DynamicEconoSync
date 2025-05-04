import React, { useState } from 'react';
import { InfrastructureItem } from "./InfrastructureMarketplace";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { BuildingIcon, FilterIcon, SearchIcon, WrenchIcon, MapPinIcon, XIcon, CheckIcon } from 'lucide-react';


 /* Detailed View Modal */
        interface InfrastructureDetailProps {
          infrastructureItems: InfrastructureItem;
        }

        export const InfrastructureDetails: React.FC<InfrastructureDetailProps> = ({ infrastructureItems, cityData }) => {
          const navigate = useNavigate();

            const selectedItem = infrastructureItems;

          if (!selectedItem) {
            return (
              <div className="max-w-6xl mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold">Item not found</h2>
              </div>
            );
          }

          return (
            <div className="max-w-6xl mx-auto px-4 py-8">
              <div className="bg-white rounded-lg shadow-md">
                <div className="relative h-64">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.name}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => navigate(`/marketplace/${cityData?.country}/${cityData?.name}/infrastructure`)}
                    className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
                  >
                    <XIcon className="h-5 w-5" />
                  </button>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">{selectedItem.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      selectedItem.status === 'active' ? 'bg-green-100 text-green-800' :
                      selectedItem.status === 'in-development' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {selectedItem.status === 'active' ? 'Active' :
                       selectedItem.status === 'in-development' ? 'In Development' :
                       'Planned'}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6">{selectedItem.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Features</h4>
                      <ul className="space-y-2">
                        {selectedItem.details.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-gray-600">
                            <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {selectedItem.details.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center text-gray-600">
                            <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-semibold mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {selectedItem.details.requirements.map((requirement, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                          {requirement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {selectedItem.status === 'in-development' && selectedItem.details.timeline && (
                    <div className="mt-6">
                      <h4 className="font-semibold mb-3">Development Progress</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>Target Completion: {selectedItem.details.timeline}</span>
                          <span>{selectedItem.details.progress}% Complete</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-yellow-600 h-2 rounded-full"
                            style={{ width: `${selectedItem.details.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        };