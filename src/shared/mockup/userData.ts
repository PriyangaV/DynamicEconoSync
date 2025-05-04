export interface UserData {
  id: string;
  name: string;
  email: string;
  defaultCountry: string;
  defaultCity: string;
  role: 'user' | 'admin' | 'city_manager';
  preferences: {
    language: string;
    currency: string;
  };
  level: number;
  category: string;
  country: string;
  city: string;
  bio: string;
  skills: string[];
  credits: {
    available: number;
    expiring: {
      amount: number;
      days: number;
    };
  };
  education: {
    degree: string;
    institution: string;
    year: string;
  }[];  
  accessibleProducts: {
    id: number;
    name: string;
    tier: number;
  }[];  
  recommendedJobs: {
    id: number;
    title: string;
    credits: number;
    matches: string[];
  }[];  
  recommendedCourses: {
    id: number;
    name: string;
    description: string;
    duration: string;
    level: string;
  }[];
  learningPaths: {
    id: number;
    name: string;
    progress: number;
    description: string;
    modules: {
      id: number;
      name: string;
      completed: boolean;
    }[];
  }[];
  cityLearningPaths: {
    id: number;
    name: string;
    progress: number;
    description: string;
    features: string[];
    modules: {
      id: number;
      name: string;
      description: string;
      categories: string[];
    }[];
  }[];
}

