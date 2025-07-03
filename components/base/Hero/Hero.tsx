import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Tabs, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import { BedIcon, PlaneIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const Hero = () => {

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
    <div>
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
                  <CarouselItem key={image.id} className="w-full min-h-screen">
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


            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full max-w-[95vw] sm:max-w-[1109px] px-2">
              <h1 className="text-[120px] sm:text-[80px] md:text-[90px] lg:text-[120px] text-white font-normal sm:whitespace-nowrap american-captain [text-shadow:0px_4px_14px_#00000040] leading-[1]">
                Your Trip. Your Way.
              </h1>
              <p className="text-[20px] md:text-5xl text-white font-medium m-8 sm:mt-6 outfit [text-shadow:0px_4px_14px_#00000040]">
                From doorstep pickups to wild escapes all -in - one travel, built
                by you, for you
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center mt-24 m-8 mx-auto gap-3 sm:gap-4 w-full max-w-[95vw]">
                <Tabs defaultValue="plan" className="w-auto">
                  <TabsList className="p-0 bg-transparent space-x-0 sm:space-x-4 flex flex-col sm:flex-row gap-2 sm:gap-0 justify-center">
                    <TabsTrigger
                      value="plan"
                      className="h-[60px] sm:h-[84px] px-4 sm:px-7 py-2.5 sm:py-3.5 bg-[#2ec3d6] rounded-[7px] text-white data-[state=active]:bg-[#2ec3d6] data-[state=active]:text-white"
                    >
                      <div className="flex items-center px-32 py-2 md:p-0">
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
                      <div className="flex items-center px-32 py-2 md:p-0">
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
    </div>
  )
}

export default Hero