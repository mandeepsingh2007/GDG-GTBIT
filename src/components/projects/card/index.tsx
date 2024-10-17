import React from 'react';
import Link from 'next/link';

interface ProjectCardInterface {
  title: string;
  description: string;
  link: string;
  colorIndex: number;
}

const buttonColors = ['#4285F4', '#DB4437', '#F4B400', '#0F9D58'];

const ProjectCard = ({ title, description, link, colorIndex }: ProjectCardInterface) => {
  const buttonColor = buttonColors[colorIndex % buttonColors.length];

  return (
    <div className="bg-[#232323] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-between h-full">
      <h3 className="text-2xl font-semibold text-white mb-4 cursor-pointer hover:text-gray-300 transition-colors">
        {title}
      </h3>

      <p className="text-gray-400 mb-4 flex-grow">{description}</p>

      <div className="mt-auto">
        <Link href={link} passHref
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white rounded-lg focus:ring-4 focus:outline-none"
            style={{ backgroundColor: buttonColor }}
          
          >
            View Details
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
