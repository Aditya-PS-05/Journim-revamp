import Image from "next/image";

interface PlanTripMapCardProps {
  selectedState: any;
  selectedCity: string | null;
}

export default function PlanTripMapCard({ selectedState, selectedCity }: PlanTripMapCardProps) {
  return (
    <div className="bg-white rounded-[24px] shadow-[0_0_0_4px_rgba(0,0,0,0.08),0_4px_32px_rgba(0,0,0,0.10)] border border-[#E5E7EB] p-6 w-full max-w-[420px] min-h-[600px] flex flex-col justify-start">
      {selectedState ? (
        <>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <h2 className="text-3xl font-bold text-black text-center">📍 {selectedState.name}</h2>
          </div>
          <p className="text-gray-500 mb-6 text-center">Select the city of your choice in the map</p>
          <div className="flex justify-center mb-6">
            <Image
              src={selectedState.mapImage || "/placeholder.svg"}
              alt={`${selectedState.name} map`}
              width={300}
              height={400}
              className="object-contain"
            />
          </div>
          <p className="text-gray-600 text-center leading-relaxed mt-10">{selectedState.description}</p>
        </>
      ) : (
        <>
          <p className="text-gray-500 mb-6 text-center">Select the state of your choice in the map</p>
          <div className="flex justify-center mb-6">
            <Image
              src="/images/plantrip/india.png"
              alt="India map"
              width={300}
              height={400}
              className="object-contain"
            />
          </div>
        </>
      )}
    </div>
  );
}