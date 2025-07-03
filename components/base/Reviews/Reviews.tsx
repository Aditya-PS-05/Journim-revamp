'use client';

import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

// Review data for mapping
const reviews = [
  {
    id: 1,
    quote: "A real sense of community, nurtured",
    text: "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for...",
    name: "Olga",
    location: "Weave Studios – Kai Tak",
    image: "/images/reviews/1.png",
  },
  {
    id: 2,
    quote: "The facilities are superb. Clean, slick,,,.",
    text: '"A real sense of community, nurtured"Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for...',
    name: "Thomas",
    location: "Weave Studios – Olympic",
    image: "/images/reviews/1.png",
  },
  {
    id: 3,
    quote: "A real sense of community, nurtured",
    text: "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for...",
    name: "Eliot",
    location: "Weave Studios – Kai Tak",
    image: "/images/reviews/1.png",
  },
  {
    id: 4,
    quote: "Amazing experience with Journim",
    text: "The trip planning was seamless and the recommendations were spot on. Highly recommend for anyone looking to travel...",
    name: "Sarah",
    location: "Journim User",
    image: "/images/reviews/1.png",
  },
  {
    id: 5,
    quote: "Best travel planning app ever",
    text: "Made my vacation planning so much easier. The interface is intuitive and the suggestions are perfect...",
    name: "Mike",
    location: "Journim User",
    image: "/images/reviews/1.png",
  },
];

export const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Get number of items to show based on screen size
  const getItemsPerSlide = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3; // lg and up
      if (window.innerWidth >= 768) return 2;  // md and up
      return 1; // sm and below
    }
    return 3; // default for SSR
  };

  const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide());

  // Handle window resize
  const handleResize = () => {
    setItemsPerSlide(getItemsPerSlide());
  };

  // Add resize listener
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const maxIndex = Math.max(0, reviews.length - itemsPerSlide);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const getVisibleReviews = () => {
    const visible = [];
    for (let i = 0; i < itemsPerSlide; i++) {
      const index = (currentIndex + i) % reviews.length;
      visible.push(reviews[index]);
    }
    return visible;
  };

  return (
    <section className="flex flex-col max-h-screen items-center w-full py-16 bg-white">
      <h2 className="text-[64px] md:text-[80px] font-semibold text-[#2dc3d7] font-['Montserrat',Helvetica] text-center mb-2">
        Reviews
      </h2>
      <p className="text-xl md:text-2xl font-normal text-black font-['Montserrat',Helvetica] text-center mb-12">
        What people have experienced with Journim
      </p>
      
      {/* Carousel Container */}
      <div className="relative w-full max-w-[1400px] flex items-center justify-center px-4">
        {/* Left Navigation Button */}
        <button
          onClick={prevSlide}
          className="absolute -left-10 z-20 p-3 bg-white text-white rounded-full hover:bg-[#92d6df] transition-colors shadow-lg "
          aria-label="Previous review"
        >
          <Image
            src="/images/reviews/left.png"
            alt="left-arrow"
            height={70}
            width={70}
          />
        </button>

        {/* Review Cards Container */}
        <div className="w-full overflow-hidden px-12 py-6">
          <div className="flex gap-6 justify-center">
            {getVisibleReviews().map((review, index) => (
              <div key={`${review.id}-${currentIndex}-${index}`} className="flex-shrink-0 w-full max-w-[400px] md:max-w-[350px] lg:max-w-[380px]">
                <div className="relative">
                  {/* Cyan drop shadow */}
                  <div className="hidden md:block absolute w-full h-full top-4 left-4 bg-[#c6f6fa] rounded-[20px] z-0" />
                  <Card className="relative bg-white rounded-[20px] shadow-lg overflow-hidden z-10">
                    <CardContent className="p-6 lg:p-8 flex flex-col gap-4 lg:gap-6">
                      <div>
                        <h3 className="font-['Montserrat',Helvetica] font-semibold text-black text-xl md:text-2xl lg:text-[26px] leading-snug mb-2">
                          "{review.quote}"
                        </h3>
                        <div className="flex flex-col gap-2">
                          <p className="text-black text-opacity-70 font-['Montserrat',Helvetica] text-sm md:text-base leading-snug line-clamp-2">
                            {review.text}
                          </p>
                          <div className="w-full text-right font-['Montserrat',Helvetica] font-semibold text-black text-sm md:text-base cursor-pointer">
                            View more
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} width="20" height="20" fill="#FFD600" viewBox="0 0 24 24">
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                            </svg>
                          ))}
                        </div>
                        <div className="font-['Montserrat',Helvetica] font-semibold text-black text-sm md:text-base">
                          {review.name}
                        </div>
                        <div className="font-['Montserrat',Helvetica] text-gray-500 text-xs md:text-sm">
                          {review.location}
                        </div>
                      </div>
                      <img
                        className="w-full h-[120px] md:h-[150px] lg:h-[180px] object-cover rounded-[10px] mt-2"
                        alt="Review image"
                        src={review.image}
                      />
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Navigation Button */}
<button
          onClick={nextSlide}
          className="absolute -right-10 z-20 p-3 bg-white text-white rounded-full hover:bg-[#92d6df] transition-colors shadow-lg "
          aria-label="Previous review"
        >
          <Image
            src="/images/reviews/right.png"
            alt="left-arrow"
            height={70}
            width={70}
          />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex gap-2 mt-8">
        {Array.from({ length: maxIndex + 1 }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-[#2dc3d7]' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};