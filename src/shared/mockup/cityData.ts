export interface CityData {
  name: string;
  country: string;
  population: number;
  systems: {
    housing: {
      materials: string[];
      constructionStyle: string[];
      energyEfficiency: string[];
    };
    transportation: {
      options: string[];
      fuelSource: string[];
      infrastructure: string[];
    };
    food: {
      growableCrops: string[];
      fruits: string[];
      livestock: string[];
      waterAccess: string[];
      extras: string[];
    };
    clothing: {
      materials: string[];
      footwear: string[];
      localProduction: string[];
    };
    technology: {
      electricityAccess: string[];
      internet: string[];
      devices: string[];
      digitalTools: string[];
    };
    education: {
      literacyRate: string;
      languages: string[];
      educationModel: string[];
    };
    media: {
      devices: string[];
      access: string[];
      publicSpaces: string[];
      offlineOptions: string[];
    };
    infrastructure: {
      powerSources: string[];
      water: string[];
      wasteManagement: string[];
      extras: string[];
    };
  };
}

export const somaliaCities: Record<string, CityData> = {
  Mogadishu: {
    name: 'Mogadishu',
    country: 'Somalia',
    population: 2587183,
    systems: {
      housing: {
        materials: ['Stone', 'Concrete', 'Traditional Aqal'],
        constructionStyle: ['Modern', 'Traditional', 'Mixed'],
        energyEfficiency: ['Solar', 'Traditional Cooling']
      },
      transportation: {
        options: ['Buses', 'Taxis', 'Donkeys'],
        fuelSource: ['Diesel', 'Petrol', 'Traditional'],
        infrastructure: ['Roads', 'Ports', 'Airport']
      },
      food: {
        growableCrops: ['Maize', 'Sorghum', 'Vegetables'],
        fruits: ['Mango', 'Banana', 'Papaya'],
        livestock: ['Camels', 'Goats', 'Sheep'],
        waterAccess: ['Wells', 'Rainwater', 'Public Taps'],
        extras: ['Fishing', 'Traditional Markets']
      },
      clothing: {
        materials: ['Cotton', 'Traditional Fabrics'],
        footwear: ['Traditional', 'Modern'],
        localProduction: ['Handmade', 'Small Workshops']
      },
      technology: {
        electricityAccess: ['Grid', 'Solar', 'Generators'],
        internet: ['Mobile', 'Fixed Line'],
        devices: ['Mobile Phones', 'Basic Computers'],
        digitalTools: ['Mobile Apps', 'Basic Software']
      },
      education: {
        literacyRate: '45%',
        languages: ['Somali', 'Arabic', 'English'],
        educationModel: ['Traditional', 'Modern', 'Religious']
      },
      media: {
        devices: ['Radio', 'TV', 'Mobile Phones'],
        access: ['Community Centers', 'Internet Cafes'],
        publicSpaces: ['Markets', 'Mosques', 'Community Centers'],
        offlineOptions: ['Newspapers', 'Community Radio']
      },
      infrastructure: {
        powerSources: ['Grid', 'Solar', 'Generators'],
        water: ['Wells', 'Public Taps', 'Rainwater'],
        wasteManagement: ['Collection Points', 'Recycling'],
        extras: ['Markets', 'Public Spaces']
      }
    }
  },
  Hargeisa: {
    name: 'Hargeisa',
    country: 'Somalia',
    population: 1200000,
    systems: {
      housing: {
        materials: ['Stone', 'Traditional Aqal'],
        constructionStyle: ['Traditional', 'Modern'],
        energyEfficiency: ['Solar', 'Traditional Cooling']
      },
      transportation: {
        options: ['Buses', 'Taxis', 'Donkeys'],
        fuelSource: ['Diesel', 'Petrol'],
        infrastructure: ['Roads', 'Airport']
      },
      food: {
        growableCrops: ['Maize', 'Vegetables'],
        fruits: ['Mango', 'Banana'],
        livestock: ['Camels', 'Goats'],
        waterAccess: ['Wells', 'Public Taps'],
        extras: ['Traditional Markets']
      },
      clothing: {
        materials: ['Cotton', 'Traditional Fabrics'],
        footwear: ['Traditional', 'Modern'],
        localProduction: ['Handmade']
      },
      technology: {
        electricityAccess: ['Grid', 'Solar'],
        internet: ['Mobile', 'Fixed Line'],
        devices: ['Mobile Phones'],
        digitalTools: ['Mobile Apps']
      },
      education: {
        literacyRate: '50%',
        languages: ['Somali', 'English'],
        educationModel: ['Traditional', 'Modern']
      },
      media: {
        devices: ['Radio', 'Mobile Phones'],
        access: ['Community Centers'],
        publicSpaces: ['Markets', 'Mosques'],
        offlineOptions: ['Community Radio']
      },
      infrastructure: {
        powerSources: ['Grid', 'Solar'],
        water: ['Wells', 'Public Taps'],
        wasteManagement: ['Collection Points'],
        extras: ['Markets']
      }
    }
  }
}; 

export const mockUserData = {
  name: 'Jane Doe',
  level: 2,
  category: 'Educator',
  bio: 'Passionate about community development and sustainable living. Experienced in teaching and first aid.',
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
  learningPaths: [
    {
      id: 1,
      name: 'Basic First Aid',
      progress: 80
    },
    {
      id: 2,
      name: 'Sustainable Development 101',
      progress: 45
    }
  ]
};

export interface CityData1 {
  id?: number;
  isNew: boolean;
  country: string;
  city: string;
  population: {
    children: number;
    youngAdults: number;
    adults: number;
    elders: number;
    illOrDisabled: number;
    students: number;
  };
  resources: {
    natural: string[];
    manMade: string[];
  };
  infrastructure: {
    residential: number;
    communal: number;
    industrial: number;
    disasterRelief: number;
  };
}

