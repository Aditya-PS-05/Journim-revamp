import React from "react";

export const LocateIndia = () => {
  return (
    <section className="relative w-full max-h-screen bg-[#67D8E6] flex items-center justify-center py-16 px-4">
      <div className="w-full flex justify-center items-center">
        <img 
          src="/images/locations/india.png" 
          alt="India Map" 
          className="max-w-full h-auto object-contain" 
          style={{ maxHeight: 700 }}
        />
      </div>
    </section>
  );
};