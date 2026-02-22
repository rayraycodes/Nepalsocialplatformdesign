import { Heart, MessageCircle, Send, Bookmark, Search, Home, Compass, PlusSquare, User, Settings, Bell, MapPin } from "lucide-react";

export default function DesignSystem() {
  return (
    <div className="max-w-7xl mx-auto p-8 space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-2">Nepal Social Platform</h1>
        <p className="text-lg opacity-70">Design System</p>
      </div>

      {/* Colors */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <div className="h-24 rounded-xl bg-[#DC143C]"></div>
            <p className="font-medium">Nepal Red</p>
            <p className="text-sm opacity-70">#DC143C</p>
          </div>
          <div className="space-y-2">
            <div className="h-24 rounded-xl bg-[#4B0082]"></div>
            <p className="font-medium">Indigo Blue</p>
            <p className="text-sm opacity-70">#4B0082</p>
          </div>
          <div className="space-y-2">
            <div className="h-24 rounded-xl bg-[#D4A574]"></div>
            <p className="font-medium">Warm Gold</p>
            <p className="text-sm opacity-70">#D4A574</p>
          </div>
          <div className="space-y-2">
            <div className="h-24 rounded-xl bg-[#8B7355]"></div>
            <p className="font-medium">Earth Brown</p>
            <p className="text-sm opacity-70">#8B7355</p>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Typography</h2>
        <div className="space-y-4">
          <div>
            <p className="text-4xl font-bold">Heading Large</p>
            <p className="text-sm opacity-70 mt-1">4xl / Bold</p>
          </div>
          <div>
            <p className="text-2xl font-semibold">Heading Medium</p>
            <p className="text-sm opacity-70 mt-1">2xl / Semibold</p>
          </div>
          <div>
            <p className="text-base">Body Regular - नमस्ते! Welcome to Nepal's platform</p>
            <p className="text-sm opacity-70 mt-1">Base / Regular</p>
          </div>
          <div>
            <p className="text-sm opacity-70">Caption Small</p>
            <p className="text-sm opacity-70 mt-1">SM / Regular</p>
          </div>
        </div>
      </section>

      {/* Buttons */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <button className="px-6 py-3 bg-[#DC143C] text-white rounded-xl font-medium hover:bg-[#B8112E] transition-colors">
            Primary Button
          </button>
          <button className="px-6 py-3 bg-white border-2 border-gray-200 rounded-xl font-medium hover:bg-gray-50 transition-colors">
            Secondary Button
          </button>
          <button className="px-6 py-3 bg-[#4B0082] text-white rounded-xl font-medium hover:bg-[#3D006A] transition-colors">
            Accent Button
          </button>
        </div>
      </section>

      {/* Icons */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Icons</h2>
        <div className="flex flex-wrap gap-6">
          <div className="flex flex-col items-center gap-2">
            <Home className="w-6 h-6" />
            <p className="text-sm">Home</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Search className="w-6 h-6" />
            <p className="text-sm">Search</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Compass className="w-6 h-6" />
            <p className="text-sm">Explore</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <PlusSquare className="w-6 h-6" />
            <p className="text-sm">Create</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Heart className="w-6 h-6" />
            <p className="text-sm">Like</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <MessageCircle className="w-6 h-6" />
            <p className="text-sm">Comment</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Send className="w-6 h-6" />
            <p className="text-sm">Share</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Bookmark className="w-6 h-6" />
            <p className="text-sm">Save</p>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Cards</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#DC143C] to-[#4B0082] rounded-full"></div>
              <div>
                <p className="font-semibold">Sita Sharma</p>
                <p className="text-sm opacity-70">Kathmandu, Nepal</p>
              </div>
            </div>
            <div className="h-48 bg-gray-100 rounded-xl"></div>
            <div className="flex gap-4">
              <Heart className="w-6 h-6" />
              <MessageCircle className="w-6 h-6" />
              <Send className="w-6 h-6" />
              <Bookmark className="w-6 h-6 ml-auto" />
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-2xl overflow-hidden">
            <div className="h-64 bg-gradient-to-br from-[#D4A574] to-[#8B7355]"></div>
            <div className="p-4">
              <p className="font-semibold">Location Card</p>
              <p className="text-sm opacity-70 flex items-center gap-1 mt-1">
                <MapPin className="w-4 h-4" />
                Thamel, Kathmandu
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Elements */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Form Elements</h2>
        <div className="space-y-4 max-w-md">
          <input
            type="text"
            placeholder="Search पोखरा, Kathmandu..."
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#DC143C] transition-all"
          />
          <textarea
            placeholder="Write a caption... शेयर गर्नुहोस्"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#DC143C] transition-all resize-none"
            rows={3}
          />
          <div className="flex items-center gap-3">
            <input type="checkbox" id="lowdata" className="w-5 h-5" />
            <label htmlFor="lowdata" className="text-sm">Enable Low Data Mode</label>
          </div>
        </div>
      </section>
    </div>
  );
}
