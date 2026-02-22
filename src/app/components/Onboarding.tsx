import { useState } from "react";
import { Check } from "lucide-react";

export default function Onboarding({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(1);
  const [language, setLanguage] = useState<"en" | "ne">("en");
  const [lowDataMode, setLowDataMode] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Step 1: Language Selection */}
        {step === 1 && (
          <div className="space-y-8 animate-in fade-in duration-500">
            {/* Logo/Illustration */}
            <div className="text-center space-y-4">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-[#DC143C] to-[#4B0082] rounded-3xl flex items-center justify-center">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                  <path d="M32 8L40 24L56 28L44 40L48 56L32 48L16 56L20 40L8 28L24 24L32 8Z" fill="white" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold">नमस्ते! Welcome</h1>
              <p className="text-gray-600">Choose your language</p>
            </div>

            {/* Language Options */}
            <div className="space-y-3">
              <button
                onClick={() => setLanguage("ne")}
                className={`w-full p-4 rounded-xl border-2 transition-all flex items-center justify-between ${
                  language === "ne"
                    ? "border-[#DC143C] bg-red-50"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <span className="text-lg font-medium">नेपाली (Nepali)</span>
                {language === "ne" && <Check className="w-6 h-6 text-[#DC143C]" />}
              </button>

              <button
                onClick={() => setLanguage("en")}
                className={`w-full p-4 rounded-xl border-2 transition-all flex items-center justify-between ${
                  language === "en"
                    ? "border-[#DC143C] bg-red-50"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <span className="text-lg font-medium">English</span>
                {language === "en" && <Check className="w-6 h-6 text-[#DC143C]" />}
              </button>
            </div>

            <button
              onClick={() => setStep(2)}
              className="w-full py-4 bg-[#DC143C] text-white rounded-xl font-semibold hover:bg-[#B8112E] transition-colors"
            >
              Continue
            </button>
          </div>
        )}

        {/* Step 2: Low Data Mode */}
        {step === 2 && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="text-center space-y-4">
              <div className="w-24 h-24 mx-auto bg-blue-100 rounded-2xl flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="3" fill="#4B0082" />
                  <circle cx="24" cy="24" r="8" stroke="#4B0082" strokeWidth="2" fill="none" />
                  <circle cx="24" cy="24" r="13" stroke="#4B0082" strokeWidth="2" fill="none" strokeDasharray="4 4" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold">
                {language === "ne" ? "डाटा सेटिङ्ग" : "Data Settings"}
              </h2>
              <p className="text-gray-600">
                {language === "ne"
                  ? "कम डाटा मोड तस्विरहरू पहिले लोड गर्दछ र भिडियोहरू बचत गर्दछ"
                  : "Low Data Mode loads images first and saves videos"}
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 space-y-4">
              <div className="flex items-start gap-4">
                <input
                  type="checkbox"
                  id="lowdata"
                  checked={lowDataMode}
                  onChange={(e) => setLowDataMode(e.target.checked)}
                  className="w-6 h-6 mt-1 accent-[#DC143C]"
                />
                <div className="flex-1">
                  <label htmlFor="lowdata" className="font-semibold text-lg cursor-pointer">
                    {language === "ne" ? "कम डाटा मोड सक्षम गर्नुहोस्" : "Enable Low Data Mode"}
                  </label>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• {language === "ne" ? "तस्विरहरू पहिले लोड हुन्छ" : "Images load first"}</li>
                    <li>
                      • {language === "ne" ? "भिडियोहरू ट्याप गरेर मात्र चल्छन्" : "Videos play only when tapped"}
                    </li>
                    <li>
                      •{" "}
                      {language === "ne"
                        ? "अफलाइन सामग्री बचत गर्न सकिन्छ"
                        : "Save content for offline viewing"}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <button
              onClick={() => setStep(3)}
              className="w-full py-4 bg-[#DC143C] text-white rounded-xl font-semibold hover:bg-[#B8112E] transition-colors"
            >
              {language === "ne" ? "जारी राख्नुहोस्" : "Continue"}
            </button>
          </div>
        )}

        {/* Step 3: Account Setup */}
        {step === 3 && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold">
                {language === "ne" ? "खाता बनाउनुहोस्" : "Create Account"}
              </h2>
              <p className="text-gray-600">
                {language === "ne" ? "तपाईंको विवरण प्रविष्ट गर्नुहोस्" : "Enter your details"}
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  {language === "ne" ? "फोन नम्बर" : "Phone Number"}
                </label>
                <input
                  type="tel"
                  placeholder="+977 98XXXXXXXX"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#DC143C] transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {language === "ne" ? "प्रयोगकर्ता नाम" : "Username"}
                </label>
                <input
                  type="text"
                  placeholder="@username"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#DC143C] transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {language === "ne" ? "खाताको प्रकार" : "Account Type"}
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button className="p-4 border-2 border-[#DC143C] bg-red-50 rounded-xl text-center">
                    <p className="font-semibold">{language === "ne" ? "व्यक्तिगत" : "Personal"}</p>
                  </button>
                  <button className="p-4 border-2 border-gray-200 bg-white rounded-xl text-center hover:border-gray-300">
                    <p className="font-semibold">{language === "ne" ? "व्यवसाय" : "Business"}</p>
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={onComplete}
              className="w-full py-4 bg-[#DC143C] text-white rounded-xl font-semibold hover:bg-[#B8112E] transition-colors"
            >
              {language === "ne" ? "सुरू गरौं" : "Get Started"}
            </button>

            <p className="text-xs text-center text-gray-500">
              {language === "ne"
                ? "जारी राख्दा तपाईं हाम्रो सेवा सर्तहरू र गोपनीयता नीतिमा सहमत हुनुहुन्छ"
                : "By continuing, you agree to our Terms of Service and Privacy Policy"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
