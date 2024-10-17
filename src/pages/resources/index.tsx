import ResourcesBanner from '@/components/domain/Banner';
import ResourceCard from '@/components/home/domain/card';
import { RESOURCE } from '@/constants/resources';
import React from 'react';

function Index() {
  return (
    <div className="bg-[#0d0d0d] min-h-screen">
      <ResourcesBanner />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10 md:my-20">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Explore Our Resources</h2>
        <p className="text-lg text-gray-400 text-center mb-12">
          Discover a variety of resources designed to help you succeed. 
          Whether you&apos;re looking for guides, tools, or tutorials, we have something for everyone!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESOURCE.map((resource, index) => (
            <ResourceCard 
              key={index}
              title={resource.title}
              description={resource.description}         />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Index;
