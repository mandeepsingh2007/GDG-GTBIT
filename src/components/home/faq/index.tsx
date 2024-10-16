import React, { useState } from 'react';
import { FAQ as FAQData } from '@/constants/faq';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="py-12 px-6 bg-[#0d0d0d]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQData.map((faq: FAQItem, index: number) => (
            <div 
              key={index} 
              className={`bg-[#232323] shadow-md rounded-lg transition-all duration-300 ${
                activeIndex === index ? 'p-6' : 'p-4'
              }`}
            >
              <button
                className="w-full text-left flex justify-between items-center text-white focus:outline-none"
                onClick={() => toggleAnswer(index)}
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <span className="text-xl transform transition-transform duration-300">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </button>
              {activeIndex === index && (
                <p className="mt-4 text-gray-300 transition-opacity duration-300">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
