import React from 'react';
import { StarIcon, ShieldIcon } from 'lucide-react';
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
interface ProductCardProps {
  product: Product;
  onPurchase: () => void;
}
export const ProductCard = ({
  product,
  onPurchase
}: ProductCardProps) => {
  const getTierColor = (tier: number) => {
    switch (tier) {
      case 1:
        return 'bg-green-100 text-green-800';
      case 2:
        return 'bg-blue-100 text-blue-800';
      case 3:
        return 'bg-purple-100 text-purple-800';
      case 4:
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  return <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
        <span className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium ${getTierColor(product.tier)}`}>
          Tier {product.tier}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-lg mb-1">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{product.description}</p>
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            <StarIcon className="h-4 w-4 text-yellow-400" />
            <span className="ml-1 text-sm font-medium">{product.rating}</span>
          </div>
          <span className="mx-2 text-gray-300">|</span>
          <span className="text-sm text-gray-600">
            {product.reviews} reviews
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-lg font-bold text-blue-600">
            {product.credits} Credits
          </div>
          <button onClick={onPurchase} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors" disabled={!product.inStock}>
            {product.inStock ? 'Purchase' : 'Out of Stock'}
          </button>
        </div>
      </div>
    </div>;
};