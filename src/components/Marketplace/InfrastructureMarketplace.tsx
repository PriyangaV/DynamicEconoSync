import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { somaliaInfrastructure } from '../../shared/mockup/infrastructureData';
import { somaliaCities, CityData } from '../../shared/mockup/cityData';
import { defaultUserData } from '../../shared/mockup/userData';
import { InfrastructureCard } from './components/InfrastructureCard';
import { InfrastructureDetails } from './components/InfrastructureDetails';
import { InfrastructureSearch } from './components/InfrastructureSearch';
import { CityInfo } from './components/CityInfo';

interface InfrastructureMarketplaceProps {
  userData?: typeof defaultUserData;
  cityData?: CityData;
}

export const InfrastructureMarketplace: React.FC<InfrastructureMarketplaceProps> = ({ userData = defaultUserData }) => {
  const navigate = useNavigate();
  const { profileId, country = userData.defaultCountry, city = userData.defaultCity, category, type } = useParams();
  const [selectedItem, setSelectedItem] = useState<typeof somaliaInfrastructure.housing[0] | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(category || 'housing');

  const cityData = somaliaCities[city || 'Mogadishu'];
  const infrastructureItems = somaliaInfrastructure[selectedCategory as keyof typeof somaliaInfrastructure] || [];

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    const basePath = profileId 
      ? `/profile/${profileId}/marketplace/${country}/${city}/infrastructure`
      : `/marketplace/${country}/${city}/infrastructure`;
    navigate(`${basePath}/${category}`);
  };

  const handleItemClick = (item: typeof somaliaInfrastructure.housing[0]) => {
    setSelectedItem(item);
    const basePath = profileId 
      ? `/profile/${profileId}/marketplace/${country}/${city}/infrastructure`
      : `/marketplace/${country}/${city}/infrastructure`;
    navigate(`${basePath}/${item.category}/${item.name.toLowerCase().replace(/\s+/g, '-')}`);
  };

  const filteredItems = infrastructureItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
        {filteredItems.map((item) => (
          <InfrastructureCard
            key={item.name}
            {...item}
            onClick={() => handleItemClick(item)}
          />
        ))}
      </div>

      {selectedItem && (
        <InfrastructureDetails
          {...selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
}; 