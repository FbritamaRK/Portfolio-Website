import React from 'react';
import { ABOUT_DATA } from '../data/portfolioData';
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation';

export const AboutSection: React.FC = () => {
  const headerRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const contentRef = useStaggerAnimation<HTMLDivElement>({ staggerMs: 90 });

  return (
    <section id="tentang" className="border-b-2 border-black px-6 py-8 sm:px-10 sm:py-10 bg-white">
      {/* Section Header */}
      <div
        ref={headerRef}
        className="animate-on-scroll anim-fade-left flex items-center pb-2 border-b-2 border-black mb-6"
      >
        <span className="bg-black text-white px-2 py-0.5 font-mono text-xs sm:text-sm font-bold mr-2.5">
          {ABOUT_DATA.sectionNumber}
        </span>
        <h2 className="font-mono font-bold text-base sm:text-lg tracking-wider uppercase text-black">
          {ABOUT_DATA.title}
        </h2>
      </div>

      {/* Content Box */}
      <div
        ref={contentRef}
        className="border-2 border-black p-5 sm:p-6 bg-white space-y-4"
      >
        {ABOUT_DATA.paragraphs.map((para, index) => (
          <p
            key={index}
            className="animate-on-scroll anim-fade-up font-mono text-xs sm:text-sm leading-relaxed text-black"
          >
            {para}
          </p>
        ))}

        {/* Highlight Quick Stats */}
        <div className="animate-on-scroll anim-fade-up pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t-2 border-black mt-4">
          <div className="border border-black p-3 bg-neutral-50">
            <span className="font-mono text-[10px] text-neutral-500 uppercase block font-bold">AKADEMIK</span>
            <span className="font-mono font-bold text-xs sm:text-sm text-black block mt-0.5">S1 Informatika UII</span>
            <span className="font-mono text-[11px] text-[#0026e6] font-bold block">Cum Laude (IPK 3.70)</span>
          </div>
          <div className="border border-black p-3 bg-neutral-50">
            <span className="font-mono text-[10px] text-neutral-500 uppercase block font-bold">SPESIALISASI</span>
            <span className="font-mono font-bold text-xs sm:text-sm text-black block mt-0.5">Aksesibilitas Web</span>
            <span className="font-mono text-[11px] text-neutral-700 font-bold block">WCAG 2.2 Level AA</span>
          </div>
          <div className="border border-black p-3 bg-neutral-50">
            <span className="font-mono text-[10px] text-neutral-500 uppercase block font-bold">KAPABILITAS</span>
            <span className="font-mono font-bold text-xs sm:text-sm text-black block mt-0.5">Lintas Platform</span>
            <span className="font-mono text-[11px] text-neutral-700 font-bold block">Web · Mobile · Game Dev</span>
          </div>
        </div>
      </div>
    </section>
  );
};
