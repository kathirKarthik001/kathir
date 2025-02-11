'use client'; // Mark as a Client Component
import { useState } from 'react';
import { motion } from "motion/react";
import Link from 'next/link';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="space-y-2">
        <div className="w-8 h-1 bg-white"></div>
        <div className="w-8 h-1 bg-white"></div>
        <div className="w-8 h-1 bg-white"></div>
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute top-16 right-4 bg-gray-800 p-4 rounded-lg flex flex-col gap-4"
        >
          <Link href="/projects" className="hover:text-gray-400">Projects</Link>
          <Link href="/gallery" className="hover:text-gray-400">Gallery</Link>
          <Link href="/experience" className="hover:text-gray-400">Experience</Link>
          <Link href="/contact" className="hover:text-gray-400">Contact</Link>
        </motion.div>
      )}
    </div>
  );
};

export default HamburgerMenu;