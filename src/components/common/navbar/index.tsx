import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="absolute z-10 w-full p-4 flex justify-center items-center">
      <div className="flex items-center space-x-4 max-w-screen-xl w-full justify-between">

        <div className="flex items-center space-x-4">
          <Image src="/Logos/gdgLogo.png" alt="GDSC Logo" width={50} height={50} />
          <Link href={'/'} className="text-white border-2 border-white rounded-full px-4 py-2">
            GDG-GTBIT
          </Link>
        </div>

        <div className='hidden md:flex'>
          <Link href={'/team'} className="text-white  px-4 py-2">
            Team
          </Link>
          <Link href={'/projects'} className="text-white  px-4 py-2">
            Projects
          </Link>
          <Link href={'/resources'} className="text-white px-4 py-2">
            Resources
          </Link>
          <Link href={'/events'} className="text-white px-4 py-2">
            Events
          </Link>
          {/* <Link href={'/achievements'} className="text-white px-4 py-2">
            Achievements
          </Link> */}
        </div>

        <div className='flex md:hidden'>
          <button className="text-white border-2 border-white rounded-full px-4 py-2">
            Menu
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
