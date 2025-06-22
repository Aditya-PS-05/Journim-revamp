"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ArrowRight, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CalendarComponentProps {
  selectedState: any
  selectedCity: string
  onBack: () => void
  onNext: (dateData: any) => void // Added onNext prop
}

export default function Calendar({ selectedState, selectedCity, onBack, onNext }: CalendarComponentProps) {
  const [selectedDates, setSelectedDates] = useState<number[]>([])
  const [currentYear] = useState(2024)
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0)

  const handleDateClick = (day: number) => {
    if (selectedDates.length === 0) {
      // First date selection
      setSelectedDates([day])
    } else if (selectedDates.length === 1) {
      // Second date selection - create range
      const firstDate = selectedDates[0]
      if (day === firstDate) {
        // Clicking same date deselects
        setSelectedDates([])
      } else {
        // Create range from first to second date
        const start = Math.min(firstDate, day)
        const end = Math.max(firstDate, day)
        const range = []
        for (let i = start; i <= end; i++) {
          range.push(i)
        }
        setSelectedDates(range)
      }
    } else {
      // Range already selected, start new selection
      setSelectedDates([day])
    }
  }

  const handleNext = () => {
    if (selectedDates.length > 0) {
      const dateData = {
        selectedDates,
        startDate: Math.min(...selectedDates),
        endDate: Math.max(...selectedDates),
        duration: selectedDates.length,
        month: months[currentMonthIndex].name,
        year: currentYear
      }
      onNext(dateData)
    }
  }

  const isDateInRange = (day: number) => {
    if (selectedDates.length <= 1) return false
    const min = Math.min(...selectedDates)
    const max = Math.max(...selectedDates)
    return day > min && day < max
  }

  const isDateSelected = (day: number) => {
    if (selectedDates.length <= 1) return selectedDates.includes(day)
    const min = Math.min(...selectedDates)
    const max = Math.max(...selectedDates)
    return day === min || day === max
  }

  const months = [
    {
      name: "August",
      days: 31,
      startDay: 4, // August 1st starts on Thursday (0=Sunday, 1=Monday, etc.)
    },
    {
      name: "September",
      days: 30,
      startDay: 0, // September 1st starts on Sunday
    },
    {
      name: "October",
      days: 31,
      startDay: 2, // October 1st starts on Tuesday
    },
    {
      name: "November",
      days: 30,
      startDay: 5, // November 1st starts on Friday
    },
    {
      name: "December",
      days: 31,
      startDay: 0, // December 1st starts on Sunday
    },
  ]

  const dayLabels = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]

  const navigateMonth = (direction: 'prev' | 'next') => {
    if (direction === 'prev' && currentMonthIndex > 0) {
      setCurrentMonthIndex(currentMonthIndex - 1)
    } else if (direction === 'next' && currentMonthIndex < months.length - 1) {
      setCurrentMonthIndex(currentMonthIndex + 1)
    }
  }

  const renderCalendar = (month: (typeof months)[0]) => {
    const days = []

    // Add empty cells for days before month starts
    for (let i = 0; i < month.startDay; i++) {
      days.push(<div key={`empty-${i}`} className="w-10 h-10" />)
    }

    // Add days of the month
    for (let day = 1; day <= month.days; day++) {
      const isSelected = isDateSelected(day)
      const isInRange = isDateInRange(day)

      days.push(
        <button
          key={day}
          onClick={() => handleDateClick(day)}
          className={`w-10 h-10 rounded-full text-sm font-medium transition-colors ${
            isSelected
              ? "bg-[#2ec4d7] text-white"
              : isInRange
                ? "bg-[#e0f7fa] text-[#3f3f3f]"
                : "text-[#3f3f3f] hover:bg-[#f5f5f5]"
          }`}
        >
          {day}
        </button>,
      )
    }

    return days
  }

  const getSelectedDateText = () => {
    if (selectedDates.length === 0) return "No dates selected"
    if (selectedDates.length === 1) return `${selectedDates[0]} ${months[currentMonthIndex].name}`
    const startDate = Math.min(...selectedDates)
    const endDate = Math.max(...selectedDates)
    return `${startDate} - ${endDate} ${months[currentMonthIndex].name} (${selectedDates.length} days)`
  }

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Back button */}
      <div className="px-6 py-4">
        <Button 
          onClick={onBack}
          variant="ghost"
          className="flex items-center gap-2 text-[#71717a] hover:text-[#3f3f3f]"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to selection
        </Button>
      </div>

      {/* Trip info */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-[#3f3f3f] mb-2">
          Trip to {selectedCity}, {selectedState.name}
        </h2>
        <p className="text-[#71717a]">Select your travel dates</p>
        {selectedDates.length > 0 && (
          <p className="text-[#2ec4d7] font-medium mt-2">{getSelectedDateText()}</p>
        )}
      </div>

      {/* Progress indicator with continuous lines */}
      <div className="flex items-center justify-center px-6 py-6">
        <div className="flex items-center justify-between w-full max-w-2xl">
          <div className="flex-1 flex items-center">
            {/* Continuous progress lines */}
            <div className="flex-1 h-1 bg-[#2ec4d7] rounded-full"></div>
            <div className="w-3 h-3 bg-[#2ec4d7] rounded-full mx-2 flex-shrink-0"></div>
            <div className="flex-1 h-1 bg-[#2ec4d7] rounded-full"></div>
            <div className="w-3 h-3 bg-[#2ec4d7] rounded-full mx-2 flex-shrink-0"></div>
            <div className="flex-1 h-1 bg-[#e5e5e5] rounded-full"></div>
          </div>
          <span className="text-[#71717a] text-sm ml-8">2/3</span>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-center text-[#000000] mb-12">When are you going?</h1>

        {/* Calendar container */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            {/* Month header */}
            <div className="flex items-center justify-between mb-6">
              <button 
                onClick={() => navigateMonth('prev')}
                className="p-1 hover:bg-[#f5f5f5] rounded disabled:opacity-50"
                disabled={currentMonthIndex === 0}
              >
                <ChevronLeft className="w-5 h-5 text-[#71717a]" />
              </button>
              <h2 className="text-lg font-semibold text-[#3f3f3f]">
                {months[currentMonthIndex].name} {currentYear}
              </h2>
              <button 
                onClick={() => navigateMonth('next')}
                className="p-1 hover:bg-[#f5f5f5] rounded disabled:opacity-50"
                disabled={currentMonthIndex === months.length - 1}
              >
                <ChevronRight className="w-5 h-5 text-[#71717a]" />
              </button>
            </div>

            {/* Day labels */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {dayLabels.map((label) => (
                <div key={label} className="w-10 h-8 flex items-center justify-center">
                  <span className="text-xs font-medium text-[#71717a]">{label}</span>
                </div>
              ))}
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-1">
              {renderCalendar(months[currentMonthIndex])}
            </div>
          </div>
        </div>

        {/* Date selection instructions */}
        <div className="text-center mb-8">
          <p className="text-[#71717a] text-sm">
            Click a date to select your departure date, then click another date to select your return date
          </p>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-between items-center">
          <Button 
            onClick={onBack}
            variant="outline"
            className="px-8 py-3 rounded-lg font-medium flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          
          <Button 
            onClick={handleNext}
            disabled={selectedDates.length === 0}
            className="bg-[#2ec4d7] hover:bg-[#2ec3d6] text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}