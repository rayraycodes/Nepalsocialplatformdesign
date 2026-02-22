import { ChevronRight, Globe, Shield, Bell, Eye, MessageSquare, UserX, Flag, HelpCircle, WifiOff, Languages } from "lucide-react";

export default function Settings() {
  return (
    <div className="max-w-2xl mx-auto bg-white min-h-screen">
      {/* Header */}
      <div className="border-b border-gray-200 p-4">
        <h1 className="text-2xl font-bold">Settings & Privacy</h1>
        <p className="text-sm text-gray-600 mt-1">सेटिङ्ग र गोपनीयता</p>
      </div>

      {/* Account Section */}
      <div className="p-4 space-y-1">
        <h2 className="text-xs font-semibold text-gray-500 uppercase px-3 mb-2">Account</h2>
        
        <SettingsItem
          icon={<Languages className="w-5 h-5" />}
          title="Language"
          subtitle="नेपाली / English"
          value="English"
        />
        
        <SettingsItem
          icon={<WifiOff className="w-5 h-5" />}
          title="Low Data Mode"
          subtitle="Save data usage"
          value="On"
          highlight
        />
        
        <SettingsItem
          icon={<Bell className="w-5 h-5" />}
          title="Notifications"
          subtitle="Manage push notifications"
        />
      </div>

      {/* Privacy & Safety Section */}
      <div className="p-4 space-y-1 border-t border-gray-200">
        <h2 className="text-xs font-semibold text-gray-500 uppercase px-3 mb-2">Privacy & Safety</h2>
        
        <SettingsItem
          icon={<Shield className="w-5 h-5" />}
          title="Account Privacy"
          subtitle="Control who can see your content"
        />
        
        <SettingsItem
          icon={<Eye className="w-5 h-5" />}
          title="Audience Defaults"
          subtitle="Public • Set default for new posts"
        />
        
        <SettingsItem
          icon={<MessageSquare className="w-5 h-5" />}
          title="Comment Filters"
          subtitle="Hide offensive comments automatically"
        />
        
        <SettingsItem
          icon={<UserX className="w-5 h-5" />}
          title="Blocked Accounts"
          subtitle="Manage blocked users"
        />
        
        <SettingsItem
          icon={<Globe className="w-5 h-5" />}
          title="Location Settings"
          subtitle="Control location sharing"
        />
      </div>

      {/* DM Controls */}
      <div className="p-4 space-y-1 border-t border-gray-200">
        <h2 className="text-xs font-semibold text-gray-500 uppercase px-3 mb-2">Messages</h2>
        
        <SettingsItem
          icon={<MessageSquare className="w-5 h-5" />}
          title="Who Can Message You"
          subtitle="Everyone"
        />
        
        <SettingsItem
          icon={<Shield className="w-5 h-5" />}
          title="Message Requests"
          subtitle="Filter messages from non-followers"
        />
      </div>

      {/* Safety & Reporting */}
      <div className="p-4 space-y-1 border-t border-gray-200">
        <h2 className="text-xs font-semibold text-gray-500 uppercase px-3 mb-2">Safety</h2>
        
        <SettingsItem
          icon={<Flag className="w-5 h-5 text-red-600" />}
          title="Report a Problem"
          subtitle="Report scams, harassment, or impersonation"
        />
        
        <SettingsItem
          icon={<HelpCircle className="w-5 h-5" />}
          title="Safety Resources"
          subtitle="Learn about staying safe"
        />
      </div>

      {/* Trust Indicators */}
      <div className="p-4 border-t border-gray-200 bg-blue-50">
        <div className="flex items-start gap-3">
          <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <p className="font-semibold text-blue-900">Community Trust</p>
            <p className="text-sm text-blue-800 mt-1">
              Your safety matters. Report any suspicious activity, scams, or impersonation immediately.
              हाम्रो समुदायको सुरक्षा सबैको जिम्मेवारी हो।
            </p>
            <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="p-4 border-t border-gray-200">
        <p className="text-xs text-center text-gray-500">
          Version 1.0.0 • Made with ❤️ for Nepal
        </p>
      </div>
    </div>
  );
}

interface SettingsItemProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  value?: string;
  highlight?: boolean;
}

function SettingsItem({ icon, title, subtitle, value, highlight }: SettingsItemProps) {
  return (
    <button className={`w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors ${highlight ? "bg-blue-50" : ""}`}>
      <div className={`${highlight ? "text-blue-600" : "text-gray-600"}`}>
        {icon}
      </div>
      <div className="flex-1 text-left min-w-0">
        <p className={`font-medium text-sm ${highlight ? "text-blue-900" : ""}`}>{title}</p>
        <p className="text-xs text-gray-600 truncate">{subtitle}</p>
      </div>
      {value && (
        <span className="text-sm text-gray-500 flex-shrink-0">{value}</span>
      )}
      <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
    </button>
  );
}
