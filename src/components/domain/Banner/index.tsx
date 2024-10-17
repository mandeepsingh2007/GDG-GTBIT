import React from 'react';

function ResourcesBanner() {
  return (
    <div className="relative h-[70vh] md:h-[60vh] w-full bg-cover bg-center" style={{ backgroundImage: "url('/Images/events-banner.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">Resources</h1>
      </div>
    </div>
  );
}

export default ResourcesBanner;