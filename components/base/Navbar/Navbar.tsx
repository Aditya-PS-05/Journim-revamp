import { BedIcon, PlaneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";

export const Navbar = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  // Determine if we are on the main page
  const isMainPage = pathname === "/";

  // Set color classes based on page
  const textColor = isMainPage ? "text-white" : "text-black";
  const iconColor = isMainPage ? "text-white" : "text-black";
  const navBg = "bg-transparent"
  const buttonBg = "bg-transparent"
  const buttonLogoutBg = isMainPage ? "bg-red-500 text-white" : "bg-red-500 text-white";

  const navItems = [
    {
      icon: <PlaneIcon className={`w-[27px] h-[27px] ${iconColor}`} />,
      text: "Plan a Trip",
      href: "/plantrip"
    },
    {
      icon: <BedIcon className={`w-[27px] h-[27px] ${iconColor}`} />,
      text: "Book a Trip",
      href: "/booktrip"
    },
  ];

  return (
    <header className={`flex w-full items-center justify-between px-4 py-4 ${navBg}`}>
      <div
        className={`text-[30px] font-normal tracking-[0] leading-normal ${textColor} left-6 font-normal whitespace-nowrap american-captain`}
      >
        <Link href="/" className="text-[#2EC3D6]">Journim</Link>
      </div>

      <nav className="flex items-start gap-9">
        {navItems.map((item, index) => {
          // Add underline to 'Plan a Trip' if on /plantrip
          const isActive = item.text === "Plan a Trip" && pathname === "/plantrip";
          return (
            <div key={index} className="flex flex-col items-center gap-1">
              <div className="relative flex items-center">
                {item.icon}
                <div
                  className={`ml-3 font-semibold text-neutrals text-[18.1px] ${textColor}`}
                  style={{ fontFamily: "'Montserrat', Helvetica" }}
                >
                  <Link href={item.href}>{item.text}</Link>
                  
                </div>
              </div>
              {isActive && (
                <div className="w-full h-2 mt-1 bg-[#24c6e3] rounded-b-lg shadow" style={{ minWidth: 80 }} />
              )}
            </div>
          );
        })}
      </nav>

      <div className="flex items-center gap-9">
        {session && session.user ? (
          <>
            <div className="flex items-center gap-4">
              <img
                src={session.user.image || "/images/auth/user.png"}
                alt={session.user.name || "User"}
                className="w-12 h-12 rounded-[18px] object-cover"
              />
              <span className="text-[15.51px] font-semibold text-[#23272E]" style={{ fontFamily: "'Montserrat', Helvetica" }}>
                {session.user.name?.split(" ")[0] || "User"} {session.user.name?.split(" ")[1]?.[0] || ""}
              </span>
            </div>
          </>
        ) : (
          <>
            <Link
              className={`font-semibold text-neutrals text-[15.5px] ${textColor}`}
              style={{ fontFamily: "'Montserrat', Helvetica" }}
              href="/auth/login"
            >
              Login
            </Link>

            <Link className={`h-[53.16px] px-[26.58px] py-[11.08px] rounded-[8.86px] ${buttonBg}`} href="/auth/signup">
              <span
                className="font-semibold text-[14px]"
                style={{ fontFamily: "'Montserrat', Helvetica" }}
              >
                Sign up
              </span>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};
