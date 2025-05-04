export interface InfrastructureItem {
  name: string;
  description: string;
  image: string;
  status: 'active' | 'in-development' | 'planned';
  category: string;
  details: {
    features: string[];
    benefits: string[];
    requirements: string[];
    timeline?: string;
    progress?: number;
  };
}

export const somaliaInfrastructure: Record<string, InfrastructureItem[]> = {
  housing: [
    {
      name: 'Traditional Somali Aqal',
      description: 'Traditional nomadic dwelling made of wooden poles and animal skins',
      image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=300&h=200',
      status: 'active',
      category: 'housing',
      details: {
        features: ['Portable structure', 'Natural ventilation', 'Traditional design'],
        benefits: ['Cultural preservation', 'Adaptable to climate', 'Community identity'],
        requirements: ['Wooden poles', 'Animal skins', 'Traditional knowledge']
      }
    },
    {
      name: 'Stone Houses',
      description: 'Permanent structures using local stone and traditional masonry',
      image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=300&h=200',
      status: 'active',
      category: 'housing',
      details: {
        features: ['Stone walls', 'Traditional design', 'Natural cooling'],
        benefits: ['Durability', 'Cultural heritage', 'Climate adaptation'],
        requirements: ['Local stone', 'Skilled masons', 'Traditional techniques']
      }
    }
  ],
  transportation: [
    {
      name: 'Donkey Transport',
      description: 'Traditional and reliable mode of transportation',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=300&h=200',
      status: 'active',
      category: 'transportation',
      details: {
        features: ['Reliable transport', 'Low maintenance', 'Traditional use'],
        benefits: ['Cost-effective', 'Environmentally friendly', 'Cultural significance'],
        requirements: ['Donkey care', 'Traditional knowledge', 'Basic infrastructure']
      }
    }
  ],
  food: [
    {
      name: 'Local Livestock',
      description: 'Traditional livestock farming including camels, goats, and sheep',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=300&h=200',
      status: 'active',
      category: 'food',
      details: {
        features: ['Traditional breeds', 'Nomadic herding', 'Sustainable practices'],
        benefits: ['Food security', 'Economic value', 'Cultural heritage'],
        requirements: ['Grazing land', 'Water access', 'Traditional knowledge']
      }
    }
  ]
};

export const categories = [
  { id: 'all', label: 'All Infrastructure', icon: '🏗️' },
  { id: 'housing', label: 'Housing', icon: '🏡' },
  { id: 'transportation', label: 'Transportation', icon: '🚊' },
  { id: 'food', label: 'Food Systems', icon: '🌾' },
  { id: 'technology', label: 'Technology', icon: '💻' },
  { id: 'infrastructure', label: 'Core Infrastructure', icon: '⚙️' }
]; 