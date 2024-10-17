import React from 'react';

interface EventsCardInterface {
  title: string;
  description: string;
  link: string;
  date: string;
  image?: string;
}

const EventsCard = ({ title, description, link, date }: EventsCardInterface) => {
  return (
    <div className="max-w-sm p-6 bg-[#232323] rounded-xl shadow-lg text-[#ffffff]">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{title}</h5>
      </a>
      <p className="mb-2 text-gray-400">{date}</p>
      <p className="mb-4">{description}</p>
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-white rounded-lg focus:ring-4 focus:outline-none"
      >
        View Details
        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </a>
    </div>
  );
};

export default EventsCard;
