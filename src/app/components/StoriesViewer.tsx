import { useState } from "react";
import { X, Volume2, VolumeX, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const stories = [
  {
    id: 1,
    user: {
      name: "Anjali Thapa",
      username: "anjali_travels",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
    },
    media: "https://images.unsplash.com/photo-1609947016891-f86e68963800?w=1080&h=1920&fit=crop",
    type: "image",
    caption: "सूर्योदय पोखरामा ✨",
    timeAgo: "2h",
  },
  {
    id: 2,
    user: {
      name: "Ramesh Gautam",
      username: "ramesh_ktm",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    },
    media: "https://images.unsplash.com/photo-1605764803170-c20b43be4d00?w=1080&h=1920&fit=crop",
    type: "image",
    caption: "Momo time! 🥟",
    timeAgo: "5h",
  },
  {
    id: 3,
    user: {
      name: "Sita Karki",
      username: "sita.art",
      avatar: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=150&h=150&fit=crop",
    },
    media: "https://images.unsplash.com/photo-1665394183024-7a95b156d427?w=1080&h=1920&fit=crop",
    type: "video",
    caption: "स्वयम्भूनाथ temple vibes 🙏",
    timeAgo: "8h",
  },
];

interface StoriesViewerProps {
  onClose: () => void;
  lowDataMode?: boolean;
}

export default function StoriesViewer({ onClose, lowDataMode = false }: StoriesViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [muted, setMuted] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const currentStory = stories[currentIndex];
  const isVideo = currentStory.type === "video";

  const goToNext = () => {
    if (currentIndex < stories.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setVideoLoaded(false);
    } else {
      onClose();
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setVideoLoaded(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      {/* Story Content */}
      <div className="relative w-full h-full max-w-md mx-auto">
        {/* Progress Bars */}
        <div className="absolute top-0 left-0 right-0 z-20 flex gap-1 p-2">
          {stories.map((_, idx) => (
            <div key={idx} className="flex-1 h-0.5 bg-white/30 rounded-full overflow-hidden">
              <div
                className={`h-full bg-white transition-all duration-300 ${
                  idx < currentIndex ? "w-full" : idx === currentIndex ? "w-1/2" : "w-0"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Header */}
        <div className="absolute top-4 left-0 right-0 z-20 px-4 mt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ImageWithFallback
                src={currentStory.user.avatar}
                alt={currentStory.user.name}
                className="w-10 h-10 rounded-full object-cover ring-2 ring-white"
              />
              <div>
                <p className="font-semibold text-white text-sm">{currentStory.user.name}</p>
                <p className="text-xs text-white/80">{currentStory.timeAgo} ago</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {isVideo && (
                <button
                  onClick={() => setMuted(!muted)}
                  className="p-2 bg-black/30 backdrop-blur-sm rounded-full hover:bg-black/50 transition-colors"
                >
                  {muted ? <VolumeX className="w-5 h-5 text-white" /> : <Volume2 className="w-5 h-5 text-white" />}
                </button>
              )}
              <button
                onClick={onClose}
                className="p-2 bg-black/30 backdrop-blur-sm rounded-full hover:bg-black/50 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Media */}
        <div className="w-full h-full flex items-center justify-center">
          {isVideo ? (
            lowDataMode && !videoLoaded ? (
              <div className="w-full h-full bg-gray-900 flex flex-col items-center justify-center gap-4">
                <ImageWithFallback
                  src={currentStory.media}
                  alt="Video thumbnail"
                  className="w-full h-full object-cover opacity-50"
                />
                <button
                  onClick={() => setVideoLoaded(true)}
                  className="absolute px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  Tap to load video
                </button>
              </div>
            ) : (
              <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-sm">Loading video...</p>
                  </div>
                </div>
              </div>
            )
          ) : (
            <ImageWithFallback
              src={currentStory.media}
              alt="Story"
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Caption */}
        {currentStory.caption && (
          <div className="absolute bottom-20 left-0 right-0 px-6 z-20">
            <div className="bg-black/40 backdrop-blur-md rounded-2xl px-4 py-3">
              <p className="text-white text-sm">{currentStory.caption}</p>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          disabled={currentIndex === 0}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/30 backdrop-blur-sm rounded-full hover:bg-black/50 transition-colors disabled:opacity-0 z-20"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/30 backdrop-blur-sm rounded-full hover:bg-black/50 transition-colors z-20"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Tap zones for mobile */}
        <div className="absolute inset-0 flex z-10">
          <div className="w-1/2 h-full" onClick={goToPrevious} />
          <div className="w-1/2 h-full" onClick={goToNext} />
        </div>
      </div>
    </div>
  );
}
