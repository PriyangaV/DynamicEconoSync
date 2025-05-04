import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LevelSelection } from './LevelSelection';
import { ProfileSetup } from './ProfileSetup';
import { OnboardingComplete } from './OnboardingComplete';
import { useAuth } from '../../contexts/AuthContext';
import { ArrowLeftIcon } from 'lucide-react';
import { UserData } from '../../App';

interface OnboardingFlowProps {
  onComplete: (data: UserData) => void;
  userData?: UserData;
}

const STEPS = {
  SIGNUP: 'signup',
  VERIFY: 'verify',
  PROFILE: 'profile',
  LEVEL: 'level',
  COMPLETE: 'complete'
};

export function OnboardingFlow({ onComplete, userData: initialUserData }: OnboardingFlowProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const [currentStep, setCurrentStep] = useState(STEPS.SIGNUP);
  const [userData, setUserData] = useState({
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
    phone: '',
    age: '',
    country: '',
    skills: [],
    education: [],
    experience: [],
    level: 1,
    isNew: true,
    verificationCode: '',
    ...initialUserData
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Initialize user data from location state if available
  useEffect(() => {
    const initialData = location.state?.initialUserData;
    if (initialData) {
      setUserData(prev => ({
        ...prev,
        ...initialData
      }));
    }
  }, [location.state]);

  const validateSignupForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!userData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!userData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!userData.password) {
      newErrors.password = 'Password is required';
    } else if (userData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    if (!userData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (userData.password !== userData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    if (!userData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-]{10,}$/.test(userData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateVerificationCode = () => {
    const newErrors: Record<string, string> = {};
    
    if (!userData.verificationCode.trim()) {
      newErrors.verificationCode = 'Verification code is required';
    } else if (userData.verificationCode.length !== 6) {
      newErrors.verificationCode = 'Verification code must be 6 digits';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (currentStep === STEPS.SIGNUP) {
      if (!validateSignupForm()) {
        return;
      }
      setCurrentStep(STEPS.VERIFY);
    } else if (currentStep === STEPS.VERIFY) {
      if (!validateVerificationCode()) {
        return;
      }
      setCurrentStep(STEPS.PROFILE);
    } else if (currentStep === STEPS.PROFILE) {
      setCurrentStep(STEPS.LEVEL);
    } else if (currentStep === STEPS.LEVEL) {
      setCurrentStep(STEPS.COMPLETE);
    }
  };

  const previousStep = () => {
    switch (currentStep) {
      case STEPS.VERIFY:
        setCurrentStep(STEPS.SIGNUP);
        break;
      case STEPS.PROFILE:
        setCurrentStep(STEPS.VERIFY);
        break;
      case STEPS.LEVEL:
        setCurrentStep(STEPS.PROFILE);
        break;
      case STEPS.COMPLETE:
        setCurrentStep(STEPS.LEVEL);
        break;
      default:
        break;
    }
  };

  const handleComplete = () => {
    // Only set authentication after onboarding is complete
    login({
      ...userData,
      isNewUser: false // Mark as completed onboarding
    });
    onComplete(userData);
    navigate('/dashboard');
  };

  const renderStep = () => {
    switch (currentStep) {
      case STEPS.SIGNUP:
        return (
          <div className="bg-white shadow-md rounded-lg p-8">
            <div className="flex items-center mb-6">
              <button
                onClick={() => navigate('/login')}
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors mr-4"
              >
                <ArrowLeftIcon size={20} className="mr-2" />
                Back to Login
              </button>
              <h2 className="text-2xl font-bold text-center flex-1">Create Your Account</h2>
            </div>
            <form onSubmit={(e) => {
              e.preventDefault();
              nextStep();
            }} className="space-y-6">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={userData.name}
                    onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                    className={`block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                      errors.name ? 'border-red-500' : ''
                    }`}
                    placeholder="Enter your full name"
                    required
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={userData.email}
                    onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                    className={`block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                      errors.email ? 'border-red-500' : ''
                    }`}
                    placeholder="Enter your email"
                    required
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={userData.phone}
                    onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                    className={`block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                      errors.phone ? 'border-red-500' : ''
                    }`}
                    placeholder="Enter your phone number"
                    required
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={userData.password}
                    onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                    className={`block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                      errors.password ? 'border-red-500' : ''
                    }`}
                    placeholder="Create a password"
                    required
                  />
                  {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    value={userData.confirmPassword}
                    onChange={(e) => setUserData({ ...userData, confirmPassword: e.target.value })}
                    className={`block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                      errors.confirmPassword ? 'border-red-500' : ''
                    }`}
                    placeholder="Confirm your password"
                    required
                  />
                  {errors.confirmPassword && (
                    <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
                  )}
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        );
      case STEPS.VERIFY:
        return (
          <div className="bg-white shadow-md rounded-lg p-8">
            <div className="flex items-center mb-6">
              <button
                onClick={previousStep}
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors mr-4"
              >
                <ArrowLeftIcon size={20} className="mr-2" />
                Back to Sign Up
              </button>
              <h2 className="text-2xl font-bold text-center flex-1">Verify Your Account</h2>
            </div>
            <form onSubmit={(e) => {
              e.preventDefault();
              nextStep();
            }} className="space-y-6">
              <div>
                <label htmlFor="verificationCode" className="block text-sm font-medium text-gray-700 mb-1">
                  Verification Code <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="verificationCode"
                  value={userData.verificationCode}
                  onChange={(e) => setUserData({ ...userData, verificationCode: e.target.value })}
                  className={`block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                    errors.verificationCode ? 'border-red-500' : ''
                  }`}
                  placeholder="Enter 6-digit verification code"
                  required
                  maxLength={6}
                />
                {errors.verificationCode && (
                  <p className="mt-1 text-sm text-red-600">{errors.verificationCode}</p>
                )}
                <p className="mt-2 text-sm text-gray-600">
                  We've sent a verification code to your email and phone number.
                </p>
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  Verify
                </button>
              </div>
            </form>
          </div>
        );
      case STEPS.PROFILE:
        return <ProfileSetup userData={userData} onComplete={data => {
          setUserData(data);
          nextStep();
        }} onBack={previousStep} />;
      case STEPS.LEVEL:
        return <LevelSelection onComplete={data => {
          setUserData(data);
          nextStep();
        }} onBack={previousStep} userData={userData} />;
      case STEPS.COMPLETE:
        return <OnboardingComplete userData={userData} onComplete={handleComplete} onBack={previousStep} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep === STEPS.SIGNUP || currentStep === STEPS.VERIFY || currentStep === STEPS.PROFILE || currentStep === STEPS.LEVEL || currentStep === STEPS.COMPLETE ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
              1
            </div>
            <div className="text-sm font-medium">Sign Up</div>
          </div>
          <div className={`flex-1 h-1 mx-4 ${currentStep === STEPS.VERIFY || currentStep === STEPS.PROFILE || currentStep === STEPS.LEVEL || currentStep === STEPS.COMPLETE ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
          <div className="flex items-center space-x-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep === STEPS.VERIFY || currentStep === STEPS.PROFILE || currentStep === STEPS.LEVEL || currentStep === STEPS.COMPLETE ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
              2
            </div>
            <div className="text-sm font-medium">Verify</div>
          </div>
          <div className={`flex-1 h-1 mx-4 ${currentStep === STEPS.PROFILE || currentStep === STEPS.LEVEL || currentStep === STEPS.COMPLETE ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
          <div className="flex items-center space-x-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep === STEPS.PROFILE || currentStep === STEPS.LEVEL || currentStep === STEPS.COMPLETE ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
              3
            </div>
            <div className="text-sm font-medium">Profile</div>
          </div>
          <div className={`flex-1 h-1 mx-4 ${currentStep === STEPS.LEVEL || currentStep === STEPS.COMPLETE ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
          <div className="flex items-center space-x-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep === STEPS.LEVEL || currentStep === STEPS.COMPLETE ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
              4
            </div>
            <div className="text-sm font-medium">Level</div>
          </div>
          <div className={`flex-1 h-1 mx-4 ${currentStep === STEPS.COMPLETE ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
          <div className="flex items-center space-x-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep === STEPS.COMPLETE ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
              5
            </div>
            <div className="text-sm font-medium">Complete</div>
          </div>
        </div>
      </div>

      {/* Current Step Content */}
      {renderStep()}
    </div>
  );
}