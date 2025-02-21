'use client'; 

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Header */}
      <header className="text-white bg-transparent/50 md:px-7  p-4 flex justify-between items-center sticky top-0 z-50">
        {/* Logo */}
        <Link href="/" className="md:ml-11">
          <Image 
          src={"/logo.svg"}
          width={40}
          height={50} 
          alt='logo'
            className='object-contain  max-md:w-9 max-md:h-10'
          />
        </Link>

        {/* Hamburger Icon (Mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex mr-10 gap-6">
          <Link href="/projects" className="hover:text-gray-400">Projects</Link>
          <Link href="/gallery" className="hover:text-gray-400">Gallery</Link>
          <Link href="/experience" className="hover:text-gray-400">Experience</Link>
          <Link href="#contact" className="hover:text-gray-400">Contact</Link>
        </nav>
      </header>

      {/* Mobile View menu*/}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-800 bg-opacity-95 z-40">
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            <Link href="/projects" className="text-white text-2xl hover:text-gray-400" onClick={toggleMenu}>
              Projects
            </Link>
            <Link href="/gallery" className="text-white text-2xl hover:text-gray-400" onClick={toggleMenu}>
              Gallery
            </Link>
            <Link href="/experience" className="text-white text-2xl hover:text-gray-400" onClick={toggleMenu}>
              Experience
            </Link>
            <Link href="#contact" className="text-white text-2xl hover:text-gray-400" onClick={toggleMenu}>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;