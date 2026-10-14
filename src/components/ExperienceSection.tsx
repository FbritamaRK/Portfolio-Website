import React from 'react';
import { EXPERIENCE_DATA, CERTIFICATIONS_DATA } from '../data/portfolioData';
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation';

export const ExperienceSection: React.FC = () => {
  const headerRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const listRef = useStaggerAnimation<HTMLDivElement>({ staggerMs: 120 });
  const certHeaderRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section id="pengalaman" className="border-b-2 border-black px-6 py-8 sm:px-10 sm:py-10 bg-white">
      {/* Section Header */}
      <div
        ref={headerRef}
        className="animate-on-scroll anim-fade-left flex items-center pb-2 border-b-2 border-black mb-6"
      >
        <span className="bg-black text-white px-2 py-0.5 font-mono text-xs sm:text-sm font-bold mr-2.5">
          05
        </span>
        <h2 className="font-mono font-bold text-base sm:text-lg tracking-wider uppercase text-black">
          RIWAYAT PENGALAMAN
        </h2>
      </div>

      {/* Experience Cards Stack */}
      <div ref={listRef} className="space-y-6">
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
              className="animate-on-scroll anim-fade-up border-2 border-black p-5 sm:p-6 bg-white hover:bg-neutral-50/50 transition"
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
              <p className="font-mono text-xs sm:text-sm leading-relaxed text-neutral-800 mb-3">
                {exp.description}
              </p>

              {/* Bullets if available */}
              {exp.bullets && exp.bullets.length > 0 && (
                <div className="border-t border-neutral-200 pt-3 mt-3">
                  <ul className="space-y-1.5 font-mono text-xs text-neutral-700">
                    {exp.bullets.map((bullet, bIdx) => (
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

      {/* Certifications Sub-Section */}
      <div className="mt-8 pt-6 border-t-2 border-black">
        <div
          ref={certHeaderRef}
          className="animate-on-scroll anim-fade-left flex items-center mb-4"
        >
          <span className="bg-black text-[#ffff00] px-2 py-0.5 font-mono text-[11px] font-bold mr-2 uppercase tracking-wider">
            SERTIFIKASI RESMI
          </span>
          <h3 className="font-mono font-bold text-sm sm:text-base tracking-wider uppercase text-black">
            CERTIFICATIONS &amp; PROFICIENCY
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          {CERTIFICATIONS_DATA.map((cert, cIdx) => (
            <div
              key={cIdx}
              className="border-2 border-black p-4 sm:p-5 bg-neutral-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h4 className="font-mono font-bold text-xs sm:text-sm text-black">
                    {cert.title}
                  </h4>
                  {cert.score && (
                    <span className="bg-[#ffff00] text-black font-mono text-[10px] font-bold px-2 py-0.5 border border-black">
                      {cert.score}
                    </span>
                  )}
                </div>
                <p className="font-mono text-xs text-[#0026e6] font-bold">{cert.issuer}</p>
                <p className="font-mono text-xs text-neutral-600 mt-1">{cert.description}</p>
              </div>
              <div className="font-mono text-xs font-bold px-3 py-1 bg-white border border-black self-start sm:self-center whitespace-nowrap">
                {cert.period}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
