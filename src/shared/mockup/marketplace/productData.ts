export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  seller: {
    name: string;
    rating: number;
  };
  stock: number;
  location: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Traditional Somali Coffee',
    description: 'Freshly roasted coffee beans from local farms',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
    category: 'food',
    seller: {
      name: 'Local Coffee Shop',
      rating: 4.5
    },
    stock: 50,
    location: 'Mogadishu'
  },
  {
    id: '2',
    name: 'Handwoven Basket',
    description: 'Traditional Somali basket made from natural materials',
    price: 25.99,
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38',
    category: 'crafts',
    seller: {
      name: 'Artisan Crafts',
      rating: 4.8
    },
    stock: 20,
    location: 'Hargeisa'
  }
];

export const productCategories = [
  { id: 'all', label: 'All Products', icon: '🛍️' },
  { id: 'food', label: 'Food & Beverages', icon: '🍽️' },
  { id: 'crafts', label: 'Handicrafts', icon: '🎨' },
  { id: 'clothing', label: 'Clothing', icon: '👕' },
  { id: 'electronics', label: 'Electronics', icon: '📱' }
]; 