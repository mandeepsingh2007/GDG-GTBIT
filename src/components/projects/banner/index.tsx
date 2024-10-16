import React from 'react';

function Banner() {
  return (
    <div className="relative h-[70vh] md:h-[60vh] w-full bg-cover bg-center" style={{ backgroundImage: "url('/Images/project-banner.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">Community Projects</h1>
      </div>
    </div>
  );
}

export default Banner;
