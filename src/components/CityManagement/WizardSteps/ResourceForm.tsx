import React, { useState } from 'react';
import { FactoryIcon, PlusIcon, TrashIcon } from 'lucide-react';
export const ResourceForm = ({
  resourceData,
  onChange
}) => {
  const [newNaturalResource, setNewNaturalResource] = useState('');
  const [newManMadeResource, setNewManMadeResource] = useState('');
  const addNaturalResource = () => {
    if (newNaturalResource.trim()) {
      const updated = {
        ...resourceData,
        natural: [...resourceData.natural, newNaturalResource.trim()]
      };
      onChange(updated);
      setNewNaturalResource('');
    }
  };
  const addManMadeResource = () => {
    if (newManMadeResource.trim()) {
      const updated = {
        ...resourceData,
        manMade: [...resourceData.manMade, newManMadeResource.trim()]
      };
      onChange(updated);
      setNewManMadeResource('');
    }
  };
  const removeNaturalResource = index => {
    const updated = {
      ...resourceData,
      natural: resourceData.natural.filter((_, i) => i !== index)
    };
    onChange(updated);
  };
  const removeManMadeResource = index => {
    const updated = {
      ...resourceData,
      manMade: resourceData.manMade.filter((_, i) => i !== index)
    };
    onChange(updated);
  };
  return <div>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="flex items-center mb-4">
            <div className="h-6 w-6 text-green-600 mr-2" />
            <h3 className="text-xl font-medium">Natural Resources</h3>
          </div>
          <p className="mb-4 text-gray-600">
            Add natural resources available in your city (water, forests,
            minerals, etc.)
          </p>
          <div className="flex mb-4">
            <input type="text" className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md" placeholder="Add a natural resource" value={newNaturalResource} onChange={e => setNewNaturalResource(e.target.value)} />
            <button className="bg-green-600 text-white px-4 py-2 rounded-r-md" onClick={addNaturalResource}>
              <PlusIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="space-y-2">
            {resourceData.natural.length === 0 && <p className="text-sm text-gray-500 italic">
                No natural resources added yet
              </p>}
            {resourceData.natural.map((resource, index) => <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                <span>{resource}</span>
                <button className="text-red-600" onClick={() => removeNaturalResource(index)}>
                  <TrashIcon className="h-4 w-4" />
                </button>
              </div>)}
          </div>
        </div>
        <div>
          <div className="flex items-center mb-4">
            <FactoryIcon className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-xl font-medium">Man-Made Resources</h3>
          </div>
          <p className="mb-4 text-gray-600">
            Add production machinery and equipment (tractors, bicycles,
            manufacturing tools, etc.)
          </p>
          <div className="flex mb-4">
            <input type="text" className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md" placeholder="Add a man-made resource" value={newManMadeResource} onChange={e => setNewManMadeResource(e.target.value)} />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md" onClick={addManMadeResource}>
              <PlusIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="space-y-2">
            {resourceData.manMade.length === 0 && <p className="text-sm text-gray-500 italic">
                No man-made resources added yet
              </p>}
            {resourceData.manMade.map((resource, index) => <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                <span>{resource}</span>
                <button className="text-red-600" onClick={() => removeManMadeResource(index)}>
                  <TrashIcon className="h-4 w-4" />
                </button>
              </div>)}
          </div>
        </div>
      </div>
    </div>;
};