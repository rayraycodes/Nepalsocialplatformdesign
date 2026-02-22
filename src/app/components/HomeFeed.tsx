import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, MapPin, Wifi, WifiOff } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const mockPosts = [
  {
    id: 1,
    user: {
      name: "Anjali Thapa",
      username: "anjali_travels",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
    },
    image: "https://images.unsplash.com/photo-1609947016891-f86e68963800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    caption: "सूर्योदय पोखरामा ✨ Sunrise at Phewa Lake never gets old",
    location: "Phewa Lake, पोखरा",
    likes: 2847,
    comments: 156,
    timeAgo: "3h",
    hashtags: ["#Pokhara", "#पोखरा", "#Nepal", "#Sunrise"],
  },
  {
    id: 2,
    user: {
      name: "Ramesh Gautam",
      username: "ramesh_ktm",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    },
    image: "https://images.unsplash.com/photo-1605764803170-c20b43be4d00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    caption: "Best momo in town! काठमाडौंको स्वाद 🥟",
    location: "Thamel, Kathmandu",
    likes: 1243,
    comments: 89,
    timeAgo: "5h",
    hashtags: ["#Momo", "#FoodieNepal", "#Kathmandu"],
  },
  {
    id: 3,
    user: {
      name: "Sita Karki",
      username: "sita.art",
      avatar: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=150&h=150&fit=crop",
    },
    image: "https://images.unsplash.com/photo-1665394183024-7a95b156d427?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    caption: "स्वयम्भूनाथमा शान्ति 🙏 Peace in every corner of this temple",
    location: "Swayambhunath, काठमाडौं",
    likes: 3521,
    comments: 203,
    timeAgo: "8h",
    hashtags: ["#Swayambhu", "#Temple", "#NepalCulture"],
  },
  {
    id: 4,
    user: {
      name: "Bikash Shrestha",
      username: "bikash.mountain",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
    },
    image: "https://images.unsplash.com/photo-1511216428748-9b1ef3cc0c7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    caption: "Trek of a lifetime! हिमाल यात्रा 🏔️ #EverestBaseCamp",
    location: "Everest Base Camp",
    likes: 5892,
    comments: 421,
    timeAgo: "12h",
    hashtags: ["#Everest", "#Himalayas", "#Trekking"],
  },
];

interface HomeFeedProps {
  lowDataMode?: boolean;
  isDesktop?: boolean;
}

export default function HomeFeed({ lowDataMode = false, isDesktop = false }: HomeFeedProps) {
  return (
    <div className={isDesktop ? "max-w-2xl mx-auto" : "w-full"}>
      {/* Low Data Mode Indicator */}
      {lowDataMode && (
        <div className="sticky top-0 z-10 bg-blue-50 border-b border-blue-200 px-4 py-2 flex items-center justify-center gap-2 text-sm">
          <WifiOff className="w-4 h-4 text-blue-600" />
          <span className="text-blue-900">Low Data Mode • Tap videos to play</span>
        </div>
      )}

      {/* Posts */}
      <div className="divide-y divide-gray-100">
        {mockPosts.map((post) => (
          <article key={post.id} className="bg-white pb-4">
            {/* Post Header */}
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-3">
                <ImageWithFallback
                  src={post.user.avatar}
                  alt={post.user.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-[#DC143C] ring-offset-2"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm truncate">{post.user.name}</p>
                  {post.location && (
                    <p className="text-xs text-gray-600 flex items-center gap-1 truncate">
                      <MapPin className="w-3 h-3 flex-shrink-0" />
                      {post.location}
                    </p>
                  )}
                </div>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>

            {/* Post Image */}
            <div className="relative bg-gray-100">
              <ImageWithFallback
                src={post.image}
                alt={post.caption}
                className="w-full aspect-square object-cover"
              />
              {lowDataMode && (
                <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-lg text-xs text-white flex items-center gap-1">
                  <Wifi className="w-3 h-3" />
                  Tap to load HD
                </div>
              )}
            </div>

            {/* Post Actions */}
            <div className="px-4 pt-3 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button className="hover:scale-110 transition-transform active:scale-95">
                    <Heart className="w-6 h-6" />
                  </button>
                  <button className="hover:scale-110 transition-transform active:scale-95">
                    <MessageCircle className="w-6 h-6" />
                  </button>
                  <button className="hover:scale-110 transition-transform active:scale-95">
                    <Send className="w-6 h-6" />
                  </button>
                </div>
                <button className="hover:scale-110 transition-transform active:scale-95">
                  <Bookmark className="w-6 h-6" />
                </button>
              </div>

              {/* Likes */}
              <div>
                <p className="font-semibold text-sm">{post.likes.toLocaleString()} likes</p>
              </div>

              {/* Caption */}
              <div className="space-y-1">
                <p className="text-sm">
                  <span className="font-semibold mr-2">{post.user.username}</span>
                  {post.caption}
                </p>
                {post.hashtags.length > 0 && (
                  <p className="text-sm text-[#4B0082]">
                    {post.hashtags.join(" ")}
                  </p>
                )}
              </div>

              {/* Comments Preview */}
              {post.comments > 0 && (
                <button className="text-sm text-gray-500 hover:text-gray-700">
                  View all {post.comments} comments
                </button>
              )}

              {/* Time */}
              <p className="text-xs text-gray-400 uppercase">{post.timeAgo} ago</p>
            </div>
          </article>
        ))}
      </div>

      {/* Loading More Indicator */}
      <div className="p-8 text-center">
        <div className="inline-flex items-center gap-2 text-sm text-gray-500">
          <div className="w-5 h-5 border-2 border-gray-300 border-t-[#DC143C] rounded-full animate-spin"></div>
          Loading more posts...
        </div>
      </div>
    </div>
  );
}
