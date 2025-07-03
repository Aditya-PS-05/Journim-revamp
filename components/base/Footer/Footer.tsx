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

export const Footer = () => {
    return (
      <div>
        {/* Footer Section */}
        <footer className="w-[85%] mx-auto border-2 border-red-500">
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
    )
}