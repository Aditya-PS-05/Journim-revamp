import { Card, CardContent } from '@/components/ui/card'
import React from 'react'

const About = () => {
  return (
    <div>
        {/* About Us section - New page */}
      <section className="w-full min-h-[60vh] sm:min-h-screen flex flex-col items-center pt-10 sm:pt-20 px-2">
        <h2 className="[font-family:'Montserrat',Helvetica] font-semibold text-[36px] sm:text-[60px] md:text-[80px] text-center">
          <span className="text-black">About </span>
          <span className="text-[#2dc3d7]">Us</span>
        </h2>

        <div className="relative w-full flex flex-col lg:flex-row justify-center items-center mt-8 sm:mt-16 px-2 sm:px-8 gap-6">
          {/* Left polaroid card */}
          <div className="absolute mb-6 lg:mb-0 transform -left-[60px] rotate-[15deg] md:translate-x-[-60px] translate-x-[-150px] z-10">
            <Card className="w-[90vw] max-w-[320px] sm:w-[280px] h-[220px] sm:h-[360px] bg-white shadow-[0px_8px_40px_rgba(0,0,0,0.15)] rounded-lg overflow-hidden">
              <CardContent className="p-4 sm:p-6 h-full flex flex-col">
                <div className="flex-1 mb-2 sm:mb-4 overflow-hidden rounded-md">
                  <img
                    src="/images/about-us/mountain.png"
                    className="w-full h-full object-cover"
                    alt="Mountain Adventure"
                  />
                </div>
                <div className="text-center">
                  <h3 className="[font-family:'Montserrat',Helvetica] font-semibold text-black text-[16px] sm:text-[20px]">
                    Journim
                  </h3>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Center content */}
          <div className="relative max-w-[60vw] sm:max-w-[964px] mx-auto px-2 sm:px-12 [font-family:'Montserrat',Helvetica] font-normal text-[#5b5b5b] text-base sm:text-[23.6px] text-center tracking-[0] leading-[1.7] z-20">
            At Journim, We Believe Planning Your Dream Trip Should Be As Fun As
            Living It. Whether You&#39;re Spontaneous Or A Meticulous Planner,
            We Put You In Control—without The Stress. No Cookie-cutter Plans. No
            Hidden Fees. Just Smart, Customizable Itineraries Tailored By You.
            <br />
            <br />
            Our Intelligent Algorithm Turns Your Vibe, Time, And Budget Into A
            Trip That Fits Perfectly. From Booking Stays And Rides To Curating
            Must-see Spots, Journim Is Your Travel Sidekick. Your Time, Your
            Pace, Your Vibe—let&apos;s Make It Unforgettable. One Step Closer To
            Your Dream Trip. That&apos;s The Journey We&apos;re Here For.
          </div>

          {/* Right polaroid card */}
          <div className="absolute mt-6 lg:mt-0 transform -right-[60px] rotate-[-15deg] md:translate-x-[50px] translate-x-[150px] z-10">
            <Card className="w-[90vw] max-w-[320px] sm:w-[280px] h-[220px] sm:h-[360px] bg-white shadow-[0px_8px_40px_rgba(0,0,0,0.15)] rounded-lg overflow-hidden">
              <CardContent className="p-4 sm:p-6 h-full flex flex-col">
                <div className="flex-1 mb-2 sm:mb-4 overflow-hidden rounded-md">
                  <img
                    src="/images/about-us/travel.png"
                    className="w-full h-full object-cover"
                    alt="Travel Experience"
                  />
                </div>
                <div className="text-center">
                  <h3 className="[font-family:'Montserrat',Helvetica] font-semibold text-black text-[16px] sm:text-[20px]">
                    Journim
                  </h3>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="w-full mt-10 sm:mt-16">
          <div className="w-full flex justify-center">
            <h2 className="font-['Montserrat',Helvetica] font-semibold text-[32px] sm:text-[60px] md:text-[80px] tracking-[0] leading-normal text-center">
              <span className="text-black">Let&#39;s go </span>
              <span className="text-[#2dc3d7]">Hasslefree </span>
              <span className="text-black">with Journim</span>
            </h2>
          </div>
          <div className="text-center [font-family:'Montserrat',Helvetica] font-normal text-[#5b5b5b] text-lg sm:text-2xl">
            Our Reach Till Date
          </div>
        </div>
      </section>
    </div>
  )
}

export default About