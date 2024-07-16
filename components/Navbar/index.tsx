'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Import the font from `next/font/google`
import { Smooch_Sans } from 'next/font/google';

const smooch_Sans = Smooch_Sans({
  subsets: ["latin"],
  weight: '700',
});


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const linkClasses = (path: string) => {
    return pathname === path ? "text-blue-500 font-bold" : "text-black";
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        <div className={smooch_Sans.className + " text-3xl text-black"}>DrugSleuth</div>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className={linkClasses("/")}>
            Home
          </Link>
          <Link href="/about" className={linkClasses("/about")}>
            About
          </Link>
          <Link href="/contact" className={linkClasses("/contact")}>
            Contact US
          </Link>
        </div>
        <div className="md:hidden">
          <button
            type="button"
            className="text-black focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
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
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <Link href="/" className={`${linkClasses("/")} block px-4 py-2`} onClick={closeMenu}>
            Home
          </Link>
          <Link href="/about" className={`${linkClasses("/about")} block px-4 py-2`} onClick={closeMenu}>
            About
          </Link>
          <Link href="/contact" className={`${linkClasses("/contact")} block px-4 py-2`} onClick={closeMenu}>
            Contact US
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
