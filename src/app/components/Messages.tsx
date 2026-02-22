import { Search, Send, Phone, MoreVertical, Circle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const conversations = [
  {
    id: 1,
    user: {
      name: "Ramesh Gautam",
      username: "ramesh_ktm",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    },
    lastMessage: "Thank you! मोमो धेरै राम्रो थियो",
    time: "2m",
    unread: 2,
    online: true,
  },
  {
    id: 2,
    user: {
      name: "Sita Karki",
      username: "sita.art",
      avatar: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=150&h=150&fit=crop",
    },
    lastMessage: "Can you share the location?",
    time: "1h",
    unread: 0,
    online: false,
  },
  {
    id: 3,
    user: {
      name: "Bikash Shrestha",
      username: "bikash.mountain",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
    },
    lastMessage: "Great photos from the trek! 📸",
    time: "3h",
    unread: 0,
    online: true,
  },
];

const activeChat = {
  user: {
    name: "Ramesh Gautam",
    username: "ramesh_ktm",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
  },
  messages: [
    {
      id: 1,
      text: "Hi! Is this available for delivery?",
      sender: "them",
      time: "10:23 AM",
    },
    {
      id: 2,
      text: "Yes! We deliver to Kathmandu Valley. हो, हामी काठमाडौं उपत्यकामा डेलिभर गर्छौं",
      sender: "me",
      time: "10:25 AM",
    },
    {
      id: 3,
      text: "Perfect! Can I order the Traditional Momo Platter?",
      sender: "them",
      time: "10:26 AM",
    },
    {
      id: 4,
      text: "Of course! Price: NPR 250. Would you like to place an order?",
      sender: "me",
      time: "10:27 AM",
      quickReplies: ["Price", "Available", "Delivery", "Location"],
    },
  ],
};

interface MessagesProps {
  isDesktop?: boolean;
  isBusiness?: boolean;
}

export default function Messages({ isDesktop = false, isBusiness = false }: MessagesProps) {
  return (
    <div className={`flex h-screen ${isDesktop ? "max-w-6xl mx-auto" : "w-full"}`}>
      {/* Conversations List */}
      <div className={`${isDesktop ? "w-96 border-r" : "w-full"} border-gray-200 bg-white flex flex-col`}>
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-xl font-bold mb-3">Messages</h1>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search messages..."
              className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DC143C] transition-all"
            />
          </div>
        </div>

        {/* Conversations */}
        <div className="flex-1 overflow-y-auto">
          {conversations.map((conv) => (
            <button
              key={conv.id}
              className="w-full p-4 flex items-center gap-3 hover:bg-gray-50 transition-colors border-b border-gray-100"
            >
              <div className="relative flex-shrink-0">
                <ImageWithFallback
                  src={conv.user.avatar}
                  alt={conv.user.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                {conv.online && (
                  <Circle className="absolute bottom-0 right-0 w-4 h-4 fill-green-500 text-green-500 ring-2 ring-white" />
                )}
              </div>
              <div className="flex-1 min-w-0 text-left">
                <div className="flex items-center justify-between mb-1">
                  <p className="font-semibold text-sm truncate">{conv.user.name}</p>
                  <span className="text-xs text-gray-500">{conv.time}</span>
                </div>
                <p className="text-sm text-gray-600 truncate">{conv.lastMessage}</p>
              </div>
              {conv.unread > 0 && (
                <div className="flex-shrink-0 w-5 h-5 bg-[#DC143C] text-white rounded-full flex items-center justify-center text-xs font-medium">
                  {conv.unread}
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Chat View (Desktop Only) */}
      {isDesktop && (
        <div className="flex-1 flex flex-col bg-gray-50">
          {/* Chat Header */}
          <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ImageWithFallback
                src={activeChat.user.avatar}
                alt={activeChat.user.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">{activeChat.user.name}</p>
                <p className="text-xs text-green-600">Active now</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Phone className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {activeChat.messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"}`}
              >
                <div className={`max-w-md ${message.sender === "me" ? "items-end" : "items-start"} flex flex-col gap-1`}>
                  <div
                    className={`px-4 py-2 rounded-2xl ${
                      message.sender === "me"
                        ? "bg-[#DC143C] text-white"
                        : "bg-white border border-gray-200"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                  <span className="text-xs text-gray-500 px-2">{message.time}</span>
                  
                  {/* Quick Reply Chips for Business */}
                  {isBusiness && message.quickReplies && message.sender === "me" && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {message.quickReplies.map((reply) => (
                        <button
                          key={reply}
                          className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium hover:bg-gray-50 transition-colors"
                        >
                          {reply}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="bg-white border-t border-gray-200 p-4">
            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="Message... सन्देश लेख्नुहोस्"
                className="flex-1 px-4 py-3 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-[#DC143C] transition-all"
              />
              <button className="p-3 bg-[#DC143C] text-white rounded-full hover:bg-[#B8112E] transition-colors">
                <Send className="w-5 h-5" />
              </button>
            </div>
            
            {/* Business Quick Actions */}
            {isBusiness && (
              <div className="flex gap-2 mt-3">
                <button className="flex-1 px-3 py-2 bg-blue-50 text-blue-700 rounded-lg text-xs font-medium hover:bg-blue-100 transition-colors">
                  Send Price
                </button>
                <button className="flex-1 px-3 py-2 bg-green-50 text-green-700 rounded-lg text-xs font-medium hover:bg-green-100 transition-colors">
                  Check Availability
                </button>
                <button className="flex-1 px-3 py-2 bg-purple-50 text-purple-700 rounded-lg text-xs font-medium hover:bg-purple-100 transition-colors">
                  Share Location
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
