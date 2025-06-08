import { Card, CardContent } from "../../../../components/ui/card";

export const OverlapWrapperByAnima = (): JSX.Element => {
  // Founder data for mapping
  const founders = [
    {
      name: "Aman Gopal",
      title: "CEO",
      secondTitle: "Co-Founder",
      imageAlt: "Aman Gopal - CEO & Co-Founder",
      imageSrc: "/images/founders/aman.png",
    },
    {
      name: "Sahil Birda",
      title: "COO",
      secondTitle: "Co-Founder",
      imageAlt: "Sahil Birda - COO & Co-Founder",
      imageSrc: "/images/founders/sahil.png",
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

  return (
    <section className="relative w-full py-16 bg-[#85dfeb] mt-[170px]">
      <div className="relative mx-auto">
        {/* Founders Card */}
        <Card className="relative mx-auto w-[85%] mt-[-170px] bg-[#c0ecf2] rounded-[21.99px] shadow-[0px_4.4px_17.59px_#1122110d] overflow-hidden mb-16">
          <CardContent className="p-0">
            <div className="p-14 pb-0">
              <h2 className="font-['Montserrat',Helvetica] font-semibold text-[#1e1e1e] text-[48.4px] leading-[59.4px]">
                Meet our Founders
              </h2>

              <div className="flex flex-wrap justify-start gap-[150px] mt-12 mb-12">
                {founders.map((founder, index) => (
                  <div key={index} className="flex items-center gap-6">
                    <img
                      className="w-36 h-36 rounded-full object-cover"
                      src={founder.imageSrc}
                      alt={founder.imageAlt}
                    />
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

        {/* Decorative Element with Car Image */}
        <div className="absolute top-6 right-[70px] w-[496px] h-[512px] rotate-[5.67deg]">
          <div className="relative h-full">
            {/* Car Image */}
            <img
              className="absolute w-[350px] h-[250px] top-10 left-[160px] rotate-[25deg] object-cover"
              src="/images/founders/car.png"
              alt="Car"
            />
          </div>
        </div>

        {/* Footer Section */}
        <footer className="w-[85%] mx-auto">
          <div className="flex flex-wrap justify-between">
            {/* Brand and Social Media */}
            <div className="flex flex-col gap-6 mr-20">
  <h2 className="american-captain font-normal text-white text-[38.5px]">
    Journim
  </h2>
  <div className="flex items-center gap-3">
    <img
      className="w-[22px] h-[22px]"
      alt="YouTube"
      src="/images/footer/facebook.png"
    />
    <img
      className="w-[22px] h-[22px]"
      alt="X (Twitter)"
      src="/images/footer/x.png"
    />
    <img
      className="w-[22px] h-[22px]"
      alt="Facebook"
      src="/images/footer/youtube.png"
    />
    <img
      className="w-[22px] h-[22px]"
      alt="Instagram"
      src="/images/footer/instagram.png"
    />
  </div>
</div>

            {/* Footer Links */}
            <div className="flex flex-wrap gap-10 flex-1 justify-between">
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