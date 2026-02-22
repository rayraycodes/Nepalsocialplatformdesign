import { useState } from "react";
import { X, ChevronLeft, Image as ImageIcon, Video, MapPin, Users, Smile, Hash, Upload, Wifi } from "lucide-react";

const audiences = [
  { id: "public", label: "Public", labelNe: "सार्वजनिक", icon: "🌍" },
  { id: "friends", label: "Friends", labelNe: "साथीहरू", icon: "👥" },
  { id: "family", label: "Family", labelNe: "परिवार", icon: "👨‍👩‍👧" },
  { id: "close", label: "Close Circle", labelNe: "नजिकका साथी", icon: "💚" },
];

const nepalLocations = [
  { name: "Thamel, Kathmandu", nameNe: "ठमेल, काठमाडौं" },
  { name: "Phewa Lake, Pokhara", nameNe: "फेवा ताल, पोखरा" },
  { name: "Swayambhunath, Kathmandu", nameNe: "स्वयम्भूनाथ, काठमाडौं" },
  { name: "Boudhanath Stupa", nameNe: "बौद्धनाथ स्तूप" },
  { name: "Patan Durbar Square", nameNe: "पाटन दरबार स्क्वायर" },
];

const suggestedHashtags = ["#Nepal", "#Kathmandu", "#काठमाडौं", "#Travel", "#Food", "#Festival", "#Dashain"];

interface CreatePostProps {
  onClose: () => void;
  lowDataMode?: boolean;
}

export default function CreatePost({ onClose, lowDataMode = false }: CreatePostProps) {
  const [step, setStep] = useState<"type" | "upload" | "edit">("type");
  const [mediaType, setMediaType] = useState<"photo" | "video" | null>(null);
  const [caption, setCaption] = useState("");
  const [location, setLocation] = useState("");
  const [audience, setAudience] = useState("public");
  const [showLocationPicker, setShowLocationPicker] = useState(false);
  const [showAudiencePicker, setShowAudiencePicker] = useState(false);
  const [uploading, setUploading] = useState(false);

  const handlePost = () => {
    setUploading(true);
    // Simulate upload
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
          <button onClick={step === "type" ? onClose : () => setStep("type")} className="p-2 hover:bg-gray-100 rounded-full">
            {step === "type" ? <X className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
          </button>
          <h2 className="font-semibold">Create Post</h2>
          {step === "edit" && (
            <button
              onClick={handlePost}
              disabled={uploading}
              className="px-4 py-2 bg-[#DC143C] text-white rounded-lg font-medium hover:bg-[#B8112E] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {uploading ? "Posting..." : "Post"}
            </button>
          )}
          {step !== "edit" && <div className="w-16"></div>}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Step 1: Choose Type */}
          {step === "type" && (
            <div className="p-6 space-y-4">
              <button
                onClick={() => {
                  setMediaType("photo");
                  setStep("edit");
                }}
                className="w-full p-6 border-2 border-gray-200 rounded-2xl hover:border-[#DC143C] hover:bg-red-50 transition-all flex items-center gap-4"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                  <ImageIcon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-lg">Photo</p>
                  <p className="text-sm text-gray-600">Share a photo</p>
                </div>
              </button>

              <button
                onClick={() => {
                  setMediaType("video");
                  setStep("edit");
                }}
                className="w-full p-6 border-2 border-gray-200 rounded-2xl hover:border-[#DC143C] hover:bg-red-50 transition-all flex items-center gap-4"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center">
                  <Video className="w-8 h-8 text-purple-600" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-lg">Video</p>
                  <p className="text-sm text-gray-600">Share a short video</p>
                </div>
              </button>

              {lowDataMode && (
                <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-200 flex items-start gap-3">
                  <Wifi className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium text-blue-900">Low Data Mode Active</p>
                    <p className="text-blue-700 mt-1">Your post will be queued and uploaded when you have a better connection.</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 2: Edit & Caption */}
          {step === "edit" && (
            <div className="space-y-4">
              {/* Media Preview */}
              <div className="relative bg-gray-100 aspect-square">
                <div className="absolute inset-0 flex items-center justify-center">
                  {mediaType === "photo" ? (
                    <ImageIcon className="w-16 h-16 text-gray-400" />
                  ) : (
                    <Video className="w-16 h-16 text-gray-400" />
                  )}
                </div>
                <div className="absolute top-4 right-4">
                  <button className="px-3 py-2 bg-white rounded-lg text-sm font-medium shadow-lg hover:bg-gray-50">
                    Choose {mediaType}
                  </button>
                </div>
              </div>

              <div className="px-4 space-y-4">
                {/* Caption */}
                <div>
                  <textarea
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    placeholder="Write a caption... शेयर गर्नुहोस्"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#DC143C] resize-none"
                    rows={4}
                  />
                  <div className="flex items-center gap-2 mt-2">
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <Smile className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <Hash className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* Suggested Hashtags */}
                <div>
                  <p className="text-sm font-medium mb-2 text-gray-700">Suggested hashtags:</p>
                  <div className="flex flex-wrap gap-2">
                    {suggestedHashtags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setCaption(caption + " " + tag)}
                        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-[#4B0082] transition-colors"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Location */}
                <div className="relative">
                  <button
                    onClick={() => setShowLocationPicker(!showLocationPicker)}
                    className="w-full flex items-center gap-3 p-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <MapPin className="w-5 h-5 text-gray-600" />
                    <span className="text-sm text-gray-700">
                      {location || "Add location"}
                    </span>
                  </button>
                  
                  {showLocationPicker && (
                    <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-10 max-h-48 overflow-y-auto">
                      {nepalLocations.map((loc) => (
                        <button
                          key={loc.name}
                          onClick={() => {
                            setLocation(loc.name);
                            setShowLocationPicker(false);
                          }}
                          className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0"
                        >
                          <p className="font-medium text-sm">{loc.name}</p>
                          <p className="text-xs text-gray-600">{loc.nameNe}</p>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Audience Selector */}
                <div className="relative">
                  <button
                    onClick={() => setShowAudiencePicker(!showAudiencePicker)}
                    className="w-full flex items-center gap-3 p-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <Users className="w-5 h-5 text-gray-600" />
                    <span className="text-sm text-gray-700">
                      {audiences.find((a) => a.id === audience)?.label || "Public"}
                    </span>
                  </button>
                  
                  {showAudiencePicker && (
                    <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-10">
                      {audiences.map((aud) => (
                        <button
                          key={aud.id}
                          onClick={() => {
                            setAudience(aud.id);
                            setShowAudiencePicker(false);
                          }}
                          className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0 flex items-center gap-3"
                        >
                          <span className="text-2xl">{aud.icon}</span>
                          <div>
                            <p className="font-medium text-sm">{aud.label}</p>
                            <p className="text-xs text-gray-600">{aud.labelNe}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Upload Queue Info */}
                {lowDataMode && (
                  <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-xl flex items-start gap-2">
                    <Upload className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-yellow-800">
                      Post will be queued and uploaded automatically when you have better connectivity.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Upload Progress */}
        {uploading && (
          <div className="border-t border-gray-200 p-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border-2 border-[#DC143C] border-t-transparent rounded-full animate-spin"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Uploading post...</p>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className="bg-[#DC143C] h-2 rounded-full w-2/3 transition-all"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
