import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="absolute z-10 w-full p-4 flex justify-center items-center">
      <div className="flex items-center space-x-4 max-w-screen-xl w-full justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <Image src="/Logos/gdgLogo.png" alt="GDSC Logo" width={50} height={50} />
          <Link href={'/'}>
            <span className="text-white border-2 border-white rounded-full px-4 py-2">
              GDG-GTBIT
            </span>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-4">
          <Link href={'/team'}>
            <span className="text-white px-4 py-2">Team</span>
          </Link>
          <Link href={'/projects'}>
            <span className="text-white px-4 py-2">Projects</span>
          </Link>
          <Link href={'/resources'}>
            <span className="text-white px-4 py-2">Resources</span>
          </Link>
          <Link href={'/events'}>
            <span className="text-white px-4 py-2">Events</span>
          </Link>
          {/* <Link href={'/achievements'}>
            <span className="text-white px-4 py-2">Achievements</span>
          </Link> */}
        </div>

        <div className="flex md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white border-2 border-white rounded-full px-4 py-2 z-50"
          >
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? '100vh' : 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed inset-0 bg-black bg-opacity-90 flex items-center   md:hidden z-20 overflow-hidden`}
      >
        <div className='h-[70vh] flex flex-col items-start justify-evenly space-y-6'>
        <Link href={'/team'} onClick={toggleMenu}>
          <span className="text-white text-4xl m-6">Team</span>
        </Link>
        <Link href={'/projects'} onClick={toggleMenu}>
          <span className="text-white text-4xl m-6">Projects</span>
        </Link>
        <Link href={'/resources'} onClick={toggleMenu}>
          <span className="text-white text-4xl m-6">Resources</span>
        </Link>
        <Link href={'/events'} onClick={toggleMenu}>
          <span className="text-white text-4xl m-6">Events</span>
        </Link>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
