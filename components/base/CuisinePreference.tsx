"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Plane, Car, ArrowRight } from "lucide-react"

interface CuisinePreferencesProps {
  onBack: () => void;
  onNext: (data: { cuisinePreference: string; nightExperience: string }) => void;
}

export function CuisinePreferences({ onBack, onNext }: CuisinePreferencesProps) {
  const [cuisinePreference, setCuisinePreference] = useState<string>("")
  const [nightExperience, setNightExperience] = useState<string>("")

  const handleNext = () => {
    if (cuisinePreference && nightExperience) {
      onNext({ cuisinePreference, nightExperience })
    }
  }

  return (
    <div className="min-h-screen bg-[#fafafa]">
     

      {/* Progress Bar */}
      <div className="px-6 py-4 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="w-full bg-[#e5e5e5] rounded-full h-1">
                <div className="bg-[#2ec4d7] h-1 rounded-full" style={{ width: "100%" }}></div>
              </div>
            </div>
            <div className="ml-4 text-[#3f3f3f] font-medium">4/4</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center space-y-16">
          {/* Cuisine Preference Section */}
          <div className="space-y-12">
            <h1 className="text-4xl font-semibold text-[#111822]">What is your cuisine preference?</h1>

            <div className="flex justify-center space-x-24">
              <button
                onClick={() => setCuisinePreference("veg")}
                className={`flex flex-col items-center space-y-4 p-8 rounded-lg transition-all ${
                  cuisinePreference === "veg" ? "bg-white shadow-lg" : "hover:bg-white hover:shadow-md"
                }`}
              >
                <div className="w-16 h-16 bg-[#8dd3bb] rounded-full flex items-center justify-center">
                  <span className="text-2xl">🥗</span>
                </div>
                <span className="text-xl font-medium text-[#111822]">Veg</span>
              </button>

              <button
                onClick={() => setCuisinePreference("non-veg")}
                className={`flex flex-col items-center space-y-4 p-8 rounded-lg transition-all ${
                  cuisinePreference === "non-veg" ? "bg-white shadow-lg" : "hover:bg-white hover:shadow-md"
                }`}
              >
                <div className="w-16 h-16 bg-[#ff8682] rounded-full flex items-center justify-center">
                  <span className="text-2xl">🍗</span>
                </div>
                <span className="text-xl font-medium text-[#111822]">Non-Veg</span>
              </button>
            </div>
          </div>

          {/* Night Experience Section */}
          <div className="space-y-12">
            <h2 className="text-2xl text-[#3f3f3f]">Are you fine with night experiences?</h2>

            <div className="flex justify-center space-x-24">
              <button
                onClick={() => setNightExperience("yes")}
                className={`px-12 py-4 text-xl font-medium rounded-lg transition-all ${
                  nightExperience === "yes"
                    ? "bg-white shadow-lg text-[#111822]"
                    : "text-[#3f3f3f] hover:bg-white hover:shadow-md hover:text-[#111822]"
                }`}
              >
                Yes
              </button>

              <button
                onClick={() => setNightExperience("no")}
                className={`px-12 py-4 text-xl font-medium rounded-lg transition-all ${
                  nightExperience === "no"
                    ? "bg-white shadow-lg text-[#111822]"
                    : "text-[#3f3f3f] hover:bg-white hover:shadow-md hover:text-[#111822]"
                }`}
              >
                No
              </button>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center pt-8">
            <Button
              variant="outline"
              onClick={onBack}
              className="px-8 py-3 text-lg font-medium"
            >
              Back
            </Button>
            
            <Button
              className="bg-[#2ec4d7] hover:bg-[#2ec3d6] text-white px-12 py-6 text-lg font-medium rounded-lg"
              disabled={!cuisinePreference || !nightExperience}
              onClick={handleNext}
            >
              Complete Trip Planning
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}