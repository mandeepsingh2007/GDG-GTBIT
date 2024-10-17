import React from 'react';

interface ProjectCardInterface {
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ title, description, link } : ProjectCardInterface) => {
  return (
    <div className="max-w-sm bg-[#232323]  p-6 rounded-2xl shadow-lg text-[#ffffff]">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{title}</h5>
      </a>
      <p className="mb-4 ">{description}</p>
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`inline-flex items-center px-4 py-2 text-sm font-medium text-white rounded-lg focus:ring-4 focus:outline-non`}
      >
        View Details
        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </a>
    </div>
  );
};

export default ProjectCard;