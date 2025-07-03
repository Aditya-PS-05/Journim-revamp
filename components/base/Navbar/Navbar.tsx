"use client";

import { BedIcon, PlaneIcon, Menu, X, LogOut } from "lucide-react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const Navbar = () => {
  const { data: session } = useSession();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Determine if we are on the main page
  const isMainPage = pathname === "/";

  // Set color classes based on page
  const textColor = isMainPage ? "text-white" : "text-black";
  const iconColor = isMainPage ? "text-white" : "text-black";
  const navBg = "bg-transparent"
  const buttonBg = "bg-transparent"

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
    <>
      <header className={`flex w-full items-center justify-between px-4 py-4 ${navBg}`}>
        {/* Mobile Layout */}
        <div className="md:hidden flex items-center justify-between w-full">
          {/* Hamburger Menu */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`${iconColor} p-2`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Centered Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="text-white text-[30px] font-normal american-captain">
              Journim
            </Link>
          </div>

          {/* Profile Icon */}
          <div className="flex items-center gap-2">
            {session && session.user ? (
              <>
                <img
                  src={session.user.image || "/images/auth/user.png"}
                  alt={session.user.name || "User"}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <button
                  onClick={() => signOut()}
                  className={`p-2 ${iconColor} hover:bg-white/10 rounded-full transition-colors`}
                  aria-label="Logout"
                >
                  <LogOut size={20} />
                </button>
              </>
            ) : (
              <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                <span className={`text-sm ${textColor}`}>?</span>
              </div>
            )}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex w-full items-center justify-between">
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
                    src={session.user.image || "/images/navbar/profile.png"}
                    alt={session.user.name || "User"}
                    className="w-10 h-10 rounded-[18px] object-cover"
                  />
                  <span className="text-[15.51px] font-semibold text-[#23272E]" style={{ fontFamily: "'Montserrat', Helvetica" }}>
                    {session.user.name?.split(" ")[0] || "User"} {session.user.name?.split(" ")[1]?.[0] || ""}
                  </span>
                  <button
                    onClick={() => signOut()}
                    className={`p-2 ${iconColor} hover:cursor-pointer rounded-[10px] transition-colors flex items-center gap-2`}
                    aria-label="Logout"
                  >
                    <LogOut size={20} />
                    <span className="text-sm font-medium" style={{ fontFamily: "'Montserrat', Helvetica" }}>
                      Logout
                    </span>
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link
                  className={`font-semibold text-neutrals text-[15.5px] text-white ${textColor}`}
                  style={{ fontFamily: "'Montserrat', Helvetica" }}
                  href="/auth/login"
                >
                  Login
                </Link>

                <Link className={`h-[53.16px] px-[26.58px] py-[11.08px] bg-white text-black rounded-[8.86px] ${buttonBg}`} href="/auth/signup">
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
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50">
          <nav className="flex flex-col p-4 space-y-4">
            {navItems.map((item, index) => {
              const isActive = item.text === "Plan a Trip" && pathname === "/plantrip";
              return (
                <div key={index} className="flex flex-col">
                  <div className="flex items-center py-3">
                    {item.icon}
                    <div
                      className="ml-3 font-semibold text-black text-[18.1px]"
                      style={{ fontFamily: "'Montserrat', Helvetica" }}
                    >
                      <Link 
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.text}
                      </Link>
                    </div>
                  </div>
                  {isActive && (
                    <div className="w-full h-1 bg-[#24c6e3] rounded" />
                  )}
                </div>
              );
            })}
            
            {session && session.user ? (
              <div className="flex flex-col space-y-3 pt-4 border-t">
                <div className="flex items-center gap-3 py-2">
                  <img
                    src={session.user.image || "/images/auth/user.png"}
                    alt={session.user.name || "User"}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="font-semibold text-black text-[15.5px]" style={{ fontFamily: "'Montserrat', Helvetica" }}>
                    {session.user.name?.split(" ")[0] || "User"} {session.user.name?.split(" ")[1]?.[0] || ""}
                  </span>
                </div>
                <button
                  onClick={() => {
                    signOut();
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2 py-2 text-red-600 hover:bg-red-50 px-2 rounded transition-colors"
                >
                  <LogOut size={18} />
                  <span className="font-semibold text-[14px]" style={{ fontFamily: "'Montserrat', Helvetica" }}>
                    Logout
                  </span>
                </button>
              </div>
            ) : (
              <div className="flex flex-col space-y-3 pt-4 border-t">
                <Link
                  className="font-semibold text-black text-[15.5px] py-2"
                  style={{ fontFamily: "'Montserrat', Helvetica" }}
                  href="/auth/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  className="bg-black text-white px-6 py-3 rounded-lg text-center"
                  href="/auth/signup"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span
                    className="font-semibold text-[14px]"
                    style={{ fontFamily: "'Montserrat', Helvetica" }}
                  >
                    Sign up
                  </span>
                </Link>
              </div>
            )}
          </nav>
        </div>
      )}
    </>
  );
};
