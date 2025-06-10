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
    )
}