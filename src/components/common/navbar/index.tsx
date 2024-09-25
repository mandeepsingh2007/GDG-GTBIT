import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="absolute z-10 w-full p-4 flex justify-center items-center">
      <div className="flex items-center space-x-4 max-w-screen-xl w-full justify-between">
        <div className="flex items-center space-x-4">
          <Image src="/Logos/gdgLogo.png" alt="GDSC Logo" width={50} height={50} />
          <button className="text-white border-2 border-white rounded-full px-4 py-2">
            GDG-GTBIT
          </button>
        </div>

        {/* <button className="text-white border-2 border-white rounded-full px-4 py-2">
          Menu
        </button> */}
      </div>
    </nav>
  );
};

export default Navbar;
