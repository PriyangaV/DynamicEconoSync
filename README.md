# City Marketplace Platform

A comprehensive platform for exploring and interacting with city marketplaces, infrastructure, products, jobs, and learning resources across different countries and cities.

## 🌟 Features

### 1. Multi-Country Support
- Explore marketplaces from various countries including:
  - Desert Countries (UAE, Somalia)
  - Island Nations (New Zealand, Maldives)
  - Asian Powerhouses (China, South Korea, India)
  - European Mix (France, Germany)
  - African Development (Rwanda, South Africa)
  - Americas (Brazil, Canada)

### 2. City-Specific Marketplaces
Each city offers four main sections:

#### Infrastructure Marketplace
- View and explore city infrastructure projects
- Categories include:
  - Housing
  - Transportation
  - Food Systems
  - Technology
  - Education
  - Media
  - Infrastructure Tools
- Track development progress of infrastructure projects
- View detailed specifications and requirements

#### Products & Services Marketplace
- Browse local products and services
- Categories include:
  - Food & Agriculture
  - Clothing & Textiles
  - Technology
  - Education
  - Healthcare
  - Tools & Equipment
- View product details, prices, and seller information
- Add products to cart

#### Jobs Marketplace
- Browse available job opportunities
- Filter by job type and requirements
- View job details and application requirements
- Track application status

#### Learning Hub
- Access educational resources
- View recommended courses
- Track learning progress
- Explore learning paths

### 3. User Profiles
- Personal dashboard for logged-in users
- Customized marketplace experience
- Track favorite items and progress
- Save preferences for future visits

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Marketplace/
│   │   ├── components/
│   │   │   ├── InfrastructureCard.tsx
│   │   │   ├── InfrastructureDetails.tsx
│   │   │   ├── InfrastructureSearch.tsx
│   │   │   ├── ProductCard.tsx
│   │   │   └── CityInfo.tsx
│   │   ├── InfrastructureMarketplace.tsx
│   │   ├── ProductsMarketplace.tsx
│   │   ├── JobMarketplace.tsx
│   │   └── LearningMarketplace.tsx
│   └── ...
├── shared/
│   └── mockup/
│       ├── cityData.ts
│       ├── infrastructureData.ts
│       ├── productData.ts
│       └── userData.ts
└── ...
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
1. Clone the repository
```bash
git clone [repository-url]
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

## 🔄 URL Structure

The application supports two main URL patterns:

1. General Marketplace:
```
/marketplace/:country/:city/:tab
```

2. Profile-specific Marketplace:
```
/profile/:id/marketplace/:country/:city/:tab
```

Where:
- `:country` - Country name (e.g., Somalia)
- `:city` - City name (e.g., Mogadishu)
- `:tab` - Section (infrastructure, products, jobs, learning)
- `:id` - User profile ID (for profile-specific views)

## 🎨 UI Components

### Infrastructure Card
- Displays infrastructure project information
- Shows status and progress
- Click to view detailed information

### Product Card
- Displays product information
- Shows price and seller details
- Add to cart functionality

### City Info
- Displays city-specific information
- Shows population and key statistics

### Search and Filter
- Search functionality across all sections
- Category-based filtering
- Location-based filtering

## 🔒 Authentication

The platform supports user authentication with:
- User profiles
- Customized experiences
- Saved preferences
- Progress tracking

## 🛠️ Technologies Used

- React
- TypeScript
- Tailwind CSS
- React Router
- Lucide Icons

## 📝 License

[Add your license information here]

## 👥 Contributing

[Add contribution guidelines here]
