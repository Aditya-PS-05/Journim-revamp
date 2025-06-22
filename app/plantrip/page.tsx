"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Globe, MapPin, Plane, Car } from "lucide-react"
import { Navbar } from "@/components/base/Navbar/Navbar"
import Calender from "@/components/base/Calender/Calender"
import TripTypeSelection from "@/components/base/TripTypeSelection" // Import the new component

export default function page() {
  const [selectedState, setSelectedState] = useState<any>()
  const [selectedCity, setSelectedCity] = useState<string>("")
  const [currentStep, setCurrentStep] = useState<'planning' | 'calendar' | 'tripType'>('planning')
  const [tripData, setTripData] = useState<any>(null)

  // Check if both state and city are selected
  const shouldShowCalendar = selectedState && selectedCity && currentStep === 'calendar'
  const shouldShowTripType = currentStep === 'tripType'

  const handleCalendarNext = (dateData: any) => {
    // Handle calendar data and move to trip type selection
    setCurrentStep('tripType')
  }

  const handleTripTypeNext = (tripTypeData: any) => {
    // Handle trip type data - you can navigate to the next step or final submission
    setTripData(tripTypeData)
    console.log('Trip planning completed:', {
      state: selectedState,
      city: selectedCity,
      tripType: tripTypeData
    })
    // Navigate to next step or show confirmation
  }

  const handleBackToCalendar = () => {
    setCurrentStep('calendar')
  }

  const handleBackToPlanning = () => {
    setCurrentStep('planning')
    setSelectedState(null)
    setSelectedCity("")
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] px-8 py-4">
      {/* Header - Always shown */}
      <Navbar />

      {/* Main Content */}
      <div className="px-8 py-8">
        {shouldShowTripType ? (
          <TripTypeSelection 
            selectedState={selectedState}
            selectedCity={selectedCity}
            onBack={handleBackToCalendar}
            onNext={handleTripTypeNext}
          />
        ) : shouldShowCalendar ? (
          <Calender 
            selectedState={selectedState} 
            selectedCity={selectedCity}
            onBack={handleBackToPlanning}
            onNext={handleCalendarNext} // You'll need to modify your Calendar component to accept this
          />
        ) : (
          <MainContent 
            selectedState={selectedState}
            selectedCity={selectedCity}
            setSelectedState={setSelectedState}
            setSelectedCity={setSelectedCity}
            onNext={() => setCurrentStep('calendar')}
          />
        )}
      </div>
    </div>
  )
}

function MainContent({ selectedState, selectedCity, setSelectedState, setSelectedCity, onNext }: {
  selectedState: any,
  selectedCity: string,
  setSelectedState: (state: any) => void,
  setSelectedCity: (city: string) => void,
  onNext: () => void
}) {
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
    Rajasthan: {
      name: "Rajasthan",
      mapImage: "/images/locations/states/rajasthan/rajasthan.png",
      description: "Rajasthan, the Land of Kings, is a majestic state in northwest India known for its royal palaces, desert landscapes, and vibrant culture.",
      cities: [
        { name: "Jaipur", image: "/images/locations/states/rajasthan/jaipur.png", description: "The Pink City" },
        { name: "Udaipur", image: "/images/locations/states/rajasthan/udaipur.png", description: "City of Lakes" },
        { name: "Jodhpur", image: "/images/locations/states/rajasthan/jodhpur.png", description: "The Blue City" },
        { name: "Jaisalmer", image: "/images/locations/states/rajasthan/jaisalmer.png", description: "The Golden City" },
      ]
    },
    "Himachal Pradesh": {
      name: "Himachal Pradesh",
      mapImage: "/images/locations/states/himachal/himachal.png",
      description: "Himachal Pradesh is a northern Indian state in the Himalayas known for its pristine natural beauty, snow-capped peaks, and adventure sports.",
      cities: [
        { name: "Shimla", image: "/images/locations/states/himachal/shimla.png", description: "The Queen of Hills" },
        { name: "Manali", image: "/images/locations/states/himachal/manali.png", description: "Valley of the Gods" },
        { name: "Dharamshala", image: "/images/locations/states/himachal/dharamshala.png", description: "Little Lhasa" },
        { name: "Kasol", image: "/images/locations/states/himachal/kasol.png", description: "Mini Israel" },
      ]
    },
    "Arunachal Pradesh": {
      name: "Arunachal Pradesh",
      mapImage: "/images/locations/states/arunachal/arunachal.png",
      description: "Arunachal Pradesh, the Land of the Dawn-Lit Mountains, is India's northeastern frontier state known for its pristine landscapes and tribal culture.",
      cities: [
        { name: "Tawang", image: "/images/locations/states/arunachal/tawang.png", description: "Monastery Town" },
        { name: "Ziro", image: "/images/locations/states/arunachal/ziro.png", description: "Apatani Valley" },
        { name: "Bomdila", image: "/images/locations/states/arunachal/bomdila.png", description: "Gateway to Tawang" },
        { name: "Itanagar", image: "/images/locations/states/arunachal/itanagar.png", description: "Capital City" },
      ]
    },
  };

  const initialSuggestions = [
      { name: 'Kerala', image: '/images/locations/states/kerala.png', description: "An amazing journey" },
      { name: 'Arunachal Pradesh', image: '/images/locations/states/arunachal.png', description: "An amazing journey" },
      { name: 'Rajasthan', image: '/images/locations/states/rajasthan.png', description: "An amazing journey" },
      { name: 'Himachal Pradesh', image: '/images/locations/states/himachal.png', description: "An amazing journey" },
  ];

  const handleStateSelect = (stateName: keyof typeof statesData) => {
    setSelectedState(statesData[stateName])
    setSelectedCity("") // Reset city when state changes
  }

  const handleCitySelect = (cityName: string) => {
    setSelectedCity(cityName)
  }

  // Auto-navigate to calendar when both state and city are selected
  useEffect(() => {
    if (selectedState && selectedCity) {
      onNext()
    }
  }, [selectedState, selectedCity, onNext])

  const suggestionsToShow = selectedState ? selectedState.cities : initialSuggestions

  return (
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
              <Select value={selectedCity} onValueChange={handleCitySelect}>
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
  )
}