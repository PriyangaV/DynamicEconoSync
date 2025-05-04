import React, { useState } from 'react';
import { ShoppingBagIcon, FilterIcon, SearchIcon, TagIcon, StarIcon } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { PurchaseModal } from './PurchaseModal';
import { defaultUserData, UserData } from '../../shared/mockup/userData';


interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  tier: number;
  credits: number;
  image: string;
  rating: number;
  reviews: number;
  inStock: boolean;
}

interface ProductMarketplaceProps {
  userData?: UserData;
}

export const ProductMarketplace = ({ userData }: ProductMarketplaceProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTier, setSelectedTier] = useState('all');
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const categories = ['All', 'Food & Supplies', 'Healthcare', 'Education', 'Entertainment', 'Technology', 'Luxury'];
  const mockProducts: Product[] = [{
    id: 1,
    name: 'Weekly Food Package',
    description: 'Essential food supplies for one week',
    category: 'Food & Supplies',
    tier: 1,
    credits: 50,
    image: 'https://images.unsplash.com/photo-1506784693919-ef06d93c28d2?auto=format&fit=crop&q=80&w=300&h=200',
    rating: 4.8,
    reviews: 156,
    inStock: true
  }, {
    id: 2,
    name: 'Basic Medical Kit',
    description: 'First aid and essential medical supplies',
    category: 'Healthcare',
    tier: 1,
    credits: 75,
    image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&q=80&w=300&h=200',
    rating: 4.9,
    reviews: 89,
    inStock: true
  }, {
    id: 3,
    name: 'Online Course Bundle',
    description: 'Access to premium educational content',
    category: 'Education',
    tier: 2,
    credits: 120,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=300&h=200',
    rating: 4.7,
    reviews: 234,
    inStock: true
  }, {
    id: 4,
    name: 'Entertainment Pass',
    description: 'Monthly access to entertainment services',
    category: 'Entertainment',
    tier: 3,
    credits: 200,
    image: 'https://images.unsplash.com/photo-1603739903239-8b6e64c3b185?auto=format&fit=crop&q=80&w=300&h=200',
    rating: 4.5,
    reviews: 167,
    inStock: true
  }, {
    id: 5,
    name: 'Luxury Spa Package',
    description: 'Premium relaxation and wellness services',
    category: 'Luxury',
    tier: 4,
    credits: 500,
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=300&h=200',
    rating: 4.9,
    reviews: 45,
    inStock: true
  }];
  const handlePurchase = (product: Product) => {
    setSelectedProduct(product);
    setShowPurchaseModal(true);
  };
  const filteredProducts = mockProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesTier = selectedTier === 'all' || product.tier === parseInt(selectedTier);
    return matchesSearch && matchesCategory && matchesTier;
  });
  return <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold flex items-center">
            <ShoppingBagIcon className="h-6 w-6 text-blue-600 mr-2" />
            Product Marketplace
          </h2>
        </div>
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex-1 min-w-[200px]">
            <div className="relative">
              <input type="text" placeholder="Search products..." className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
              <SearchIcon className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-md" value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
            {categories.map(category => <option key={category} value={category.toLowerCase()}>
                {category}
              </option>)}
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-md" value={selectedTier} onChange={e => setSelectedTier(e.target.value)}>
            <option value="all">All Tiers</option>
            <option value="1">Tier 1</option>
            <option value="2">Tier 2</option>
            <option value="3">Tier 3</option>
            <option value="4">Tier 4</option>
          </select>
        </div>
        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => <ProductCard key={product.id} product={product} onPurchase={() => handlePurchase(product)} />)}
        </div>
        {/* Purchase Modal */}
        {selectedProduct && <PurchaseModal isOpen={showPurchaseModal} onClose={() => setShowPurchaseModal(false)} product={selectedProduct} />}
      </div>
    </div>;
};