import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { defaultUserData } from '../../shared/mockup/userData';
import { somaliaCities, CityData } from '../../shared/mockup/cityData';
import { somaliaProducts } from '../../shared/mockup/productData';
import { CityInfo } from './components/CityInfo';
import { InfrastructureSearch } from './components/InfrastructureSearch';
import { ProductCard } from './components/ProductCard';

interface ProductsMarketplaceProps {
  userData?: typeof defaultUserData;
  cityData?: CityData;
}

export const ProductsMarketplace: React.FC<ProductsMarketplaceProps> = ({ userData = defaultUserData }) => {
  const navigate = useNavigate();
  const { profileId, country = userData.defaultCountry, city = userData.defaultCity, category } = useParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(category || 'all');

  const cityData = somaliaCities[city || 'Mogadishu'];
  const products = selectedCategory === 'all' 
    ? Object.values(somaliaProducts).flat()
    : somaliaProducts[selectedCategory] || [];

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    const basePath = profileId 
      ? `/profile/${profileId}/marketplace/${country}/${city}/products`
      : `/marketplace/${country}/${city}/products`;
    navigate(`${basePath}/${category}`);
  };

  const handleProductClick = (productId: string) => {
    const basePath = profileId 
      ? `/profile/${profileId}/marketplace/${country}/${city}/products`
      : `/marketplace/${country}/${city}/products`;
    navigate(`${basePath}/${selectedCategory}/${productId}`);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'food', label: 'Food & Agriculture' },
    { id: 'clothing', label: 'Clothing & Textiles' },
    { id: 'technology', label: 'Technology' },
    { id: 'education', label: 'Education' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'tools', label: 'Tools & Equipment' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <CityInfo cityData={cityData} />
      
      <InfrastructureSearch
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryClick}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            onClick={() => handleProductClick(product.id)}
          />
        ))}
      </div>
    </div>
  );
}; 