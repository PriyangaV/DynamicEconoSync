import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeftIcon, InfoIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface LevelSelectionProps {
  onComplete: (data: { level: number }) => void;
  onBack: () => void;
  userData: {
    skills: any[];
    education: any[];
    experience: any[];
  };
}

interface LevelData {
  title: string;
  description: string;
  features: string[];
}

export function LevelSelection({ onComplete, onBack, userData }: LevelSelectionProps) {
  const [selectedLevel, setSelectedLevel] = useState(1); // Default to Basic
  const [canSelectAdvanced, setCanSelectAdvanced] = useState(false);
  const [canSelectStandard, setCanSelectStandard] = useState(false);
  const [visibleLevel, setVisibleLevel] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const totalLevels = 5;
  const cardWidth = 320; // 300px width + 20px gap

  useEffect(() => {
    // Check if user has any skills, education, or experience
    const hasQualifications = 
      (userData.skills && userData.skills.length > 0) ||
      (userData.education && userData.education.length > 0) ||
      (userData.experience && userData.experience.length > 0);

    setCanSelectStandard(hasQualifications);
    setCanSelectAdvanced(hasQualifications);
  }, [userData]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const newLevel = Math.min(
        Math.round(scrollLeft / cardWidth) + 1,
        totalLevels
      );
      setVisibleLevel(newLevel);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLevelSelect = (level: number) => {
    if (level === 1 || (level > 1 && canSelectStandard)) {
      setSelectedLevel(level);
    }
  };

  const handleLearnMore = () => {
    navigate('/community/guide');
  };

  const scrollToLevel = (level: number) => {
    const container = containerRef.current;
    if (container) {
      const scrollPosition = (level - 1) * cardWidth;
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const handlePrevClick = () => {
    if (visibleLevel > 1) {
      scrollToLevel(visibleLevel - 1);
    }
  };

  const handleNextClick = () => {
    if (visibleLevel < totalLevels) {
      scrollToLevel(visibleLevel + 1);
    }
  };

  const levelData: Record<number, LevelData> = {
    1: {
      title: "Basic",
      description: "For those in learning, recovery, or needing support",
      features: [
        "Students in learning phase",
        "Elderly or people with disabilities",
        "Those in recovery or transition",
        "Access to basic necessities",
        "No work expectation"
      ]
    },
    2: {
      title: "Light Contributor",
      description: "For part-time workers and those with moderate availability",
      features: [
        "Part-time workers",
        "Caregivers",
        "Early-stage learners",
        "~20 hours/week contribution",
        "Access to upgraded tools and small luxuries"
      ]
    },
    3: {
      title: "Standard Contributor",
      description: "For full-time contributors in stable roles",
      features: [
        "Full-time workers",
        "Community service providers",
        "Production unit members",
        "~30 hours/week contribution",
        "Access to personal devices and advanced tools"
      ]
    },
    4: {
      title: "Skilled Contributor",
      description: "For high-skilled workers and experts",
      features: [
        "High-skilled workers",
        "Organizers and city designers",
        "Critical production unit members",
        "~40 hours/week contribution",
        "Access to customized housing and advanced equipment"
      ]
    },
    5: {
      title: "Visionary",
      description: "For innovators and societal planners",
      features: [
        "Innovators and scientists",
        "Societal planners and R&D teams",
        "Disaster prevention specialists",
        "40+ hours/week contribution",
        "Access to high-end labs and rare materials"
      ]
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-8">
      <div className="flex items-center mb-6">
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-blue-600 transition-colors mr-4"
        >
          <ArrowLeftIcon size={20} className="mr-2" />
          Back to Profile
        </button>
        <h2 className="text-2xl font-bold text-center flex-1">
          Choose Your Participation Level
        </h2>
        <button
          onClick={handleLearnMore}
          className="flex items-center text-gray-600 hover:text-blue-600 transition-colors ml-4"
          title="Learn more about user levels"
        >
          <InfoIcon size={20} />
        </button>
      </div>

      <p className="text-gray-600 text-center mb-8">
        Select the level that best matches your current stage in life and capacity to contribute.
        This helps us align your access to resources with your needs and abilities.
      </p>

      <div className="relative">
        <div className="flex items-center">
          <button
            onClick={handlePrevClick}
            disabled={visibleLevel === 1}
            className={`p-2 rounded-full transition-colors ${
              visibleLevel === 1
                ? 'text-gray-300 cursor-not-allowed'
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            <ChevronLeftIcon size={24} />
          </button>

          <div 
            ref={containerRef}
            className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scrollbar-none level-container"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {[1, 2, 3, 4, 5].map((level) => {
              const data = levelData[level];
              const isDisabled = level > 1 && !canSelectStandard;
              const isSelected = selectedLevel === level;

              return (
                <div
                  key={level}
                  id={`level-${level}`}
                  className={`flex-none w-[300px] snap-center ${
                    isDisabled ? 'opacity-50' : ''
                  }`}
                >
                  <div
                    className={`border rounded-lg p-6 transition-all h-full ${
                      isDisabled
                        ? 'cursor-not-allowed'
                        : isSelected
                        ? 'border-blue-500 bg-blue-50 cursor-pointer'
                        : 'border-gray-200 hover:border-blue-300 cursor-pointer'
                    }`}
                    onClick={() => handleLevelSelect(level)}
                  >
                    {isDisabled && (
                      <div className="text-sm text-red-600 mb-2">
                        Add skills or experience to choose this level
                      </div>
                    )}
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold">{data.title}</h3>
                      <span className="text-sm text-gray-500">Level {level}</span>
                    </div>
                    <p className="text-gray-600 mb-4">
                      {data.description}
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {data.features.map((feature: string, index: number) => (
                        <li key={index}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={handleNextClick}
            disabled={visibleLevel === totalLevels}
            className={`p-2 rounded-full transition-colors ${
              visibleLevel === totalLevels
                ? 'text-gray-300 cursor-not-allowed'
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            <ChevronRightIcon size={24} />
          </button>
        </div>

        <div className="flex justify-center mt-4 space-x-2">
          {[1, 2, 3, 4, 5].map((level) => (
            <button
              key={level}
              onClick={() => scrollToLevel(level)}
              className={`w-2 h-2 rounded-full transition-colors ${
                visibleLevel === level ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-600">
        <p className="mb-2">
          Your level can be adjusted based on your changing circumstances and capabilities.
        </p>
        <p>
          Click the info icon to learn more about how levels work in our community.
        </p>
      </div>

      <div className="mt-6">
        <button
          onClick={() => onComplete({ level: selectedLevel })}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
        >
          Continue
        </button>
      </div>
    </div>
  );
}