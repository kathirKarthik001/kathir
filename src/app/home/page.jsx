import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import { Spotlight } from "@/components/ui/Spotlight";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#0B0D0C]">

      {/* Hero Section */}
      <div className="flex  bg-red-300 max-tab:h-fit h-screen max-tab:flex-col-reverse max-tab:justify-items-start flex-row w-full ">

        <BackgroundBeams />
      </div>

      {/* about me  */}
      <div className="bg-red-200 w-screen h-screen flex ">
            <div className="bg-green-300 w-1/2 "></div>
            <div className="bg-gray-300 w-1/2 "></div>
      </div>

    </main>
  );
}

