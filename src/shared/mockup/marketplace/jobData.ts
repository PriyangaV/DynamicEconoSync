export interface Job {
    id: string;
    title: string;
    company: string;
    location: string;
    type: 'full-time' | 'part-time' | 'contract' | 'internship';
    salary?: {
      min: number;
      max: number;
      currency: string;
    };
    description: string;
    requirements: string[];
    benefits: string[];
    postedDate: string;
    category: string;
  }
  
  export const jobs: Job[] = [
    {
      id: '1',
      title: 'Community Health Worker',
      company: 'Local Health Center',
      location: 'Mogadishu',
      type: 'full-time',
      salary: {
        min: 500,
        max: 800,
        currency: 'USD'
      },
      description: 'Provide basic healthcare services and health education to local communities',
      requirements: [
        'Basic healthcare training',
        'Community engagement experience',
        'Local language proficiency'
      ],
      benefits: [
        'Health insurance',
        'Training opportunities',
        'Community impact'
      ],
      postedDate: '2024-03-15',
      category: 'healthcare'
    },
    {
      id: '2',
      title: 'Agricultural Extension Officer',
      company: 'Rural Development Agency',
      location: 'Hargeisa',
      type: 'full-time',
      salary: {
        min: 600,
        max: 900,
        currency: 'USD'
      },
      description: 'Support local farmers with modern agricultural techniques and sustainable practices',
      requirements: [
        'Agricultural degree or experience',
        'Training skills',
        'Field work capability'
      ],
      benefits: [
        'Field allowance',
        'Professional development',
        'Rural impact'
      ],
      postedDate: '2024-03-14',
      category: 'agriculture'
    }
  ];
  
  export const jobCategories = [
    { id: 'all', label: 'All Jobs', icon: '💼' },
    { id: 'healthcare', label: 'Healthcare', icon: '🏥' },
    { id: 'agriculture', label: 'Agriculture', icon: '🌾' },
    { id: 'education', label: 'Education', icon: '📚' },
    { id: 'technology', label: 'Technology', icon: '💻' },
    { id: 'construction', label: 'Construction', icon: '🏗️' }
  ];