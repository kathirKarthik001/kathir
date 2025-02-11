"use client"
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row-reverse md:justify-evenly gap-5 items-center text-center p-6 md:p-12">
      {/* Animated Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative w-40 h-40 md:w-56 md:h-56 lg:w-60 lg:h-60 rounded-full md:rounded-md overflow-hidden  border-4 border-gray-500 shadow-lg"
      >
        <Image 
          src="/pic1.jpg" 
          alt="John Doe" 
          fill 
          className="object-cover"
        />
      </motion.div>

     <motion.div className="md:text-left">

      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, delay: 0.5 }} 
        className="text-3xl md:text-5xl text-white font-bold mt-6"
      >
        I'm Kathir
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, delay: 1 }} 
        className="text-lg md:text-xl text-gray-400 mt-2"
      >
        Student | Developer 
      </motion.p>
      
    </motion.div>
      
    </section>
  );
};

export default Hero;
