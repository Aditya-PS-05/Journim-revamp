import { Card, CardContent } from "../../../../components/ui/card";

// Review data for mapping
const reviews = [
  {
    id: 1,
    quote: "A real sense of community, nurtured",
    text: "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.",
    name: "Olga",
    location: "Weave Studios – Kai Tak",
  },
  {
    id: 2,
    quote: "The facilities are superb. Clean, slick, bright.",
    text: '"A real sense of community, nurtured"Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.View moreOlgaWeave Studios – Kai TakGoogle',
    name: "Thomas",
    location: "Weave Studios – Olympic",
  },
  {
    id: 3,
    quote: "A real sense of community, nurtured",
    text: "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.",
    name: "Eliot",
    location: "Weave Studios – Kai Tak",
  },
];

export const FrameWrapperByAnima = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-[61px] w-full py-16">
      <div className="flex w-full max-w-[1396px] items-center justify-center gap-6 relative">
        <div className="flex flex-col items-center w-full">
          <h2 className="text-[80px] font-semibold text-[#2dc3d7] [font-family:'Montserrat',Helvetica] tracking-[0] leading-[normal] mb-8">
            Reviews
          </h2>
          <p className="text-2xl font-normal text-black [font-family:'Montserrat',Helvetica] tracking-[0] leading-[normal]">
            What people have experienced with Journim
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {reviews.map((review) => (
          <div key={review.id} className="relative w-[450px]">
            <div className="absolute w-[425px] h-[553px] top-6 left-6 bg-[#67d8e666] rounded-[20px]" />
            <Card className="relative bg-neutrals rounded-[20px] shadow-[2px_4px_16px_#1122111a] overflow-hidden">
              <CardContent className="p-6 flex flex-col gap-10">
                <div className="flex flex-col w-full items-start gap-4">
                  <div className="flex flex-col items-start gap-4 w-full">
                    <h3 className="h-20 [font-family:'Montserrat',Helvetica] font-semibold text-blackish-green text-2xl tracking-[0] leading-[normal]">
                      &quot;{review.quote}&quot;
                    </h3>

                    <div className="flex flex-col items-start gap-3 w-full">
                      <p className="h-[37px] opacity-50 font-montserrat-medium-14px font-[number:var(--montserrat-medium-14px-font-weight)] text-blackish-green text-[length:var(--montserrat-medium-14px-font-size)] tracking-[var(--montserrat-medium-14px-letter-spacing)] leading-[var(--montserrat-medium-14px-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] [font-style:var(--montserrat-medium-14px-font-style)]">
                        {review.text}
                      </p>

                      <div className="w-full text-right [font-family:'Montserrat',Helvetica] font-semibold text-blackish-green text-sm tracking-[0] leading-[normal]">
                        View more
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-5 w-full">
                    <div className="flex items-start gap-3 w-full">
                      {[...Array(5)].map((_, i) => (
                        <img
                          key={i}
                          className="w-6 h-6"
                          alt="StarIcon rating"
                          src="/ion-star.svg"
                        />
                      ))}
                    </div>

                    <div className="flex flex-col items-start gap-3 w-full">
                      <div className="flex flex-col items-start gap-1 w-full">
                        <div className="mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-blackish-green text-sm tracking-[0] leading-[normal]">
                          {review.name}
                        </div>
                        <div className="opacity-50 font-montserrat-medium-12px font-[number:var(--montserrat-medium-12px-font-weight)] text-blackish-green text-[length:var(--montserrat-medium-12px-font-size)] tracking-[var(--montserrat-medium-12px-letter-spacing)] leading-[var(--montserrat-medium-12px-line-height)] [font-style:var(--montserrat-medium-12px-font-style)]">
                          {review.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <img
                  className="w-full h-[200px] object-cover"
                  alt="Review image"
                />
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
