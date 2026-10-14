import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation';

export const EducationSection: React.FC = () => {
  const headerRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const listRef = useStaggerAnimation<HTMLDivElement>({ staggerMs: 120 });

  return (
    <section id="pendidikan" className="border-b-2 border-black px-6 py-8 sm:px-10 sm:py-10 bg-white">
      {/* Section Header */}
      <div
        ref={headerRef}
        className="animate-on-scroll anim-fade-left flex items-center pb-2 border-b-2 border-black mb-6"
      >
        <span className="bg-black text-white px-2 py-0.5 font-mono text-xs sm:text-sm font-bold mr-2.5">
          02
        </span>
        <h2 className="font-mono font-bold text-base sm:text-lg tracking-wider uppercase text-black">
          RIWAYAT PENDIDIKAN
        </h2>
      </div>

      {/* Education Cards Stack */}
      <div ref={listRef} className="space-y-6">
        {EDUCATION_DATA.map((edu, index) => {
          let badgeClass = '';
          if (edu.periodStyle === 'highlight') {
            badgeClass = 'bg-[#ffff00] text-black border border-black';
          } else if (edu.periodStyle === 'dark') {
            badgeClass = 'bg-black text-white';
          } else {
            badgeClass = 'bg-white text-black border border-black';
          }

          return (
            <div
              key={index}
              id={`education-card-${index}`}
              className="animate-on-scroll anim-fade-up border-2 border-black p-5 sm:p-6 bg-white hover:bg-neutral-50/50 transition hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              {/* Period Badge */}
              <div className="mb-2">
                <span className={`font-mono text-xs font-bold px-2.5 py-0.5 inline-block tracking-wide ${badgeClass}`}>
                  {edu.period}
                </span>
              </div>

              {/* Degree / Title */}
              <h3 className="font-mono font-bold text-sm sm:text-base text-black uppercase mb-1">
                {edu.role}
              </h3>

              {/* Institution / University */}
              <p className="font-mono text-[#0026e6] font-bold text-xs tracking-wider uppercase mb-3">
                {edu.company}
              </p>

              {/* Description */}
              <p className="font-mono text-xs sm:text-sm leading-relaxed text-neutral-800 mb-3">
                {edu.description}
              </p>

              {/* Bullets if available */}
              {edu.bullets && edu.bullets.length > 0 && (
                <div className="border-t border-neutral-200 pt-3 mt-3">
                  <ul className="space-y-1.5 font-mono text-xs text-neutral-700">
                    {edu.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="font-bold text-black">&gt;</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
