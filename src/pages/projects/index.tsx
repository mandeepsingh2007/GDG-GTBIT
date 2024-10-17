import React, { useState } from 'react';
import Banner from '@/components/projects/banner';
import ProjectCard from '@/components/projects/card';
import { PROJECTS, Project } from '@/constants/projects';
import SearchBar from '@/components/projects/searchbar';

const Index: React.FC = () => {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(PROJECTS);

  const handleSearch = (keyword: string) => {
    if (!keyword) {
      setFilteredProjects(PROJECTS);
    } else {
      const filtered = PROJECTS.filter((project) =>
        project.keywords.some((k) => k.toLowerCase().includes(keyword.toLowerCase()))
      );
      setFilteredProjects(filtered);
    }
  };

  return (
    <div className="bg-[#0d0d0d] min-h-screen">
      <Banner />

      <div className="text-center mt-10">
        <h2 className="text-white text-3xl md:text-5xl font-bold">
          Discover Our Projects
        </h2>
        <p className="text-gray-400 text-lg mt-4">
          Explore a variety of projects across different domains.
        </p>
      </div>

      <div className="flex justify-center my-10">
        <SearchBar onSearch={handleSearch} />
      </div>

      <div className="flex justify-center justify-items-center my-10 md:my-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-[90vw] md:w-[70vw]">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project,index) => (
              <ProjectCard
                key={index}
                title={project.name}
                description={project.description}
                link={project.link}
                colorIndex={index}
              />
            ))
          ) : (
            <p className="text-white text-lg">No projects found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
