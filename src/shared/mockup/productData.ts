export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  currency: string;
  category: string;
  seller: {
    name: string;
    rating: number;
  };
  details: {
    features: string[];
    specifications: string[];
    availability: string;
    location: string;
  };
}

export const somaliaProducts: Record<string, Product[]> = {
  food: [
    {
      id: 'food-1',
      name: 'Fresh Mangoes',
      description: 'Locally grown sweet mangoes from our family farm',
      image: '/images/products/mangoes.jpg',
      price: 2.50,
      currency: 'USD',
      category: 'Food & Agriculture',
      seller: {
        name: 'Hassan Farm',
        rating: 4.8
      },
      details: {
        features: [
          'Organic farming methods',
          'Freshly harvested',
          'Sweet and juicy'
        ],
        specifications: [
          'Weight: 1kg per pack',
          'Origin: Local farm',
          'Storage: Keep in cool place'
        ],
        availability: 'In stock',
        location: 'Mogadishu Central Market'
      }
    },
    {
      id: 'food-2',
      name: 'Traditional Somali Coffee',
      description: 'Authentic Somali coffee beans, roasted to perfection',
      image: '/images/products/coffee.jpg',
      price: 5.00,
      currency: 'USD',
      category: 'Food & Agriculture',
      seller: {
        name: 'Coffee Traders',
        rating: 4.9
      },
      details: {
        features: [
          'Traditional roasting method',
          'Rich aroma',
          'Premium quality beans'
        ],
        specifications: [
          'Weight: 250g',
          'Origin: Local farms',
          'Roast: Medium'
        ],
        availability: 'In stock',
        location: 'Hargeisa Market'
      }
    }
  ],
  clothing: [
    {
      id: 'clothing-1',
      name: 'Traditional Somali Dress',
      description: 'Handmade traditional Somali dress with modern design',
      image: '/images/products/dress.jpg',
      price: 35.00,
      currency: 'USD',
      category: 'Clothing & Textiles',
      seller: {
        name: 'Somali Fashion House',
        rating: 4.7
      },
      details: {
        features: [
          'Handmade',
          'Traditional patterns',
          'Modern fit'
        ],
        specifications: [
          'Material: Cotton',
          'Sizes: S, M, L, XL',
          'Care: Hand wash'
        ],
        availability: 'Made to order',
        location: 'Mogadishu Fashion District'
      }
    }
  ],
  technology: [
    {
      id: 'tech-1',
      name: 'Solar Power Kit',
      description: 'Complete solar power kit for home use',
      image: '/images/products/solar-kit.jpg',
      price: 299.99,
      currency: 'USD',
      category: 'Technology',
      seller: {
        name: 'Green Energy Solutions',
        rating: 4.9
      },
      details: {
        features: [
          'Solar panel',
          'Battery storage',
          'Inverter included'
        ],
        specifications: [
          'Power: 100W',
          'Battery: 12V 100Ah',
          'Warranty: 2 years'
        ],
        availability: 'Limited stock',
        location: 'Hargeisa Tech Hub'
      }
    }
  ]
}; 