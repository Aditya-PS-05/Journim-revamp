import { Navbar } from "@/components/base/Navbar/Navbar";
import { Reviews } from "@/components/base/Reviews/Reviews";
import { LocateIndia } from "@/components/base/LocateIndia/LocateIndia";
import { Founders } from "@/components/base/Founders/Founders";
import About from "@/components/base/About/About";
import Hero from "@/components/base/Hero/Hero";

export default function Home() {
  return (
    <div className="relative w-full bg-white overflow-x-hidden">

      <div className="absolute p-4 w-full z-10">
        <Navbar />
      </div>
      {/* Full screen carousel section */}
      <Hero />

      <About />

      <section className="w-full bg-[#66d7e5b2] mt-6 sm:mt-10">
        <LocateIndia />
      </section>

      <Reviews />
      <Founders />
    </div>
  );
};