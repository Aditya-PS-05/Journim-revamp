import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const OverlapWrapperByAnima = (): JSX.Element => {
  // Founder data for mapping
  const founders = [
    {
      name: "Aman Gopal",
      title: "CEO",
      secondTitle: "Co-Founder",
      imageAlt: "Ellipse",
    },
    {
      name: "Sahil Birda",
      title: "COO",
      secondTitle: "Co-Founder",
      imageAlt: "Profile image",
    },
  ];

  // Footer links data for mapping
  const footerSections = [
    {
      title: "Our Destinations",
      links: ["Kerala", "Himachal Pradesh", "Goa", "Tamil Nadu"],
    },
    {
      title: "Our Activities",
      links: [
        "Paragliding",
        "Cruising & sailing",
        "Multi-activities",
        "Kayaing",
      ],
    },
    {
      title: "About Us",
      links: ["Our Story"],
    },
    {
      title: "Contact Us",
      links: ["Our Story", "Work with us"],
    },
  ];

  // Star positions data for decorative elements
  const starPositions = [
    { top: "162px", left: "55px", width: "11px", height: "3px" },
    { top: "56px", left: "113px", width: "11px", height: "3px" },
    { top: "10px", left: "125px", width: "3.5px", height: "15px" },
    { top: "49px", left: "263px", width: "2.5px", height: "11px" },
    { top: "154px", left: "279px", width: "2.5px", height: "11px" },
    { top: "-3px", left: "119px", width: "2.5px", height: "11px" },
    { top: "172px", left: "231px", width: "15px", height: "4px" },
    { top: "49px", left: "1.5px", width: "9px", height: "9px" },
  ];

  return (
    <section className="relative w-full py-16 bg-[#85dfeb]">
      <div className="relative w-full max-w-[1574px] mx-auto">
        {/* Founders Card */}
        <Card className="relative w-full max-w-[1355px] bg-[#c0ecf2] rounded-[21.99px] shadow-[0px_4.4px_17.59px_#1122110d] overflow-hidden mb-16">
          <CardContent className="p-0">
            <div className="p-14 pb-0">
              <h2 className="font-['Montserrat',Helvetica] font-semibold text-[#1e1e1e] text-[48.4px] leading-[59.4px]">
                Meet our Founders
              </h2>

              <div className="flex flex-wrap gap-16 mt-12">
                {founders.map((founder, index) => (
                  <div key={index} className="flex items-start gap-6">
                    {index === 0 ? (
                      <img
                        className="w-36 h-36 rounded-full object-cover"
                        alt={founder.imageAlt}
                      />
                    ) : (
                      <div className="w-36 h-36 rounded-full bg-cover bg-[50%_50%]" />
                    )}
                    <div className="flex flex-col gap-2">
                      <h3 className="opacity-70 font-['Montserrat',Helvetica] font-semibold text-blackish-green text-[26.6px]">
                        {founder.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="font-['Montserrat',Helvetica] font-medium text-blackish-green text-[15.5px]">
                          {founder.title}
                        </span>
                        <span className="font-['Montserrat',Helvetica] font-medium text-blackish-green text-[15.5px]">
                          •
                        </span>
                        <span className="font-['Montserrat',Helvetica] font-medium text-blackish-green text-[15.5px]">
                          {founder.secondTitle}
                        </span>
                        <span className="font-['Montserrat',Helvetica] font-medium text-blackish-green text-[15.5px]">
                          •
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Decorative Element */}
        <div className="absolute top-6 right-0 w-[496px] h-[512px] rotate-[5.67deg]">
          <div className="relative h-full">
            <div className="absolute w-full h-full">
              <div className="relative w-[544px] h-[558px] -top-6 -left-6">
                <div className="relative w-[331px] h-[389px] top-[85px] left-24">
                  <div className="absolute w-[293px] h-[238px] top-[25px] left-[19px] rotate-[-10.44deg]">
                    {starPositions.map((star, index) => (
                      <img
                        key={index}
                        className={`absolute w-[${star.width}] h-[${star.height}] top-[${star.top}] left-[${star.left}] rotate-[10.44deg]`}
                        alt="Star"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <img
              className="absolute w-[397px] h-[309px] top-28 left-[27px] rotate-[-5.67deg]"
              alt="Group"
            />
          </div>
        </div>

        {/* Footer Section */}
        <footer className="w-full max-w-[1355px]">
          <div className="flex flex-wrap justify-between">
            {/* Brand and Social Media */}
            <div className="flex flex-col gap-6">
              <h2 className="font-['American_Captain-Regular',Helvetica] font-normal text-white text-[38.5px]">
                Journim
              </h2>
              <div className="flex items-center gap-3">
                <div className="relative w-[22px] h-[22px]">
                  <div className="relative w-5 h-5 top-px left-px bg-[100%_100%]" />
                </div>
                <img
                  className="w-[22px] h-[22px]"
                  alt="Akar icons twitter"
                  src="/akar-icons-twitter-fill.svg"
                />
                <div className="relative w-[22px] h-[22px] overflow-hidden">
                  <div className="relative w-[22px] h-[15px] top-1 bg-[100%_100%]" />
                </div>
                <img
                  className="w-[22px] h-[22px]"
                  alt="Ant design instagram"
                  src="/ant-design-instagram-filled.svg"
                />
              </div>
            </div>

            {/* Footer Links */}
            <div className="flex flex-wrap gap-6 flex-1 justify-end">
              {footerSections.map((section, index) => (
                <div key={index} className="flex flex-col gap-4 flex-1">
                  <h3
                    className={`font-${index === 3 ? "['TradeGothic_LT_Extended-Bold',Helvetica] font-bold" : "['Montserrat',Helvetica] font-semibold"} text-blackish-green text-[17.6px]`}
                  >
                    {section.title}
                  </h3>
                  <div className="flex flex-col gap-3">
                    {section.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href="#"
                        className="opacity-70 font-['Montserrat',Helvetica] font-medium text-blackish-green text-[15.4px]"
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};
