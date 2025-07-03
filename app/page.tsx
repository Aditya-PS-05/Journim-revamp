"use client";

import { BedIcon, PlaneIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";

import { Navbar } from "@/components/base/Navbar/Navbar";
import { Reviews } from "@/components/base/Reviews/Reviews";
import { LocateIndia } from "@/components/base/LocateIndia/LocateIndia";
import { Founders } from "@/components/base/Founders/Founders";

export default function Home() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 2000);

    return () => clearInterval(interval);
  }, [api]);

  // Carousel images data - all pointing to public/image.png
  const carouselImages = [
    { id: 1, src: "/images/landing-bg/101.jpg", alt: "Element" },
    { id: 2, src: "/images/landing-bg/102.jpg", alt: "Nimber" },
    { id: 3, src: "/images/landing-bg/103.jpg", alt: "Dywing" },
    { id: 4, src: "/images/landing-bg/104.jpg", alt: "Camp" },
    { id: 5, src: "/images/landing-bg/105.jpg", alt: "Himachal" },
  ];

  return (
    <div className="relative w-full bg-white overflow-x-hidden">
      {/* Full screen carousel section */}
      <section className="relative w-full h-screen min-h-[100dvh]">
        <div className="relative w-full h-full p-1 sm:p-4">
          <div className="relative w-full h-full rounded-[8px] sm:rounded-[20px] overflow-hidden">
            <Carousel 
              setApi={setApi}
              className="w-full h-full"
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent className="h-full">
                {carouselImages.map((image) => (
                  <CarouselItem key={image.id} className="w-full min-h-screen md:h-full">
                    <div className="h-full w-full">
                      <img
                        src={image.src}
                        className="w-full h-full object-cover"
                        alt={image.alt}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            <div className="absolute top-0 w-full">
              <Navbar />
            </div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full max-w-[95vw] sm:max-w-[1109px] px-2">
              <h1 className="text-[40px] sm:text-[60px] md:text-[90px] lg:text-[120px] text-white font-normal whitespace-nowrap american-captain [text-shadow:0px_4px_14px_#00000040]">
                Your Trip. Your Way.
              </h1>
              <p className="text-2xl sm:text-4xl md:text-5xl text-white font-medium mt-4 sm:mt-6 outfit [text-shadow:0px_4px_14px_#00000040]">
                From doorstep pickups to wild escapes all -in - one travel, built
                by you, for you
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center mt-8 sm:mt-20 gap-3 sm:gap-4 w-full max-w-[95vw]">
                <Tabs defaultValue="plan" className="w-auto">
                  <TabsList className="p-0 bg-transparent space-x-0 sm:space-x-4 flex flex-col sm:flex-row gap-2 sm:gap-0 justify-center">
                    <TabsTrigger
                      value="plan"
                      className="h-[60px] sm:h-[84px] px-4 sm:px-7 py-2.5 sm:py-3.5 bg-[#2ec3d6] rounded-[7px] text-white data-[state=active]:bg-[#2ec3d6] data-[state=active]:text-white"
                    >
                      <div className="flex items-center">
                        <PlaneIcon className="w-6 h-6 sm:w-7 sm:h-7 mr-2 sm:mr-4" />
                        <span className="[font-family:'Montserrat',Helvetica] font-semibold text-lg sm:text-[24.5px]">
                          Plan a Trip
                        </span>
                      </div>
                    </TabsTrigger>
                    <TabsTrigger
                      value="book"
                      className="h-[58px] sm:h-[82px] px-4 sm:px-7 py-2.5 sm:py-3.5 bg-white rounded-[7px] text-[#030303] data-[state=active]:bg-white data-[state=active]:text-[#030303]"
                    >
                      <div className="flex items-center">
                        <BedIcon className="w-6 h-6 sm:w-7 sm:h-7 mr-2 sm:mr-4" />
                        <span className="[font-family:'Montserrat',Helvetica] font-semibold text-lg sm:text-[23.8px]">
                          Book a Trip
                        </span>
                      </div>
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us section - New page */}
      <section className="w-full min-h-[60vh] sm:min-h-screen flex flex-col items-center pt-10 sm:pt-20 px-2">
        <h2 className="[font-family:'Montserrat',Helvetica] font-semibold text-[36px] sm:text-[60px] md:text-[80px] text-center">
          <span className="text-black">About </span>
          <span className="text-[#2dc3d7]">Us</span>
        </h2>

        <div className="relative w-full flex flex-col lg:flex-row justify-center items-center mt-8 sm:mt-16 px-2 sm:px-8 gap-6">
          {/* Left polaroid card */}
          <div className="relative mb-6 lg:mb-0 transform lg:-left-[60px] lg:rotate-[15deg] lg:translate-x-[-50px] z-10">
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
          <div className="max-w-[95vw] sm:max-w-[964px] mx-auto px-2 sm:px-12 [font-family:'Montserrat',Helvetica] font-normal text-[#5b5b5b] text-base sm:text-[23.6px] text-center tracking-[0] leading-[1.7] z-20">
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
          <div className="relative mt-6 lg:mt-0 transform lg:-right-[60px] lg:rotate-[-15deg] lg:translate-x-[50px] z-10">
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

      <section className="w-full bg-[#66d7e5b2] mt-6 sm:mt-10">
        <LocateIndia />
      </section>

      <Reviews />
      <Founders />
    </div>
  );
};