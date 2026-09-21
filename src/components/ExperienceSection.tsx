import React from 'react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="pengalaman" className="border-b-2 border-black px-6 py-8 sm:px-10 sm:py-10 bg-white">
      {/* Section Header */}
      <div className="flex items-center pb-2 border-b-2 border-black mb-6">
        <span className="bg-black text-white px-2 py-0.5 font-mono text-xs sm:text-sm font-bold mr-2.5">
          04
        </span>
        <h2 className="font-mono font-bold text-base sm:text-lg tracking-wider uppercase text-black">
          RIWAYAT PENGALAMAN
        </h2>
      </div>

      {/* Experience Cards Stack */}
      <div className="space-y-6">
        {EXPERIENCE_DATA.map((exp, index) => {
          let badgeClass = '';
          if (exp.periodStyle === 'highlight') {
            badgeClass = 'bg-[#ffff00] text-black border border-black';
          } else if (exp.periodStyle === 'dark') {
            badgeClass = 'bg-black text-white';
          } else {
            badgeClass = 'bg-white text-black border border-black';
          }

          return (
            <div
              key={index}
              className="border-2 border-black p-5 sm:p-6 bg-white hover:bg-neutral-50/50 transition"
            >
              {/* Period Badge */}
              <div className="mb-2">
                <span className={`font-mono text-xs font-bold px-2.5 py-0.5 inline-block tracking-wide ${badgeClass}`}>
                  {exp.period}
                </span>
              </div>

              {/* Role Title */}
              <h3 className="font-mono font-bold text-sm sm:text-base text-black uppercase mb-1">
                {exp.role}
              </h3>

              {/* Company / Institution */}
              <p className="font-mono text-[#0026e6] font-bold text-xs tracking-wider uppercase mb-3">
                {exp.company}
              </p>

              {/* Description */}
              <p className="font-mono text-xs sm:text-sm leading-relaxed text-neutral-800">
                {exp.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
