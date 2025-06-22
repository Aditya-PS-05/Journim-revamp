"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Plane, Car, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Component() {
  const [selectedDates, setSelectedDates] = useState<number[]>([3, 19])

  const handleDateClick = (day: number, monthIndex: number) => {
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
  ]

  const dayLabels = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]

  const renderCalendar = (month: (typeof months)[0], monthIndex: number) => {
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
          onClick={() => handleDateClick(day, monthIndex)}
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

  return (
    <div className="min-h-screen bg-[#fafafa]">

      {/* Progress indicator with continuous lines */}
      <div className="flex items-center justify-center px-6 py-6">
        <div className="flex items-center justify-between w-full max-w-2xl">
          <div className="flex-1 flex items-center">
            {/* Continuous progress lines */}
            <div className="flex-1 h-1 bg-[#2ec4d7] rounded-full"></div>
            <div className="w-3 h-3 bg-[#2ec4d7] rounded-full mx-2 flex-shrink-0"></div>
            <div className="flex-1 h-1 bg-[#e5e5e5] rounded-full"></div>
            <div className="w-3 h-3 bg-[#e5e5e5] rounded-full mx-2 flex-shrink-0"></div>
            <div className="flex-1 h-1 bg-[#e5e5e5] rounded-full"></div>
          </div>
          <span className="text-[#71717a] text-sm ml-8">1/3</span>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-center text-[#000000] mb-12">When are you going ?</h1>

        {/* Calendar container */}
        <div className="flex gap-12 justify-center mb-12">
          {months.map((month, monthIndex) => (
            <div key={month.name} className="bg-white rounded-lg p-6 shadow-sm">
              {/* Month header */}
              <div className="flex items-center justify-between mb-6">
                <button className="p-1 hover:bg-[#f5f5f5] rounded">
                  <ChevronLeft className="w-5 h-5 text-[#71717a]" />
                </button>
                <h2 className="text-lg font-semibold text-[#3f3f3f]">{month.name}</h2>
                <button className="p-1 hover:bg-[#f5f5f5] rounded">
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
              <div className="grid grid-cols-7 gap-1">{renderCalendar(month, monthIndex)}</div>
            </div>
          ))}
        </div>

        {/* Next button */}
        <div className="flex justify-center">
          <Button className="bg-[#2ec4d7] hover:bg-[#2ec3d6] text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2">
            Next
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
