import { Card, CardContent } from "@/components/ui/card";
import { Footer } from "../Footer/Footer";

export const Founders = () => {
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

  return (
    <section className="relative w-full py-16 bg-[#85dfeb] mt-[170px]">
      <div className="relative mx-auto">
        {/* Founders Card */}
        <Card className="relative mx-auto w-[85%] mt-[-170px] bg-[#c0ecf2] rounded-[21.99px] shadow-[0px_4.4px_17.59px_#1122110d] overflow-hidden mb-16">
          <CardContent className="p-0">
            <div className="p-14 pb-0">
              <h2 className="font-['Montserrat',Helvetica] font-semibold text-[#1e1e1e] text-[48.4px] leading-[59.4px] text-center md:text-left">
                Meet our Founders
              </h2>

              <div className="flex flex-wrap justify-start xs:gap-[20px] sm:gap-[20px] md:gap-[180px] mt-12 mb-12 ">
                {founders.map((founder, index) => (
                  <div key={index} className="mx-auto md:mx-0 flex flex-col sm:flex-row items-center justify-start sm:gap-2 md:gap-6">
                    <img
                      className="w-36 h-36 m-4 rounded-full object-cover"
                      src={founder.imageSrc}
                      alt={founder.imageAlt}
                    />
                    <div className="flex flex-col gap-2 text-center sm:text-left">
                      <h3 className="opacity-70 font-['Montserrat',Helvetica] font-semibold text-blackish-green text-[26.6px]">
                        {founder.name}
                      </h3>
                      <div className="flex items-center gap-2 justify-center sm:justify-start">
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
        <div className="absolute top-6 right-[70px] w-[496px] h-[512px] rotate-[5.67deg] lg:block hidden">
          <div className="relative h-full">
            {/* Car Image */}
            <img
              className="absolute w-[350px] h-[250px] top-10 left-[160px] rotate-[25deg] object-cover"
              src="/images/founders/car.png"
              alt="Car"
            />
          </div>
        </div>

        <Footer />
      </div>
    </section>
  );
};