export const defaultUserData: UserData = {
  id: '1',
  name: 'Test User',
  email: 'test@example.com',
  defaultCountry: 'Somalia',
  defaultCity: 'Mogadishu',
  role: 'user',
  preferences: {
    language: 'en',
    currency: 'USD'
  },
  level: 1,
  category: 'Educator',
  country: 'Somalia',
  city: 'Mogadishu',
  bio: 'Passionate about community development and sustainable living.',
  skills: ['Teaching', 'First Aid', 'Community Outreach'],
  credits: {
    available: 320,
    expiring: {
      amount: 40,
      days: 5
    }
  },
  education: [
    {
      degree: 'Bachelor of Education',
      institution: 'Community University',
      year: '2020'
    }
  ],
  accessibleProducts: [
    { id: 1, name: 'Community Toolkit', tier: 1 },
    { id: 2, name: 'Sustainability Guide', tier: 2 },
    { id: 3, name: 'First Aid Training Module', tier: 3 },
  ],
  recommendedJobs: [
    {
      id: 1,
      title: 'Community Health Facilitator',
      credits: 150,
      matches: ['First Aid', 'Teaching']
    },
    {
      id: 2,
      title: 'Sustainable Farming Educator',
      credits: 200,
      matches: ['Sustainability', 'Education']
    }
  ],
  recommendedCourses: [
    {
      id: 1,
      name: 'Basic First Aid',
      description: 'Learn essential first aid skills for community health',
      duration: '10 hours',
      level: 'Beginner'
    },
    {
      id: 2,
      name: 'Sustainable Farming',
      description: 'Learn about sustainable farming practices',
      duration: '15 hours',
      level: 'Intermediate'
    },
    {
      id: 3,
      name: 'Urban Planning Fundamentals',
      description: 'Learn the basics of urban planning and city development',
      duration: '8 weeks',
      level: 'Beginner'
    },
    {
      id: 4,
      name: 'Sustainable Infrastructure',
      description: 'Understanding sustainable infrastructure development',
      duration: '12 weeks',
      level: 'Intermediate'
    }
  ],
  learningPaths: [
    {
      id: 1,
      name: 'Basic First Aid',
      progress: 80,
      description: 'Learn essential first aid skills for community health',
      modules: [
        { id: 1, name: 'Introduction to First Aid', completed: true },
        { id: 2, name: 'Basic Life Support', completed: true },
        { id: 3, name: 'Emergency Response', completed: false }
      ]
    },
    {
      id: 2,
      name: 'Sustainable Development 101',
      progress: 45,
      description: 'Understanding sustainable development principles',
      modules: [
        { id: 1, name: 'Introduction to Sustainability', completed: true },
        { id: 2, name: 'Environmental Impact', completed: false },
        { id: 3, name: 'Community Planning', completed: false }
      ]
    },
    {
      id: 3,
      name: 'Community Leadership',
      progress: 30,
      description: 'Develop leadership skills for community projects',
      modules: [
        { id: 1, name: 'Leadership Fundamentals', completed: true },
        { id: 2, name: 'Team Management', completed: false },
        { id: 3, name: 'Project Planning', completed: false }
      ]
    }
  ],
  cityLearningPaths: [
      {
        "id": 1,
        "name": "Basic",
        "progress": 80,
        "description": "For those in learning, recovery, or performing entry-level jobs such as retail or hospitality.",
        "features": [
          "Students in learning phase",
          "Elderly or people with disabilities",
          "Entry-level roles (e.g., supermarket billing, hotel and bar waitstaff)",
          "No work expectation or low-intensity tasks"
        ],
        "modules": [
          {
            "id": 1,
            "name": "Customer Service in Retail",
            "description": "Learn the fundamentals of customer service and how to handle retail environments.",
            "categories": ["Customer Service", "Retail"]
          },
          {
            "id": 2,
            "name": "Basic Food Handling & Safety",
            "description": "Understand the basics of food safety and how to handle food in different environments.",
            "categories": ["Food Safety", "Healthcare"]
          },
          {
            "id": 3,
            "name": "Hospitality Basics: Serving and Hosting",
            "description": "Learn essential skills for serving guests, managing service areas, and hosting effectively.",
            "categories": ["Hospitality", "Customer Service"]
          },
          {
            "id": 4,
            "name": "Basic Cleaning and Maintenance",
            "description": "Learn how to safely and efficiently clean and maintain various spaces and environments.",
            "categories": ["Cleaning", "Maintenance"]
          },
          {
            "id": 5,
            "name": "Workplace Safety and Hygiene",
            "description": "Understand the importance of hygiene and workplace safety practices.",
            "categories": ["Safety", "Workplace"]
          }
        ]
      },
      {
        "id": 2,
        "name": "Light Contributor",
        "progress": 45,
        "description": "For part-time workers, people with moderate availability, or those involved in more specialized tasks like light mechanical or electrical work.",
        "features": [
          "Part-time workers",
          "Caregivers, early-stage learners",
          "Jobs requiring moderate physical work (e.g., light mechanical, electrical, mentoring, fitness-based jobs)",
          "~20 hours/week contribution"
        ],
        "modules": [
          {
            "id": 1,
            "name": "Basic Electrical Wiring",
            "description": "Learn how to perform basic electrical wiring for small-scale tasks.",
            "categories": ["Electrical", "Technology"]
          },
          {
            "id": 2,
            "name": "Introduction to Mechanical Systems",
            "description": "Gain an understanding of basic mechanical systems and their applications.",
            "categories": ["Mechanical", "Engineering"]
          },
          {
            "id": 3,
            "name": "Physical Labor Safety",
            "description": "Understand safety practices in physically demanding tasks and environments.",
            "categories": ["Safety", "Labor"]
          },
          {
            "id": 4,
            "name": "Customer Support and Mentoring",
            "description": "Learn how to support customers and mentor others in the workplace.",
            "categories": ["Customer Service", "Mentorship"]
          },
          {
            "id": 5,
            "name": "Maintenance and Repairs",
            "description": "Learn the basics of performing maintenance and simple repairs on equipment and systems.",
            "categories": ["Maintenance", "Repairs"]
          }
        ]
      },
      {
        "id": 3,
        "name": "Standard Contributor",
        "progress": 30,
        "description": "For full-time workers in stable roles performing typical 8-hour shifts across various sectors.",
        "features": [
          "Full-time workers",
          "Community service providers",
          "Production unit members",
          "Standard workday roles (e.g., office jobs, service industry, manufacturing, etc.)"
        ],
        "modules": [
          {
            "id": 1,
            "name": "Advanced Customer Service",
            "description": "Develop advanced skills in customer interaction, problem-solving, and relationship building.",
            "categories": ["Customer Service", "Business"]
          },
          {
            "id": 2,
            "name": "Basic Office Software and Tools",
            "description": "Learn to use basic office software tools like word processors and spreadsheets.",
            "categories": ["Technology", "Office Tools"]
          },
          {
            "id": 3,
            "name": "Supply Chain Management",
            "description": "Understand the principles of supply chain management and how to optimize processes.",
            "categories": ["Business", "Logistics"]
          },
          {
            "id": 4,
            "name": "Project Management Fundamentals",
            "description": "Learn the basics of project management including planning, execution, and monitoring.",
            "categories": ["Business", "Management"]
          },
          {
            "id": 5,
            "name": "Health and Safety Regulations",
            "description": "Understand the regulations around health and safety in the workplace and how to ensure compliance.",
            "categories": ["Safety", "Regulations"]
          }
        ]
      },
      {
        "id": 4,
        "name": "Skilled Contributor",
        "progress": 0,
        "description": "For high-skilled workers and experts performing critical roles in the city such as technology specialists, engineers, and production managers.",
        "features": [
          "High-skilled workers",
          "Organizers and city designers",
          "Critical production unit members",
          "Jobs requiring high technical skills (e.g., engineers, software developers, medical experts, etc.)"
        ],
        "modules": [
          {
            "id": 1,
            "name": "Advanced Electrical Systems",
            "description": "Learn to design and work with advanced electrical systems for large-scale projects.",
            "categories": ["Electrical", "Engineering"]
          },
          {
            "id": 2,
            "name": "Software Development and Programming",
            "description": "Gain skills in software development, including basic coding and application design.",
            "categories": ["Technology", "Software Development"]
          },
          {
            "id": 3,
            "name": "Critical Medical Procedures",
            "description": "Learn advanced medical procedures for critical care and emergency situations.",
            "categories": ["Healthcare", "Medical"]
          },
          {
            "id": 4,
            "name": "Robotics and Automation",
            "description": "Study the basics of robotics and automation, and their applications in industry.",
            "categories": ["Technology", "Engineering"]
          },
          {
            "id": 5,
            "name": "Urban Planning and Infrastructure",
            "description": "Understand the principles of urban planning and how to design efficient city infrastructure.",
            "categories": ["Urban Planning", "Engineering"]
          }
        ]
      },
      {
        "id": 5,
        "name": "Visionary",
        "progress": 0,
        "description": "For innovators, researchers, and leaders driving societal change with cutting-edge knowledge in technology, science, and social planning.",
        "features": [
          "Innovators and scientists",
          "Societal planners and R&D teams",
          "Disaster prevention specialists",
          "Jobs involving strategic innovation and future planning (e.g., scientists, innovators, disaster planners)"
        ],
        "modules": [
          {
            "id": 1,
            "name": "Innovative Technology Development",
            "description": "Learn how to develop and apply innovative technologies that can drive societal change.",
            "categories": ["Technology", "Innovation"]
          },
          {
            "id": 2,
            "name": "Disaster Management and Prevention",
            "description": "Study how to prevent and manage disasters, both natural and man-made.",
            "categories": ["Emergency Management", "Planning"]
          },
          {
            "id": 3,
            "name": "Sustainable Urban Solutions",
            "description": "Understand how to design and implement sustainable urban solutions for future cities.",
            "categories": ["Urban Planning", "Sustainability"]
          },
          {
            "id": 4,
            "name": "Advanced Biotechnology and Medicine",
            "description": "Study the cutting-edge advancements in biotechnology and how they apply to medicine.",
            "categories": ["Biotechnology", "Healthcare"]
          },
          {
            "id": 5,
            "name": "Future Cities: Smart Infrastructure",
            "description": "Learn how to design smart infrastructure for future cities using modern technology.",
            "categories": ["Urban Planning", "Technology"]
          }
        ]
      }
    ]  
};