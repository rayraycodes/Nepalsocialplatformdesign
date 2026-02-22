import { Check, Smartphone, Monitor, Wifi, Globe, Shield, Store, Heart } from "lucide-react";

export default function FeatureShowcase() {
  return (
    <div className="max-w-6xl mx-auto p-8 space-y-16 bg-gradient-to-br from-white via-gray-50 to-blue-50">
      {/* Hero */}
      <div className="text-center space-y-6">
        <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#DC143C] to-[#4B0082] rounded-3xl flex items-center justify-center">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path d="M24 6L30 18L42 21L33 30L36 42L24 36L12 42L15 30L6 21L18 18L24 6Z" fill="white" />
          </svg>
        </div>
        <h1 className="text-5xl font-bold">Nepal Social Platform</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A modern, mobile-first social media platform built specifically for Nepal's unique culture, language, and connectivity needs.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <span className="px-4 py-2 bg-[#DC143C] text-white rounded-full text-sm font-medium">Mobile First</span>
          <span className="px-4 py-2 bg-[#4B0082] text-white rounded-full text-sm font-medium">Bilingual</span>
          <span className="px-4 py-2 bg-[#D4A574] text-white rounded-full text-sm font-medium">Low Data</span>
          <span className="px-4 py-2 bg-green-600 text-white rounded-full text-sm font-medium">Ready to Launch</span>
        </div>
      </div>

      {/* Core Features */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Core Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Smartphone className="w-8 h-8 text-[#DC143C]" />}
            title="Mobile First Design"
            description="Optimized for mid-range Android phones with responsive desktop layouts"
          />
          <FeatureCard
            icon={<Wifi className="w-8 h-8 text-blue-600" />}
            title="Low Data Mode"
            description="Smart loading, offline saves, and background upload queue for poor connectivity"
          />
          <FeatureCard
            icon={<Globe className="w-8 h-8 text-[#4B0082]" />}
            title="Bilingual Support"
            description="Seamless Nepali and English with Devanagari script support"
          />
          <FeatureCard
            icon={<Shield className="w-8 h-8 text-green-600" />}
            title="Trust & Safety"
            description="Anti-impersonation, comment filters, and comprehensive reporting tools"
          />
          <FeatureCard
            icon={<Store className="w-8 h-8 text-[#D4A574]" />}
            title="Social Commerce"
            description="Business profiles, catalogs, quick replies, and local payment integration"
          />
          <FeatureCard
            icon={<Heart className="w-8 h-8 text-red-500" />}
            title="Nepal-First Features"
            description="Festival templates, local locations, and culturally relevant content"
          />
        </div>
      </section>

      {/* Screens Delivered */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Complete Screen Set</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Smartphone className="w-6 h-6 text-[#DC143C]" />
              <h3 className="text-xl font-semibold">Mobile Screens</h3>
            </div>
            <ul className="space-y-3">
              {[
                "Onboarding (3 steps)",
                "Home Feed with Stories",
                "Explore & Search",
                "Create Post Flow",
                "Profile (Personal & Business)",
                "Messages / DMs",
                "Settings & Safety",
                "Stories Viewer"
              ].map((screen) => (
                <li key={screen} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>{screen}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Monitor className="w-6 h-6 text-[#4B0082]" />
              <h3 className="text-xl font-semibold">Desktop Experience</h3>
            </div>
            <ul className="space-y-3">
              {[
                "Sidebar Navigation",
                "Multi-column Feed Layout",
                "Expanded Explore Grid",
                "Full Messaging UI",
                "Profile with Better Info Display",
                "Settings Panel",
                "Design System Documentation"
              ].map((screen) => (
                <li key={screen} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>{screen}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Nepal-Specific Features */}
      <section className="bg-gradient-to-br from-[#DC143C]/10 to-[#4B0082]/10 rounded-3xl p-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Nepal-Specific Features</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#DC143C]">Connectivity First</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Low Data Mode toggle in onboarding</li>
              <li>• Images load first, videos on tap</li>
              <li>• Background upload queue</li>
              <li>• Offline content saving</li>
              <li>• Smart loading indicators</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#4B0082]">Language & Search</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Nepali + English UI</li>
              <li>• Devanagari script support</li>
              <li>• Bilingual search (Pokhara = पोखरा)</li>
              <li>• Hashtag normalization</li>
              <li>• Optional transliteration preview</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#D4A574]">Locations</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Nepal hierarchy (Tole, Ward, District)</li>
              <li>• Popular landmarks offline</li>
              <li>• Temple, lake, trail tagging</li>
              <li>• Nearby feed by district</li>
              <li>• Location-based explore</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-600">Social Commerce</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Business profile mode</li>
              <li>• Product catalogs with pricing</li>
              <li>• Quick reply buttons (Price, Available, Delivery)</li>
              <li>• eSewa, Khalti, IME Pay integration</li>
              <li>• Local business trust badges</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sample Content */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Authentic Nepal Content</h2>
        <div className="bg-white border border-gray-200 rounded-2xl p-8">
          <p className="text-gray-700 mb-6">All sample content uses realistic Nepal context:</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h4 className="font-semibold text-[#DC143C]">Names</h4>
              <p className="text-sm text-gray-600">Anjali Thapa, Ramesh Gautam, Sita Karki, Bikash Shrestha</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-[#4B0082]">Locations</h4>
              <p className="text-sm text-gray-600">Thamel, Pokhara, Swayambhunath, Everest Base Camp</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-[#D4A574]">Hashtags</h4>
              <p className="text-sm text-gray-600">#Dashain, #पोखरा, #Nepal, #हिमाल</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ready for Launch */}
      <section className="bg-gradient-to-r from-[#DC143C] to-[#4B0082] rounded-3xl p-12 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Ready for Developer Handoff</h2>
        <p className="text-xl mb-8 opacity-90">
          Complete design system, all screens built, responsive layouts, real content
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-xl">
            <p className="text-sm opacity-90">Mobile First</p>
            <p className="text-2xl font-bold">✓</p>
          </div>
          <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-xl">
            <p className="text-sm opacity-90">Desktop Responsive</p>
            <p className="text-2xl font-bold">✓</p>
          </div>
          <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-xl">
            <p className="text-sm opacity-90">Design System</p>
            <p className="text-2xl font-bold">✓</p>
          </div>
          <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-xl">
            <p className="text-sm opacity-90">Real Content</p>
            <p className="text-2xl font-bold">✓</p>
          </div>
        </div>
      </section>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
