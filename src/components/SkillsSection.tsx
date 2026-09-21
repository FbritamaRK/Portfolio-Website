import React from 'react';
import { SKILLS_DATA } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section id="keahlian" className="border-b-2 border-black px-6 py-8 sm:px-10 sm:py-10 bg-white">
      {/* Section Header */}
      <div className="flex items-center pb-2 border-b-2 border-black mb-6">
        <span className="bg-black text-white px-2 py-0.5 font-mono text-xs sm:text-sm font-bold mr-2.5">
          02
        </span>
        <h2 className="font-mono font-bold text-base sm:text-lg tracking-wider uppercase text-black">
          KEAHLIAN &amp; ALAT
        </h2>
      </div>

      {/* 3-Column Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SKILLS_DATA.map((col, colIdx) => (
          <div key={colIdx} className="flex flex-col">
            {/* Column Header */}
            <div className="bg-black text-white text-center font-mono font-bold text-xs py-2 px-3 border-2 border-black tracking-wider uppercase">
              {col.title}
            </div>

            {/* List of Skills with connected borders */}
            <div className="flex flex-col">
              {col.skills.map((skill, skillIdx) => (
                <div
                  key={skillIdx}
                  className="border-x-2 border-b-2 border-black px-3 py-2.5 font-mono text-xs text-black bg-white hover:bg-neutral-50 transition"
                >
                  &gt; {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
