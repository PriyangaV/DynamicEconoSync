import React, { useState } from 'react';
import { FactoryIcon, PlusIcon, TrashIcon, SearchIcon, FilterIcon, BarChart2Icon } from 'lucide-react';
export const ResourcePanel = ({
  cityData
}) => {
  const [newNaturalResource, setNewNaturalResource] = useState('');
  const [newManMadeResource, setNewManMadeResource] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  // Resource categories
  const resourceCategories = {
    natural: ['Water Sources', 'Agricultural Land', 'Forests', 'Minerals', 'Energy Sources'],
    manMade: ['Transportation', 'Manufacturing', 'Construction', 'Technology', 'Healthcare']
  };
  // Filter resources based on search and category
  const filterResources = (resources, type) => {
    return resources.filter(resource => {
      const matchesSearch = resource.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  };
  // Mock resource data with additional details
  const mockNaturalResources = [{
    name: 'Fresh Water Lake',
    category: 'Water Sources',
    capacity: '85%',
    status: 'Optimal'
  }, {
    name: 'Forest Reserve',
    category: 'Forests',
    capacity: '92%',
    status: 'Protected'
  }, {
    name: 'Agricultural Fields',
    category: 'Agricultural Land',
    capacity: '65%',
    status: 'In Use'
  }];
  const mockManMadeResources = [{
    name: 'Solar Panel Array',
    category: 'Energy Sources',
    capacity: '75%',
    status: 'Operational'
  }, {
    name: 'Water Treatment Plant',
    category: 'Water Sources',
    capacity: '60%',
    status: 'Maintenance'
  }, {
    name: 'Public Transport Fleet',
    category: 'Transportation',
    capacity: '90%',
    status: 'Active'
  }];
  return <div>
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-medium">Resource Management</h3>
          <div className="flex space-x-4">
            <div className="relative">
              <input type="text" placeholder="Search resources..." className="pl-10 pr-4 py-2 border border-gray-300 rounded-md" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
              <SearchIcon className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
            <select className="px-4 py-2 border border-gray-300 rounded-md" value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
              <option value="all">All Categories</option>
              {[...resourceCategories.natural, ...resourceCategories.manMade].map(category => <option key={category} value={category}>
                  {category}
                </option>)}
            </select>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Natural Resources */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="h-6 w-6 text-green-600 mr-2" />
              <h3 className="text-lg font-medium">Natural Resources</h3>
            </div>
            <button className="flex items-center text-sm text-gray-600">
              <FilterIcon className="h-4 w-4 mr-1" />
              Filter
            </button>
          </div>
          <div className="space-y-4">
            {mockNaturalResources.map((resource, index) => <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium">{resource.name}</h4>
                    <span className="text-sm text-gray-600">
                      {resource.category}
                    </span>
                  </div>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${resource.status === 'Optimal' ? 'bg-green-100 text-green-800' : resource.status === 'Maintenance' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'}`}>
                    {resource.status}
                  </span>
                </div>
                <div className="mt-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Capacity</span>
                    <span className="font-medium">{resource.capacity}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{
                  width: resource.capacity
                }}></div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
        {/* Man-Made Resources */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <FactoryIcon className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-lg font-medium">Man-Made Resources</h3>
            </div>
            <button className="flex items-center text-sm text-gray-600">
              <BarChart2Icon className="h-4 w-4 mr-1" />
              Analytics
            </button>
          </div>
          <div className="space-y-4">
            {mockManMadeResources.map((resource, index) => <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium">{resource.name}</h4>
                    <span className="text-sm text-gray-600">
                      {resource.category}
                    </span>
                  </div>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${resource.status === 'Operational' ? 'bg-green-100 text-green-800' : resource.status === 'Maintenance' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'}`}>
                    {resource.status}
                  </span>
                </div>
                <div className="mt-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Utilization</span>
                    <span className="font-medium">{resource.capacity}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{
                  width: resource.capacity
                }}></div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </div>;
};