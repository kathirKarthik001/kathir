import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import { Spotlight } from "@/components/ui/Spotlight";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#0B0D0C] min-h-screen">
      {/* Hero Section */}
      <div className="flex h-screen flex-col-reverse md:flex-row w-full ">
        
        {/* Left Section - Name & Buttons */}
        <div className=" text-white md:w-1/2 flex items-center justify-center py-10 md:py-0">
          <div className="w-[90%] md:w-[70%]  p-5 flex flex-col items-center md:items-start">
            
            {/* Name & Title */}
            <div className="w-full px-3 text-center md:text-left">
              <h1 className="text-4xl md:text-7xl font-semibold">I'm Kathir</h1>
              <p className="text-lg md:text-xl">Student & Software Developer</p>
            </div>

            {/* Buttons */}
            <div className="flex justify-center pl-3 md:justify-start gap-4 w-full mt-6">
              <button className="bg-gray-900 outline outline-white outline-2  text-white px-5 py-2 rounded-md">Button 1</button>
              <button className=" outline outline-white outline-2 text-white px-5 py-2 rounded-md">Button 2</button>
            </div>

          </div>
        </div>

        {/* Right Section - Image */}
        <div className=" h-[40%] bg-red-200 w-full md:h-full md:w-1/2 flex items-center justify-center md:py-0">
          <div className="min-w-[90%] min-h-[90%] md:min-h-[60%] md:min-w-[60%] bg-gray-800  border-red-200 border-4 ">

          </div>
        </div>

        <BackgroundBeams />
      </div>
    </main>
  );
}
