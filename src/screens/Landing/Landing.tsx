import { BedIcon, PlaneIcon } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../components/ui/carousel";
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs";

import { FrameByAnima } from "./sections/FrameByAnima/FrameByAnima";
import { FrameWrapperByAnima } from "./sections/FrameWrapperByAnima";
import { GroupByAnima } from "./sections/GroupByAnima/GroupByAnima";
import { OverlapWrapperByAnima } from "./sections/OverlapWrapperByAnima/OverlapWrapperByAnima";

export const Landing = (): JSX.Element => {
  // Carousel images data - all pointing to public/image.png
  const carouselImages = [
    { id: 1, src: "/images/landing-bg/image3.svg", alt: "Element" },
    { id: 2, src: "/images/landing-bg/image2.svg", alt: "Nimber" },
    { id: 3, src: "/images/landing-bg/image3.svg", alt: "Dywing" },
    { id: 4, src: "/images/landing-bg/image4.svg", alt: "Camp" },
    { id: 5, src: "/images/landing-bg/image5.svg", alt: "Himachal" },
    { id: 6, src: "/images/landing-bg/image6.svg", alt: "Car" },
    { id: 7, src: "/images/landing-bg/image7.svg", alt: "Maaldivs" },
  ];

  return (
    <div className="relative w-full bg-white overflow-x-hidden">
      {/* Full screen carousel section */}
      <section className="relative w-full h-screen">
        <div className="relative w-full h-full p-4">
          <div className="relative w-full h-full rounded-[20px] overflow-hidden">
            <Carousel className="w-full h-full">
              <CarouselContent>
                {carouselImages.map((image) => (
                  <CarouselItem key={image.id} className="w-full h-full">
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
              <FrameByAnima />
            </div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full max-w-[1109px]">
              <h1 className="text-[120px] text-white font-normal whitespace-nowrap american-captain [text-shadow:0px_4px_14px_#00000040]">
                Your Trip. Your Way.
              </h1>
              <p className="text-5xl text-white font-medium mt-6 outfit [text-shadow:0px_4px_14px_#00000040]">
                From doorstep pickups to wild escapes all -in - one travel, built
                by you, for you
              </p>

              <div className="flex justify-center mt-16 gap-4">
                <Tabs defaultValue="plan" className="w-auto">
                  <TabsList className="p-0 bg-transparent space-x-4">
                    <TabsTrigger
                      value="plan"
                      className="h-[84px] px-7 py-3.5 bg-[#2ec3d6] rounded-[7px] text-white data-[state=active]:bg-[#2ec3d6] data-[state=active]:text-white"
                    >
                      <div className="flex items-center">
                        <PlaneIcon className="w-7 h-7 mr-4" />
                        <span className="[font-family:'Montserrat',Helvetica] font-semibold text-[24.5px]">
                          Plan a Trip
                        </span>
                      </div>
                    </TabsTrigger>
                    <TabsTrigger
                      value="book"
                      className="h-[82px] px-7 py-3.5 bg-white rounded-[7px] text-[#030303] data-[state=active]:bg-white data-[state=active]:text-[#030303]"
                    >
                      <div className="flex items-center">
                        <BedIcon className="w-7 h-7 mr-4" />
                        <span className="[font-family:'Montserrat',Helvetica] font-semibold text-[23.8px]">
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
      <section className="w-full min-h-screen flex flex-col items-center pt-20 border-2 border-red-500">
        <h2 className="[font-family:'Montserrat',Helvetica] font-semibold text-[80px] text-center">
          <span className="text-black">About </span>
          <span className="text-[#2dc3d7]">Us</span>
        </h2>

        <div className="relative w-full flex justify-center items-center mt-16 px-8">
          {/* Left polaroid card */}
          <div className="relative transform -left-[60px] rotate-[+15deg] translate-x-[-50px] z-10">
            <Card className="w-[280px] h-[360px] bg-white shadow-[0px_8px_40px_rgba(0,0,0,0.15)] rounded-lg overflow-hidden">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex-1 mb-4 overflow-hidden rounded-md">
                  <img
                    src="/images/about-us/mountain.png"
                    className="w-full h-full object-cover"
                    alt="Mountain Adventure"
                  />
                </div>
                <div className="text-center">
                  <h3 className="[font-family:'Montserrat',Helvetica] font-semibold text-black text-[20px]">
                    Journim
                  </h3>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Center content */}
          <div className="max-w-[964px] mx-auto px-12 [font-family:'Montserrat',Helvetica] font-normal text-[#5b5b5b] text-[23.6px] text-center tracking-[0] leading-[36.7px] z-20">
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
          <div className="relative transform -right-[60px] rotate-[-15deg] translate-x-[50px] z-10">
            <Card className="w-[280px] h-[360px] bg-white shadow-[0px_8px_40px_rgba(0,0,0,0.15)] rounded-lg overflow-hidden">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex-1 mb-4 overflow-hidden rounded-md">
                  <img
                    src="/images/about-us/travel.png"
                    className="w-full h-full object-cover"
                    alt="Travel Experience"
                  />
                </div>
                <div className="text-center">
                  <h3 className="[font-family:'Montserrat',Helvetica] font-semibold text-black text-[20px]">
                    Journim
                  </h3>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="w-full mt-16">
              
          <div className="w-full flex justify-center">
            <h2 className="font-['Montserrat',Helvetica] font-semibold text-[80px] tracking-[0] leading-normal text-center">
              <span className="text-black">Let&#39;s go </span>
              <span className="text-[#2dc3d7]">Hasslefree </span>
              <span className="text-black">with Journim</span>
            </h2>
         </div>

          <div className="text-center [font-family:'Montserrat',Helvetica] font-normal text-[#5b5b5b] text-2xl">
            Our Reach Till Date
          </div>
          
        </div>
      </section>

      <section className="w-full bg-[#66d7e5b2] mt-10">
        <GroupByAnima />
      </section>

      <FrameWrapperByAnima />
      <OverlapWrapperByAnima />
    </div>
  );
};