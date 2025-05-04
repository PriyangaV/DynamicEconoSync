import React, { useState } from 'react';
import { XIcon, SaveIcon, PlusIcon } from 'lucide-react';
interface ProfileEditorProps {
  isOpen: boolean;
  onClose: () => void;
  userData: any;
  onSave: (data: any) => void;
}
export const ProfileEditor = ({
  isOpen,
  onClose,
  userData,
  onSave
}: ProfileEditorProps) => {
  const [formData, setFormData] = useState({
    bio: userData?.bio || '',
    education: userData?.education || [],
    skills: userData?.skills || [],
    newSkill: '',
    newEducation: {
      degree: '',
      institution: '',
      year: ''
    }
  });
  const handleAddSkill = () => {
    if (formData.newSkill.trim()) {
      setFormData({
        ...formData,
        skills: [...formData.skills, formData.newSkill.trim()],
        newSkill: ''
      });
    }
  };
  const handleRemoveSkill = (skillToRemove: string) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter((skill: string) => skill !== skillToRemove)
    });
  };
  const handleAddEducation = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form submission
    if (formData.newEducation.degree && formData.newEducation.institution) {
      setFormData({
        ...formData,
        education: [...formData.education, { ...formData.newEducation }],
        newEducation: {
          degree: '',
          institution: '',
          year: ''
        }
      });
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...userData,
      bio: formData.bio,
      skills: formData.skills,
      education: formData.education
    });
    onClose();
  };
  if (!isOpen) return null;
  return <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Edit Profile</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <XIcon className="h-6 w-6" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Bio Section */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Bio
            </label>
            <textarea className="w-full px-3 py-2 border border-gray-300 rounded-md" rows={4} value={formData.bio} onChange={e => setFormData({
            ...formData,
            bio: e.target.value
          })} placeholder="Tell us about yourself..." />
          </div>
          {/* Skills Section */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Skills
            </label>
            <div className="flex flex-wrap gap-2 mb-2">
              {formData.skills.map((skill: string) => <span key={skill} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm flex items-center">
                  {skill}
                  <button type="button" onClick={() => handleRemoveSkill(skill)} className="ml-2 text-blue-600 hover:text-blue-800">
                    <XIcon className="h-4 w-4" />
                  </button>
                </span>)}
            </div>
            <div className="flex gap-2">
              <input type="text" className="flex-1 px-3 py-2 border border-gray-300 rounded-md" placeholder="Add a skill" value={formData.newSkill} onChange={e => setFormData({
              ...formData,
              newSkill: e.target.value
            })} />
              <button type="button" onClick={handleAddSkill} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                <PlusIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          {/* Education Section */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Education
            </label>
            <div className="space-y-4 mb-4">
              {formData.education.map((edu: any, index: number) => <div key={index} className="p-3 bg-gray-50 rounded-md">
                  <div className="font-medium">{edu.degree}</div>
                  <div className="text-sm text-gray-600">
                    {edu.institution} • {edu.year}
                  </div>
                </div>)}
            </div>
            <div className="grid grid-cols-3 gap-2">
              <input type="text" className="px-3 py-2 border border-gray-300 rounded-md" placeholder="Degree" value={formData.newEducation.degree} onChange={e => setFormData({
              ...formData,
              newEducation: {
                ...formData.newEducation,
                degree: e.target.value
              }
            })} />
              <input type="text" className="px-3 py-2 border border-gray-300 rounded-md" placeholder="Institution" value={formData.newEducation.institution} onChange={e => setFormData({
              ...formData,
              newEducation: {
                ...formData.newEducation,
                institution: e.target.value
              }
            })} />
              <input type="text" className="px-3 py-2 border border-gray-300 rounded-md" placeholder="Year" value={formData.newEducation.year} onChange={e => setFormData({
              ...formData,
              newEducation: {
                ...formData.newEducation,
                year: e.target.value
              }
            })} />
            </div>
            <button type="button" onClick={handleAddEducation} className="mt-2 w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
              Add Education
            </button>
          </div>
          <div className="flex justify-end space-x-3 pt-6 border-t">
            <button type="button" onClick={onClose} className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
              <SaveIcon className="h-5 w-5 mr-2" />
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>;
};