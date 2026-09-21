import React from 'react';
import { ABOUT_DATA } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="tentang" className="border-b-2 border-black px-6 py-8 sm:px-10 sm:py-10 bg-white">
      {/* Section Header */}
      <div className="flex items-center pb-2 border-b-2 border-black mb-6">
        <span className="bg-black text-white px-2 py-0.5 font-mono text-xs sm:text-sm font-bold mr-2.5">
          {ABOUT_DATA.sectionNumber}
        </span>
        <h2 className="font-mono font-bold text-base sm:text-lg tracking-wider uppercase text-black">
          {ABOUT_DATA.title}
        </h2>
      </div>

      {/* Content Box */}
      <div className="border-2 border-black p-5 sm:p-6 bg-white space-y-4">
        {ABOUT_DATA.paragraphs.map((para, index) => (
          <p key={index} className="font-mono text-xs sm:text-sm leading-relaxed text-black">
            {para}
          </p>
        ))}
      </div>
    </section>
  );
};
