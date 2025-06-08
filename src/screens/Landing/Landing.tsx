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
import { LetSGoHasslefreeByAnima } from "./sections/LetSGoHasslefreeByAnima/LetSGoHasslefreeByAnima";
import { OverlapWrapperByAnima } from "./sections/OverlapWrapperByAnima/OverlapWrapperByAnima";

export const Landing = (): JSX.Element => {
  // Carousel images data - all pointing to public/image.png
  const carouselImages = [
    { id: 1, src: "/image.png", alt: "Element" },
    { id: 2, src: "/image.png", alt: "Nimber" },
    { id: 3, src: "/image.png", alt: "Dywing" },
    { id: 4, src: "/image.png", alt: "Camp" },
    { id: 5, src: "/image.png", alt: "Himachal" },
    { id: 6, src: "/image.png", alt: "Car" },
    { id: 7, src: "/image.png", alt: "Maaldivs" },
  ];

  return (
    <div className="relative w-full bg-white overflow-x-hidden">
      <section className="relative w-full">
        <div className="relative w-full">
          <Carousel className="w-full">
            <CarouselContent>
              {carouselImages.map((image) => (
                <CarouselItem key={image.id} className="w-full">
                  <div className="h-[842px] w-full">
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
      </section>

      <section className="w-full mt-10 flex flex-col items-center">
        <h2 className="[font-family:'Montserrat',Helvetica] font-semibold text-[80px] text-center">
          <span className="text-black">About </span>
          <span className="text-[#2dc3d7]">Us</span>
        </h2>

        <div className="relative w-full flex justify-center mt-16">
          <div className="relative w-[369px] h-[421px] -left-[129px] rotate-[34.78deg]">
            <div className="relative w-[464px] h-[469px] -top-[42px] -left-[52px]">
              <Card className="absolute w-[284px] h-[360px] top-[72px] left-[93px] rotate-[-14.89deg] shadow-[0px_6.23px_54.3px_#00000040]">
                <CardContent className="p-0">
                  <img
                    src="/image.png"
                    className="absolute w-[326px] h-[344px] top-[62px] left-[69px] rotate-[-34.78deg] object-cover"
                    alt="Mountain"
                  />
                  <div className="absolute w-[209px] top-[381px] left-[169px] rotate-[-14.89deg] [font-family:'Montserrat',Helvetica] font-semibold text-black text-[21.2px] text-center tracking-[0] leading-[31.7px]">
                    Journim
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="max-w-[964px] mx-auto [font-family:'Montserrat',Helvetica] font-normal text-[#5b5b5b] text-[23.6px] text-center tracking-[0] leading-[36.7px]">
            At Journim, We Believe Planning Your Dream Trip Should Be As Fun As
            Living It. Whether You&#39;re Spontaneous Or A Meticulous Planner,
            We Put You In Control—without The Stress. No Cookie-cutter Plans. No
            Hidden Fees. Just Smart, Customizable Itineraries Tailored By You.
            <br />
            <br />
            our Intelligent Algorithm Turns Your Vibe, Time, And Budget Into A
            Trip That Fits Perfectly. From Booking Stays And Rides To Curating
            Must-see Spots, Journim Is Your Travel Sidekick. Your Time, Your
            Pace, Your Vibe—let&apos;s Make It Unforgettable. One Step Closer To
            Your Dream Trip. That&apos;s The Journey We&apos;re Here For.
          </div>

          <div className="relative w-[369px] h-[421px] -right-[129px] rotate-[145.22deg]">
            <div className="relative w-[464px] h-[469px] -top-[7px] -left-[52px]">
              <Card className="absolute w-[284px] h-[360px] top-[37px] left-[93px] rotate-[-14.89deg] shadow-[0px_6.23px_54.3px_#00000040]">
                <CardContent className="p-0">
                  <img
                    src="/image.png"
                    className="absolute w-[326px] h-[344px] top-[62px] left-[69px] rotate-[-145.22deg] object-cover"
                    alt="Hp"
                  />
                  <div className="absolute w-[209px] top-[346px] left-[169px] rotate-[165.29deg] [font-family:'Montserrat',Helvetica] font-semibold text-black text-[21.2px] text-center tracking-[0] leading-[31.7px]">
                    Journim
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full mt-16">
        <div className="text-center [font-family:'Montserrat',Helvetica] font-normal text-[#5b5b5b] text-2xl">
          Our Reach Till Date
        </div>

        <LetSGoHasslefreeByAnima />
      </section>

      <section className="w-full bg-[#66d7e5b2] mt-10">
        <GroupByAnima />
      </section>

      <FrameWrapperByAnima />
      <OverlapWrapperByAnima />
    </div>
  );
};
