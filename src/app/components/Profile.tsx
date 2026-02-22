import { Settings, Grid3x3, Bookmark, Tag, MapPin, Link as LinkIcon, Store, Phone, DollarSign } from "lucide-react";
import { useState } from "react"; // Added this import
import { ImageWithFallback } from "./figma/ImageWithFallback";

const highlights = [
  { id: 1, title: "Festivals", titleNe: "चाडपर्व", cover: "https://images.unsplash.com/photo-1761124739933-009df5603fbf?w=150&h=150&fit=crop" },
  { id: 2, title: "Trips", titleNe: "यात्रा", cover: "https://images.unsplash.com/photo-1609947016891-f86e68963800?w=150&h=150&fit=crop" },
  { id: 3, title: "Food", titleNe: "खाना", cover: "https://images.unsplash.com/photo-1605764803170-c20b43be4d00?w=150&h=150&fit=crop" },
];

const posts = [
  { id: 1, image: "https://images.unsplash.com/photo-1609947016891-f86e68963800?w=400&h=400&fit=crop" },
  { id: 2, image: "https://images.unsplash.com/photo-1605764803170-c20b43be4d00?w=400&h=400&fit=crop" },
  { id: 3, image: "https://images.unsplash.com/photo-1665394183024-7a95b156d427?w=400&h=400&fit=crop" },
  { id: 4, image: "https://images.unsplash.com/photo-1511216428748-9b1ef3cc0c7e?w=400&h=400&fit=crop" },
  { id: 5, image: "https://images.unsplash.com/photo-1576617578919-7fa5f8b4b508?w=400&h=400&fit=crop" },
  { id: 6, image: "https://images.unsplash.com/photo-1761124739933-009df5603fbf?w=400&h=400&fit=crop" },
];

const businessCatalog = [
  {
    id: 1,
    name: "Traditional Momo Platter",
    nameNe: "परम्परागत मोमो",
    price: "NPR 250",
    image: "https://images.unsplash.com/photo-1605764803170-c20b43be4d00?w=400&h=400&fit=crop",
    available: true,
  },
  {
    id: 2,
    name: "Thakali Khana Set",
    nameNe: "ठकाली खाना सेट",
    price: "NPR 450",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=400&fit=crop",
    available: true,
  },
];

interface ProfileProps {
  isBusiness?: boolean;
  isDesktop?: boolean;
}

