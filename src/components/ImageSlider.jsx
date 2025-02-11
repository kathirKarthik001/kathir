"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export const ImageSlider = ({ images, delay = 5000 }) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, delay);
    return () => clearInterval(interval);
  }, [delay, images.length]);

  return (
    <div className="relative w-60 h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto">
      {images.map((src, index) => {
        // Determine stacking order
        const isActive = index === active;
        const isPrevious = (index + 1) % images.length === active;

        return (
          <motion.div
            key={src}
            initial={{
              opacity: isActive ? 0 : 0.4,
              scale: isActive ? 0.9 : 0.8,
              y: isPrevious ? 10 : 20,
              zIndex: isActive ? 2 : 1,
            }}
            animate={{
              opacity: isActive ? 1 : 0.5,
              scale: isActive ? 1 : 0.85,
              y: isActive ? 0 : isPrevious ? 10 : 20,
              zIndex: isActive ? 3 : isPrevious ? 2 : 1,
            }}
            exit={{
              opacity: 0,
              scale: 1.1,
              y: -10,
              zIndex: 0,
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              fill
              className="rounded-2xl object-cover shadow-lg"
              draggable={false}
            />
          </motion.div>
        );
      })}
    </div>
  );
};
