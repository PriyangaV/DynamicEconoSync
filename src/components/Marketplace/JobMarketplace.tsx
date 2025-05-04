import React, { useState } from 'react';
import { BriefcaseIcon, FilterIcon, SearchIcon, UserIcon, AlertCircleIcon, GraduationCapIcon } from 'lucide-react';
import { UserData } from '../../App';

interface Job {
  id: number;
  title: string;
  description: string;
  category: string;
  requiredLevel: number;
  credits: number;
  deadline: string;
  skills: string[];
  status: 'urgent' | 'normal';
  location: string;
  type: string;
}

interface JobMarketplaceProps {
  userLevel: number;
  onUpgradeSkills: () => void;
  userData?: UserData;
}

export const JobMarketplace = ({
  userLevel,
  onUpgradeSkills,
  userData
}: JobMarketplaceProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const categories = ['All', 'Healthcare', 'Education', 'Technology', 'Community', 'Infrastructure', 'Environment'];
  const mockJobs: Job[] = [{
    id: 1,
    title: 'Emergency Medical Coordinator',
    description: 'Coordinate medical supply distribution and emergency response',
    category: 'Healthcare',
    requiredLevel: 4,
    credits: 250,
    deadline: '2023-12-31',
    skills: ['Medical Training', 'Leadership', 'Emergency Response'],
    status: 'urgent',
    location: 'City Hospital',
    type: 'Full-time'
  }, {
    id: 2,
    title: 'Community Education Instructor',
    description: 'Teach basic skills to community members',
    category: 'Education',
    requiredLevel: 2,
    credits: 150,
    deadline: '2023-12-25',
    skills: ['Teaching', 'Communication'],
    status: 'normal',
    location: 'Community Center',
    type: 'Part-time'
  }
  // Add more mock jobs...
  ];
  const handleJobApplication = (job: Job) => {
    if (userLevel < job.requiredLevel) {
      setSelectedJob(job);
      setShowUpgradeModal(true);
    } else {
      // Handle actual job application
      console.log('Applying for job:', job.title);
    }
  };
  const filteredJobs = mockJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || job.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || job.requiredLevel === parseInt(selectedLevel);
    return matchesSearch && matchesCategory && matchesLevel;
  });
  return <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold flex items-center">
          <BriefcaseIcon className="h-6 w-6 text-blue-600 mr-2" />
          Available Jobs
        </h2>
      </div>
      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="flex-1 min-w-[200px]">
          <div className="relative">
            <input type="text" placeholder="Search jobs..." className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
            <SearchIcon className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
          </div>
        </div>
        <select className="px-4 py-2 border border-gray-300 rounded-md" value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
          {categories.map(category => <option key={category} value={category.toLowerCase()}>
              {category}
            </option>)}
        </select>
        <select className="px-4 py-2 border border-gray-300 rounded-md" value={selectedLevel} onChange={e => setSelectedLevel(e.target.value)}>
          <option value="all">All Levels</option>
          {[1, 2, 3, 4, 5].map(level => <option key={level} value={level}>
              Level {level}+
            </option>)}
        </select>
      </div>
      {/* Job Listings */}
      <div className="space-y-6">
        {filteredJobs.map(job => <div key={job.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center mb-2">
                  {job.status === 'urgent' && <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full mr-2">
                      Urgent
                    </span>}
                  <h3 className="text-lg font-medium">{job.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <UserIcon className="h-4 w-4 mr-2" />
                    Level {job.requiredLevel}+ Required
                  </div>
                  <div>{job.type}</div>
                  <div>{job.location}</div>
                  <div>Deadline: {job.deadline}</div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map(skill => <span key={skill} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {skill}
                    </span>)}
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-600 mb-2">
                  {job.credits} Credits
                </div>
                <button onClick={() => handleJobApplication(job)} className={`px-4 py-2 rounded-md text-sm ${userLevel >= job.requiredLevel ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-600'}`}>
                  {userLevel >= job.requiredLevel ? 'Apply Now' : 'Level Up Required'}
                </button>
              </div>
            </div>
          </div>)}
      </div>
      {/* Upgrade Skills Modal */}
      {showUpgradeModal && selectedJob && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex items-center mb-4">
              <GraduationCapIcon className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-medium">Upgrade Required</h3>
            </div>
            <p className="text-gray-600 mb-4">
              This job requires Level {selectedJob.requiredLevel}, but you are
              currently Level {userLevel}. Upgrade your skills to qualify for
              this position.
            </p>
            <div className="space-y-4">
              <h4 className="font-medium">Required Skills:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedJob.skills.map(skill => <span key={skill} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                    {skill}
                  </span>)}
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button onClick={() => setShowUpgradeModal(false)} className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                Cancel
              </button>
              <button onClick={() => {
            setShowUpgradeModal(false);
            onUpgradeSkills();
          }} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                View Learning Paths
              </button>
            </div>
          </div>
        </div>}
    </div>;
};