import React, { useState } from 'react';
import { PlusIcon, VoteIcon } from 'lucide-react';
interface PollSubmissionFormProps {
  onSubmit: (data: any) => void;
}
export const PollSubmissionForm = ({
  onSubmit
}: PollSubmissionFormProps) => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    type: 'product',
    tier: '3',
    expectedBeneficiaries: '',
    implementationTimeframe: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    // Reset form
    setFormData({
      title: '',
      category: '',
      description: '',
      type: 'product',
      tier: '3',
      expectedBeneficiaries: '',
      implementationTimeframe: ''
    });
  };
  return <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-6">
        <VoteIcon className="h-6 w-6 text-blue-600 mr-2" />
        <h2 className="text-xl font-bold">Submit New Request</h2>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Request Title
            </label>
            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md" value={formData.title} onChange={e => setFormData({
            ...formData,
            title: e.target.value
          })} required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-md" value={formData.category} onChange={e => setFormData({
            ...formData,
            category: e.target.value
          })} required>
              <option value="">Select a category</option>
              <option value="infrastructure">Infrastructure</option>
              <option value="healthcare">Healthcare</option>
              <option value="education">Education</option>
              <option value="technology">Technology</option>
              <option value="community">Community</option>
              <option value="environment">Environment</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea className="w-full px-4 py-2 border border-gray-300 rounded-md" rows={4} value={formData.description} onChange={e => setFormData({
          ...formData,
          description: e.target.value
        })} required />
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Request Type
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-md" value={formData.type} onChange={e => setFormData({
            ...formData,
            type: e.target.value
          })} required>
              <option value="product">Product</option>
              <option value="service">Service</option>
              <option value="infrastructure">Infrastructure</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Priority Tier
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-md" value={formData.tier} onChange={e => setFormData({
            ...formData,
            tier: e.target.value
          })} required>
              <option value="1">Tier 1 - Critical Need</option>
              <option value="2">Tier 2 - High Priority</option>
              <option value="3">Tier 3 - Medium Priority</option>
              <option value="4">Tier 4 - Low Priority</option>
              <option value="5">Tier 5 - Optional</option>
            </select>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Expected Beneficiaries
            </label>
            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md" value={formData.expectedBeneficiaries} onChange={e => setFormData({
            ...formData,
            expectedBeneficiaries: e.target.value
          })} required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Implementation Timeframe
            </label>
            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md" placeholder="e.g., 3 months" value={formData.implementationTimeframe} onChange={e => setFormData({
            ...formData,
            implementationTimeframe: e.target.value
          })} required />
          </div>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 flex items-center justify-center">
          <PlusIcon className="h-5 w-5 mr-2" />
          Submit for Community Vote
        </button>
      </form>
      <div className="mt-6 bg-blue-50 p-4 rounded-md">
        <h3 className="font-medium mb-2">Request Guidelines:</h3>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Clearly describe the community benefit</li>
          <li>• Provide realistic implementation timeline</li>
          <li>• Consider resource availability</li>
          <li>• Higher tier requests require more community support</li>
        </ul>
      </div>
    </div>;
};