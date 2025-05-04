import React from 'react';
import { ArrowRightIcon, UsersIcon, ShoppingCartIcon, BriefcaseIcon, CoinsIcon } from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface LevelCardProps {
  level: string;
  title: string;
  description: string;
  workload: string;
  items: string[];
  highlighted?: boolean;
}

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  return <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Reimagine Society's Economic Foundation
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
              A revolutionary platform that replaces traditional job markets and
              product distribution with a balanced, need-based credit system.
            </p>
            <button onClick={onGetStarted} className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center">
              Get Started
              <ArrowRightIcon size={20} className="ml-2" />
            </button>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 bg-white" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            How EconoSync Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard icon={<UsersIcon size={32} className="text-blue-600" />} title="User Profiles" description="Create a detailed profile with your skills, education, and experience to connect with the right opportunities." />
            <FeatureCard icon={<ShoppingCartIcon size={32} className="text-blue-600" />} title="Product Needs" description="Input your product needs which will be fulfilled based on your participation and contribution to the community." />
            <FeatureCard icon={<BriefcaseIcon size={32} className="text-blue-600" />} title="Dynamic Job Market" description="Jobs are valued based on community needs, with credits automatically adjusted to balance supply and demand." />
            <FeatureCard icon={<CoinsIcon size={32} className="text-blue-600" />} title="Credit System" description="Earn credits by contributing your skills, then exchange them for products you've requested." />
          </div>
        </div>
      </section>
      {/* Levels Explanation */}
      <section className="py-16 bg-gray-100" id="levels">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Choose Your Participation Level
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <LevelCard level="Level 1" title="Essential Living" description="For those seeking a simple lifestyle or with limited availability. Work approximately 35% of standard hours, access to essential products and services." workload="3-4 hours per week" items={['Groceries', 'Household Items', 'Basic Clothing', 'Essential Services']} />
            <LevelCard level="Level 2" title="Standard Living" description="For those wanting a balance of work and leisure. Access to technology, entertainment products, and more varied options." workload="5-7 hours per week" items={['Level 1 items plus:', 'Technology', 'Entertainment Products', 'Music Instruments', 'Recreational Equipment']} highlighted={true} />
            <LevelCard level="Level 3" title="Advanced Living" description="For those who want comprehensive access to all products and services, with a higher contribution level." workload="10+ hours per week" items={['Access to all products', 'Premium Services', 'Specialized Equipment', 'Luxury Items']} />
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              You can switch between levels at any time based on your needs and
              availability.
            </p>
            <button onClick={onGetStarted} className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors">
              Join Now
            </button>
          </div>
        </div>
      </section>
      {/* How It Works Section */}
      <section className="py-16 bg-white" id="how-it-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            The EconoSync Process
          </h2>
          <div className="space-y-12">
            <ProcessStep number="01" title="Create Your Profile" description="Sign up and build your profile with your skills, education, experience, and interests." />
            <ProcessStep number="02" title="Select Your Level" description="Choose between Level 1, 2, or 3 based on your lifestyle preferences and availability." />
            <ProcessStep number="03" title="Input Your Needs" description="Tell us what products and services you need, which will be added to the community demand." />
            <ProcessStep number="04" title="Contribute Your Skills" description="Take on jobs based on your skills and the community's needs, earning credits based on demand." />
            <ProcessStep number="05" title="Receive Your Products" description="Use your earned credits to receive the products you've requested." />
          </div>
        </div>
      </section>
    </div>;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>;
}

function LevelCard({ level, title, description, workload, items, highlighted = false }: LevelCardProps) {
  return <div className={`rounded-lg overflow-hidden shadow-md ${highlighted ? 'border-2 border-blue-500 transform scale-105' : 'border border-gray-200'}`}>
      <div className={`p-6 ${highlighted ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}`}>
        <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${highlighted ? 'bg-white text-blue-600' : 'bg-blue-100 text-blue-600'}`}>
          {level}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className={`mb-4 ${highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
          {description}
        </p>
        <div className={`font-medium ${highlighted ? 'text-white' : 'text-gray-800'}`}>
          Workload: {workload}
        </div>
      </div>
      <div className="bg-white p-6">
        <h4 className="font-medium mb-3 text-gray-800">Available Products:</h4>
        <ul className="space-y-2">
          {items.map((item, index) => <li key={index} className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">{item}</span>
            </li>)}
        </ul>
      </div>
    </div>;
}

function ProcessStep({ number, title, description }: ProcessStepProps) {
  return <div className="flex items-start space-x-6">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl">
          {number}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>;
}