"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Globe, MapPin, Plane, Car } from "lucide-react"
import { Navbar } from "@/components/base/Navbar/Navbar"

const statesData = {
  Kerala: {
    name: "Kerala",
    mapImage: "/images/locations/states/kerala/kerala.png",
    description: "Kerala, often called \"God's Own Country,\" is a lush tropical paradise in southern India known for its serene backwaters, palm-fringed beaches, and misty hill stations.",
    cities: [
      { name: "Varkala", image: "/images/locations/states/kerala/varkala.png", description: "An amazing journey" },
      { name: "Munnar", image: "/images/locations/states/kerala/munnar.png", description: "An amazing journey" },
      { name: "Alappuzha", image: "/images/locations/states/kerala/alappuzha.png", description: "An amazing journey" },
      { name: "Fort Kochi", image: "/images/locations/states/kerala/kochi.png", description: "An amazing journey" },
    ]
  },
};

const initialSuggestions = [
    { name: 'Kerala', image: '/images/locations/states/kerala.png', description: "An amazing journey" },
    { name: 'Arunachal Pradesh', image: '/images/locations/states/arunachal.png', description: "An amazing journey" },
    { name: 'Rajasthan', image: '/images/locations/states/rajasthan.png', description: "An amazing journey" },
    { name: 'Himachal Pradesh', image: '/images/locations/states/himachal.png', description: "An amazing journey" },
];

export default function Component() {
  const [selectedState, setSelectedState] = useState<any>()
  const [activeTab, setActiveTab] = useState("plan")

  const handleStateSelect = (stateName: keyof typeof statesData) => {
    setSelectedState(statesData[stateName])
  }

  const suggestionsToShow = selectedState ? selectedState.cities : initialSuggestions

  return (
    <div className="min-h-screen bg-[#FAFAFA] px-8 py-4">
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <div className="px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-12 mx-auto">
          {/* Left Content */}
          <div className="lg:col-span-4">
            {/* Plan Trip Section */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-[#2ec4d7] flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-3xl font-bold text-black">Plan your perfect trip</h1>
              </div>
              <p className="text-gray-500 mb-8">Customised as per your preferences</p>

              {/* Dropdowns */}
              <div className="flex space-x-6 mb-12">
                <div className="flex-1">
                  <label className="block text-sm text-gray-600 mb-2">State</label>
                  <Select
                    value={selectedState?.name}
                    onValueChange={(value) => handleStateSelect(value as keyof typeof statesData)}
                  >
                    <SelectTrigger className="w-full bg-white border border-gray-200 h-12 rounded-lg">
                      <SelectValue placeholder="Select a state" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Kerala">Kerala</SelectItem>
                      <SelectItem value="Rajasthan">Rajasthan</SelectItem>
                      <SelectItem value="Himachal Pradesh">Himachal Pradesh</SelectItem>
                      <SelectItem value="Arunachal Pradesh">Arunachal Pradesh</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-1">
                  <label className="block text-sm text-gray-600 mb-2">City</label>
                  <Select>
                    <SelectTrigger className="w-full bg-white border border-gray-200 h-12 rounded-lg">
                      <SelectValue placeholder="Select a city" />
                    </SelectTrigger>
                    <SelectContent>
                      {selectedState?.cities.map((city: any) => (
                        <SelectItem key={city.name} value={city.name}>
                          {city.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Suggestions Section */}
            <div>
              <div className="flex items-center space-x-2 mb-8">
                <span className="text-2xl">✨</span>
                <h2 className="text-3xl font-bold text-black">Suggestions</h2>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {suggestionsToShow.map((item: { name: string; image: string; description: string }) => (
                  <div key={item.name} className="relative rounded-2xl overflow-hidden group cursor-pointer h-60">
                    <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white text-xl font-bold mb-1">{item.name}</h3>
                      <p className="text-white/90 text-sm mb-3">{item.description}</p>
                      <Button className="bg-[#2ec4d7] hover:bg-[#2ec4d7]/90 text-white px-6 py-2 rounded-lg font-medium">
                        Explore
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Map */}
          <div className="lg:col-span-3 px-16 py-8 bg-white">
            <div className="bg-white">
              {selectedState ? (
                <>
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <h2 className="text-3xl font-bold text-black text-center">📍 {selectedState.name}</h2>
                  </div>
                  <p className="text-gray-500 mb-6 text-center">Select the city of your choice in the map</p>
                  <div className="flex justify-center mb-6">
                    <Image
                      src={selectedState.mapImage || "/placeholder.svg"}
                      alt={`${selectedState.name} map`}
                      width={300}
                      height={400}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-gray-600 text-center leading-relaxed mt-10">{selectedState.description}</p>
                </>
              ) : (
                <>
                  <p className="text-gray-500 mb-6 text-center">Select the state of your choice in the map</p>
                  <div className="flex justify-center mb-6">
                    <Image
                      src="/images/plantrip/india.png"
                      alt="India map"
                      width={3000}
                      height={4000}
                      className=""
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}