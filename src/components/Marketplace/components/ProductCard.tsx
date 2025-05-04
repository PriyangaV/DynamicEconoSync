import React from 'react';
import { ShoppingCartIcon } from 'lucide-react';

interface ProductCardProps {
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
  onClick: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  image,
  price,
  currency,
  category,
  seller,
  onClick,
}) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-48">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-full text-sm">
          {category}
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg font-bold text-gray-900">
              {price} {currency}
            </p>
            <p className="text-sm text-gray-600">
              by {seller.name} • {seller.rating} ★
            </p>
          </div>
          <button
            className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              // Add to cart logic here
            }}
          >
            <ShoppingCartIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}; 