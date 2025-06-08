import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Define location data for reusability and maintainability
const locationData = [
  {
    id: 1,
    name: "Kutch",
    state: "Gujrat",
    alt: "Kutch",
    className: "absolute top-[271px] left-0",
  },
  {
    id: 2,
    name: "Alappuzha",
    state: "Kerala",
    alt: "Alappuzha",
    className: "absolute top-[580px] left-0",
    nameClassName: "text-[#2e2e2e] text-[19.8px]",
  },
  {
    id: 3,
    name: "Manali",
    state: "Himachal Pradesh",
    alt: "Manali",
    className: "absolute top-[95px] left-[19px]",
  },
  {
    id: 4,
    name: "Varanasi",
    state: "Uttar Pradesh",
    alt: "Vara",
    className: "absolute top-[104px] left-[489px]",
  },
  {
    id: 5,
    name: "Puducherry",
    state: "Pondicherry",
    alt: "Pondy",
    className: "absolute top-[513px] left-[513px]",
  },
  {
    id: 6,
    name: "Imphal",
    state: "Manipur",
    alt: "Manipur",
    className: "absolute top-[265px] left-[947px]",
  },
];

// Vector paths for the map connections
const vectorPaths = [
  {
    src: "/vector-11.svg",
    alt: "Vector",
    className: "absolute w-[105px] h-[106px] top-[274px] left-[51px]",
  },
  {
    src: "/vector-15.svg",
    alt: "Vector",
    className: "absolute w-[105px] h-[106px] top-[239px] left-[731px]",
  },
  {
    src: "/vector-14.svg",
    alt: "Vector",
    className: "absolute w-[90px] h-28 top-[567px] left-[212px]",
  },
  {
    src: "/vector-17.svg",
    alt: "Vector",
    className: "absolute w-[90px] h-28 top-[513px] left-[409px]",
  },
  {
    src: "/vector-16.svg",
    alt: "Vector",
    className: "absolute w-[79px] h-[111px] top-36 left-[390px]",
  },
  {
    src: "/vector-12.svg",
    alt: "Vector",
    className: "absolute w-[110px] h-[98px] top-[46px] left-[229px]",
  },
  {
    src: "/vector.svg",
    alt: "Vector",
    className: "absolute w-[643px] h-[694px] top-0 left-[147px]",
  },
];

// Decorative dots on the map
const mapDots = [
  {
    className:
      "absolute w-[7px] h-[11px] top-[309px] left-[147px] bg-white rounded-[3.5px/5.5px]",
  },
  {
    className:
      "absolute w-[11px] h-[9px] top-[103px] left-[339px] bg-white rounded-[5.5px/4.5px]",
  },
  {
    className:
      "absolute w-[9px] h-2.5 top-[271px] left-[731px] bg-white rounded-[4.5px/5px]",
  },
  {
    className:
      "absolute w-[11px] h-[11px] top-[645px] left-[302px] bg-white rounded-[5.5px]",
  },
  {
    className:
      "absolute w-[11px] h-[9px] top-[233px] left-[390px] bg-white rounded-[5.5px/4.5px]",
  },
  { className: "absolute w-2 h-2 top-[582px] left-[405px] bg-white rounded" },
];

export const GroupByAnima = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-screen bg-[#67D8E6] flex items-center justify-center py-12">
      <div className="relative w-[1086px] h-[694px]">
        <div className="relative w-[917px] h-[694px] mx-auto">
          {/* Location Cards */}
          {locationData.map((location) => (
            <Card
              key={location.id}
              className={`flex items-center justify-center gap-[13.8px] pl-[6.9px] pr-[13.8px] py-[6.9px] bg-white rounded-[6.9px] ${location.className}`}
            >
              <CardContent className="p-0">
                <div className="relative flex items-center">
                  <img
                    className="w-[42px] h-[38px] object-cover"
                    alt={location.alt}
                    src={`/images/locations/${location.alt.toLowerCase()}.png`}
                  />
                  <div className="inline-flex flex-col items-start justify-center ml-4">
                    <div
                      className={`w-fit mt-[-1.73px] font-semibold text-[#2e2e2e] text-[17.3px] font-['Montserrat',Helvetica] tracking-[0] leading-normal ${location.nameClassName || ""}`}
                    >
                      {location.name}
                    </div>
                    <div className="w-fit font-normal text-[#2e2e2e] text-[13.8px] font-['Montserrat',Helvetica] tracking-[0] leading-normal">
                      {location.state}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          <div className="absolute w-[836px] h-[694px] top-0 left-[81px]">
            {/* Vector paths for map connections */}
            {vectorPaths.map((vector, index) => (
              <img
                key={index}
                className={vector.className}
                alt={vector.alt}
                src={vector.src}
              />
            ))}

            {/* Decorative dots on the map */}
            {mapDots.map((dot, index) => (
              <div key={index} className={dot.className} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};