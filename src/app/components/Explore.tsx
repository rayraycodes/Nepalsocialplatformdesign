import { Search, MapPin, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const categories = [
  { id: "all", label: "All", labelNe: "सबै" },
  { id: "travel", label: "Travel", labelNe: "यात्रा" },
  { id: "food", label: "Food", labelNe: "खाना" },
  { id: "music", label: "Music", labelNe: "संगीत" },
  { id: "poetry", label: "Poetry", labelNe: "कविता" },
  { id: "business", label: "Business", labelNe: "व्यवसाय" },
  { id: "public", label: "Public Service", labelNe: "सार्वजनिक सेवा" },
];

const trends = [
  { tag: "#Dashain2026", posts: "12.5K posts", location: "Nepal" },
  { tag: "#पोखरा", posts: "8.2K posts", location: "Pokhara" },
  { tag: "#KathmanduFood", posts: "5.7K posts", location: "Kathmandu" },
  { tag: "#NepalTravel", posts: "15.3K posts", location: "Nepal" },
  { tag: "#हिमाल", posts: "4.1K posts", location: "Nepal" },
];

const explorePosts = [
  { id: 1, image: "https://images.unsplash.com/photo-1609947016891-f86e68963800?w=400&h=400&fit=crop", likes: 2847 },
  { id: 2, image: "https://images.unsplash.com/photo-1511216428748-9b1ef3cc0c7e?w=400&h=400&fit=crop", likes: 5892 },
  { id: 3, image: "https://images.unsplash.com/photo-1605764803170-c20b43be4d00?w=400&h=400&fit=crop", likes: 1243 },
  { id: 4, image: "https://images.unsplash.com/photo-1665394183024-7a95b156d427?w=400&h=400&fit=crop", likes: 3521 },
  { id: 5, image: "https://images.unsplash.com/photo-1576617578919-7fa5f8b4b508?w=400&h=400&fit=crop", likes: 923 },
  { id: 6, image: "https://images.unsplash.com/photo-1761124739933-009df5603fbf?w=400&h=400&fit=crop", likes: 4102 },
  { id: 7, image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop", likes: 2156 },
  { id: 8, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop", likes: 1834 },
  { id: 9, image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=400&fit=crop", likes: 3987 },
];

interface ExploreProps {
  isDesktop?: boolean;
}

export default function Explore({ isDesktop = false }: ExploreProps) {
  return (
    <div className={isDesktop ? "max-w-6xl mx-auto" : "w-full"}>
      {/* Search Bar */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 p-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search पोखरा, Kathmandu, #Dashain..."
            className="w-full pl-12 pr-4 py-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#DC143C] transition-all"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white border-b border-gray-200 overflow-x-auto">
        <div className="flex gap-2 px-4 py-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${
                cat.id === "all"
                  ? "bg-[#DC143C] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Trending Section */}
      <div className="bg-gradient-to-br from-[#DC143C]/5 to-[#4B0082]/5 p-4 border-b border-gray-200">
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="w-5 h-5 text-[#DC143C]" />
          <h2 className="font-semibold text-lg">Trending in Nepal</h2>
        </div>
        <div className="space-y-3">
          {trends.slice(0, 3).map((trend, idx) => (
            <div key={idx} className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-[#4B0082]">{trend.tag}</p>
                <p className="text-sm text-gray-600 flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {trend.location} • {trend.posts}
                </p>
              </div>
              <button className="text-sm text-[#DC143C] font-medium hover:underline">View</button>
            </div>
          ))}
        </div>
      </div>

      {/* Explore Grid */}
      <div className={`grid ${isDesktop ? "grid-cols-4 gap-2" : "grid-cols-3 gap-1"} p-1`}>
        {explorePosts.map((post) => (
          <div key={post.id} className="relative aspect-square group cursor-pointer overflow-hidden">
            <ImageWithFallback
              src={post.image}
              alt="Explore post"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white font-semibold flex items-center gap-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                {post.likes.toLocaleString()}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Location Based Explore */}
      <div className="p-4 bg-white border-t border-gray-200">
        <h3 className="font-semibold mb-3">Explore by Location</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="relative h-32 rounded-xl overflow-hidden group cursor-pointer">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1576617578919-7fa5f8b4b508?w=400&h=300&fit=crop"
              alt="Kathmandu"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3">
              <div className="text-white">
                <p className="font-semibold">Kathmandu</p>
                <p className="text-sm opacity-90">काठमाडौं</p>
              </div>
            </div>
          </div>
          <div className="relative h-32 rounded-xl overflow-hidden group cursor-pointer">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1609947016891-f86e68963800?w=400&h=300&fit=crop"
              alt="Pokhara"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3">
              <div className="text-white">
                <p className="font-semibold">Pokhara</p>
                <p className="text-sm opacity-90">पोखरा</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
