import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Import email icon

interface TeamCardProps {
  name: string;
  position: string;
  linkedIn: string;
  github: string;
  email: string;  
  colorIndex: number;
}

const colors = ['#4285F4', '#DB4437', '#F4B400', '#0F9D58'];

const TeamCard = ({ name, position, linkedIn, github, email, colorIndex }: TeamCardProps) => {
  const cardBorderColor = colors[colorIndex % colors.length];

  return (
    <div
      className="bg-[#232323] p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 flex flex-col justify-between w-64 "
      style={{ border: `1px solid ${cardBorderColor}` }} 
    >
      <div className="flex flex-col items-center mb-4">
        <h3 className="text-2xl font-bold text-white mb-2 text-center hover:text-gray-300 transition-colors cursor-pointer">
          {name}
        </h3>
        <p className="text-gray-400 mb-4 text-center">{position}</p>
      </div>

      <div className="mt-auto flex justify-center space-x-4">
        <a href={linkedIn} target="_blank" rel="noopener noreferrer">
          <div
            className="p-2 rounded-full hover:bg-blue-600 transition-colors"
            style={{ backgroundColor: cardBorderColor }} 
          >
            <FaLinkedin className="text-white" />
          </div>
        </a>

        <a href={github} target="_blank" rel="noopener noreferrer">
          <div
            className="p-2 rounded-full hover:bg-gray-500 transition-colors"
            style={{ backgroundColor: cardBorderColor }} 
          >
            <FaGithub className="text-white" />
          </div>
        </a>

        {/* Update the mailto link */}
        <a href={`mailto:${email}`}>
          <div
            className="p-2 rounded-full hover:bg-red-600 transition-colors"
            style={{ backgroundColor: cardBorderColor }} 
          >
            <FaEnvelope className="text-white" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default TeamCard;
