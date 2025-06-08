import { BedIcon, PlaneIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";

export const FrameByAnima = (): JSX.Element => {
  const navItems = [
    {
      icon: <PlaneIcon className="w-[27px] h-[27px]" />,
      text: "Plan a Trip",
    },
    {
      icon: <BedIcon className="w-[27px] h-[27px]" />,
      text: "Book a Trip",
    },
  ];

  return (
    <header className="flex w-full items-center justify-between px-8 py-6 bg-transparent">
      <div
        className="text-[38.5px] text-white font-normal tracking-[0] leading-normal"
        style={{ fontFamily: "'American_Captain-Regular', Helvetica" }}
      >
        Journim
      </div>

      <nav className="flex items-start gap-9">
        {navItems.map((item, index) => (
          <div key={index} className="flex items-center gap-1">
            <div className="relative flex items-center">
              {item.icon}
              <div
                className="ml-3 font-semibold text-neutrals text-[18.1px]"
                style={{ fontFamily: "'Montserrat', Helvetica" }}
              >
                {item.text}
              </div>
            </div>
          </div>
        ))}
      </nav>

      <div className="flex items-center gap-9">
        <div
          className="font-semibold text-neutrals text-[15.5px]"
          style={{ fontFamily: "'Montserrat', Helvetica" }}
        >
          Login
        </div>

        <Button className="h-[53.16px] px-[26.58px] py-[11.08px] bg-neutrals rounded-[8.86px] text-blackish-green">
          <span
            className="font-semibold text-[14px]"
            style={{ fontFamily: "'Montserrat', Helvetica" }}
          >
            Sign up
          </span>
        </Button>
      </div>
    </header>
  );
};
