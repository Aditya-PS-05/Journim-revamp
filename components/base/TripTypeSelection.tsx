"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import { User, Users, Users2, Hand, ArrowRight, Plane, Car } from "lucide-react"

interface TripTypeSelectionProps {
  selectedState: any;
  selectedCity: string;
  onBack: () => void;
  onNext: (tripData: { tripType: string; numberOfPeople: string }) => void;
}

export default function TripTypeSelection({ selectedState, selectedCity, onBack, onNext }: TripTypeSelectionProps) {
  const [selectedTripType, setSelectedTripType] = useState<string>("")
  const [numberOfPeople, setNumberOfPeople] = useState<string>("")

  const tripTypes = [
    { id: "solo", label: "Solo", icon: User },
    { id: "partner", label: "Partner", icon: Users2 },
    { id: "family", label: "Family", icon: Users },
    { id: "friends", label: "Friends", icon: Hand },
  ]

  const handleNext = () => {
    if (selectedTripType && numberOfPeople) {
      onNext({ tripType: selectedTripType, numberOfPeople });
    }
  }

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Progress Bar */}
      <div className="bg-white px-6 py-4 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="w-full bg-[#e5e5e5] rounded-full h-1">
                <div className="bg-[#2ec4d7] h-1 rounded-full" style={{ width: "75%" }}></div>
              </div>
            </div>
            <div className="ml-4 text-[#3f3f3f] font-medium">3/4</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Trip Info */}
        <div className="text-center mb-8">
          <div className="text-sm text-[#3f3f3f] mb-2">Planning trip to</div>
          <div className="text-lg font-semibold text-[#111822]">{selectedCity}, {selectedState?.name}</div>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#111822] mb-2">What kind of trip are you planning?</h1>
        </div>

        {/* Trip Type Selection */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {tripTypes.map((type) => {
            const IconComponent = type.icon
            return (
              <Card
                key={type.id}
                className={`p-8 text-center cursor-pointer transition-all hover:shadow-md border-2 ${
                  selectedTripType === type.id
                    ? "border-[#2ec4d7] bg-[#2ec4d7]/5"
                    : "border-[#e5e5e5] hover:border-[#2ec4d7]/50"
                }`}
                onClick={() => setSelectedTripType(type.id)}
              >
                <div className="flex flex-col items-center space-y-4">
                  <div
                    className={`p-4 rounded-full ${
                      selectedTripType === type.id ? "bg-[#2ec4d7] text-white" : "bg-[#f5f5f5] text-[#3f3f3f]"
                    }`}
                  >
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <span className="text-xl font-semibold text-[#111822]">{type.label}</span>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Number of People */}
        <div className="text-center mb-16">
          <h2 className="text-xl text-[#3f3f3f] mb-8">Number of people travelling?</h2>
          <div className="max-w-xs mx-auto">
            <Select value={numberOfPeople} onValueChange={setNumberOfPeople}>
              <SelectTrigger className="w-full h-12 text-[#3f3f3f] border-[#d4d4d4]">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 person</SelectItem>
                <SelectItem value="2">2 people</SelectItem>
                <SelectItem value="3">3 people</SelectItem>
                <SelectItem value="4">4 people</SelectItem>
                <SelectItem value="5">5 people</SelectItem>
                <SelectItem value="6+">6+ people</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={onBack}
            className="px-8 py-3 text-lg font-medium"
          >
            Back
          </Button>
          
          <Button
            className="bg-[#2ec4d7] hover:bg-[#2ec4d7]/90 text-white px-12 py-3 text-lg font-medium rounded-lg"
            disabled={!selectedTripType || !numberOfPeople}
            onClick={handleNext}
          >
            Next
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </main>
    </div>
  )
}