import { useState } from "react";
import { Home, Search, PlusSquare, MessageCircle, User, Palette, Menu, X, Info } from "lucide-react";

// Import components
import DesignSystem from "./components/DesignSystem";
import Onboarding from "./components/Onboarding";
import HomeFeed from "./components/HomeFeed";
import Explore from "./components/Explore";
import CreatePost from "./components/CreatePost";
import Profile from "./components/Profile";
import Messages from "./components/Messages";
import Settings from "./components/Settings";
import StoriesViewer from "./components/StoriesViewer";
import FeatureShowcase from "./components/FeatureShowcase";

type View = "welcome" | "design" | "onboarding" | "home" | "explore" | "messages" | "profile" | "settings";

export default function App() {
  const [currentView, setCurrentView] = useState<View>("welcome");
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [showStories, setShowStories] = useState(false);
  const [lowDataMode, setLowDataMode] = useState(false);
  const [onboardingComplete, setOnboardingComplete] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isBusiness, setIsBusiness] = useState(false);

  // Detect if we're on desktop
  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 768;

  const handleOnboardingComplete = () => {
    setOnboardingComplete(true);
    setCurrentView("home");
  };

  // Don't show nav for onboarding and design system
  const showNav = onboardingComplete && currentView !== "design";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Welcome/Feature Showcase */}
      {currentView === "welcome" && (
        <div>
          <FeatureShowcase />
          <div className="fixed bottom-8 left-0 right-0 flex justify-center gap-4 px-4">
            <button
              onClick={() => setCurrentView("onboarding")}
              className="px-8 py-4 bg-gradient-to-r from-[#DC143C] to-[#4B0082] text-white rounded-xl font-semibold hover:shadow-lg transition-all text-lg"
            >
              Start Onboarding
            </button>
            <button
              onClick={() => {
                setOnboardingComplete(true);
                setCurrentView("home");
              }}
              className="px-8 py-4 bg-white border-2 border-gray-300 rounded-xl font-semibold hover:shadow-lg transition-all text-lg"
            >
              Skip to App
            </button>
          </div>
        </div>
      )}
      
      {/* Design System View */}
      {currentView === "design" && (
        <div className="relative">
          <DesignSystem />
          <button
            onClick={() => {
              setOnboardingComplete(true);
              setCurrentView("home");
            }}
            className="fixed bottom-8 right-8 px-6 py-3 bg-[#DC143C] text-white rounded-xl font-semibold hover:bg-[#B8112E] transition-colors shadow-lg flex items-center gap-2 z-50"
          >
            <Home className="w-5 h-5" />
            Back to App
          </button>
        </div>
      )}

      {/* Onboarding */}
      {currentView === "onboarding" && <Onboarding onComplete={handleOnboardingComplete} />}

      {/* Main App with Navigation */}
      {showNav && (
        <div className="flex h-screen overflow-hidden">
          {/* Desktop Sidebar */}
          {isDesktop && (
            <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
              {/* Logo */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#DC143C] to-[#4B0082] rounded-xl flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 3L15 9L21 10.5L16.5 15L18 21L12 18L6 21L7.5 15L3 10.5L9 9L12 3Z" fill="white" />
                    </svg>
                  </div>
                  <span className="text-xl font-bold">Nepal Social</span>
                </div>
              </div>

              {/* Navigation */}
              <nav className="flex-1 p-4 space-y-2">
                <NavItem
                  icon={<Info className="w-6 h-6" />}
                  label="Welcome"
                  active={currentView === "welcome"}
                  onClick={() => {
                    setCurrentView("welcome");
                    setOnboardingComplete(false);
                  }}
                />
                <div className="h-px bg-gray-200 my-2"></div>
                <NavItem
                  icon={<Home className="w-6 h-6" />}
                  label="Home"
                  active={currentView === "home"}
                  onClick={() => setCurrentView("home")}
                />
                <NavItem
                  icon={<Search className="w-6 h-6" />}
                  label="Explore"
                  active={currentView === "explore"}
                  onClick={() => setCurrentView("explore")}
                />
                <NavItem
                  icon={<MessageCircle className="w-6 h-6" />}
                  label="Messages"
                  active={currentView === "messages"}
                  onClick={() => setCurrentView("messages")}
                  badge={3}
                />
                <NavItem
                  icon={<User className="w-6 h-6" />}
                  label="Profile"
                  active={currentView === "profile"}
                  onClick={() => setCurrentView("profile")}
                />
                <NavItem
                  icon={<Palette className="w-6 h-6" />}
                  label="Design System"
                  active={currentView === "design"}
                  onClick={() => setCurrentView("design")}
                />

                <button
                  onClick={() => setShowCreatePost(true)}
                  className="w-full mt-4 px-6 py-3 bg-[#DC143C] text-white rounded-xl font-semibold hover:bg-[#B8112E] transition-colors flex items-center justify-center gap-2"
                >
                  <PlusSquare className="w-5 h-5" />
                  Create
                </button>
              </nav>

              {/* Settings */}
              <div className="p-4 border-t border-gray-200">
                <NavItem
                  icon={<Menu className="w-6 h-6" />}
                  label="Settings"
                  active={currentView === "settings"}
                  onClick={() => setCurrentView("settings")}
                />
                
                {/* Low Data Toggle */}
                <div className="mt-4 p-3 bg-blue-50 rounded-xl">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-blue-900">Low Data Mode</span>
                    <button
                      onClick={() => setLowDataMode(!lowDataMode)}
                      className={`relative w-11 h-6 rounded-full transition-colors ${
                        lowDataMode ? "bg-blue-600" : "bg-gray-300"
                      }`}
                    >
                      <div
                        className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                          lowDataMode ? "translate-x-5" : "translate-x-0.5"
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* Business Mode Toggle */}
                <div className="mt-2 p-3 bg-purple-50 rounded-xl">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-purple-900">Business Mode</span>
                    <button
                      onClick={() => setIsBusiness(!isBusiness)}
                      className={`relative w-11 h-6 rounded-full transition-colors ${
                        isBusiness ? "bg-purple-600" : "bg-gray-300"
                      }`}
                    >
                      <div
                        className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                          isBusiness ? "translate-x-5" : "translate-x-0.5"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </aside>
          )}

          {/* Main Content */}
          <main className="flex-1 overflow-y-auto">
            {currentView === "home" && (
              <div>
                {/* Stories Bar */}
                <div className="sticky top-0 z-10 bg-white border-b border-gray-200 p-4">
                  <div className="flex gap-4 overflow-x-auto pb-2">
                    <button
                      onClick={() => setShowStories(true)}
                      className="flex flex-col items-center gap-2 flex-shrink-0"
                    >
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#DC143C] to-[#4B0082] p-0.5">
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                          <PlusSquare className="w-6 h-6 text-[#DC143C]" />
                        </div>
                      </div>
                      <span className="text-xs font-medium">Your Story</span>
                    </button>
                    {["Anjali", "Ramesh", "Sita", "Bikash"].map((name) => (
                      <button
                        key={name}
                        onClick={() => setShowStories(true)}
                        className="flex flex-col items-center gap-2 flex-shrink-0"
                      >
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#DC143C] to-[#4B0082] p-0.5">
                          <div className="w-full h-full rounded-full bg-white overflow-hidden">
                            <img
                              src={`https://images.unsplash.com/photo-${
                                name === "Anjali" ? "1534528741775-53994a69daeb" :
                                name === "Ramesh" ? "1507003211169-0a1dd7228f2d" :
                                name === "Sita" ? "1488426862026-3ee34a7d66df" :
                                "1506794778202-cad84cf45f1d"
                              }?w=80&h=80&fit=crop`}
                              alt={name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <span className="text-xs font-medium">{name}</span>
                      </button>
                    ))}
                  </div>
                </div>
                <HomeFeed lowDataMode={lowDataMode} isDesktop={isDesktop} />
              </div>
            )}
            {currentView === "explore" && <Explore isDesktop={isDesktop} />}
            {currentView === "messages" && <Messages isDesktop={isDesktop} isBusiness={isBusiness} />}
            {currentView === "profile" && <Profile isBusiness={isBusiness} isDesktop={isDesktop} />}
            {currentView === "settings" && <Settings />}
          </main>
        </div>
      )}

      {/* Mobile Bottom Navigation */}
      {showNav && !isDesktop && (
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 flex items-center justify-around z-30">
          <button
            onClick={() => setCurrentView("home")}
            className={`p-3 ${currentView === "home" ? "text-[#DC143C]" : "text-gray-600"}`}
          >
            <Home className="w-6 h-6" />
          </button>
          <button
            onClick={() => setCurrentView("explore")}
            className={`p-3 ${currentView === "explore" ? "text-[#DC143C]" : "text-gray-600"}`}
          >
            <Search className="w-6 h-6" />
          </button>
          <button
            onClick={() => setShowCreatePost(true)}
            className="p-3 text-gray-600"
          >
            <PlusSquare className="w-6 h-6" />
          </button>
          <button
            onClick={() => setCurrentView("messages")}
            className={`p-3 relative ${currentView === "messages" ? "text-[#DC143C]" : "text-gray-600"}`}
          >
            <MessageCircle className="w-6 h-6" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-[#DC143C] rounded-full"></span>
          </button>
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="p-3 text-gray-600"
          >
            {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      )}

      {/* Mobile Menu */}
      {showMobileMenu && !isDesktop && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setShowMobileMenu(false)}>
          <div className="absolute bottom-20 left-0 right-0 bg-white rounded-t-3xl p-6 space-y-3" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => {
                setCurrentView("profile");
                setShowMobileMenu(false);
              }}
              className="w-full flex items-center gap-3 p-4 hover:bg-gray-100 rounded-xl transition-colors"
            >
              <User className="w-6 h-6" />
              <span className="font-medium">Profile</span>
            </button>
            <button
              onClick={() => {
                setCurrentView("settings");
                setShowMobileMenu(false);
              }}
              className="w-full flex items-center gap-3 p-4 hover:bg-gray-100 rounded-xl transition-colors"
            >
              <Menu className="w-6 h-6" />
              <span className="font-medium">Settings</span>
            </button>
            <button
              onClick={() => {
                setCurrentView("design");
                setShowMobileMenu(false);
              }}
              className="w-full flex items-center gap-3 p-4 hover:bg-gray-100 rounded-xl transition-colors"
            >
              <Palette className="w-6 h-6" />
              <span className="font-medium">Design System</span>
            </button>
            
            <div className="pt-4 border-t border-gray-200 space-y-3">
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                <span className="font-medium text-blue-900">Low Data Mode</span>
                <button
                  onClick={() => setLowDataMode(!lowDataMode)}
                  className={`relative w-11 h-6 rounded-full transition-colors ${
                    lowDataMode ? "bg-blue-600" : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                      lowDataMode ? "translate-x-5" : "translate-x-0.5"
                    }`}
                  />
                </button>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl">
                <span className="font-medium text-purple-900">Business Mode</span>
                <button
                  onClick={() => setIsBusiness(!isBusiness)}
                  className={`relative w-11 h-6 rounded-full transition-colors ${
                    isBusiness ? "bg-purple-600" : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                      isBusiness ? "translate-x-5" : "translate-x-0.5"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Create Post Modal */}
      {showCreatePost && (
        <CreatePost onClose={() => setShowCreatePost(false)} lowDataMode={lowDataMode} />
      )}

      {/* Stories Viewer */}
      {showStories && (
        <StoriesViewer onClose={() => setShowStories(false)} lowDataMode={lowDataMode} />
      )}
    </div>
  );
}

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
  badge?: number;
}

function NavItem({ icon, label, active, onClick, badge }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-colors ${
        active ? "bg-red-50 text-[#DC143C]" : "text-gray-700 hover:bg-gray-100"
      }`}
    >
      <div className="relative">
        {icon}
        {badge && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#DC143C] text-white text-xs rounded-full flex items-center justify-center font-medium">
            {badge}
          </span>
        )}
      </div>
      <span className="font-medium">{label}</span>
    </button>
  );
}