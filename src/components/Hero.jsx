import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex flex-col justify-center md:flex-row-reverse md:justify-evenly gap-1 items-center text-center p-6 md:p-12 mb-4 h-[80vh]">
      {/* Profile Image */}
      <div className="relative w-40 h-40 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full md:rounded-md overflow-hidden border-4 border-gray-500 shadow-lg">
        <Image src="/pic1.webp" alt="kathir" fill className="object-cover" />
      </div>

      <div className="md:text-left">
        <p className="text-lg md:text-2xl text-gray-400 mt-2">hey there 👋</p>
        <h1 className="text-3xl md:text-6xl text-white font-bold mt-6">
          I'm Kathir
        </h1>
        <p className="text-lg md:text-2xl text-white mt-2">
          Student & Developer
        </p>

        <div className="flex gap-2">
          <Link
            target="_blank"
            href={
              "https://drive.google.com/file/d/15Zzr1uSe3vNuCsgg63vnMrZ8PygJ9DVo/view"
            }
            className="inline-block bg-gray-800/40 rounded text-white py-3 px-6 mt-3 bg-gray-700 hover:bg-gray-900/40  z-50"
          >
            Resume
          </Link>
          <Link
            href={"#contact"}
            className="border-gray-700 border-2 rounded py-3 px-6 mt-3 text-white hover:bg-gray-900/40  z-50"
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
