import { Card, CardContent } from "@/components/ui/card";

// Review data for mapping
const reviews = [
  {
    id: 1,
    quote: "A real sense of community, nurtured",
    text: "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for...",
    name: "Olga",
    location: "Weave Studios – Kai Tak",
    image: "/images/reviews/review1.jpg",
  },
  {
    id: 2,
    quote: "The facilities are superb. Clean, slick, bright.",
    text: '“A real sense of community, nurtured”Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for...',
    name: "Thomas",
    location: "Weave Studios – Olympic",
    image: "/images/reviews/review2.jpg",
  },
  {
    id: 3,
    quote: "A real sense of community, nurtured",
    text: "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for...",
    name: "Eliot",
    location: "Weave Studios – Kai Tak",
    image: "/images/reviews/review3.jpg",
  },
];

export const Reviews = () => {
  return (
    <section className="flex flex-col items-center w-full py-16 bg-white">
      <h2 className="text-[64px] md:text-[80px] font-semibold text-[#2dc3d7] font-['Montserrat',Helvetica] text-center mb-2">
        Reviews
      </h2>
      <p className="text-xl md:text-2xl font-normal text-black font-['Montserrat',Helvetica] text-center mb-12">
        What people have experienced with Journim
      </p>
      <div className="flex flex-wrap justify-center gap-10 w-full max-w-[1500px]">
        {reviews.map((review) => (
          <div key={review.id} className="relative w-[340px] md:w-[410px] lg:w-[430px] xl:w-[450px]">
            {/* Cyan drop shadow */}
            <div className="hidden md:block absolute w-full h-full top-4 left-4 bg-[#c6f6fa] rounded-[20px] z-0" />
            <Card className="relative bg-white rounded-[20px] shadow-lg overflow-hidden z-10">
              <CardContent className="p-8 flex flex-col gap-6">
                <div>
                  <h3 className="font-['Montserrat',Helvetica] font-semibold text-black text-2xl md:text-[26px] leading-snug mb-2">
                    “{review.quote}”
                  </h3>
                  <div className="flex flex-col gap-2">
                    <p className="text-black text-opacity-70 font-['Montserrat',Helvetica] text-base leading-snug line-clamp-2">
                      {review.text}
                    </p>
                    <div className="w-full text-right font-['Montserrat',Helvetica] font-semibold text-black text-base cursor-pointer">
                      View more
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="24" height="24" fill="#FFD600" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                    ))}
                  </div>
                  <div className="font-['Montserrat',Helvetica] font-semibold text-black text-base">
                    {review.name}
                  </div>
                  <div className="font-['Montserrat',Helvetica] text-gray-500 text-sm">
                    {review.location}
                  </div>
                </div>
                <img
                  className="w-full h-[140px] md:h-[170px] lg:h-[200px] object-cover rounded-[10px] mt-2"
                  alt="Review image"
                  src={review.image}
                />
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
