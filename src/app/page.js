import { Spotlight } from "@/components/ui/Spotlight";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" bg-black h-full">
      <Spotlight>

      <div className="flex flex-row w-full h-full">

        <div className="bg-green-200/20 text-white md:w-1/2 md:h-screen flex items-center justify-center">
        <div className="w-[70%] h-[60%] bg-blue-300 flex items-center justify-center">
            <div className=" flex-col bg-red-300 px-3 justify-center items-center">
              <h1 className="font-extrabold text-6xl" >I'm Kathir</h1>
              <p className="text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat inventore iusto possimus consequatur minima? Suscipit excepturi nam quos perferendis illum?</p>
            </div>

        </div>
            
        </div>

        <div className="bg-red-300/20 md:w-1/2 md:h-screen"> 
          <h1>picture </h1>
        </div>

      </div>
      </Spotlight>
    </main>
  );
}
