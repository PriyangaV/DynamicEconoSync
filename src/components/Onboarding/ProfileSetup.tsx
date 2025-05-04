import React, { useState } from 'react';
import { PlusIcon, XIcon, ArrowLeftIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ProfileSetupProps {
  onComplete: (data: any) => void;
  onBack: () => void;
  userData: {
    skills: string[];
    education: string[];
    experience: string[];
  };
}

interface Education {
  university: string;
  program: string;
  startYear: string;
  endYear: string;
  degree: string;
  gpa?: string;
}

interface Certification {
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
}

interface Experience {
  title: string;
  company: string;
  startYear: string;
  endYear: string;
  description: string;
}

interface FormData {
  age: string;
  country: string;
  skills: string[];
  education: Education[];
  experience: Experience[];
  interests: string[];
  certifications: Certification[];
}

interface NewItem {
  education: Education;
  experience: Experience;
  certification: Certification;
  skill: string;
  interest: string;
}

type ArrayFields = 'skills' | 'education' | 'experience' | 'certifications' | 'interests';

export function ProfileSetup({ onComplete, onBack, userData }: ProfileSetupProps) {
  const [formData, setFormData] = useState<FormData>({
    age: '',
    country: '',
    skills: userData.skills || [],
    education: userData.education.map(edu => ({
      university: '',
      program: '',
      startYear: '',
      endYear: '',
      degree: '',
      gpa: ''
    })),
    experience: userData.experience.map(exp => ({
      title: '',
      company: '',
      startYear: '',
      endYear: '',
      description: ''
    })),
    interests: [],
    certifications: []
  });

  const [newItem, setNewItem] = useState<NewItem>({
    education: {
      university: '',
      program: '',
      startYear: '',
      endYear: '',
      degree: '',
      gpa: ''
    },
    experience: {
      title: '',
      company: '',
      startYear: '',
      endYear: '',
      description: ''
    },
    certification: {
      name: '',
      issuer: '',
      issueDate: '',
      expiryDate: '',
      credentialId: ''
    },
    skill: '',
    interest: ''
  });

  const [error, setError] = useState('');
  const [showEducationModal, setShowEducationModal] = useState(false);
  const [showExperienceModal, setShowExperienceModal] = useState(false);
  const [showCertificationModal, setShowCertificationModal] = useState(false);
  const [showSkillModal, setShowSkillModal] = useState(false);
  const [showInterestModal, setShowInterestModal] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddItem = (field: ArrayFields) => {
    if (field === 'skills' && newItem.skill.trim()) {
      setFormData(prev => ({
        ...prev,
        skills: [...prev.skills, newItem.skill.trim()]
      }));
      setNewItem(prev => ({ ...prev, skill: '' }));
    } else if (field === 'education' && newItem.education.university.trim()) {
      setFormData(prev => ({
        ...prev,
        education: [...prev.education, { ...newItem.education }]
      }));
      setNewItem(prev => ({
        ...prev,
        education: {
          university: '',
          program: '',
          startYear: '',
          endYear: '',
          degree: '',
          gpa: ''
        }
      }));
    } else if (field === 'experience' && newItem.experience.title.trim()) {
      setFormData(prev => ({
        ...prev,
        experience: [...prev.experience, { ...newItem.experience }]
      }));
      setNewItem(prev => ({
        ...prev,
        experience: {
          title: '',
          company: '',
          startYear: '',
          endYear: '',
          description: ''
        }
      }));
    } else if (field === 'certifications' && newItem.certification.name.trim()) {
      setFormData(prev => ({
        ...prev,
        certifications: [...prev.certifications, { ...newItem.certification }]
      }));
      setNewItem(prev => ({
        ...prev,
        certification: {
          name: '',
          issuer: '',
          issueDate: '',
          expiryDate: '',
          credentialId: ''
        }
      }));
    } else if (field === 'interests' && newItem.interest.trim()) {
      setFormData(prev => ({
        ...prev,
        interests: [...prev.interests, newItem.interest.trim()]
      }));
      setNewItem(prev => ({ ...prev, interest: '' }));
    }
  };

  const handleRemoveItem = (field: ArrayFields, index: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.age || !formData.country) {
      setError('Age and country are required fields');
      return;
    }

    onComplete({
      ...formData,
      age: parseInt(formData.age),
      skills: formData.skills,
      education: formData.education,
      experience: formData.experience,
      interests: formData.interests,
      certifications: formData.certifications
    });
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-8">
      <div className="flex items-center mb-6">
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-blue-600 transition-colors mr-4"
        >
          <ArrowLeftIcon size={20} className="mr-2" />
          Back
        </button>
        <h2 className="text-2xl font-bold text-center flex-1">
        Complete Your Profile
      </h2>
      </div>
      <p className="text-gray-600 text-center mb-8">
        Tell us about yourself so we can match you with the right opportunities.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
              Age <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your age"
              required
              min="18"
              max="100"
            />
          </div>
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
              Country <span className="text-red-500">*</span>
            </label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Select your country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="UK">United Kingdom</option>
              <option value="AU">Australia</option>
              {/* Add more countries as needed */}
            </select>
          </div>
        </div>

        {/* Skills */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Skills
          </label>
          <div className="flex flex-wrap gap-2 p-2 border border-gray-300 rounded-lg">
            {formData.skills.map((skill, index) => (
              <div key={index} className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {skill}
                <button
                  type="button"
                  onClick={() => handleRemoveItem('skills', index)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <XIcon size={14} />
                </button>
          </div>
            ))}
            <div className="relative">
              <input
                type="text"
                value={newItem.skill}
                onChange={(e) => setNewItem(prev => ({ ...prev, skill: e.target.value }))}
                className="w-32 pl-2 pr-8 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Add skill"
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && newItem.skill.trim()) {
                    e.preventDefault();
                    setFormData(prev => ({
                      ...prev,
                      skills: [...prev.skills, newItem.skill.trim()]
                    }));
                    setNewItem(prev => ({ ...prev, skill: '' }));
                  }
                }}
              />
              <button
                type="button"
                onClick={() => {
                  if (newItem.skill.trim()) {
                    setFormData(prev => ({
            ...prev,
                      skills: [...prev.skills, newItem.skill.trim()]
                    }));
                    setNewItem(prev => ({ ...prev, skill: '' }));
                  }
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-600 hover:text-blue-800"
              >
                <PlusIcon size={16} />
            </button>
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Education
          </label>
          <div className="space-y-2">
            {formData.education.map((edu, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">{edu.university}</p>
                  <p className="text-sm text-gray-600">{edu.program} - {edu.degree}</p>
                </div>
                <button
                  type="button"
                  onClick={() => handleRemoveItem('education', index)}
                  className="text-red-600 hover:text-red-800"
                >
                  <XIcon size={16} />
                </button>
          </div>
            ))}
            <button
              type="button"
              onClick={() => setShowEducationModal(true)}
              className="w-full bg-gray-50 text-gray-700 px-4 py-2 rounded-lg flex items-center justify-center hover:bg-gray-100"
            >
              <PlusIcon size={16} className="mr-2" />
              Add Education
            </button>
          </div>
        </div>

        {/* Experience */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Work Experience
          </label>
          <div className="space-y-2">
            {formData.experience.map((exp, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">{exp.title}</p>
                  <p className="text-sm text-gray-600">{exp.company}</p>
                </div>
                <button
                  type="button"
                  onClick={() => handleRemoveItem('experience', index)}
                  className="text-red-600 hover:text-red-800"
                >
                  <XIcon size={16} />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => setShowExperienceModal(true)}
              className="w-full bg-gray-50 text-gray-700 px-4 py-2 rounded-lg flex items-center justify-center hover:bg-gray-100"
            >
              <PlusIcon size={16} className="mr-2" />
              Add Experience
            </button>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Certifications
          </label>
          <div className="space-y-2">
            {formData.certifications.map((cert, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">{cert.name}</p>
                  <p className="text-sm text-gray-600">{cert.issuer}</p>
                </div>
                <button
                  type="button"
                  onClick={() => handleRemoveItem('certifications', index)}
                  className="text-red-600 hover:text-red-800"
                >
                  <XIcon size={16} />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => setShowCertificationModal(true)}
              className="w-full bg-gray-50 text-gray-700 px-4 py-2 rounded-lg flex items-center justify-center hover:bg-gray-100"
            >
              <PlusIcon size={16} className="mr-2" />
              Add Certification
            </button>
          </div>
        </div>

        {/* Interests */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Interests
          </label>
          <div className="flex flex-wrap gap-2 p-2 border border-gray-300 rounded-lg">
            {formData.interests.map((interest, index) => (
              <div key={index} className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                {interest}
                <button
                  type="button"
                  onClick={() => handleRemoveItem('interests', index)}
                  className="text-yellow-600 hover:text-yellow-800"
                >
                  <XIcon size={14} />
                </button>
          </div>
            ))}
            <div className="relative">
              <input
                type="text"
                value={newItem.interest}
                onChange={(e) => setNewItem(prev => ({ ...prev, interest: e.target.value }))}
                className="w-32 pl-2 pr-8 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Add interest"
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && newItem.interest.trim()) {
                    e.preventDefault();
                    setFormData(prev => ({
                      ...prev,
                      interests: [...prev.interests, newItem.interest.trim()]
                    }));
                    setNewItem(prev => ({ ...prev, interest: '' }));
                  }
                }}
              />
              <button
                type="button"
                onClick={() => {
                  if (newItem.interest.trim()) {
                    setFormData(prev => ({
            ...prev,
                      interests: [...prev.interests, newItem.interest.trim()]
                    }));
                    setNewItem(prev => ({ ...prev, interest: '' }));
                  }
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-600 hover:text-blue-800"
              >
                <PlusIcon size={16} />
            </button>
            </div>
          </div>
        </div>

        {error && (
          <div className="text-red-600 text-sm mt-2">
            {error}
          </div>
        )}

        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Complete Profile
          </button>
        </div>
      </form>

      {/* Skill Modal */}
      {showSkillModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full">
            <h3 className="text-lg font-medium mb-4">Add Skill</h3>
            <div className="space-y-4">
              <input
                type="text"
                value={newItem.skill}
                onChange={(e) => setNewItem(prev => ({ ...prev, skill: e.target.value }))}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Enter skill name"
              />
              <div className="flex justify-end gap-4 mt-6">
                <button
                  type="button"
                  onClick={() => setShowSkillModal(false)}
                  className="px-4 py-2 text-gray-700 hover:text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (newItem.skill.trim()) {
                      setFormData(prev => ({
                        ...prev,
                        skills: [...prev.skills, newItem.skill.trim()]
                      }));
                      setNewItem(prev => ({ ...prev, skill: '' }));
                      setShowSkillModal(false);
                    }
                  }}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Education Modal */}
      {showEducationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full">
            <h3 className="text-lg font-medium mb-4">Add Education</h3>
            <div className="space-y-4">
              <input
                type="text"
                value={newItem.education.university}
                onChange={(e) => setNewItem(prev => ({
                  ...prev,
                  education: { ...prev.education, university: e.target.value }
                }))}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="University"
              />
              <input
                type="text"
                value={newItem.education.program}
                onChange={(e) => setNewItem(prev => ({
                  ...prev,
                  education: { ...prev.education, program: e.target.value }
                }))}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Program"
              />
              <input
                type="text"
                value={newItem.education.degree}
                onChange={(e) => setNewItem(prev => ({
                  ...prev,
                  education: { ...prev.education, degree: e.target.value }
                }))}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Degree"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="number"
                  value={newItem.education.startYear}
                  onChange={(e) => setNewItem(prev => ({
                    ...prev,
                    education: { ...prev.education, startYear: e.target.value }
                  }))}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Start Year"
                />
                <input
                  type="number"
                  value={newItem.education.endYear}
                  onChange={(e) => setNewItem(prev => ({
                    ...prev,
                    education: { ...prev.education, endYear: e.target.value }
                  }))}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="End Year"
                />
              </div>
              <input
                type="text"
                value={newItem.education.gpa}
                onChange={(e) => setNewItem(prev => ({
                  ...prev,
                  education: { ...prev.education, gpa: e.target.value }
                }))}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="GPA (optional)"
              />
              <div className="flex justify-end gap-4 mt-6">
                <button
                  type="button"
                  onClick={() => setShowEducationModal(false)}
                  className="px-4 py-2 text-gray-700 hover:text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => {
                    handleAddItem('education');
                    setShowEducationModal(false);
                  }}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Experience Modal */}
      {showExperienceModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full">
            <h3 className="text-lg font-medium mb-4">Add Work Experience</h3>
            <div className="space-y-4">
              <input
                type="text"
                value={newItem.experience.title}
                onChange={(e) => setNewItem(prev => ({
                  ...prev,
                  experience: { ...prev.experience, title: e.target.value }
                }))}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Job Title"
              />
              <input
                type="text"
                value={newItem.experience.company}
                onChange={(e) => setNewItem(prev => ({
                  ...prev,
                  experience: { ...prev.experience, company: e.target.value }
                }))}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Company"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="number"
                  value={newItem.experience.startYear}
                  onChange={(e) => setNewItem(prev => ({
                    ...prev,
                    experience: { ...prev.experience, startYear: e.target.value }
                  }))}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Start Year"
                />
                <input
                  type="number"
                  value={newItem.experience.endYear}
                  onChange={(e) => setNewItem(prev => ({
                    ...prev,
                    experience: { ...prev.experience, endYear: e.target.value }
                  }))}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="End Year"
                />
              </div>
              <textarea
                value={newItem.experience.description}
                onChange={(e) => setNewItem(prev => ({
                  ...prev,
                  experience: { ...prev.experience, description: e.target.value }
                }))}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Description"
                rows={3}
              />
              <div className="flex justify-end gap-4 mt-6">
                <button
                  type="button"
                  onClick={() => setShowExperienceModal(false)}
                  className="px-4 py-2 text-gray-700 hover:text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => {
                    handleAddItem('experience');
                    setShowExperienceModal(false);
                  }}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Certification Modal */}
      {showCertificationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full">
            <h3 className="text-lg font-medium mb-4">Add Certification</h3>
            <div className="space-y-4">
              <input
                type="text"
                value={newItem.certification.name}
                onChange={(e) => setNewItem(prev => ({
                  ...prev,
                  certification: { ...prev.certification, name: e.target.value }
                }))}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Certification Name"
              />
              <input
                type="text"
                value={newItem.certification.issuer}
                onChange={(e) => setNewItem(prev => ({
                  ...prev,
                  certification: { ...prev.certification, issuer: e.target.value }
                }))}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Issuing Organization"
              />
              <input
                type="date"
                value={newItem.certification.issueDate}
                onChange={(e) => setNewItem(prev => ({
                  ...prev,
                  certification: { ...prev.certification, issueDate: e.target.value }
                }))}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Issue Date"
              />
              <input
                type="date"
                value={newItem.certification.expiryDate}
                onChange={(e) => setNewItem(prev => ({
                  ...prev,
                  certification: { ...prev.certification, expiryDate: e.target.value }
                }))}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Expiry Date (optional)"
              />
              <input
                type="text"
                value={newItem.certification.credentialId}
                onChange={(e) => setNewItem(prev => ({
                  ...prev,
                  certification: { ...prev.certification, credentialId: e.target.value }
                }))}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Credential ID (optional)"
              />
              <div className="flex justify-end gap-4 mt-6">
                <button
                  type="button"
                  onClick={() => setShowCertificationModal(false)}
                  className="px-4 py-2 text-gray-700 hover:text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => {
                    handleAddItem('certifications');
                    setShowCertificationModal(false);
                  }}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Interest Modal */}
      {showInterestModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full">
            <h3 className="text-lg font-medium mb-4">Add Interest</h3>
            <div className="space-y-4">
              <input
                type="text"
                value={newItem.interest}
                onChange={(e) => setNewItem(prev => ({ ...prev, interest: e.target.value }))}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Enter interest"
              />
              <div className="flex justify-end gap-4 mt-6">
                <button
                  type="button"
                  onClick={() => setShowInterestModal(false)}
                  className="px-4 py-2 text-gray-700 hover:text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (newItem.interest.trim()) {
                      setFormData(prev => ({
                        ...prev,
                        interests: [...prev.interests, newItem.interest.trim()]
                      }));
                      setNewItem(prev => ({ ...prev, interest: '' }));
                      setShowInterestModal(false);
                    }
                  }}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}