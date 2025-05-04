import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { AuthProvider, useAuth, Users } from './contexts/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Navigation } from './components/Navigation';
// import { Home } from './components/Home';
import { AuthForm } from './components/Onboarding/AuthForm';
import { OnboardingFlow } from './components/Onboarding/OnboardingFlow';
import { Dashboard } from './components/Dashboard/Dashboard';
import { Profile } from './components/Profile/Profile';
import { Marketplace } from './components/Marketplace/Marketplace';
import { Community } from './components/Community/Community';
import { CityDashboard } from './components/CityManagement/CityDashboard';
import { CitySelector } from './components/CityManagement/CitySelector';
import { CityWizard } from './components/CityManagement/CityWizard';
import { UserDashboard } from './components/UserProfile/UserDashboard';
import { LandingPage } from './components/Dashboard/LandingPage';
import { MainNavigation } from './components/Navigation/MainNavigation';
import { Signup } from './components/Auth/Signup';
import { CityManagement } from './components/CityManagement';
import { AdminDashboard } from './components/CityManagement/AdminDashboard';
import { InfrastructureMarketplace } from './components/Marketplace/InfrastructureMarketplace';
import { defaultUserData, UserData } from './shared/mockup/userData';
import { mockCities, CityData1 as CityData, mockUserData } from './shared/mockup/cityData';


// City Management Container to handle state and navigation
function CityManagementContainer() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCity, setSelectedCity] = useState<CityData | null>(null);

  const handleCitySelected = (cityData: CityData) => {
    if (cityData.isNew) {
      navigate('/city-management/wizard', { state: { initialData: cityData } });
    } else {
      // Get complete city data from mock data
      const completeCityData = mockCities[cityData.id!];
      setSelectedCity(completeCityData);
      navigate(`/city-management/dashboard/${cityData.id}`);
    }
  };

  const handleWizardComplete = (cityData: CityData) => {
    // Add the new city to mock data
    const newId = Object.keys(mockCities).length + 1;
    const completeCityData = {
      ...cityData,
      id: newId,
      isNew: false
    };
    mockCities[newId] = completeCityData;
    setSelectedCity(completeCityData);
    navigate(`/city-management/dashboard/${newId}`);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<CitySelector onCitySelected={handleCitySelected} />}
      />
      <Route
        path="/dashboard/:cityId"
        element={<CityDashboard cityData={selectedCity || mockCities[1]} />}
      />
      <Route
        path="/wizard"
        element={
          <CityWizard
            initialData={(location.state as { initialData: CityData })?.initialData}
            onComplete={handleWizardComplete}
          />
        }
      />
    </Routes>
  );
}

function AppContent() {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const [userData, setUserData] = useState<UserData | undefined>(undefined);

  const handleLogout = () => {
    logout();
    setUserData(undefined);
    navigate('/', { replace: true });
  };

  const handleUserDataUpdate = (data: UserData) => {
    setUserData(data);
  };

  const handleLogin = () => {
    navigate('/login');
  };

  useEffect(() => {
    if (user) {
      setUserData(defaultUserData);
    }
  }, [user]);

  return (
    <>
      <MainNavigation
        isLoggedIn={isAuthenticated}
        userData={user || undefined}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />
      <main className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Routes>
          <Route 
            path="/login" 
            element={
              isAuthenticated ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <AuthForm />
              )
            } 
          />
          <Route path="/signup" element={<Signup onSignup={() => {}} />} />
          <Route 
            path="/onboarding" 
            element={
              <OnboardingFlow 
                onComplete={handleUserDataUpdate}
                userData={userData}
              />
            } 
          />
          <Route path="/marketplace" element={<Marketplace userData={userData} />} />
          <Route path="/marketplace/:countryId/:cityId" element={<Marketplace userData={userData} />} />
          <Route path="/marketplace/:countryId/:cityId/:tab" element={<Marketplace userData={userData} />} />
          <Route path="/marketplace/:countryId/:cityId/:tab/:category" element={<Marketplace userData={userData} />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard userData={userData} />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/profile" 
            element={
              isAuthenticated ? (
                <UserDashboard userData={mockUserData} />
              ) : (
                <Navigate to="/" replace />
              )
            } 
          />
          {/* Profile with dynamic ID */}
          <Route 
            path="/profile/:id" 
            element={
              isAuthenticated ? (
                <UserDashboard userData={userData} />
              ) : (
                <Navigate to="/" replace />
              )
            } 
          />

          {/* Profile marketplace with nested routing */}
          <Route 
            path="/profile/:id/marketplace/*" 
            element={
              isAuthenticated ? (
                <Marketplace userData={userData} />
              ) : (
                <Navigate to="/" replace />
              )
            } 
          />
          <Route path="/city-management/*" element={<CityManagementContainer />} />
          <Route path="/community/*" element={<Community />} />
          <Route 
            path="/" 
            element={
              isAuthenticated ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <LandingPage onGetStarted={handleLogin} />
              )
            } 
          />
          <Route path="/admin" element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } />
        </Routes>
      </main>
      <footer className="bg-gray-800 text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">EconoSync</h3>
            <p className="text-gray-300">
              Reimagining how work, commerce, and value exchange function in
              society.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#about" className="hover:text-blue-400">
                  About
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-blue-400">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#levels" className="hover:text-blue-400">
                  User Levels
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-blue-400">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>info@econosync.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Innovation Way, Tech City</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>© 2023 EconoSync. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AuthProvider>
        <Router>
          <AppContent />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;