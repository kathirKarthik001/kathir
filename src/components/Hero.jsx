"use client"
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex flex-col justify-center md:flex-row-reverse md:justify-evenly gap-1 items-center   text-center p-6 md:p-12  mb-4 h-[80vh] ">
      {/* Animated Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative w-40 h-40 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full md:rounded-md overflow-hidden  border-4 border-gray-500 shadow-lg"
      >
        <Image 
          src="/pic1.jpg" 
          alt="John Doe" 
          fill 
          className="object-cover"
        />
      </motion.div>

     <motion.div className="md:text-left">

     <motion.p 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }} 
        className="text-lg md:text-2xl text-gray-400 mt-2"
      >
        hey there 👋
      </motion.p>

      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1 }} 
        className="text-3xl md:text-6xl text-white font-bold mt-6"
      >
        I'm Kathir
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 0 }} 
        animate={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1.2 }} 
        className="text-lg md:text-2xl text-white mt-2"
      >
        Student & Developer 
      </motion.p>

      <motion.div className="flex gap-2">
        <motion.button
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
         className="border-gray-400 rounded text-white py-3 px-6 mt-3 bg-gray-700">
            Resume
        </motion.button>
        <motion.button
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, delay: 2.2 }}
         className="border-gray-700 border-2 rounded py-3 px-6 mt-3 text-white">
            Contact
        </motion.button>
      </motion.div>
      
     </motion.div>
      
    </section>
  );
};

export default Hero;
