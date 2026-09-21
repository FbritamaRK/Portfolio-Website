import React from 'react';
import { HERO_DATA } from '../data/portfolioData';

interface HeroProps {
  onContactClick: () => void;
  onDownloadCvClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick, onDownloadCvClick }) => {
  return (
    <section id="hero" className="border-b-2 border-black px-6 py-8 sm:px-10 sm:py-12 bg-white">
      {/* Status Badge */}
      <div className="mb-4">
        <span
          id="status-badge"
          className="bg-black text-[#dfff00] font-mono text-xs font-bold px-2.5 py-1 inline-block tracking-wider uppercase"
        >
          {HERO_DATA.status}
        </span>
      </div>

      {/* Greeting */}
      <p className="font-mono text-sm sm:text-base text-black mb-1">
        {HERO_DATA.greeting}
      </p>

      {/* Name Title */}
      <h1 className="font-mono font-black text-3xl sm:text-5xl md:text-6xl tracking-wider text-black mb-6 uppercase">
        {HERO_DATA.name}
      </h1>

      {/* Divider Bar */}
      <div className="border-b-2 border-black w-full mb-6" />

      {/* Bio Box */}
      <div className="border-2 border-black p-4 sm:p-5 mb-6 bg-white">
        <p className="font-mono text-xs sm:text-sm md:text-base leading-relaxed text-black">
          {HERO_DATA.bio}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-4">
        <button
          id="btn-hubungi-saya"
          onClick={onContactClick}
          className="bg-black text-white px-5 sm:px-6 py-3 font-mono font-bold text-xs sm:text-sm border-2 border-black hover:bg-neutral-800 transition tracking-wider cursor-pointer"
        >
          HUBUNGI SAYA
        </button>
        <button
          id="btn-unduh-cv"
          onClick={onDownloadCvClick}
          className="bg-white text-black px-5 sm:px-6 py-3 font-mono font-bold text-xs sm:text-sm border-2 border-black hover:bg-neutral-100 transition tracking-wider cursor-pointer"
        >
          UNDUH CV (PDF)
        </button>
      </div>
    </section>
  );
};