export default function Profile({ isBusiness = false, isDesktop = false }: ProfileProps) {
  const [activeTab, setActiveTab] = useState<"posts" | "saved" | "tagged" | "catalog">("posts");

  return (
    <div className={isDesktop ? "max-w-4xl mx-auto" : "w-full"}>
      {/* Profile Header */}
      <div className="bg-white border-b border-gray-200 p-4 md:p-6">
        <div className="flex items-start gap-4 md:gap-8">
          {/* Avatar */}
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop"
            alt="Profile"
            className="w-20 h-20 md:w-32 md:h-32 rounded-full object-cover ring-4 ring-[#DC143C] ring-offset-2"
          />

          {/* Stats & Actions */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-3">
              <h1 className="text-xl md:text-2xl font-bold truncate">Anjali Thapa</h1>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Settings className="w-5 h-5" />
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-6 mb-4">
              <div className="text-center">
                <p className="font-bold text-lg">248</p>
                <p className="text-sm text-gray-600">Posts</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-lg">12.5K</p>
                <p className="text-sm text-gray-600">Followers</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-lg">534</p>
                <p className="text-sm text-gray-600">Following</p>
              </div>
            </div>

            {/* Action Buttons */}
            {!isBusiness ? (
              <div className="flex gap-2">
                <button className="flex-1 px-4 py-2 bg-[#DC143C] text-white rounded-lg font-medium hover:bg-[#B8112E] transition-colors text-sm">
                  Edit Profile
                </button>
                <button className="flex-1 px-4 py-2 bg-gray-100 rounded-lg font-medium hover:bg-gray-200 transition-colors text-sm">
                  Share Profile
                </button>
              </div>
            ) : (
              <div className="flex gap-2">
                <button className="flex-1 px-4 py-2 bg-[#4B0082] text-white rounded-lg font-medium hover:bg-[#3D006A] transition-colors text-sm flex items-center justify-center gap-2">
                  <Store className="w-4 h-4" />
                  Edit Catalog
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Bio */}
        <div className="mt-4 space-y-2">
          <p className="font-semibold">Travel & Nature 🏔️ | फोटोग्राफर</p>
          <p className="text-sm text-gray-700">
            Exploring Nepal one trail at a time 🇳🇵
            <br />
            नेपालको सुन्दरता साझा गर्दै
          </p>
          <div className="flex flex-col gap-1 text-sm">
            <p className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-4 h-4" />
              Pokhara, Nepal • पोखरा
            </p>
            <a href="#" className="flex items-center gap-2 text-[#4B0082] hover:underline">
              <LinkIcon className="w-4 h-4" />
              anjalitravels.com
            </a>
          </div>
        </div>

        {/* Business Info */}
        {isBusiness && (
          <div className="mt-4 pt-4 border-t border-gray-200 space-y-3">
            <div className="flex items-center gap-2">
              <div className="px-3 py-1 bg-[#D4A574] text-white rounded-full text-xs font-medium">
                Local Business
              </div>
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <span>★★★★☆</span>
                <span>(234 reviews)</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors text-sm flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                Call
              </button>
              <button className="px-4 py-2 bg-[#4B0082] text-white rounded-lg font-medium hover:bg-[#3D006A] transition-colors text-sm flex items-center justify-center gap-2">
                <DollarSign className="w-4 h-4" />
                Order
              </button>
            </div>

            <div className="text-sm text-gray-600">
              <p className="font-medium">Delivery area:</p>
              <p>Kathmandu Valley • काठमाडौं उपत्यका</p>
            </div>

            <div className="flex flex-wrap gap-2">
              <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-xs font-medium">
                eSewa
              </button>
              <button className="px-3 py-1 bg-purple-100 text-purple-700 rounded-lg text-xs font-medium">
                Khalti
              </button>
              <button className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-medium">
                IME Pay
              </button>
            </div>
          </div>
        )}

        {/* Story Highlights */}
        <div className="mt-4 flex gap-4 overflow-x-auto pb-2">
          {highlights.map((highlight) => (
            <div key={highlight.id} className="flex flex-col items-center gap-1 flex-shrink-0">
              <div className="w-16 h-16 rounded-full ring-2 ring-gray-300 p-1">
                <ImageWithFallback
                  src={highlight.cover}
                  alt={highlight.title}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <p className="text-xs font-medium">{highlight.title}</p>
            </div>
          ))}
          <button className="flex flex-col items-center gap-1 flex-shrink-0">
            <div className="w-16 h-16 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400">
              +
            </div>
            <p className="text-xs text-gray-600">New</p>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200 flex">
        <button
          onClick={() => setActiveTab("posts")}
          className={`flex-1 py-3 flex items-center justify-center gap-2 border-b-2 transition-colors ${
            activeTab === "posts" ? "border-[#DC143C]" : "border-transparent text-gray-500"
          }`}
        >
          <Grid3x3 className="w-5 h-5" />
          <span className="text-sm font-medium hidden md:inline">Posts</span>
        </button>
        {isBusiness && (
          <button
            onClick={() => setActiveTab("catalog")}
            className={`flex-1 py-3 flex items-center justify-center gap-2 border-b-2 transition-colors ${
              activeTab === "catalog" ? "border-[#DC143C]" : "border-transparent text-gray-500"
            }`}
          >
            <Store className="w-5 h-5" />
            <span className="text-sm font-medium hidden md:inline">Catalog</span>
          </button>
        )}
        <button
          onClick={() => setActiveTab("saved")}
          className={`flex-1 py-3 flex items-center justify-center gap-2 border-b-2 transition-colors ${
            activeTab === "saved" ? "border-[#DC143C]" : "border-transparent text-gray-500"
          }`}
        >
          <Bookmark className="w-5 h-5" />
          <span className="text-sm font-medium hidden md:inline">Saved</span>
        </button>
        <button
          onClick={() => setActiveTab("tagged")}
          className={`flex-1 py-3 flex items-center justify-center gap-2 border-b-2 transition-colors ${
            activeTab === "tagged" ? "border-[#DC143C]" : "border-transparent text-gray-500"
          }`}
        >
          <Tag className="w-5 h-5" />
          <span className="text-sm font-medium hidden md:inline">Tagged</span>
        </button>
      </div>

      {/* Content Grid */}
      {activeTab === "posts" && (
        <div className="grid grid-cols-3 gap-1">
          {posts.map((post) => (
            <div key={post.id} className="aspect-square">
              <ImageWithFallback
                src={post.image}
                alt="Post"
                className="w-full h-full object-cover hover:opacity-90 transition-opacity cursor-pointer"
              />
            </div>
          ))}
        </div>
      )}

      {/* Business Catalog */}
      {activeTab === "catalog" && isBusiness && (
        <div className="p-4 space-y-4">
          {businessCatalog.map((item) => (
            <div key={item.id} className="flex gap-4 bg-white border border-gray-200 rounded-xl p-4">
              <ImageWithFallback
                src={item.image}
                alt={item.name}
                className="w-24 h-24 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.nameNe}</p>
                <p className="text-lg font-bold text-[#DC143C] mt-2">{item.price}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className={`text-xs px-2 py-1 rounded-full ${item.available ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"}`}>
                    {item.available ? "Available" : "Out of Stock"}
                  </span>
                </div>
              </div>
              <button className="px-4 py-2 bg-[#4B0082] text-white rounded-lg font-medium hover:bg-[#3D006A] transition-colors text-sm self-center">
                Order
              </button>
            </div>
          ))}
        </div>
      )}

      {activeTab === "saved" && (
        <div className="p-8 text-center text-gray-500">
          <Bookmark className="w-16 h-16 mx-auto mb-4 opacity-50" />
          <p>No saved posts yet</p>
        </div>
      )}

      {activeTab === "tagged" && (
        <div className="p-8 text-center text-gray-500">
          <Tag className="w-16 h-16 mx-auto mb-4 opacity-50" />
          <p>No tagged posts yet</p>
        </div>
      )}
    </div>
  );
}