// Mock city data for existing cities
export const mockCities: Record<number, CityData1> = {
  1: {
    id: 1,
    isNew: false,
    city: 'Mogadishu',
    country: 'Somalia',
    population: {
      children: 1500000,
      youngAdults: 2000000,
      adults: 3000000,
      elders: 1000000,
      illOrDisabled: 500000,
      students: 800000
    },
    resources: {
      natural: ['Water', 'Parks', 'Forests'],
      manMade: ['Public Transport', 'Schools', 'Hospitals']
    },
    infrastructure: {
      residential: 75,
      communal: 80,
      industrial: 65,
      disasterRelief: 70
    }
  },
  2: {
    id: 2,
    isNew: false,
    country: 'Japan',
    city: 'Tokyo',
    population: {
      children: 1800000,
      youngAdults: 2500000,
      adults: 3500000,
      elders: 1200000,
      illOrDisabled: 400000,
      students: 900000
    },
    resources: {
      natural: ['Mountains', 'Rivers', 'Parks'],
      manMade: ['Bullet Train', 'Schools', 'Hospitals']
    },
    infrastructure: {
      residential: 85,
      communal: 90,
      industrial: 75,
      disasterRelief: 80
    }
  },
  3: {
    id: 3,
    isNew: false,
    country: 'Germany',
    city: 'Berlin',
    population: {
      children: 1200000,
      youngAdults: 1800000,
      adults: 2500000,
      elders: 800000,
      illOrDisabled: 300000,
      students: 600000
    },
    resources: {
      natural: ['Lakes', 'Forests', 'Parks'],
      manMade: ['Public Transport', 'Schools', 'Hospitals']
    },
    infrastructure: {
      residential: 70,
      communal: 75,
      industrial: 60,
      disasterRelief: 65
    }
  }
};

export const mockCityData = {
  name: 'Paris',
  country: 'France',
  systems: {
    housing: {
      materials: ['Red laterite stone', 'mud', 'bricks', 'bamboo', 'coconut wood'],
      constructionStyle: ['Courtyard homes', 'clay-tile roofs', 'rammed earth walls'],
      energyEfficiency: ['Passive cooling', 'shaded verandas', 'rainwater roofs']
    },
    transportation: {
      options: ['Electric rickshaws', 'trams', 'bicycles', 'walking lanes'],
      fuelSource: ['Solar', 'biofuels', 'local charging grids'],
      infrastructure: ['Pedestrian-first', 'circular public loops', 'No private cars']
    },
    food: {
      growableCrops: ['Rice', 'lentils', 'millet', 'vegetables', 'turmeric'],
      fruits: ['Mango', 'banana', 'jackfruit', 'guava'],
      livestock: ['Cows', 'buffaloes', 'chickens', 'goats'],
      waterAccess: ['Lakes', 'tanks', 'rainwater harvesting', 'borewells'],
      extras: ['Herbs', 'spices', 'mushrooms', 'rooftop gardening']
    },
    clothing: {
      materials: ['Cotton', 'khadi (handwoven cotton)', 'silk', 'jute'],
      footwear: ['Leather sandals', 'canvas shoes', 'recycled rubber footwear'],
      localProduction: ['Tailors', 'textile cooperatives', 'weaving clusters']
    },
    technology: {
      electricityAccess: ['Reliable, with strong solar potential', 'Rooftop solar + microgrids'],
      internet: ['Fiber broadband + 4G/5G mobile networks'],
      devices: ['Smartphones', 'tablets', 'laptops'],
      digitalTools: ['Smart classrooms', 'online education hubs', 'Maker labs and village tech centers']
    },
    education: {
      literacyRate: 'High (~95% in cities like Mysuru)',
      languages: ['Kannada', 'English', 'Hindi'],
      educationModel: ['Blended: traditional + tech-enhanced learning', 'Public libraries, free courses, fab-labs', 'Vocational + environmental education']
    },
    media: {
      devices: ['Smartphones', 'LED TVs', 'projectors'],
      access: ['YouTube', 'digital radio', 'regional language platforms'],
      publicSpaces: ['Community cinemas', 'podcast stations', 'learning pavilions'],
      offlineOptions: ['Village media servers', 'digital community libraries']
    },
    infrastructure: {
      powerSources: ['Solar rooftops', 'wind (inland farms)', 'biogas'],
      water: ['Rainwater tanks', 'community lakes', 'treated greywater'],
      wasteManagement: ['Composting', 'biogas digesters', 'upcycling zones', 'Municipal-level recycling units'],
      extras: ['Tool libraries', 'carpentry hubs', 'solar-powered irrigation']
    }   
  }
};

interface LearningPath {
  id: number;
  name: string;
  progress: number;
}

interface Course {
  id: number;
  name: string;
  description: string;
  duration: string;
  level: string;
}


// Mock learning data for the city
export const mockLearningPaths: LearningPath[] = [
  {
    id: 1,
    name: 'City Management Basics',
    progress: 75
  },
  {
    id: 2,
    name: 'Sustainable Development',
    progress: 45
  }
];

export const mockRecommendedCourses: Course[] = [
  {
    id: 1,
    name: 'Urban Planning Fundamentals',
    description: 'Learn the basics of urban planning and city development',
    duration: '8 weeks',
    level: 'Beginner'
  },
  {
    id: 2,
    name: 'Sustainable Infrastructure',
    description: 'Understanding sustainable infrastructure development',
    duration: '12 weeks',
    level: 'Intermediate'
  }
];