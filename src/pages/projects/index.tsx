import React from 'react';
import Banner from '@/components/projects/banner';
import ProjectCard from '@/components/projects/card';
import { PROJECTS } from '@/constants/projects';

function Index() {
  return (
    <div className="bg-[#0d0d0d] min-h-screen">
      <Banner />

      <div className="flex justify-center justify-items-center my-10 md:my-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-[70vw] ">
          {PROJECTS.map((project) => (
            <ProjectCard 
              key={project.name} 
              title={project.name} 
              description={project.description} 
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Index;
